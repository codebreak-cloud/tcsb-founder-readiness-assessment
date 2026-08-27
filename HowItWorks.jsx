function Step({n,text,delay,icon}){
const {RevealOnScroll}=window;
const {Icon}=window.TCSBDesignSystem_000d09;
return React.createElement('div',{style:{flex:1,minWidth:200,display:'flex',flexDirection:'column',alignItems:'center',gap:16,textAlign:'center'}},
React.createElement(RevealOnScroll,{delay},
React.createElement('div',{style:{position:'relative',width:56,height:56,borderRadius:'50%',border:'2px solid var(--orange)',display:'flex',alignItems:'center',justifyContent:'center'}},
React.createElement(Icon,{name:icon,size:26}),
React.createElement('span',{style:{position:'absolute',top:-6,right:-6,width:22,height:22,borderRadius:'50%',background:'var(--navy)',color:'#fff',fontSize:11,fontWeight:700,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)'}},n)
)
),
React.createElement('p',{style:{fontSize:'var(--fs-body)',lineHeight:'var(--lh-body)',color:'var(--text-secondary)',margin:0}},text)
);
}
function HowItWorks(){
const {Section}=window;
return React.createElement(Section,{eyebrow:'How It Works',narrow:false},
React.createElement('div',{style:{display:'flex',gap:40,flexWrap:'wrap',justifyContent:'center'}},
React.createElement(Step,{n:1,icon:'dots',text:'Answer a handful of quick questions, no war and peace.',delay:0}),
React.createElement(Step,{n:2,icon:'ring',text:"Get your Founder Readiness Score and your result straight away, the specific thing that's been in your way and how you'll actually move past it.",delay:120}),
React.createElement(Step,{n:3,icon:'arrow',text:'See what a real next step looks like for someone in exactly your position.',delay:240})
)
);
}
window.HowItWorks=HowItWorks;
