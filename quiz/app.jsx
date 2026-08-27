(function () {
const { QUESTIONS, SEGMENT_TONES, BLOCKERS, DECISION_STYLES, WHY_NOW, scoreQuiz } = window.TCSBQuizData;

// The quiz shell sits on the same dark navy gradient as the landing page
// hero. Header controls (logo/back/progress) live directly on that dark
// background, so they use light-friendly colors rather than the shared
// DS BackLink/ProgressBar (which are tuned for a white page).
const SHELL_BG = 'linear-gradient(160deg,#0a0a3d,#000031 55%,#1c1c4d)';

function DarkBackLink({ onClick }) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('button', {
    type: 'button', onClick, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false),
    style: {
      display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer',
      background: hover ? 'rgba(255,255,255,.14)' : 'rgba(255,255,255,.06)',
      border: '1px solid var(--border-inverse)', borderRadius: 'var(--radius-pill)',
      color: '#fff', fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 700,
      padding: '8px 16px 8px 12px', transition: 'background-color var(--dur-fast) var(--ease-standard)',
    },
  },
    React.createElement('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none' }, React.createElement('path', { d: 'M15 18l-6-6 6-6', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' })),
    'Back'
  );
}

function DarkProgressBar({ current, total }) {
  const pct = Math.round((current / total) * 100);
  return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'var(--font-body)' } },
    React.createElement('span', { style: { fontSize: 13, color: 'rgba(255,255,255,.72)', fontWeight: 700 } }, `Question ${current} of ${total}`),
    React.createElement('div', { style: { height: 6, borderRadius: 'var(--radius-pill)', background: 'rgba(255,255,255,.14)', overflow: 'hidden' } },
      React.createElement('div', { style: { height: '100%', width: pct + '%', background: 'var(--pink)', borderRadius: 'var(--radius-pill)', transition: 'width var(--dur-slow) var(--ease-standard)' } })
    )
  );
}

// ---------------------------------------------------------------------------
// Chrome — dark shell (logo, back link, progress bar) with each question
// lifted onto a white card so it reads clearly against the dark background.
// ---------------------------------------------------------------------------
function QuizChrome({ current, total, onBack, children }) {
  return React.createElement('div', { style: { minHeight: '100vh', background: SHELL_BG, display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-body)' } },
    React.createElement('div', { style: { padding: '24px 24px 0', display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 560, width: '100%', margin: '0 auto' } },
      onBack && React.createElement('div', { style: { display: 'flex', justifyContent: 'flex-end' } },
        React.createElement(DarkBackLink, { onClick: onBack })
      ),
      current && total && React.createElement(DarkProgressBar, { current, total })
    ),
    React.createElement('div', { style: { flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '20px 24px 56px' } },
      React.createElement('div', {
        className: 'tcsb-card-hover',
        style: {
          maxWidth: 520, width: '100%', background: '#fff', borderRadius: 'var(--radius-lg)',
          padding: '40px 32px', boxShadow: '0 24px 64px rgba(0,0,10,.35), 0 4px 12px rgba(0,0,10,.18)',
        },
      }, children)
    )
  );
}

// ScaleRow — the design system's ScaleInput wraps onto two lines once there
// are more than ~9 items in a narrow container (as on Q10, which has 10).
// This variant fits every option on a single row at any width by sizing
// each circle as a flex share of the row instead of a fixed 44px.
function ScaleRow({ min = 1, max = 10, value, onChange, minLabel, maxLabel }) {
  const nums = [];
  for (let i = min; i <= max; i++) nums.push(i);
  return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'var(--font-body)' } },
    React.createElement('div', { style: { display: 'flex', gap: 6, width: '100%' } },
      nums.map(n => {
        const sel = n === value;
        return React.createElement('button', {
          key: n, type: 'button', onClick: () => onChange && onChange(n), style: {
            flex: '1 1 0', minWidth: 0, aspectRatio: '1 / 1', borderRadius: '50%',
            border: sel ? 'none' : '1px solid var(--border-strong)',
            background: sel ? 'var(--pink)' : '#fff', color: sel ? '#fff' : 'var(--navy)',
            fontWeight: 700, fontSize: 'clamp(11px, 3.6vw, 15px)', padding: 0,
            cursor: 'pointer', transition: 'background-color var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard)',
          },
        }, n);
      })
    ),
    React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--text-secondary)' } },
      React.createElement('span', null, minLabel), React.createElement('span', null, maxLabel)
    )
  );
}

