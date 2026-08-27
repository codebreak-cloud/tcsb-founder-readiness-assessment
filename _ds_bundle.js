/* @ds-bundle: {"format":4,"namespace":"TCSBDesignSystem_000d09","components":[{"name":"ResultCard","sourcePath":"components/data/ResultCard.jsx"},{"name":"ScoreDial","sourcePath":"components/data/ScoreDial.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Icon","sourcePath":"components/feedback/Icon.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"NumberInput","sourcePath":"components/forms/NumberInput.jsx"},{"name":"OptionButton","sourcePath":"components/forms/OptionButton.jsx"},{"name":"ScaleInput","sourcePath":"components/forms/ScaleInput.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"BackLink","sourcePath":"components/navigation/BackLink.jsx"}],"sourceHashes":{"components/data/ResultCard.jsx":"18aafb24a656","components/data/ScoreDial.jsx":"91c9a45f81f2","components/feedback/Accordion.jsx":"166c0245c502","components/feedback/Callout.jsx":"d2bca5528494","components/feedback/Icon.jsx":"0d5abdbd1e5d","components/feedback/ProgressBar.jsx":"d3514e1fd474","components/forms/Button.jsx":"850b1e68eff2","components/forms/Checkbox.jsx":"d923202dddfa","components/forms/NumberInput.jsx":"c1ff03664065","components/forms/OptionButton.jsx":"08abe4879097","components/forms/ScaleInput.jsx":"ca3c5b542cc6","components/forms/TextField.jsx":"0fb1589f8ff8","components/navigation/BackLink.jsx":"5d4708eaee3d","ui_kits/landing-page/FAQSection.jsx":"24605f212512","ui_kits/landing-page/FinalCTA.jsx":"6e470d27dd6a","ui_kits/landing-page/Hero.jsx":"a903e0997dbe","ui_kits/landing-page/HowItWorks.jsx":"c2c3d46aa218","ui_kits/landing-page/ProblemMechanism.jsx":"175394679fc2","ui_kits/landing-page/ProofSection.jsx":"dede7b3cf354","ui_kits/landing-page/RevealOnScroll.jsx":"7aef0ac9e832","ui_kits/landing-page/TopBanner.jsx":"3d936a818c80","ui_kits/quiz-flow/DetailsGate.jsx":"0e6ec104f48d","ui_kits/quiz-flow/IntroScreen.jsx":"d841d6d7dbe7","ui_kits/quiz-flow/QuestionMC.jsx":"74928bd4c088","ui_kits/quiz-flow/QuestionNumber.jsx":"c797077c93b2","ui_kits/quiz-flow/QuestionScale.jsx":"dd4c8c7ce0fb","ui_kits/quiz-flow/QuizApp.jsx":"49326cc083ea","ui_kits/quiz-flow/QuizChrome.jsx":"640c435f4edd","ui_kits/quiz-flow/ResultPage.jsx":"6fcc327372d1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TCSBDesignSystem_000d09 = window.TCSBDesignSystem_000d09 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data/ResultCard.jsx
try { (() => {
function ResultCard({
  eyebrow,
  title,
  body,
  accent = 'var(--orange)',
  shareable = false
}) {
  return React.createElement('div', {
    style: {
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 32,
      boxShadow: shareable ? 'var(--shadow-elevated)' : 'var(--shadow-card)',
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      borderTop: `4px solid ${accent}`
    }
  }, eyebrow && React.createElement('span', {
    style: {
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: accent
    }
  }, eyebrow), title && React.createElement('h3', {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h4)',
      color: 'var(--navy)',
      lineHeight: 'var(--lh-heading)'
    }
  }, title), body && React.createElement('p', {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--lh-body)'
    }
  }, body));
}
Object.assign(__ds_scope, { ResultCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ResultCard.jsx", error: String((e && e.message) || e) }); }

// components/data/ScoreDial.jsx
try { (() => {
function ScoreDial({
  value = 0,
  max = 100,
  size = 220,
  color = 'var(--yellow)',
  label,
  numeralColor = 'var(--navy)',
  labelColor = 'var(--text-secondary)'
}) {
  const [display, setDisplay] = React.useState(0);
  React.useEffect(() => {
    let raf, start;
    const dur = 1200;
    const step = t => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / dur);
      setDisplay(Math.round(p * value));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  const r = size / 2 - 14;
  const c = 2 * Math.PI * r;
  const pct = Math.min(1, display / max);
  const arcFraction = 0.75; // 270deg gauge, 90deg gap at bottom
  const dash = c * arcFraction;
  const filled = dash * pct;
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: size * 0.06,
      fontFamily: 'var(--font-display)'
    }
  }, React.createElement('div', {
    style: {
      position: 'relative',
      width: size,
      height: size,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement('svg', {
    width: size,
    height: size,
    style: {
      position: 'absolute',
      transform: 'rotate(135deg)'
    }
  }, React.createElement('circle', {
    cx: size / 2,
    cy: size / 2,
    r,
    fill: 'none',
    stroke: 'var(--navy-10)',
    strokeWidth: 12,
    strokeDasharray: `${dash} ${c}`,
    strokeLinecap: 'round'
  }), React.createElement('circle', {
    cx: size / 2,
    cy: size / 2,
    r,
    fill: 'none',
    stroke: color,
    strokeWidth: 12,
    strokeDasharray: `${filled} ${c}`,
    strokeLinecap: 'round'
  })), React.createElement('div', {
    style: {
      fontSize: size * 0.32,
      fontWeight: 700,
      color: numeralColor,
      lineHeight: 1
    }
  }, display)), label && React.createElement('div', {
    style: {
      fontSize: Math.max(11, size * 0.06),
      color: labelColor,
      fontFamily: 'var(--font-body)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      textAlign: 'center',
      maxWidth: size * 1.3
    }
  }, label));
}
Object.assign(__ds_scope, { ScoreDial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ScoreDial.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
function Accordion({
  items
}) {
  const [open, setOpen] = React.useState(null);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-body)'
    }
  }, items.map((it, i) => React.createElement('div', {
    key: i,
    style: {
      borderBottom: '1px solid var(--border-default)'
    }
  }, React.createElement('button', {
    type: 'button',
    onClick: () => setOpen(open === i ? null : i),
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 0',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      fontSize: 'var(--fs-body)',
      fontWeight: 700,
      color: 'var(--navy)'
    }
  }, React.createElement('span', null, it.q), React.createElement('span', {
    style: {
      fontSize: 20,
      color: 'var(--orange)',
      transform: open === i ? 'rotate(45deg)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-standard)'
    }
  }, '+')), open === i && React.createElement('div', {
    style: {
      paddingBottom: 20,
      fontSize: 'var(--fs-body)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--lh-body)'
    }
  }, it.a))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function Callout({
  children,
  accent = 'var(--yellow)'
}) {
  return React.createElement('div', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '14px 20px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-sunken)',
      borderLeft: `3px solid ${accent}`,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--navy)',
      fontWeight: 700
    }
  }, children);
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Icon.jsx
try { (() => {
const POS = {
  dots: '0%',
  ring: '66.6667%',
  arrow: '100%'
};
function Icon({
  name = 'dots',
  size = 32
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      backgroundImage: 'url(assets/icons/brand-icons-sprite.png)',
      backgroundSize: '400% auto',
      backgroundPosition: `${POS[name]} 50%`,
      backgroundRepeat: 'no-repeat'
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Icon.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function ProgressBar({
  current,
  total
}) {
  const pct = Math.round(current / total * 100);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      color: 'var(--text-secondary)',
      fontWeight: 700
    }
  }, React.createElement('span', null, `Question ${current} of ${total}`)), React.createElement('div', {
    style: {
      height: 6,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--navy-10)',
      overflow: 'hidden'
    }
  }, React.createElement('div', {
    style: {
      height: '100%',
      width: pct + '%',
      background: 'var(--pink)',
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--dur-slow) var(--ease-standard)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  onClick,
  children,
  type = 'button'
}) {
  const sizes = {
    md: {
      h: 52,
      fs: 16,
      px: 28
    },
    sm: {
      h: 44,
      fs: 14,
      px: 20
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    borderRadius: 'var(--radius-pill)',
    height: s.h,
    paddingLeft: s.px,
    paddingRight: s.px,
    fontSize: s.fs,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: '1px solid transparent',
    transition: 'background-color var(--dur-fast) var(--ease-standard), opacity var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? .45 : 1
  };
  const variants = {
    primary: {
      background: 'var(--accent-cta)',
      color: '#fff'
    },
    dark: {
      background: 'var(--navy)',
      color: '#fff'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--navy)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--navy)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  let bg = variants[variant].background;
  if (!disabled && variant === 'primary' && hover) bg = 'var(--accent-cta-hover)';
  if (!disabled && variant === 'dark' && hover) bg = '#1a1a52';
  const style = {
    ...base,
    ...variants[variant],
    background: bg,
    transform: active && !disabled ? 'scale(.98)' : 'scale(1)'
  };
  return React.createElement('button', {
    type,
    disabled,
    style,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked = false,
  onChange,
  children
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('span', {
    onClick: () => onChange && onChange(!checked),
    style: {
      flex: '0 0 auto',
      width: 22,
      height: 22,
      marginTop: 1,
      borderRadius: 4,
      border: checked ? 'none' : '1.5px solid var(--border-strong)',
      background: checked ? 'var(--navy)' : '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked && React.createElement('svg', {
    width: 12,
    height: 12,
    viewBox: '0 0 16 16',
    fill: 'none'
  }, React.createElement('path', {
    d: 'M2 8.5 6 12l8-9',
    stroke: '#fff',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }))), React.createElement('span', {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 1.5
    }
  }, children));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/NumberInput.jsx
try { (() => {
function NumberInput({
  value,
  min = 0,
  max = 40,
  onChange,
  suffix
}) {
  const set = v => {
    const c = Math.max(min, Math.min(max, v));
    onChange && onChange(c);
  };
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('button', {
    type: 'button',
    onClick: () => set((value || 0) - 1),
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      border: '1px solid var(--border-strong)',
      background: '#fff',
      fontSize: 20,
      cursor: 'pointer',
      color: 'var(--navy)'
    }
  }, '\u2212'), React.createElement('div', {
    style: {
      minWidth: 110,
      textAlign: 'center',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px'
    }
  }, React.createElement('span', {
    style: {
      fontSize: 32,
      fontWeight: 700,
      color: 'var(--navy)'
    }
  }, value ?? 0), suffix && React.createElement('span', {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      marginLeft: 6
    }
  }, suffix)), React.createElement('button', {
    type: 'button',
    onClick: () => set((value || 0) + 1),
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      border: '1px solid var(--border-strong)',
      background: '#fff',
      fontSize: 20,
      cursor: 'pointer',
      color: 'var(--navy)'
    }
  }, '+'));
}
Object.assign(__ds_scope, { NumberInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/NumberInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/OptionButton.jsx
try { (() => {
function OptionButton({
  label,
  selected = false,
  onClick,
  disabled = false
}) {
  const [hover, setHover] = React.useState(false);
  const style = {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    width: '100%',
    textAlign: 'left',
    minHeight: 'var(--tap-min)',
    padding: '16px 20px',
    borderRadius: 'var(--radius-md)',
    border: selected ? '2px solid var(--orange)' : '1px solid var(--border-default)',
    background: selected ? 'var(--orange-tint-10)' : hover && !disabled ? 'var(--surface-sunken)' : '#fff',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-body)',
    color: 'var(--navy)',
    fontWeight: selected ? 700 : 400,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background-color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
    opacity: disabled ? .5 : 1
  };
  const tick = {
    width: 22,
    height: 22,
    borderRadius: '50%',
    flex: '0 0 auto',
    border: selected ? 'none' : '2px solid var(--border-strong)',
    background: selected ? 'var(--orange)' : 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  return React.createElement('button', {
    type: 'button',
    disabled,
    style,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, React.createElement('span', {
    style: tick
  }, selected && React.createElement('svg', {
    width: 12,
    height: 12,
    viewBox: '0 0 16 16',
    fill: 'none'
  }, React.createElement('path', {
    d: 'M2 8.5 6 12l8-9',
    stroke: '#fff',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }))), React.createElement('span', null, label));
}
Object.assign(__ds_scope, { OptionButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/OptionButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/ScaleInput.jsx
try { (() => {
function ScaleInput({
  min = 1,
  max = 10,
  value,
  onChange,
  minLabel,
  maxLabel
}) {
  const nums = [];
  for (let i = min; i <= max; i++) nums.push(i);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, nums.map(n => {
    const sel = n === value;
    return React.createElement('button', {
      key: n,
      type: 'button',
      onClick: () => onChange && onChange(n),
      style: {
        width: 44,
        height: 44,
        borderRadius: '50%',
        border: sel ? 'none' : '1px solid var(--border-strong)',
        background: sel ? 'var(--pink)' : '#fff',
        color: sel ? '#fff' : 'var(--navy)',
        fontWeight: 700,
        fontSize: 15,
        cursor: 'pointer',
        transition: 'background-color var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard)'
      }
    }, n);
  })), React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, React.createElement('span', null, minLabel), React.createElement('span', null, maxLabel)));
}
Object.assign(__ds_scope, { ScaleInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ScaleInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function TextField({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  helper
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('label', {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--navy)'
    }
  }, label), React.createElement('input', {
    type,
    value,
    placeholder,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: 'var(--tap-min)',
      borderRadius: 'var(--radius-md)',
      padding: '0 16px',
      fontSize: 16,
      border: error ? '1.5px solid var(--pink)' : focus ? '1.5px solid var(--navy)' : '1px solid var(--border-strong)',
      outline: focus ? '2px solid var(--focus-ring)' : 'none',
      outlineOffset: 2,
      color: 'var(--navy)'
    }
  }), error ? React.createElement('span', {
    style: {
      fontSize: 12,
      color: 'var(--pink)'
    }
  }, error) : helper && React.createElement('span', {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, helper));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BackLink.jsx
try { (() => {
function BackLink({
  onClick,
  label = 'Back'
}) {
  return React.createElement('button', {
    type: 'button',
    onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-secondary)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      padding: 8
    }
  }, React.createElement('svg', {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    fill: 'none'
  }, React.createElement('path', {
    d: 'M15 18l-6-6 6-6',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  })), label);
}
Object.assign(__ds_scope, { BackLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BackLink.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/FAQSection.jsx
try { (() => {
function FAQSection() {
  const {
    Section
  } = window;
  const {
    Accordion
  } = window.TCSBDesignSystem_000d09;
  const items = [{
    q: 'Do I need to have already decided to start a business?',
    a: "No. Most people taking this haven't decided anything yet. That's exactly who it's built for."
  }, {
    q: 'Is this just another generic business quiz?',
    a: "No, see above, your result and your score are built from the specific combination of your answers, not a fixed set of outcomes everyone gets shuffled into."
  }, {
    q: 'How long does this actually take?',
    a: "A few minutes of quick answers. Most questions are a single tap or a number, nothing that needs real writing."
  }, {
    q: 'Why do you need my mobile number?',
    a: "So we can text you your result and, if it makes sense, let you know when Cohort 1 spaces are close to full. Nothing more than that."
  }, {
    q: 'What happens to my details?',
    a: '[Placeholder — privacy/consent wording to be supplied by whoever handles TCSB\'s data policy.]'
  }];
  return React.createElement(Section, {
    eyebrow: 'Objection Handling'
  }, React.createElement(Accordion, {
    items
  }));
}
window.FAQSection = FAQSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/FAQSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/FinalCTA.jsx
try { (() => {
function FinalCTA() {
  const {
    Button
  } = window.TCSBDesignSystem_000d09;
  return React.createElement('section', {
    style: {
      background: 'var(--navy)',
      color: '#fff',
      padding: '80px 24px',
      textAlign: 'center',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
      alignItems: 'center'
    }
  }, React.createElement('p', {
    style: {
      fontSize: 'var(--fs-h4)',
      fontFamily: 'var(--font-display)',
      lineHeight: 'var(--lh-heading)',
      margin: 0
    }
  }, "You already know how to succeed at something difficult, you've been doing it for years, ", React.createElement('span', {
    style: {
      borderBottom: '3px solid var(--yellow)'
    }
  }, 'just not for yourself yet'), ". A few honest answers tell you exactly what's stood between you and changing that."), React.createElement(Button, {
    variant: 'primary',
    onClick: () => window.location.href = '../quiz-flow/index.html'
  }, 'Start The Assessment')));
}
window.FinalCTA = FinalCTA;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/FinalCTA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/Hero.jsx
try { (() => {
function Hero() {
  const {
    Button,
    Icon
  } = window.TCSBDesignSystem_000d09;
  return React.createElement('section', {
    style: {
      background: 'linear-gradient(160deg,#0a0a3d,#000031 55%,#1c1c4d)',
      color: '#fff',
      padding: '40px 24px 56px',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(circle at 80% 15%,rgba(255,183,0,.18),transparent 45%),radial-gradient(circle at 15% 85%,rgba(255,0,97,.14),transparent 50%)'
    }
  }), React.createElement('div', {
    style: {
      position: 'absolute',
      top: 24,
      right: 24,
      display: 'flex',
      gap: 10
    }
  }, React.createElement(Icon, {
    name: 'dots',
    size: 20
  }), React.createElement(Icon, {
    name: 'ring',
    size: 20
  }), React.createElement(Icon, {
    name: 'arrow',
    size: 20
  })), React.createElement('div', {
    style: {
      position: 'relative',
      maxWidth: 720,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, React.createElement('img', {
    src: '../../assets/logos/logo-white-orange.png',
    alt: 'TCSB',
    style: {
      height: 52,
      marginBottom: 32,
      objectFit: 'contain'
    }
  }), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--orange)',
      marginBottom: 18
    }
  }, 'The Founder Readiness Assessment'), React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(30px,5vw,var(--fs-h1))',
      fontWeight: 700,
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--ls-tight)',
      margin: '0 0 20px'
    }
  }, "What's Actually Been Stopping You From Starting ", React.createElement('span', {
    style: {
      borderBottom: '4px solid var(--pink)'
    }
  }, 'Your Own Business')), React.createElement('p', {
    style: {
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'rgba(255,255,255,.78)',
      margin: '0 0 32px'
    }
  }, "Built specially for corporate leaders and managers aged 40+ who've wondered if they could run their own business, whether that's something completely new, or doing exactly what you already do, on your own terms, instead of inside someone else's company. Find out exactly what's been in your way, how ready you actually are, and what to do next."), React.createElement(Button, {
    variant: 'primary',
    onClick: () => window.location.href = '../quiz-flow/index.html'
  }, 'Start The Assessment')));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/HowItWorks.jsx
try { (() => {
function Step({
  n,
  text,
  delay,
  icon
}) {
  const {
    RevealOnScroll
  } = window;
  const {
    Icon
  } = window.TCSBDesignSystem_000d09;
  return React.createElement('div', {
    style: {
      flex: 1,
      minWidth: 200,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
      textAlign: 'center'
    }
  }, React.createElement(RevealOnScroll, {
    delay
  }, React.createElement('div', {
    style: {
      position: 'relative',
      width: 56,
      height: 56,
      borderRadius: '50%',
      border: '2px solid var(--orange)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(Icon, {
    name: icon,
    size: 26
  }), React.createElement('span', {
    style: {
      position: 'absolute',
      top: -6,
      right: -6,
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: 'var(--navy)',
      color: '#fff',
      fontSize: 11,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)'
    }
  }, n))), React.createElement('p', {
    style: {
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, text));
}
function HowItWorks() {
  const {
    Section
  } = window;
  return React.createElement(Section, {
    eyebrow: 'How It Works',
    narrow: false
  }, React.createElement('div', {
    style: {
      display: 'flex',
      gap: 40,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, React.createElement(Step, {
    n: 1,
    icon: 'dots',
    text: 'Answer a handful of quick questions, mostly a single tap, one or two just a number, nothing that needs writing.',
    delay: 0
  }), React.createElement(Step, {
    n: 2,
    icon: 'ring',
    text: "Get your Founder Readiness Score and your result straight away, the specific thing that's been in your way and how you'll actually move past it.",
    delay: 120
  }), React.createElement(Step, {
    n: 3,
    icon: 'arrow',
    text: 'See what a real next step looks like for someone in exactly your position.',
    delay: 240
  })));
}
window.HowItWorks = HowItWorks;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/HowItWorks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/ProblemMechanism.jsx
try { (() => {
function Section({
  eyebrow,
  children,
  narrow = true,
  bg = '#fff'
}) {
  return React.createElement('section', {
    style: {
      background: bg,
      padding: '72px 24px',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: narrow ? 'var(--container-narrow)' : 'var(--container-max)',
      margin: '0 auto'
    }
  }, eyebrow && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--orange)',
      marginBottom: 20,
      textAlign: 'center'
    }
  }, eyebrow), children));
}
function ProblemSection() {
  return React.createElement(Section, {
    eyebrow: 'The Problem'
  }, React.createElement('p', {
    style: {
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--navy)',
      textAlign: 'center',
      margin: '0 0 24px'
    }
  }, "You've built a serious career. You're good at your job, maybe the best in the room most days. And somewhere in the last few years, you've started asking yourself a different question: ", React.createElement('span', {
    style: {
      background: 'var(--yellow-tint-10)',
      boxShadow: 'inset 0 -2px 0 var(--yellow)',
      padding: '0 4px',
      fontWeight: 700
    }
  }, 'is this it?')), React.createElement('p', {
    style: {
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)',
      textAlign: 'center',
      margin: 0
    }
  }, "Maybe it's still just a job that's stopped being enough. Maybe a restructuring has already put the decision in front of you before you were ready. Either way, you've probably told yourself the reason you haven't moved is time, or money, or timing. This is here to find out if that's actually true."));
}
function MechanismSection() {
  const {
    ScoreDial,
    Icon
  } = window.TCSBDesignSystem_000d09;
  return React.createElement(Section, {
    eyebrow: 'The Mechanism',
    bg: 'var(--surface-sunken)'
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 40
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, React.createElement(ScoreDial, {
    value: 72,
    size: 160,
    color: 'var(--orange)',
    label: 'Founder Readiness Score'
  }), React.createElement('span', {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, 'Preview — your score is revealed at the end')), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, React.createElement('p', {
    style: {
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--navy)',
      textAlign: 'center',
      margin: 0
    }
  }, "This isn't a quick personality quiz. It's built to show you exactly what's actually blocking you, not the reason you've been telling yourself it is, and the exact next step to take once you know how you're wired."), React.createElement('p', {
    style: {
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)',
      textAlign: 'center',
      margin: 0
    }
  }, "If what you need is a proper plan on paper before you trust any of this, it'll tell you that. If you need someone holding you to a date, it'll tell you that instead. If you need to see someone else do it first, or you've already decided and just need the fastest way to move, it'll tell you which one you are, and exactly what that means for your next step."), React.createElement('p', {
    style: {
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--navy)',
      textAlign: 'center',
      fontWeight: 700,
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, React.createElement(Icon, {
    name: 'arrow',
    size: 20
  }), "You'll also get your ", React.createElement('span', {
    style: {
      borderBottom: '3px solid var(--orange)'
    }
  }, 'Founder Readiness Score'), ", so you know exactly how ready you actually are right now, not a guess."))));
}
window.Section = Section;
window.ProblemSection = ProblemSection;
window.MechanismSection = MechanismSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/ProblemMechanism.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/ProofSection.jsx
try { (() => {
function StatBlock({
  value,
  label,
  accent,
  delay
}) {
  const {
    RevealOnScroll
  } = window;
  return React.createElement('div', {
    style: {
      flex: '1 1 200px',
      padding: '32px 20px',
      borderLeft: '1px solid rgba(255,255,255,.12)'
    }
  }, React.createElement(RevealOnScroll, {
    delay
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(56px,9vw,96px)',
      fontWeight: 700,
      color: accent,
      lineHeight: .9,
      letterSpacing: 'var(--ls-display)'
    }
  }, value)), React.createElement('div', {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,.65)',
      marginTop: 12,
      lineHeight: 1.4,
      maxWidth: 220
    }
  }, label));
}
function ProofSection() {
  const {
    Icon
  } = window.TCSBDesignSystem_000d09;
  return React.createElement('section', {
    style: {
      background: 'var(--navy)',
      padding: '72px 0',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 24px'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      marginBottom: 8
    }
  }, React.createElement(Icon, {
    name: 'arrow',
    size: 16
  }), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--orange)'
    }
  }, 'The Proof')), React.createElement('div', {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      borderTop: '1px solid rgba(255,255,255,.12)',
      borderBottom: '1px solid rgba(255,255,255,.12)',
      margin: '32px 0 40px'
    }
  }, React.createElement(StatBlock, {
    value: '2.7M',
    label: 'founders tracked by MIT & the US Census Bureau',
    accent: 'var(--yellow)',
    delay: 0
  }), React.createElement(StatBlock, {
    value: '1.8×',
    label: 'greater odds of success for a 50-year-old vs a 30-year-old founder',
    accent: 'var(--orange)',
    delay: 120
  }), React.createElement(StatBlock, {
    value: '45',
    label: "average age of founders behind that research's most successful startups",
    accent: 'var(--yellow)',
    delay: 240
  })), React.createElement('p', {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'rgba(255,255,255,.72)',
      textAlign: 'center'
    }
  }, "Research from MIT and the US Census Bureau, tracking 2.7 million founders, found that a 50-year-old founder has 1.8 times greater odds of building a successful company than a 30-year-old founder. The most successful startups in that research were built by people with an average age of 45. Everything you've built so far only strengthens the case for starting now.")));
}
window.ProofSection = ProofSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/ProofSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/RevealOnScroll.jsx
try { (() => {
function RevealOnScroll({
  children,
  delay = 0
}) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, {
      threshold: 0.4
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return React.createElement('div', {
    ref,
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(16px)',
      transition: `opacity var(--dur-slow) var(--ease-standard) ${delay}ms, transform var(--dur-slow) var(--ease-standard) ${delay}ms`
    }
  }, children);
}
window.RevealOnScroll = RevealOnScroll;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/RevealOnScroll.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/TopBanner.jsx
try { (() => {
function TopBanner() {
  return React.createElement('div', {
    style: {
      background: 'var(--navy)',
      color: '#fff',
      textAlign: 'center',
      padding: '12px 20px',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.5
    }
  }, 'Research found that a 50-year-old founder has ', React.createElement('strong', {
    style: {
      color: 'var(--yellow)'
    }
  }, '1.8 times'), ' greater odds of building a successful company than a 30-year-old founder.');
}
window.TopBanner = TopBanner;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/TopBanner.jsx", error: String((e && e.message) || e) }); }

// ui_kits/quiz-flow/DetailsGate.jsx
try { (() => {
function DetailsGate({
  onSubmit,
  onBack
}) {
  const {
    TextField,
    Checkbox,
    Button
  } = window.TCSBDesignSystem_000d09;
  const [consent, setConsent] = React.useState(false);
  return React.createElement(window.QuizChrome, {
    onBack
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h4)',
      color: 'var(--navy)',
      lineHeight: 'var(--lh-heading)',
      margin: 0,
      textAlign: 'center'
    }
  }, 'Enter your details to see your full result, including your Founder Readiness Score.'), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, React.createElement(TextField, {
    label: 'Name'
  }), React.createElement(TextField, {
    label: 'Email',
    type: 'email'
  }), React.createElement(TextField, {
    label: 'Mobile number',
    type: 'tel',
    helper: "We'll text you your result and, if it makes sense, let you know when Cohort 1 spaces are close to full."
  }), React.createElement(Checkbox, {
    checked: consent,
    onChange: setConsent
  }, '[Placeholder — SMS/marketing consent copy to be supplied]')), React.createElement(Button, {
    variant: 'primary',
    fullWidth: true,
    onClick: onSubmit
  }, 'See My Result')));
}
window.DetailsGate = DetailsGate;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/quiz-flow/DetailsGate.jsx", error: String((e && e.message) || e) }); }

// ui_kits/quiz-flow/IntroScreen.jsx
try { (() => {
function IntroScreen({
  onStart
}) {
  const {
    Button
  } = window.TCSBDesignSystem_000d09;
  return React.createElement(window.QuizChrome, {}, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      textAlign: 'center'
    }
  }, React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h2)',
      color: 'var(--navy)',
      lineHeight: 'var(--lh-heading)',
      margin: 0
    }
  }, "The Real Reason You Haven't Started Your Own Business Yet"), React.createElement('p', {
    style: {
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "A few honest questions for people who've spent years building a career in corporate. This isn't a quick personality quiz, it's a proper look at where you actually stand, and what to do about it."), React.createElement('p', {
    style: {
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)',
      margin: 0,
      fontStyle: 'italic'
    }
  }, "You don't need to have decided anything yet. Answer honestly. What you get back is specific to you, not a generic result."), React.createElement('div', {
    style: {
      marginTop: 8
    }
  }, React.createElement(Button, {
    variant: 'primary',
    fullWidth: true,
    onClick: onStart
  }, 'Start the assessment'))));
}
window.IntroScreen = IntroScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/quiz-flow/IntroScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/quiz-flow/QuestionMC.jsx
try { (() => {
function QuestionMC({
  onAdvance,
  onBack
}) {
  const {
    OptionButton
  } = window.TCSBDesignSystem_000d09;
  const [selected, setSelected] = React.useState(null);
  const options = ['Director', 'Head of / VP', 'C-suite (CEO, COO, CFO, CMO, CHRO, or equivalent)', 'Senior Manager', 'Something else senior, not listed here'];
  const pick = i => {
    setSelected(i);
    setTimeout(() => onAdvance && onAdvance(), 550);
  };
  return React.createElement(window.QuizChrome, {
    current: 2,
    total: 12,
    onBack
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h4)',
      color: 'var(--navy)',
      lineHeight: 'var(--lh-heading)',
      margin: 0
    }
  }, 'What best describes your current role?'), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, options.map((label, i) => React.createElement(OptionButton, {
    key: i,
    label,
    selected: selected === i,
    onClick: () => pick(i)
  })))));
}
window.QuestionMC = QuestionMC;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/quiz-flow/QuestionMC.jsx", error: String((e && e.message) || e) }); }

// ui_kits/quiz-flow/QuestionNumber.jsx
try { (() => {
function QuestionNumber({
  onAdvance,
  onBack
}) {
  const {
    NumberInput,
    Button
  } = window.TCSBDesignSystem_000d09;
  const [v, setV] = React.useState(10);
  return React.createElement(window.QuizChrome, {
    current: 12,
    total: 12,
    onBack
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
      alignItems: 'center',
      textAlign: 'center'
    }
  }, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h4)',
      color: 'var(--navy)',
      lineHeight: 'var(--lh-heading)',
      margin: 0
    }
  }, 'Realistically, how many hours a week could you give this right now?'), React.createElement(NumberInput, {
    value: v,
    min: 0,
    max: 40,
    suffix: 'hrs',
    onChange: setV
  }), React.createElement('div', {
    style: {
      width: '100%'
    }
  }, React.createElement(Button, {
    variant: 'primary',
    fullWidth: true,
    onClick: onAdvance
  }, 'Continue'))));
}
window.QuestionNumber = QuestionNumber;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/quiz-flow/QuestionNumber.jsx", error: String((e && e.message) || e) }); }

// ui_kits/quiz-flow/QuestionScale.jsx
try { (() => {
function QuestionScale({
  onAdvance,
  onBack
}) {
  const {
    ScaleInput,
    Button
  } = window.TCSBDesignSystem_000d09;
  const [v, setV] = React.useState(6);
  return React.createElement(window.QuizChrome, {
    current: 10,
    total: 12,
    onBack
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h4)',
      color: 'var(--navy)',
      lineHeight: 'var(--lh-heading)',
      margin: 0
    }
  }, 'If nothing changes in the next 12 months, how does that feel?'), React.createElement(ScaleInput, {
    min: 1,
    max: 10,
    value: v,
    onChange: setV,
    minLabel: 'Completely fine with that',
    maxLabel: "Genuinely can't sit with that"
  }), React.createElement(Button, {
    variant: 'primary',
    fullWidth: true,
    onClick: onAdvance
  }, 'Continue')));
}
window.QuestionScale = QuestionScale;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/quiz-flow/QuestionScale.jsx", error: String((e && e.message) || e) }); }

// ui_kits/quiz-flow/QuizApp.jsx
try { (() => {
function QuizApp() {
  const [screen, setScreen] = React.useState('intro');
  const [ctaState, setCtaState] = React.useState('launch');
  const screens = ['intro', 'mc', 'scale', 'number', 'gate', 'result'];
  const back = () => {
    const i = screens.indexOf(screen);
    if (i > 0) setScreen(screens[i - 1]);
  };
  if (screen === 'intro') return React.createElement(window.IntroScreen, {
    onStart: () => setScreen('mc')
  });
  if (screen === 'mc') return React.createElement(window.QuestionMC, {
    onAdvance: () => setScreen('scale'),
    onBack: back
  });
  if (screen === 'scale') return React.createElement(window.QuestionScale, {
    onAdvance: () => setScreen('number'),
    onBack: back
  });
  if (screen === 'number') return React.createElement(window.QuestionNumber, {
    onAdvance: () => setScreen('gate'),
    onBack: back
  });
  if (screen === 'gate') return React.createElement(window.DetailsGate, {
    onSubmit: () => setScreen('result'),
    onBack: back
  });
  return React.createElement(window.ResultPage, {
    ctaState,
    onToggleCta: () => setCtaState(s => s === 'launch' ? 'future' : 'launch')
  });
}
window.QuizApp = QuizApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/quiz-flow/QuizApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/quiz-flow/QuizChrome.jsx
try { (() => {
function QuizChrome({
  current,
  total,
  onBack,
  children
}) {
  const {
    ProgressBar,
    BackLink
  } = window.TCSBDesignSystem_000d09;
  return React.createElement('div', {
    style: {
      minHeight: '100vh',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      padding: '20px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 520,
      width: '100%',
      margin: '0 auto'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, React.createElement('img', {
    src: '../../assets/logos/logo-dark-orange.png',
    style: {
      height: 32,
      objectFit: 'contain'
    }
  }), onBack && React.createElement(BackLink, {
    onClick: onBack
  })), current && total && React.createElement(ProgressBar, {
    current,
    total
  })), React.createElement('div', {
    style: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      padding: '40px 24px 56px'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 480,
      width: '100%'
    }
  }, children)));
}
window.QuizChrome = QuizChrome;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/quiz-flow/QuizChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/quiz-flow/ResultPage.jsx
try { (() => {
function ResultPage({
  ctaState,
  onToggleCta
}) {
  const {
    ScoreDial,
    ResultCard,
    Callout,
    Button
  } = window.TCSBDesignSystem_000d09;
  return React.createElement('div', {
    style: {
      background: '#fff',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 560,
      margin: '0 auto',
      padding: '40px 24px 80px',
      display: 'flex',
      flexDirection: 'column',
      gap: 48
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, React.createElement('img', {
    src: '../../assets/logos/logo-dark-orange.png',
    style: {
      height: 32
    }
  })), React.createElement('div', {
    style: {
      background: 'var(--navy)',
      borderRadius: 'var(--radius-lg)',
      padding: '40px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16
    }
  }, React.createElement(ScoreDial, {
    value: 72,
    size: 200,
    color: 'var(--yellow)',
    label: 'Founder Readiness Score',
    numeralColor: '#fff',
    labelColor: 'rgba(255,255,255,.75)'
  }), React.createElement('p', {
    style: {
      color: 'rgba(255,255,255,.75)',
      fontSize: 14,
      textAlign: 'center',
      margin: 0,
      maxWidth: 340
    }
  }, "That puts you well into 'ready to move' territory — the honest read is below.")), React.createElement('p', {
    style: {
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--navy)',
      textAlign: 'center',
      margin: 0
    }
  }, "Nothing's happened yet, but you can feel it coming. That instinct is usually right, and it's rarely about the job itself."), React.createElement(ResultCard, {
    eyebrow: 'Your blocker',
    title: 'Runway Fear',
    body: "It's not the idea, and it's not ambition. What actually stops you is the practical question of how you'd cover income while you build. That's not a lack of readiness, it's a real, solvable planning problem — and it's the first thing worth mapping out.",
    accent: 'var(--orange)'
  }), React.createElement(ResultCard, {
    eyebrow: 'Your decision style',
    title: 'Plan-First Builder',
    body: "You move once you can see the steps and the numbers, not before. Left with a blank page, you look for the plan rather than the leap. That's a strength here, not a delay tactic — you just need the plan in front of you.",
    accent: 'var(--pink)',
    shareable: true
  }), React.createElement('p', {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--lh-body)',
      textAlign: 'center',
      margin: 0
    }
  }, "What this would really get you: something solid before the next restructuring wave."), React.createElement('p', {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--lh-body)',
      textAlign: 'center',
      margin: 0
    }
  }, "That's exactly the gap the programme is built to close — a proper plan, on paper, before you're asked to trust anything else."), React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, React.createElement(Callout, null, 'Cohort 1 starts end of October and is capped at 20 people.')), React.createElement('div', {
    style: {
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'center',
      textAlign: 'center'
    }
  }, React.createElement('div', {
    style: {
      width: '100%',
      aspectRatio: '16/9',
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-md)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-secondary)',
      fontSize: 13
    }
  }, '▶ Video placeholder — Lisa, Runway Fear (60–90s)'), React.createElement('span', {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, 'One version per blocker')), React.createElement('div', {
    style: {
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-lg)',
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      alignItems: 'center',
      textAlign: 'center'
    }
  }, ctaState === 'launch' ? React.createElement(React.Fragment, null, React.createElement('p', {
    style: {
      fontSize: 'var(--fs-body-lg)',
      color: 'var(--navy)',
      lineHeight: 'var(--lh-body)',
      margin: 0
    }
  }, "You're ready to move on this now. Join the waitlist and you'll be first in line the moment Cohort 1 opens for applications."), React.createElement(Button, {
    variant: 'primary',
    fullWidth: true
  }, 'Join The Waitlist')) : React.createElement(React.Fragment, null, React.createElement('p', {
    style: {
      fontSize: 'var(--fs-body-lg)',
      color: 'var(--navy)',
      lineHeight: 'var(--lh-body)',
      margin: 0
    }
  }, "You're ready to move on this now."), React.createElement(Button, {
    variant: 'primary',
    fullWidth: true
  }, 'Apply For Cohort 1'), React.createElement('a', {
    href: '#',
    style: {
      fontSize: 13
    }
  }, 'Prefer to see more first? Join the next webinar')), React.createElement('button', {
    onClick: onToggleCta,
    style: {
      marginTop: 8,
      fontSize: 11,
      color: 'var(--text-secondary)',
      background: 'none',
      border: 'none',
      textDecoration: 'underline',
      cursor: 'pointer'
    }
  }, 'Toggle CTA state (spec preview only): ' + (ctaState === 'launch' ? 'showing Launch' : 'showing Future')))));
}
window.ResultPage = ResultPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/quiz-flow/ResultPage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ResultCard = __ds_scope.ResultCard;

__ds_ns.ScoreDial = __ds_scope.ScoreDial;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.NumberInput = __ds_scope.NumberInput;

__ds_ns.OptionButton = __ds_scope.OptionButton;

__ds_ns.ScaleInput = __ds_scope.ScaleInput;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.BackLink = __ds_scope.BackLink;

})();
