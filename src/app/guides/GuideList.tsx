"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/Card";
import { cn } from "@/components/Button";

type GuideEdge = {
    node?: {
        _sys: { filename: string };
        title: string;
        description?: string | null;
        heroImage?: string | null;
        categories?: (string | null)[] | null;
    } | null;
} | null;

interface GuideListProps {
    guides: GuideEdge[];
}

export default function GuideList({ guides }: GuideListProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Extract unique categories from all guides
    const allCategories = useMemo(() => {
        const categories = new Set<string>();
        guides.forEach(edge => {
            edge?.node?.categories?.forEach(cat => cat && categories.add(cat));
        });
        return Array.from(categories).sort();
    }, [guides]);

    // Filter guides based on search query and category
    const filteredGuides = useMemo(() => {
        return guides.filter(edge => {
            if (!edge || !edge.node) return false;
            const guide = edge.node;

            // Search text match (checks title and description)
            const query = searchQuery.toLowerCase();
            const matchesSearch =
                !searchQuery ||
                guide.title.toLowerCase().includes(query) ||
                (guide.description && guide.description.toLowerCase().includes(query));

            // Category match
            const matchesCategory =
                !selectedCategory ||
                (guide.categories && guide.categories.includes(selectedCategory));

            return matchesSearch && matchesCategory;
        });
    }, [guides, searchQuery, selectedCategory]);

    return (
        <div className="flex flex-col gap-10">
            {/* Search and Filter Controls */}
            <div className="flex flex-col gap-6 p-6 rounded-2xl bg-card border border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] z-20 sticky top-24 backdrop-blur-md">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search protocols, techniques, or strains..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-black/50 border border-white/10 rounded-full px-6 py-4 text-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                    />
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-50 text-xl font-bold">
                        ⚲
                    </div>
                </div>

                {allCategories.length > 0 && (
                    <div className="flex flex-wrap gap-3 items-center">
                        <span className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mr-2">Filter by:</span>
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={cn(
                                "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
                                selectedCategory === null
                                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                                    : "bg-white/5 text-muted-foreground hover:bg-white/10"
                            )}
                        >
                            All
                        </button>
                        {allCategories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={cn(
                                    "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
                                    selectedCategory === cat
                                        ? "bg-secondary text-secondary-foreground shadow-[0_0_15px_rgba(45,212,191,0.4)]"
                                        : "bg-white/5 text-muted-foreground hover:bg-white/10"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Results Counter */}
            <div className="flex justify-between items-center text-sm font-medium text-muted-foreground">
                <p>Showing {filteredGuides.length} {filteredGuides.length === 1 ? 'guide' : 'guides'}</p>
                {(searchQuery || selectedCategory) && (
                    <button
                        onClick={() => {
                            setSearchQuery("");
                            setSelectedCategory(null);
                        }}
                        className="text-primary hover:underline"
                    >
                        Clear filters
                    </button>
                )}
            </div>

            {/* Guides Grid */}
            {filteredGuides.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredGuides.map((guide) => (
                        <Link
                            key={guide?.node?._sys.filename}
                            href={`/guides/${guide?.node?._sys.filename}`}
                            className="group"
                        >
                            <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/50 transition-all duration-300 group-hover:transform group-hover:-translate-y-1">
                                <div className="h-48 w-full overflow-hidden rounded-t-lg bg-muted relative shrink-0">
                                    {guide?.node?.heroImage ? (
                                        <img
                                            src={guide?.node?.heroImage}
                                            alt={guide?.node?.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                                            <span className="text-4xl">🍄</span>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                </div>

                                <CardHeader className="grow-0">
                                    <CardTitle className="line-clamp-2 text-xl group-hover:text-primary transition-colors">
                                        {guide?.node?.title}
                                    </CardTitle>
                                    {guide?.node?.categories && guide.node.categories.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {guide.node.categories.map(cat => (
                                                <span key={cat} className="text-xs px-2 py-1 rounded bg-black/40 text-muted-foreground border border-white/5 h-fit leading-none">
                                                    {cat}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </CardHeader>

                                <CardContent className="grow">
                                    <p className="text-muted-foreground line-clamp-3 text-sm">
                                        {guide?.node?.description || "No description available."}
                                    </p>
                                </CardContent>

                                <CardFooter className="grow-0 border-t border-white/5 pt-4 mt-auto">
                                    <span className="text-xs font-semibold text-secondary uppercase tracking-widest group-hover:underline w-full text-center">
                                        Read Protocol
                                    </span>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 px-4 text-center border border-white/5 rounded-2xl bg-black/20 backdrop-blur-sm">
                    <span className="text-6xl mb-6 opacity-30">🔍</span>
                    <h3 className="text-2xl font-bold mb-2">No guides found</h3>
                    <p className="text-muted-foreground max-w-md">
                        We couldn't find any protocols matching your current filters. Try adjusting your search query or selecting a different category.
                    </p>
                    <button
                        onClick={() => {
                            setSearchQuery("");
                            setSelectedCategory(null);
                        }}
                        className="mt-8 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full font-medium transition-colors"
                    >
                        Reset All Filters
                    </button>
                </div>
            )}
        </div>
    );
}