// ---------------------------------------------------------------------------
// Question — one component handles all three answer formats (mc/scale/number).
// ---------------------------------------------------------------------------
// NumberField — the design system's NumberInput only supports the +/- stepper
// buttons, with a read-only display in between. This variant keeps the same
// stepper but makes the number itself a real input, so people can type a
// value directly instead of clicking one at a time.
function NumberField({ value, min = 0, max = 40, suffix, onChange }) {
  const clamp = (n) => Math.max(min, Math.min(max, n));
  const [text, setText] = React.useState(String(value ?? min));
  React.useEffect(() => { setText(String(value ?? min)); }, [value]);
  const commit = (raw) => {
    const parsed = parseInt(raw, 10);
    const next = Number.isFinite(parsed) ? clamp(parsed) : (value ?? min);
    setText(String(next));
    onChange && onChange(next);
  };
  return React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 16, fontFamily: 'var(--font-body)' } },
    React.createElement('button', {
      type: 'button', onClick: () => commit((value ?? min) - 1),
      style: { width: 44, height: 44, borderRadius: '50%', border: '1px solid var(--border-strong)', background: '#fff', fontSize: 20, cursor: 'pointer', color: 'var(--navy)' },
    }, '−'),
    React.createElement('div', { style: { minWidth: 110, textAlign: 'center', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '12px 16px' } },
      React.createElement('input', {
        type: 'number', inputMode: 'numeric', min, max, value: text, className: 'tcsb-number-input',
        onChange: (e) => setText(e.target.value),
        onBlur: (e) => commit(e.target.value),
        style: { width: 48, border: 'none', outline: 'none', background: 'transparent', fontSize: 32, fontWeight: 700, color: 'var(--navy)', fontFamily: 'var(--font-body)', textAlign: 'center', padding: 0 },
      }),
      suffix && React.createElement('span', { style: { fontSize: 14, color: 'var(--text-secondary)', marginLeft: 6 } }, suffix)
    ),
    React.createElement('button', {
      type: 'button', onClick: () => commit((value ?? min) + 1),
      style: { width: 44, height: 44, borderRadius: '50%', border: '1px solid var(--border-strong)', background: '#fff', fontSize: 20, cursor: 'pointer', color: 'var(--navy)' },
    }, '+')
  );
}

function Question({ question, index, total, value, onAnswer, onBack }) {
  const { OptionButton, Button } = window.TCSBDesignSystem_000d09;
  const [draft, setDraft] = React.useState(value);
  React.useEffect(() => { setDraft(value); }, [question.id]);

  if (question.type === 'mc') {
    const pick = (val) => { setDraft(val); setTimeout(() => onAnswer(val), 400); };
    return React.createElement(QuizChrome, { current: index + 1, total, onBack },
      React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 24 } },
        React.createElement('h2', { style: { fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h4)', color: 'var(--navy)', lineHeight: 'var(--lh-heading)', margin: 0 } }, question.text),
        React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 10 } },
          question.options.map(opt => React.createElement(OptionButton, {
            key: opt.value, label: opt.label, selected: draft === opt.value, onClick: () => pick(opt.value),
          }))
        )
      )
    );
  }

  if (question.type === 'scale') {
    const v = draft ?? Math.round((question.min + question.max) / 2);
    return React.createElement(QuizChrome, { current: index + 1, total, onBack },
      React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 32 } },
        React.createElement('h2', { style: { fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h4)', color: 'var(--navy)', lineHeight: 'var(--lh-heading)', margin: 0 } }, question.text),
        React.createElement(ScaleRow, { min: question.min, max: question.max, value: v, onChange: setDraft, minLabel: question.minLabel, maxLabel: question.maxLabel }),
        React.createElement(Button, { variant: 'primary', fullWidth: true, onClick: () => onAnswer(v) }, 'Continue')
      )
    );
  }

  // number
  const v = draft ?? question.min;
  return React.createElement(QuizChrome, { current: index + 1, total, onBack },
    React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 32, alignItems: 'center', textAlign: 'center' } },
      React.createElement('h2', { style: { fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h4)', color: 'var(--navy)', lineHeight: 'var(--lh-heading)', margin: 0 } }, question.text),
      React.createElement(NumberField, { value: v, min: question.min, max: question.max, suffix: question.suffix, onChange: setDraft }),
      React.createElement('div', { style: { width: '100%' } }, React.createElement(Button, { variant: 'primary', fullWidth: true, onClick: () => onAnswer(v) }, 'Continue'))
    )
  );
}

