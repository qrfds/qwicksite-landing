"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Do I need coding skills to use QuickSite?",
      answer: "Absolutely not! QuickSite is designed for everyone. Our AI handles all the technical work, and our visual editor lets you make changes with simple drag-and-drop. No coding knowledge required."
    },
    {
      question: "How much does QuickSite cost?",
      answer: "We offer flexible pricing starting with a free forever plan. Paid plans start at just $9/month with advanced features, custom domains, and priority support. All plans include a 14-day money-back guarantee."
    },
    {
      question: "Can I migrate from Shopify or WooCommerce?",
      answer: "Yes! Our seamless import tool can migrate your existing store, products, and customer data in minutes. We also provide free migration assistance to ensure nothing is lost in the process."
    },
    {
      question: "Is QuickSite scalable for growing businesses?",
      answer: "Absolutely. QuickSite is built for growth. Our infrastructure automatically scales with your traffic, and our e-commerce features handle everything from small shops to enterprise-level stores with thousands of products."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 chat support, comprehensive documentation, video tutorials, and free onboarding calls for paid plans. Our team is committed to your success every step of the way."
    },
    {
      question: "How fast will my website load?",
      answer: "Lightning fast! All QuickSite websites are automatically optimized for speed with global CDN, image optimization, and performance monitoring. Most sites load in under 2 seconds worldwide."
    }
  ];

  return (
    <section className="py-20">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about QuickSite. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger 
                  className="bg-card/80 backdrop-blur-sm rounded-xl shadow-soft border border-border px-6 text-left hover:bg-card/90 transition-colors"
                >
                  <span className="text-foreground font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;