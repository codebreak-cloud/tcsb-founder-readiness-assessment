function FAQSection(){
const {Section}=window;
const {Accordion}=window.TCSBDesignSystem_000d09;
const items=[
{q:'Do I need to have already decided to start a business?',a:"No. Most people taking this haven't decided anything yet. That's exactly who it's built for."},
{q:'Is this just another generic business quiz?',a:"No, see above, your result and your score are built from the specific combination of your answers, not a fixed set of outcomes everyone gets shuffled into."},
{q:'How long does this actually take?',a:"A few minutes of quick answers. Most questions are a single tap or a number, nothing that needs real writing."},
{q:'Why do you need my mobile number?',a:"So we can text you your result and, if it makes sense, let you know when Cohort 1 spaces are close to full. Nothing more than that."},
{q:'What happens to my details?',a:'[Placeholder — privacy/consent wording to be supplied by whoever handles TCSB\'s data policy.]'}
];
return React.createElement(Section,{eyebrow:'FAQs'},React.createElement(Accordion,{items}));
}
window.FAQSection=FAQSection;
