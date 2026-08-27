/*
 * TCSB Founder Readiness Assessment — question bank, scoring, and result copy.
 * Built from 260825_Founder-Readiness-Assessment-v2_TCSB.md.
 *
 * Copy marked DRAFT below (segment tones, blocker/decision-style write-ups,
 * why-now lines, TCSB bridges) was not supplied in any source doc — the v2
 * blueprint says this content is "unchanged from v1" but no v1 file exists
 * in this project folder. It was drafted in-brand (calm, second-person, no
 * hype, framed as an honest read rather than a flaw) and should be reviewed
 * against the real v1 copy if/when that turns up.
 */

// ---- Question bank -------------------------------------------------------

const QUESTIONS = [
  {
    id: 'q1', type: 'mc', block: 'A',
    text: 'Where are you right now?',
    options: [
      { value: 'A', label: 'Still in the job, thinking it through', tone: 'quietPlanner' },
      { value: 'B', label: 'Notice period, or just left', tone: 'redundancyRealist' },
      { value: 'C', label: "Nothing's happened, but I can feel it coming", tone: 'redundancyRealist' },
    ],
  },
  {
    id: 'q2', type: 'mc', block: 'A',
    text: 'What best describes your current role?',
    options: [
      { value: 'A', label: 'Director', seniorityPoints: 10 },
      { value: 'B', label: 'Head of / VP', seniorityPoints: 12 },
      { value: 'C', label: 'C-suite (CEO, COO, CFO, CMO, CHRO, or equivalent)', seniorityPoints: 15 },
      { value: 'D', label: 'Senior Manager', seniorityPoints: 8 },
      { value: 'E', label: 'Something else senior, not listed here', seniorityPoints: 8 },
    ],
  },
  {
    id: 'q3', type: 'number', block: 'A',
    text: 'How many years have you been at this level?',
    min: 0, max: 40,
  },
  {
    id: 'q4', type: 'mc', block: 'B',
    text: 'When you picture actually starting, what stalls you first?',
    options: [
      { value: 'A', label: 'No real plan, just an idea', blocker: 'noPlanYet' },
      { value: 'B', label: "Not sure how I'd cover income", blocker: 'runwayFear' },
      { value: 'C', label: 'No idea where a first client comes from', blocker: 'noClientPath' },
      { value: 'D', label: "Can't see where the hours come from", blocker: 'noRoomYet' },
      { value: 'E', label: 'Not sure I\'m "allowed" to call myself a founder', blocker: 'permissionGap' },
    ],
  },
  {
    id: 'q5', type: 'mc', block: 'B',
    text: 'A free weekend lands in your lap. What actually gets you stuck?',
    options: [
      { value: 'A', label: "Realising I don't have a proper plan", blocker: 'noPlanYet' },
      { value: 'B', label: 'Worrying about money instead of building', blocker: 'runwayFear' },
      { value: 'C', label: 'Not knowing who to offer it to', blocker: 'noClientPath' },
      { value: 'D', label: "I wouldn't have the weekend free, that's the problem", blocker: 'noRoomYet' },
      { value: 'E', label: 'Feeling like a fraud sitting down to "build a business"', blocker: 'permissionGap' },
    ],
  },
  {
    id: 'q6', type: 'mc', block: 'B',
    text: "You have an hour with someone who's already done this. What's your first question?",
    options: [
      { value: 'A', label: 'How do I turn this into a plan?', blocker: 'noPlanYet' },
      { value: 'B', label: 'How do I not go backwards financially?', blocker: 'runwayFear' },
      { value: 'C', label: 'How do I get my first client, no company behind me?', blocker: 'noClientPath' },
      { value: 'D', label: 'How did you actually find the time?', blocker: 'noRoomYet' },
      { value: 'E', label: 'What made it finally click for you?', blocker: 'permissionGap' },
    ],
  },
  {
    id: 'q7', type: 'mc', block: 'B',
    text: 'Which of these sounds most like you?',
    options: [
      { value: 'A', label: '"I need to get this out of my head and onto paper"', blocker: 'noPlanYet' },
      { value: 'B', label: '"I can\'t afford to get this wrong financially"', blocker: 'runwayFear' },
      { value: 'C', label: '"I wouldn\'t even know who my first client would be"', blocker: 'noClientPath' },
      { value: 'D', label: '"There aren\'t enough hours in the day"', blocker: 'noRoomYet' },
      { value: 'E', label: '"I don\'t feel confident enough to be the one in charge"', blocker: 'permissionGap' },
    ],
  },
  {
    id: 'q8', type: 'mc', block: 'C',
    text: 'What would actually make you believe this could work for you?',
    options: [
      { value: 'A', label: "Seeing someone just like me who's done it", style: 'evidenceLedMover' },
      { value: 'B', label: 'Having the steps and numbers mapped out', style: 'planFirstBuilder' },
      { value: 'C', label: 'Someone expecting something from me by a date', style: 'accountabilitySeeker' },
      { value: 'D', label: "Nothing, I've decided, I just need to move", style: 'readyToMove' },
    ],
  },
  {
    id: 'q9', type: 'mc', block: 'C',
    text: 'Left alone with a blank page and no deadline, what happens?',
    options: [
      { value: 'A', label: "I look for someone else's story to follow first", style: 'evidenceLedMover' },
      { value: 'B', label: 'I start trying to plan it properly first', style: 'planFirstBuilder' },
      { value: 'C', label: "It stalls without someone checking in", style: 'accountabilitySeeker' },
      { value: 'D', label: "It doesn't stall, I get on with it", style: 'readyToMove' },
    ],
  },
  {
    id: 'q10', type: 'scale', block: 'C',
    text: 'If nothing changes in the next 12 months, how does that feel?',
    min: 1, max: 10,
    minLabel: 'Completely fine with that',
    maxLabel: "Genuinely can't sit with that",
  },
  {
    id: 'q11', type: 'mc', block: 'D',
    text: 'If this actually happened, what would it really get you?',
    options: [
      { value: 'A', label: 'Time back, control over my hours', whyNow: 'freedom' },
      { value: 'B', label: 'No ceiling on what I earn', whyNow: 'uncapped' },
      { value: 'C', label: 'Something solid before the next restructuring wave', whyNow: 'protection' },
      { value: 'D', label: 'Something with my name on it', whyNow: 'legacy' },
    ],
  },
  {
    id: 'q12', type: 'number', block: 'D',
    text: 'Realistically, how many hours a week could you give this right now?',
    min: 0, max: 40, suffix: 'hrs',
  },
];

