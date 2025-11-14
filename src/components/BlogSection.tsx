import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BLOG_PAGE_LINK } from "@/constants/links";
import { Brain, ArrowRight } from "lucide-react";

const BlogSection = () => {
    const blogPosts = [
        "How to Automate Your Binance Trading Step by Step",
        "DCA vs. Micro-Trading — Which Strategy Works Best?",
        "What Makes a Crypto Trading Bot Trustworthy?",
        "Swiss Standards in Crypto Security",
    ];

    return (
        <section className='py-24 relative overflow-hidden'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-12'>
                    <div className='flex items-center justify-center mb-4 gap-2'>
                        <Brain
                            size={40}
                            className='text-primary my-0'
                        />
                        <h2 className='text-3xl md:text-5xl font-bold text-gradient'>
                            Education & Insights
                        </h2>
                    </div>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
                    {blogPosts.map((post, index) => (
                        <Card
                            key={index}
                            className='glass-card border border-primary/10 hover:border-primary/30 transition-all duration-500'
                        >
                            <CardContent className='p-6 flex flex-col h-full'>
                                <h3 className='text-xl font-semibold text-foreground mb-4 flex-grow'>
                                    {post}
                                </h3>
                                <Button
                                    variant='outline'
                                    className='border-primary/30 hover:bg-primary/5 text-primary hover:text-primary group w-full'
                                    asChild
                                >
                                    <a href={BLOG_PAGE_LINK}>
                                        <span className='flex items-center gap-2'>
                                            Read Article
                                            <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                                        </span>
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className='text-center'>
                    <Button
                        variant='default'
                        className='bg-primary text-primary-foreground hover:bg-primary/90 group px-10 py-6 text-lg font-semibold rounded-xl'
                        asChild
                    >
                        <a href={BLOG_PAGE_LINK}>
                            <span className='flex items-center gap-2'>
                                Read the Blog
                                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                            </span>
                        </a>
                    </Button>
                </div>
            </div>

            {/* Background decorations */}
            <div className='absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10'></div>
            <div className='absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10'></div>
        </section>
    );
};

export default BlogSection;
