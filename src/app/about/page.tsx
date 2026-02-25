import { Card, CardContent } from "@/components/Card";
import { Button } from "@/components/Button";

export const metadata = {
    title: "About | Psilocyber Underworld",
    description: "The mission and ideology behind the Psilocyber Underworld.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col gap-16 pb-16 mt-8">
            {/* Hero Section */}
            <section className="relative w-full mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_-12px_rgba(168,85,247,0.3)] group">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:bg-primary/0 transition-colors duration-700" />
                <img
                    src="/psilocyberunderworldbanner.png"
                    alt="Psilocyber Underworld Banner"
                    className="w-full h-[300px] md:h-[500px] xl:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-widest uppercase leading-tight drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">
                        <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] mix-blend-plus-lighter">
                            Decentralized
                        </span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">
                            Mycology
                        </span>
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="grid md:grid-cols-2 gap-8">
                <Card className="bg-card/30 backdrop-blur-md border-white/5 border-l-primary/50 border-l-4 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-500">
                    <CardContent className="p-8 flex flex-col gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl mb-2">
                            🧬
                        </div>
                        <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            We believe that information naturally wants to be free. By compiling peer-reviewed protocols, verified genetic isolation techniques, and streamlined cultivation methodologies, we aim to lower the barrier to entry for sovereign biological research.
                        </p>
                    </CardContent>
                </Card>
                <Card className="bg-card/30 backdrop-blur-md border-white/5 border-l-secondary/50 border-l-4 hover:shadow-[0_0_30px_rgba(45,212,191,0.1)] transition-all duration-500">
                    <CardContent className="p-8 flex flex-col gap-4">
                        <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-2xl mb-2">
                            📚
                        </div>
                        <h2 className="text-2xl font-bold text-foreground">The Archives</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            Every guide hosted on this platform has been rigorously tested. From agar work to bulk substrate pasteurization, the data here represents the state-of-the-art in scalable, low-contamination fungal cultivation.
                        </p>
                    </CardContent>
                </Card>
            </section>

            {/* Contact Section */}
            <section className="flex flex-col items-center text-center gap-10 bg-black/40 p-12 md:p-20 rounded-3xl border border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />

                <div className="flex flex-col gap-4 max-w-2xl relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Initiate Contact</h2>
                    <p className="text-muted-foreground text-lg">
                        Have a verified protocol to submit, a trusted partner to recommend, or a platform issue to report? Reach out through our secured channels.
                    </p>
                </div>

                <div className="flex gap-6 flex-wrap justify-center relative z-10 w-full mt-4">
                    <a href="mailto:mycelialfunguy@gmail.com" className="group w-full sm:w-auto">
                        <Button variant="outline" className="w-full h-16 px-8 rounded-full border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 gap-4 text-lg">
                            <span className="text-2xl">✉</span> Secure Email
                        </Button>
                    </a>
                    <a href="https://www.instagram.com/mycelialfunguy/" target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto">
                        <Button variant="outline" className="w-full h-16 px-8 rounded-full border-secondary/50 hover:bg-secondary/10 hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all duration-300 gap-4 text-lg">
                            <span className="text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </span>
                            Instagram
                        </Button>
                    </a>
                </div>
            </section>
        </div>
    );
}