// ---- Result copy ----------------------------------------------------------

const SEGMENT_TONES = {
  quietPlanner: {
    label: 'Quiet Planner',
    line: "Nothing's forcing your hand yet, and that's exactly why this is worth doing properly now, while you've still got the choice. The read below is honest, not a verdict.",
  },
  redundancyRealist: {
    label: 'Redundancy Realist',
    line: "Nothing's happened yet, but you can feel it coming. That instinct is usually right, and it's rarely about the job itself.",
  },
};

const BLOCKERS = {
  noPlanYet: {
    title: 'No Plan Yet',
    body: "It's not that you don't want this, it's that nothing's been written down yet. Right now the whole thing lives as an idea in your head, and ideas that only exist in your head are easy to leave there. That's not a lack of conviction, it's a missing step — get it onto paper and it stops being a maybe.",
    bridge: "That's exactly the gap the programme is built to close — a proper plan, on paper, before you're asked to trust anything else.",
  },
  runwayFear: {
    title: 'Runway Fear',
    body: "It's not the idea, and it's not ambition. What actually stops you is the practical question of how you'd cover income while you build. That's not a lack of readiness, it's a real, solvable planning problem — and it's the first thing worth mapping out.",
    bridge: "That's exactly what the programme is built to map out first — a real income plan for the transition, not just the business idea.",
  },
  noClientPath: {
    title: 'No Client Path',
    body: "You could probably do the work tomorrow if someone handed you a client. What's missing is the part before that — knowing who that first client actually is and how they'd find you without a company name behind you. That's a specific, learnable problem, not a sign you're not cut out for this.",
    bridge: "That's exactly the piece the programme gets you working on early — a genuine first-client plan, not a vague hope that clients turn up.",
  },
  noRoomYet: {
    title: 'No Room Yet',
    body: "The idea isn't the issue, the calendar is. Right now there's no real gap in your week where this could actually happen, and no plan makes up for that on its own. That's a scheduling and sequencing problem, not a readiness one — and it's solvable once it's named properly.",
    bridge: "That's exactly what the programme is structured around — a realistic weekly plan built for the hours you actually have, not the ones you wish you had.",
  },
  permissionGap: {
    title: 'Permission Gap',
    body: "You could likely do this well. What's stopping you is the quieter question of whether you're allowed to call yourself a founder yet, not whether you could actually do the job. That's worth naming plainly, because it's usually the fastest one to move past once it's out in the open.",
    bridge: "That's exactly what being surrounded by people doing the same thing does — it closes that gap fast, because you stop being the only one in the room calling yourself a founder.",
  },
};

