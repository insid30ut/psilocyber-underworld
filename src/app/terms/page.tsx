import { Card, CardContent } from "@/components/Card";
import { Button } from "@/components/Button";
import Link from "next/link";

export const metadata = {
    title: "Terms of Service | Psilocyber Underworld",
    description: "Terms of service for utilizing the Psilocyber Underworld archives.",
};

export default function TermsPage() {
    return (
        <div className="flex flex-col gap-16 pb-16 mt-8">
            <section className="relative w-full mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_-12px_rgba(45,212,191,0.3)] bg-black/40 p-12 text-center backdrop-blur-md">
                <h1 className="text-4xl md:text-6xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Terms of Service</h1>
            </section>

            <section className="max-w-4xl mx-auto w-full">
                <Card className="bg-card/30 backdrop-blur-md border-white/5 border-l-secondary/50 border-l-4">
                    <CardContent className="p-8 flex flex-col gap-6 text-muted-foreground leading-relaxed text-lg">
                        <p>
                            By accessing the Psilocyber Underworld, you agree to comply with and be bound by the following terms of use.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-4">1. Educational Purpose</h2>
                        <p>
                            All information, protocols, and cultivation guides provided on this platform are strictly for educational and harm-reduction purposes.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-4">2. Legal Compliance</h2>
                        <p>
                            Users are responsible for understanding and adhering to the local, state, and federal laws of their respective jurisdictions. We do not condone illegal activities.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-4">3. Partner Network</h2>
                        <p>
                            We curate a list of trusted partners, but we do not guarantee the services or products offered by external vendors. Users engage with partners at their own discretion.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-4">4. Content Usage</h2>
                        <p>
                            The mycelial knowledge shared here is meant for the community. While we encourage the distribution of information, please credit the original authors and the Psilocyber Underworld when sharing.
                        </p>

                        <div className="mt-8 flex justify-center">
                            <Link href="/">
                                <Button variant="outline" className="px-8 rounded-full border-secondary/50 hover:bg-secondary/10 transition-all duration-300">
                                    Return to Home
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
}
