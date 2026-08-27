function RevealOnScroll({children,delay=0}){
const ref=React.useRef(null);
const [visible,setVisible]=React.useState(false);
React.useEffect(()=>{
const reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduced){setVisible(true);return;}
const el=ref.current;
if(!el)return;
const obs=new IntersectionObserver(([entry])=>{
if(entry.isIntersecting){setVisible(true);obs.disconnect();}
},{threshold:0.4});
obs.observe(el);
return ()=>obs.disconnect();
},[]);
return React.createElement('div',{ref,style:{
opacity:visible?1:0,
transform:visible?'translateY(0)':'translateY(16px)',
transition:`opacity var(--dur-slow) var(--ease-standard) ${delay}ms, transform var(--dur-slow) var(--ease-standard) ${delay}ms`
}},children);
}
window.RevealOnScroll=RevealOnScroll;
