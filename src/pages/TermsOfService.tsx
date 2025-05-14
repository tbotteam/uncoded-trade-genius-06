import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";

const TermsOfService = () => {
    return (
        <div className='flex flex-col min-h-screen bg-background'>
            <Navbar />
            <main className='flex-grow container mx-auto px-4 py-8 pt-16'>
                <section id='terms' className='py-12 md:py-16'>
                    <div className='max-w-3xl mx-auto text-center'>
                        <h1 className='text-4xl md:text-5xl font-bold mb-4 text-primary animate-fade-in opacity-0'>
                            Terms of Service
                        </h1>
                        <p className='text-lg text-foreground/80 mb-8 animate-fade-in animate-delay-200 opacity-0'>
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                    </div>

                    <Separator className='my-8 md:my-12 bg-primary/20 animate-fade-in animate-delay-300 opacity-0' />

                    <div className='max-w-3xl mx-auto space-y-6 text-foreground/90 animate-fade-in animate-delay-400 opacity-0'>
                        <h2 className='text-2xl font-semibold text-primary'>
                            1. Acceptance of Terms
                        </h2>
                        <p>
                            By accessing or using the unCoded website and
                            services (collectively, the "Service"), you agree to
                            be bound by these Terms of Service ("Terms"). If you
                            do not agree to all of these Terms, do not use the
                            Service.
                        </p>

                        <h2 className='text-2xl font-semibold text-primary'>
                            2. Changes to Terms
                        </h2>
                        <p>
                            We reserve the right, at our sole discretion, to
                            modify or replace these Terms at any time. If a
                            revision is material, we will provide at least 30
                            days' notice prior to any new terms taking effect.
                            What constitutes a material change will be
                            determined at our sole discretion.
                        </p>

                        <h2 className='text-2xl font-semibold text-primary'>
                            3. Use of the Service
                        </h2>
                        <p>
                            You agree to use the Service only for lawful
                            purposes and in accordance with these Terms. You are
                            responsible for all of your activity in connection
                            with the Service.
                        </p>

                        {/* Add more sections as needed */}
                        <p className='pt-4'>
                            Please read these terms and conditions carefully.
                            Your access to and use of the Service is conditioned
                            on your acceptance of and compliance with these
                            Terms. These Terms apply to all visitors, users and
                            others who access or use the Service.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfService;
