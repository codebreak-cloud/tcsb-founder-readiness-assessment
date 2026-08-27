function Hero(){
const {Button}=window.TCSBDesignSystem_000d09;
return React.createElement('section',{style:{
background:'linear-gradient(160deg,#0a0a3d,#000031 55%,#1c1c4d)',color:'#fff',
padding:'40px 24px 56px',position:'relative',overflow:'hidden',fontFamily:'var(--font-body)'
}},
React.createElement('div',{style:{position:'absolute',inset:0,background:'radial-gradient(circle at 80% 15%,rgba(255,183,0,.18),transparent 45%),radial-gradient(circle at 15% 85%,rgba(255,0,97,.14),transparent 50%)'}}),
React.createElement('img',{src:'assets/logos/logo-white-orange.png',alt:'TCSB',style:{position:'absolute',top:24,left:24,height:120,objectFit:'contain'}}),
React.createElement('img',{src:'assets/icons/brand-icons-sprite.png',alt:'',style:{position:'absolute',top:24,right:24,height:72,objectFit:'contain'}}),
React.createElement('div',{style:{position:'relative',maxWidth:720,margin:'0 auto',textAlign:'center',paddingTop:64}},
React.createElement('div',{style:{fontFamily:'var(--font-display)',fontSize:'var(--fs-eyebrow)',fontWeight:700,letterSpacing:'var(--ls-eyebrow)',textTransform:'uppercase',color:'var(--orange)',marginBottom:18}},'The Founder Readiness Assessment'),
React.createElement('h1',{style:{fontFamily:'var(--font-display)',fontSize:'clamp(30px,5vw,var(--fs-h1))',fontWeight:700,lineHeight:'var(--lh-tight)',letterSpacing:'var(--ls-tight)',margin:'0 0 20px'}},
"What's Actually Been Stopping You From Starting ",
React.createElement('span',{style:{borderBottom:'4px solid var(--pink)'}},'Your Own Business')
),
React.createElement('p',{style:{fontSize:'var(--fs-body-lg)',lineHeight:'var(--lh-body)',color:'rgba(255,255,255,.78)',margin:'0 0 32px'}},"Built specially for corporate leaders and managers aged 40+ who've wondered if they could run their own business, whether that's something completely new, or doing exactly what you already do, on your own terms, instead of inside someone else's company. Find out exactly what's been in your way, how ready you actually are, and what to do next."),
React.createElement(Button,{variant:'primary',onClick:()=>window.location.href='quiz/index.html'},'Start The Assessment')
)
);
}
window.Hero=Hero;