// ---------------------------------------------------------------------------
// Details gate — name / email / mobile, required before the result unlocks.
// ---------------------------------------------------------------------------
function DetailsGate({ onSubmit, onBack }) {
  const { TextField, Checkbox, Button } = window.TCSBDesignSystem_000d09;
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [consent, setConsent] = React.useState(false);
  const [touched, setTouched] = React.useState(false);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const canSubmit = name.trim().length > 1 && emailValid && mobile.trim().length >= 7 && consent;

  const submit = () => {
    setTouched(true);
    if (!canSubmit) return;
    onSubmit({ name: name.trim(), email: email.trim(), mobile: mobile.trim() });
  };

  return React.createElement(QuizChrome, { onBack },
    React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 24 } },
      React.createElement('h2', { style: { fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h4)', color: 'var(--navy)', lineHeight: 'var(--lh-heading)', margin: 0, textAlign: 'center' } }, 'Enter your details to see your full result, including your Founder Readiness Score.'),
      React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 16 } },
        React.createElement(TextField, { label: 'Name', value: name, onChange: setName, error: touched && name.trim().length <= 1 ? 'Enter your name' : undefined }),
        React.createElement(TextField, { label: 'Email', type: 'email', value: email, onChange: setEmail, error: touched && !emailValid ? 'Enter a valid email' : undefined }),
        React.createElement(TextField, { label: 'Mobile number', type: 'tel', value: mobile, onChange: setMobile, error: touched && mobile.trim().length < 7 ? 'Enter a mobile number' : undefined, helper: "We'll text you your result and, if it makes sense, let you know when spaces are close to full." }),
        React.createElement(Checkbox, { checked: consent, onChange: setConsent },
          "I'm happy for The Contemporary School of Business to text and email me about my result and future cohorts. ",
          React.createElement('em', null, '(Placeholder wording — needs sign-off from TCSB’s legal/compliance process before this goes live, per the blueprint’s open decisions.)')
        )
      ),
      React.createElement(Button, { variant: 'primary', fullWidth: true, onClick: submit }, 'Send')
    )
  );
}

// The shared Callout uses --surface-sunken (grey) internally, which is fine
// on the white pages it was designed for but blends into this page now that
// the page itself is that same grey. This local variant is white instead,
// scoped to just this page rather than changing the shared component.
function ResultCallout({ children, accent = 'var(--yellow)' }) {
  return React.createElement('div', {
    style: {
      display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 20px', borderRadius: 'var(--radius-md)',
      background: '#fff', border: '1px solid var(--border-default)', borderLeft: `3px solid ${accent}`,
      fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body-sm)', color: 'var(--navy)', fontWeight: 700,
    },
  }, children);
}

