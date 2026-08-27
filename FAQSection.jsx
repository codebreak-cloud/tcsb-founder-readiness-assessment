function FAQSection(){
const {Section}=window;
const {Accordion}=window.TCSBDesignSystem_000d09;
const items=[
{q:'Do I need to have already decided to start a business?',a:"No. Most people taking this haven't decided anything yet. That's exactly who it's built for."},
{q:'Is this just another generic business quiz?',a:"No, see above, your result and your score are built from the specific combination of your answers, not a fixed set of outcomes everyone gets shuffled into."},
{q:'How long does this actually take?',a:"A few minutes of quick answers. Most questions are a single tap or a number, nothing that needs real writing."}
];
return React.createElement(Section,{eyebrow:'FAQs'},React.createElement(Accordion,{items}));
}
window.FAQSection=FAQSection;
