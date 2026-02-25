import React from "react";

interface HeroProps {
    title?: React.ReactNode;
    titleLine1?: React.ReactNode;
    titleLine2?: React.ReactNode;
    subtitle?: React.ReactNode;
    children?: React.ReactNode;
    colorClass?: string;
    bgClass?: string;
    shadowColorClass?: string;
}

export function Hero({
    title,
    titleLine1,
    titleLine2,
    subtitle,
    children,
    colorClass = "from-primary to-accent",
    bgClass = "bg-primary/10",
    shadowColorClass = "rgba(168,85,247,0.3)"
}: HeroProps) {
    return (
        <section
            className="relative w-full mx-auto rounded-3xl overflow-hidden border border-white/10 group mb-8"
            style={{ boxShadow: `0 0 50px -12px ${shadowColorClass}` }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
            <div className={`absolute inset-0 ${bgClass} mix-blend-overlay z-10 group-hover:bg-primary/0 transition-colors duration-700`} />
            <img
                src="/psilocyberunderworldbanner.png"
                alt="Psilocyber Underworld Banner"
                className="w-full h-[250px] md:h-[400px] xl:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
                {title ? (
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-widest uppercase leading-tight drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colorClass} drop-shadow-[0_5px_15px_rgba(0,0,0,1)]`}>
                            {title}
                        </span>
                    </h1>
                ) : titleLine1 && titleLine2 ? (
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-widest uppercase leading-tight drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">
                        <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] mix-blend-plus-lighter">
                            {titleLine1}
                        </span>
                        <br />
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white drop-shadow-[0_5px_15px_rgba(0,0,0,1)]`}>
                            {titleLine2}
                        </span>
                    </h1>
                ) : null}
                {subtitle && (
                    <p className="mt-4 text-xl md:text-2xl text-white/90 font-medium drop-shadow-md max-w-2xl">
                        {subtitle}
                    </p>
                )}
                {children}
            </div>
        </section>
    );
}