// ---------------------------------------------------------------------------
// Result page
// ---------------------------------------------------------------------------
function ResultPage({ result, lead }) {
  const { ScoreDial, ResultCard, Button } = window.TCSBDesignSystem_000d09;
  const tone = SEGMENT_TONES[result.tone];
  const blocker = BLOCKERS[result.blocker];
  const style = DECISION_STYLES[result.decisionStyle];
  const whyNowLine = WHY_NOW[result.whyNow];

  const cta = result.highReadiness
    ? {
        line: "You're ready to move on this now. Join the waitlist and you'll be first in line the moment Cohort 1 opens for applications.",
        button: 'Join The Waitlist',
      }
    : {
        line: "Here's your next step. Join the waitlist and you'll be the first to hear as soon as we're ready to show you more.",
        button: 'Join The Waitlist',
      };

  return React.createElement('div', { style: { background: 'var(--surface-sunken)', minHeight: '100vh', fontFamily: 'var(--font-body)' } },
    React.createElement('div', { style: { maxWidth: 560, margin: '0 auto', padding: '40px 24px 80px', display: 'flex', flexDirection: 'column', gap: 48 } },

      React.createElement('div', { className: 'tcsb-card-hover', style: { background: 'var(--navy)', borderRadius: 'var(--radius-lg)', padding: '40px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 } },
        React.createElement(ScoreDial, { value: result.readinessScore, size: 200, color: 'var(--yellow)', label: 'Founder Readiness Score', numeralColor: '#fff', labelColor: 'rgba(255,255,255,.75)' }),
        React.createElement('p', { style: { color: 'rgba(255,255,255,.75)', fontSize: 14, textAlign: 'center', margin: 0, maxWidth: 340 } }, tone.line)
      ),

      React.createElement('div', { className: 'tcsb-card-hover' }, React.createElement(ResultCard, { eyebrow: 'Your blocker', title: blocker.title, body: blocker.body, accent: 'var(--orange)' })),

      React.createElement('div', { className: 'tcsb-card-hover' }, React.createElement(ResultCard, { eyebrow: 'Your decision style', title: style.title, body: style.body, accent: 'var(--pink)', shareable: true })),

      React.createElement('p', { style: { fontSize: 'var(--fs-body)', color: 'var(--text-secondary)', lineHeight: 'var(--lh-body)', textAlign: 'center', margin: 0 } }, `What this would really get you: ${whyNowLine}.`),

      React.createElement('p', { style: { fontSize: 'var(--fs-body)', color: 'var(--text-secondary)', lineHeight: 'var(--lh-body)', textAlign: 'center', margin: 0 } }, blocker.bridge),

      React.createElement('div', { style: { display: 'flex', justifyContent: 'center' } }, React.createElement(ResultCallout, null, 'Cohort 1 starts end of October and is capped at 20 people.')),

      React.createElement('div', { className: 'tcsb-card-hover', style: { background: '#fff', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: 24, display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center', textAlign: 'center' } },
        React.createElement('div', { style: { width: '100%', aspectRatio: '16/9', background: 'var(--surface-sunken)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', fontSize: 13, textAlign: 'center', padding: 16 } }, `▶ Video placeholder — Lisa on ${blocker.title} (60–90s)`),
        React.createElement('span', { style: { fontSize: 12, color: 'var(--text-secondary)' } }, 'One version per blocker — not yet produced')
      ),

      React.createElement('div', { className: 'tcsb-card-hover', style: { background: '#fff', borderRadius: 'var(--radius-lg)', padding: 32, display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center', textAlign: 'center' } },
        React.createElement('p', { style: { fontSize: 'var(--fs-body-lg)', color: 'var(--navy)', lineHeight: 'var(--lh-body)', margin: 0 } }, cta.line),
        React.createElement(Button, {
          variant: 'primary', fullWidth: true,
          onClick: () => alert('Placeholder — no waitlist destination is wired up yet. Point this at the real signup form/link when it exists.'),
        }, cta.button)
      )
    )
  );
}

// ---------------------------------------------------------------------------
// App shell — owns quiz state, scoring, and lead capture.
// ---------------------------------------------------------------------------
function QuizApp() {
  // Starts straight on Q1 — the landing page is the intro/framing step,
  // so the quiz's own intro screen would just be a redundant white page
  // between "Start The Assessment" and the first question.
  const [screen, setScreen] = React.useState('q0'); // q0..q11 | gate | result
  const [answers, setAnswers] = React.useState({});
  const [order, setOrder] = React.useState([]);
  const [lead, setLead] = React.useState(null);
  const [result, setResult] = React.useState(null);

  const qIndex = screen.startsWith('q') ? parseInt(screen.slice(1), 10) : -1;

  const answer = (val) => {
    const q = QUESTIONS[qIndex];
    setAnswers(prev => ({ ...prev, [q.id]: val }));
    setOrder(prev => prev.includes(q.id) ? prev : [...prev, q.id]);
    if (qIndex < QUESTIONS.length - 1) {
      setScreen('q' + (qIndex + 1));
    } else {
      setScreen('gate');
    }
  };

  const back = () => {
    if (screen === 'gate') { setScreen('q' + (QUESTIONS.length - 1)); return; }
    if (qIndex > 0) { setScreen('q' + (qIndex - 1)); }
  };

  const submitLead = (leadData) => {
    setLead(leadData);
    const scored = scoreQuiz(answers, order);
    setResult(scored);

    // TODO: wire this up to TCSB's real CRM/webhook once one exists.
    // Per blueprint section 7: Blocker, Decision Style, Why Now, Readiness
    // Score, seniority, years at level and hours available should all land
    // per-lead in the CRM, and feed Lisa's pre-call brief and ad/email
    // targeting. For now this just logs + keeps a local copy so nothing is
    // silently lost during testing.
    const payload = { ...leadData, ...scored, submittedAt: new Date().toISOString() };
    console.log('[TCSB Quiz] Lead captured — send this to the CRM:', payload);
    try {
      const existing = JSON.parse(localStorage.getItem('tcsb_quiz_leads') || '[]');
      existing.push(payload);
      localStorage.setItem('tcsb_quiz_leads', JSON.stringify(existing));
    } catch (e) { /* localStorage unavailable — non-fatal */ }

    setScreen('result');
  };

  if (screen === 'gate') return React.createElement(DetailsGate, { onSubmit: submitLead, onBack: back });
  if (screen === 'result') return React.createElement(ResultPage, { result, lead });
  if (qIndex >= 0) {
    const q = QUESTIONS[qIndex];
    return React.createElement(Question, {
      question: q, index: qIndex, total: QUESTIONS.length,
      value: answers[q.id], onAnswer: answer, onBack: qIndex > 0 ? back : undefined,
    });
  }
  return null;
}

window.QuizApp = QuizApp;
})();
