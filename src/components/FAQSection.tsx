import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FAQ_PAGE_LINK } from "@/constants/links";
import { HelpCircle, ArrowRight } from "lucide-react";

const FAQSection = () => {
    const faqs = [
        {
            question: "Is it safe?",
            answer: "Yes — unCoded connects via Binance API only. Your funds stay on your own Binance account, and no one but you has access to your assets.",
        },
        {
            question: "Does it guarantee profits?",
            answer: "No system can. unCoded focuses on consistent, risk-controlled trading. Results vary based on market conditions and chosen risk settings.",
        },
        {
            question: "What if the market crashes?",
            answer: "The bot keeps trading automatically — it continues to open new trades according to your strategy and settings. It doesn't lower the initial entry price like traditional DCA systems, but keeps working to identify new opportunities as the market moves.",
        },
        {
            question: "Can I test before committing?",
            answer: "Yes — every new user gets a $100 Test License to try one pair with real trades and live results.",
        },
        {
            question: "How do fees work?",
            answer: "unCoded takes a flat 20% performance fee on profits only — no subscriptions, no upfront costs.",
        },
    ];

    return (
        <section className='py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-12'>
                    <div className='flex items-center justify-center mb-4 gap-2'>
                        <HelpCircle size={40} className='text-primary my-0' />
                        <h2 className='text-3xl md:text-5xl font-bold text-gradient'>
                            FAQs & Common Concerns
                        </h2>
                    </div>
                </div>

                <div className='max-w-3xl mx-auto'>
                    <Accordion type='single' collapsible className='w-full'>
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className='border-b border-primary/10'
                            >
                                <AccordionTrigger className='text-left text-lg font-semibold text-foreground hover:text-primary transition-colors py-6'>
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className='text-foreground/70 pb-6 text-base leading-relaxed'>
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <div className='text-center mt-12'>
                        <Button
                            variant='outline'
                            className='border-primary/30 hover:bg-primary/5 text-primary hover:text-primary group px-10 py-6 text-lg font-semibold rounded-xl'
                            asChild
                        >
                            <a href={FAQ_PAGE_LINK}>
                                <span className='flex items-center gap-2'>
                                    More FAQs
                                    <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                                </span>
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Background decorations */}
            <div className='absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10'></div>
            <div className='absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10'></div>
        </section>
    );
};

export default FAQSection;
