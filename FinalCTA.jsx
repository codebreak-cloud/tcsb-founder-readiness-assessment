function FinalCTA(){
const {Button}=window.TCSBDesignSystem_000d09;
return React.createElement('section',{style:{background:'var(--navy)',color:'#fff',padding:'80px 24px',textAlign:'center',fontFamily:'var(--font-body)'}},
React.createElement('div',{style:{maxWidth:'var(--container-narrow)',margin:'0 auto',display:'flex',flexDirection:'column',gap:32,alignItems:'center'}},
React.createElement('p',{style:{fontSize:'var(--fs-h4)',fontFamily:'var(--font-display)',lineHeight:'var(--lh-heading)',margin:0}},"You already know how to succeed at something difficult, you've been doing it for years, ",
React.createElement('span',{style:{borderBottom:'3px solid var(--yellow)'}},'just not for yourself yet'),
". A few honest answers tell you exactly what's stood between you and changing that."),
React.createElement(Button,{variant:'primary',onClick:()=>window.location.href='quiz/index.html'},'Start The Assessment')
)
);
}
window.FinalCTA=FinalCTA;