const DECISION_STYLES = {
  evidenceLedMover: {
    title: 'Evidence-Led Mover',
    body: "You move once you've seen someone else do it first, not before. That's not hesitation, it's how you actually build confidence in something you can't yet picture yourself doing. Once you can see it done by someone like you, you move quickly.",
    scoreWeight: 12,
  },
  planFirstBuilder: {
    title: 'Plan-First Builder',
    body: "You move once you can see the steps and the numbers, not before. Left with a blank page, you look for the plan rather than the leap. That's a strength here, not a delay tactic — you just need the plan in front of you.",
    scoreWeight: 22,
  },
  accountabilitySeeker: {
    title: 'Accountability Seeker',
    body: "Left entirely to your own schedule, this stalls, not because you don't want it, but because nothing's forcing the next step. What actually moves you is someone else expecting something from you by a date. That's not a weakness, it's just how you're wired, and it's easy to build in.",
    scoreWeight: 18,
  },
  readyToMove: {
    title: 'Ready-to-Move',
    body: "You've already decided. What's left isn't motivation, it's the mechanics of actually doing it. Left with a blank page, you get on with it rather than waiting for permission or a perfect plan.",
    scoreWeight: 30,
  },
};

const WHY_NOW = {
  freedom: 'time back, and control over your own hours',
  uncapped: 'no ceiling on what you could actually earn',
  protection: 'something solid before the next restructuring wave',
  legacy: 'something that actually has your name on it',
};

// ---- Scoring ---------------------------------------------------------------

/**
 * @param {Object} answers - keyed by question id, e.g. {q1:'B', q3:7, q10:8, ...}
 * @param {string[]} order - question ids in the order they were answered (for blocker tie-break)
 */
function scoreQuiz(answers, order) {
  const findOpt = (qid, val) => QUESTIONS.find(q => q.id === qid).options.find(o => o.value === val);

  // Blocker: most-picked across Q4-Q7, tie broken by chronological order.
  const blockerVotes = ['q4', 'q5', 'q6', 'q7'].map(qid => findOpt(qid, answers[qid]).blocker);
  const blocker = pickMode(blockerVotes, order.filter(id => ['q4', 'q5', 'q6', 'q7'].includes(id)).map(id => findOpt(id, answers[id]).blocker));

  // Decision style: most-picked across Q8-Q9. Tie -> urgency-weighted per blueprint
  // section 3 ("the higher the urgency score, the more the tie resolves toward
  // Ready-to-Move rather than the previous default of Accountability Seeker").
  // Flagged in the source doc as a working hypothesis to check against real data.
  const q8Style = findOpt('q8', answers.q8).style;
  const q9Style = findOpt('q9', answers.q9).style;
  let decisionStyle;
  if (q8Style === q9Style) {
    decisionStyle = q8Style;
  } else {
    const urgency = answers.q10 || 0;
    decisionStyle = urgency >= 7 ? 'readyToMove' : 'accountabilitySeeker';
  }

  // Segment tone from Q1.
  const tone = findOpt('q1', answers.q1).tone;

  // Why Now from Q11.
  const whyNow = findOpt('q11', answers.q11).whyNow;

  // Fit signal: seniority (Q2, up to 15) + years at level (Q3, up to 15) = up to 30.
  const seniorityPoints = findOpt('q2', answers.q2).seniorityPoints;
  const yearsPoints = Math.min(15, (answers.q3 || 0) * 1.5);
  const fitPoints = Math.round(seniorityPoints + yearsPoints);

  // Founder Readiness Score, per blueprint section 4 — a first-pass formula,
  // shipped as a hypothesis to recalibrate once real response data exists.
  const urgencyPoints = (answers.q10 || 0) * 4; // up to 40
  const stylePoints = DECISION_STYLES[decisionStyle].scoreWeight; // up to 30
  const readinessScore = Math.min(100, Math.round(urgencyPoints + stylePoints + fitPoints));

  // Routing threshold, per blueprint section 4.
  const highReadiness = readinessScore >= 70 && (decisionStyle === 'readyToMove' || decisionStyle === 'planFirstBuilder');

  return {
    blocker, decisionStyle, tone, whyNow,
    hoursPerWeek: answers.q12 || 0,
    yearsAtLevel: answers.q3 || 0,
    seniority: answers.q2,
    readinessScore, highReadiness,
  };
}

function pickMode(votes, chronological) {
  const counts = {};
  votes.forEach(v => { counts[v] = (counts[v] || 0) + 1; });
  const max = Math.max(...Object.values(counts));
  const tied = Object.keys(counts).filter(k => counts[k] === max);
  if (tied.length === 1) return tied[0];
  // Tie-break: whichever tied option came first chronologically.
  return chronological.find(v => tied.includes(v));
}

window.TCSBQuizData = { QUESTIONS, SEGMENT_TONES, BLOCKERS, DECISION_STYLES, WHY_NOW, scoreQuiz };
