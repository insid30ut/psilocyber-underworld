import { Card, CardContent } from "@/components/Card";
import { Button } from "@/components/Button";
import Link from "next/link";

export const metadata = {
    title: "Privacy Policy | Psilocyber Underworld",
    description: "Privacy policy for the Psilocyber Underworld.",
};

export default function PrivacyPage() {
    return (
        <div className="flex flex-col gap-16 pb-16 mt-8">
            <section className="relative w-full mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_-12px_rgba(168,85,247,0.3)] bg-black/40 p-12 text-center backdrop-blur-md">
                <h1 className="text-4xl md:text-6xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Privacy Policy</h1>
            </section>

            <section className="max-w-4xl mx-auto w-full">
                <Card className="bg-card/30 backdrop-blur-md border-white/5 border-l-primary/50 border-l-4">
                    <CardContent className="p-8 flex flex-col gap-6 text-muted-foreground leading-relaxed text-lg">
                        <p>
                            Welcome to the Psilocyber Underworld. We are committed to protecting your privacy and ensuring a secure experience.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-4">1. Information Collection</h2>
                        <p>
                            We collect minimal data necessary for the functioning of the platform. If you contact us, we retain your email and any information you provide over secure channels.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-4">2. Use of Information</h2>
                        <p>
                            Information collected is used strictly for platform operation, communication regarding verified protocols, and platform improvements. We do not sell or distribute personal data to third parties.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-4">3. External Links</h2>
                        <p>
                            Our platform contains links to trusted partners and independent vendors. We are not responsible for the privacy practices or the content of external sites.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-4">4. Security</h2>
                        <p>
                            While we implement secure protocols and encryption, we advise users to always practice good operational security when sharing sensitive information online.
                        </p>

                        <div className="mt-8 flex justify-center">
                            <Link href="/">
                                <Button variant="outline" className="px-8 rounded-full border-primary/50 hover:bg-primary/10 transition-all duration-300">
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
