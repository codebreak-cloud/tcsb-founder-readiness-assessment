function StatBlock({value,label,accent,delay}){
const {RevealOnScroll}=window;
return React.createElement('div',{style:{flex:'1 1 200px',padding:'32px 20px',borderLeft:'1px solid rgba(255,255,255,.12)'}},
React.createElement(RevealOnScroll,{delay},
React.createElement('div',{style:{fontFamily:'var(--font-display)',fontSize:'clamp(56px,9vw,96px)',fontWeight:700,color:accent,lineHeight:.9,letterSpacing:'var(--ls-display)'}},value)
),
React.createElement('div',{style:{fontSize:13,color:'rgba(255,255,255,.65)',marginTop:12,lineHeight:1.4,maxWidth:220}},label)
);
}
function ProofSection(){
const {Icon}=window.TCSBDesignSystem_000d09;
return React.createElement('section',{style:{background:'var(--navy)',padding:'72px 0',fontFamily:'var(--font-body)'}},
React.createElement('div',{style:{maxWidth:'var(--container-max)',margin:'0 auto',padding:'0 24px'}},
React.createElement('div',{style:{display:'flex',alignItems:'center',justifyContent:'center',gap:8,marginBottom:8}},
React.createElement(Icon,{name:'arrow',size:16}),
React.createElement('div',{style:{fontFamily:'var(--font-display)',fontSize:'var(--fs-eyebrow)',fontWeight:700,letterSpacing:'var(--ls-eyebrow)',textTransform:'uppercase',color:'var(--orange)'}},'The Proof')
),
React.createElement('div',{style:{display:'flex',flexWrap:'wrap',justifyContent:'center',borderTop:'1px solid rgba(255,255,255,.12)',borderBottom:'1px solid rgba(255,255,255,.12)',margin:'32px 0 40px'}},
React.createElement(StatBlock,{value:'2.7M',label:'founders tracked by MIT & the US Census Bureau',accent:'var(--yellow)',delay:0}),
React.createElement(StatBlock,{value:'1.8×',label:'greater odds of success for a 50-year-old vs a 30-year-old founder',accent:'var(--orange)',delay:120}),
React.createElement(StatBlock,{value:'45',label:"average age of founders behind that research's most successful startups",accent:'var(--yellow)',delay:240})
),
React.createElement('p',{style:{maxWidth:'var(--container-narrow)',margin:'0 auto',fontSize:'var(--fs-body)',lineHeight:'var(--lh-body)',color:'rgba(255,255,255,.72)',textAlign:'center'}},"Research from MIT and the US Census Bureau, tracking 2.7 million founders, found that a 50-year-old founder has 1.8 times greater odds of building a successful company than a 30-year-old founder. The most successful startups in that research were built by people with an average age of 45. Everything you've built so far only strengthens the case for starting now.")
)
);
}
window.ProofSection=ProofSection;
