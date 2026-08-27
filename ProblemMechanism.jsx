function Section({eyebrow,children,narrow=true,bg='#fff'}){
return React.createElement('section',{style:{background:bg,padding:'72px 24px',fontFamily:'var(--font-body)'}},
React.createElement('div',{style:{maxWidth:narrow?'var(--container-narrow)':'var(--container-max)',margin:'0 auto'}},
eyebrow&&React.createElement('div',{style:{fontFamily:'var(--font-display)',fontSize:'var(--fs-eyebrow)',fontWeight:700,letterSpacing:'var(--ls-eyebrow)',textTransform:'uppercase',color:'var(--orange)',marginBottom:20,textAlign:'center'}},eyebrow),
children
)
);
}
function ProblemSection(){
return React.createElement(Section,{eyebrow:'The Problem'},
React.createElement('p',{style:{fontSize:'var(--fs-body-lg)',lineHeight:'var(--lh-body)',color:'var(--navy)',textAlign:'center',margin:'0 0 24px'}},
"You've built a serious career. You're good at your job, maybe the best in the room most days. And somewhere in the last few years, you've started asking yourself a different question: ",
React.createElement('span',{style:{background:'var(--yellow-tint-10)',boxShadow:'inset 0 -2px 0 var(--yellow)',padding:'0 4px',fontWeight:700}},'is this it?')
),
React.createElement('p',{style:{fontSize:'var(--fs-body-lg)',lineHeight:'var(--lh-body)',color:'var(--text-secondary)',textAlign:'center',margin:0}},"Maybe it's still just a job that's stopped being enough. Maybe a restructuring has already put the decision in front of you before you were ready. Either way, you've probably told yourself the reason you haven't moved is time, or money, or timing. This is here to find out if that's actually true.")
);
}
function MechanismSection(){
const {ScoreDial,Icon}=window.TCSBDesignSystem_000d09;
return React.createElement(Section,{eyebrow:'The Mechanism',bg:'var(--surface-sunken)'},
React.createElement('div',{style:{display:'flex',flexDirection:'column',alignItems:'center',gap:40}},
React.createElement('div',{style:{display:'flex',flexDirection:'column',alignItems:'center',gap:8}},
React.createElement(ScoreDial,{value:72,size:160,color:'var(--orange)',label:'Founder Readiness Score'}),
React.createElement('span',{style:{fontSize:12,color:'var(--text-secondary)'}},'Preview — your score is revealed at the end')
),
React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:20}},
React.createElement('p',{style:{fontSize:'var(--fs-body-lg)',lineHeight:'var(--lh-body)',color:'var(--navy)',textAlign:'center',margin:0}},"This isn't a quick personality quiz. It's built to show you exactly what's actually blocking you, not the reason you've been telling yourself it is, and the exact next step to take once you know how you're wired."),
React.createElement('p',{style:{fontSize:'var(--fs-body)',lineHeight:'var(--lh-body)',color:'var(--text-secondary)',textAlign:'center',margin:0}},"If what you need is a proper plan on paper before you trust any of this, it'll tell you that. If you need someone holding you to a date, it'll tell you that instead. If you need to see someone else do it first, or you've already decided and just need the fastest way to move, it'll tell you which one you are, and exactly what that means for your next step."),
React.createElement('p',{style:{fontSize:'var(--fs-body-lg)',lineHeight:'var(--lh-body)',color:'var(--navy)',textAlign:'center',fontWeight:700,margin:0}},
React.createElement('span',{style:{display:'inline-block',verticalAlign:'-4px',marginRight:10}},React.createElement(Icon,{name:'arrow',size:20})),
"You'll also get your ",
React.createElement('span',{style:{borderBottom:'3px solid var(--orange)'}},'Founder Readiness Score,'),
" so you know exactly how ready you actually are right now, not a guess."
)
)
)
);
}
window.Section=Section;window.ProblemSection=ProblemSection;window.MechanismSection=MechanismSection;
