
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
    title: "Coordinate Impact | DeCleanup Rewards",
    description:
        "Open infrastructure for transparent, scalable environmental coordination.",
};

export default function CoordinatePage() {
    return (
        <main className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-[#58B12F] selection:text-black">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                {/* Navigation */}
                <div className="mb-10">
                    <Link
                        href="/#who-is-this-for"
                        className="inline-flex items-center gap-2 text-[#58B12F] hover:text-[#FAFF00] font-medium text-sm md:text-base transition-colors group"
                    >
                        <svg
                            className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        Back to Home
                    </Link>
                </div>

                {/* Header */}
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 uppercase leading-tight"
                        style={{
                            fontFamily: "var(--font-bebas-neue), sans-serif",
                            letterSpacing: "0.05em",
                        }}
                    >
                        Coordinate & Scale Impact
                    </h1>
                    <p className="text-xl md:text-2xl text-[#58B12F] mb-4 font-medium uppercase">
                        For those who build and coordinate impact
                    </p>
                    <p className="text-lg text-gray-400">
                        Open infrastructure for transparent, scalable environmental coordination.
                    </p>
                </div>

                {/* The Problem */}
                <section className="mb-24">
                    <h2
                        className="text-3xl md:text-4xl font-medium text-white mb-10 border-l-4 border-[#58B12F] pl-4 uppercase"
                        style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                        The Problem
                    </h2>
                    <p className="text-gray-400 mb-8 text-lg">
                        Impact coordinators struggle with:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            { icon: "🧩", title: "Fragmented data" },
                            { icon: "📝", title: "Manual reporting" },
                            { icon: "🔒", title: "Trust bottlenecks" },
                            {
                                icon: "🏗️",
                                title: "No shared infrastructure",
                                subtitle: "for verification",
                            },
                            {
                                icon: "⚖️",
                                title: "Hard-to-govern",
                                subtitle: "funding decisions",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center hover:border-[#58B12F]/50 transition-colors"
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-white font-medium">
                                    {item.title}
                                    {item.subtitle && (
                                        <span className="block text-gray-500 text-sm mt-1">
                                            {item.subtitle}
                                        </span>
                                    )}
                                </h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* What DeCleanup Provides */}
                <section className="mb-24">
                    <h2
                        className="text-3xl md:text-4xl font-medium text-white mb-10 border-l-4 border-[#58B12F] pl-4 uppercase"
                        style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                        What DeCleanup Provides
                    </h2>
                    <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 md:p-10">
                        <p className="text-xl text-white mb-8">
                            DeCleanup is <span className="text-[#58B12F]">open DMRV infrastructure</span>, not a closed platform. You can:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            {[
                                "Use standardized cleanup data",
                                "Participate in governance",
                                "Help define verification rules",
                                "Coordinate funding transparently",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4 bg-black/40 p-4 rounded-lg border border-gray-800">
                                    <div className="w-2 h-2 rounded-full bg-[#58B12F] shrink-0" />
                                    <span className="text-gray-200">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* DMRV as Infrastructure */}
                <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2
                            className="text-3xl md:text-4xl font-medium text-white mb-8 border-l-4 border-[#58B12F] pl-4 uppercase"
                            style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                        >
                            DMRV as Infrastructure
                        </h2>
                        <p className="text-gray-400 mb-6">
                            We treat DMRV as a public good layer:
                        </p>
                        <div className="space-y-6">
                            {[
                                { icon: "🔗", title: "Cleanup records are immutable" },
                                { icon: "🌐", title: "Data structures are open and interoperable" },
                                { icon: "🆓", title: "No dependency on proprietary standards" },
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <span className="text-2xl mt-1">{item.icon}</span>
                                    <span className="text-lg text-gray-200">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8">
                        <div className="mb-8">
                            <h3 className="text-[#58B12F] uppercase text-sm tracking-wider font-semibold mb-4">Compatible with</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />SDG reporting</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />Regen ecosystems</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />Future certification layers</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[#58B12F] uppercase text-sm tracking-wider font-semibold mb-4">This aligns with</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />Regen community tooling</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />Open impact accounting systems</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />Governance & coordination</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Governance Tools Live on Celo */}
                <section className="mb-24">
                    <h2
                        className="text-3xl md:text-4xl font-medium text-white mb-10 border-l-4 border-[#58B12F] pl-4 uppercase"
                        style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                        Governance Tools Live on Celo
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: "💰",
                                title: "$cDCU Token",
                                desc: "Used for proposals and voting",
                            },
                            {
                                icon: "🌱",
                                title: "Gardens.fund",
                                desc: "Coordination platform",
                            },
                            {
                                icon: "🗳️",
                                title: "Community Decides",
                                desc: "Verification rules, funding priorities, new pools",
                            },
                        ].map((item, index) => (
                            <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-xl relative overflow-hidden group hover:border-[#58B12F]/50 transition-all">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#58B12F]/5 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-[#58B12F]/10 transition-colors" />
                                <div className="text-4xl mb-6">{item.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Example Funding Pools */}
                <section className="mb-24">
                    <h2
                        className="text-3xl md:text-4xl font-medium text-white mb-10 border-l-4 border-[#58B12F] pl-4 uppercase"
                        style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                        Example Funding Pools
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* First Pool - Special Styling */}
                        <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-[#58B12F]/10 border border-[#58B12F]/30 p-8 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">First Pool</h3>
                                <p className="text-[#58B12F]">Sponsored by Ethereum for the World</p>
                            </div>
                            <div className="px-4 py-2 bg-[#58B12F] text-black font-bold rounded-lg text-sm uppercase tracking-wide">
                                Active
                            </div>
                        </div>

                        {[
                            "Equipment Pool",
                            "Local Organizer Support Pool",
                            "Logistics & Transport Pool",
                            "Data & Research Pool",
                            "Experimental / Pilot Pool",
                        ].map((pool, index) => (
                            <div key={index} className="bg-gray-900/40 border border-gray-800 p-6 rounded-xl flex items-center gap-4">
                                <div className="w-2 h-2 bg-gray-600 rounded-full" />
                                <span className="text-gray-300 font-medium">{pool}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* The Outcome */}
                <section className="mb-12 bg-gradient-to-r from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-12 text-center">
                    <h2
                        className="text-3xl md:text-4xl font-medium text-white mb-8 uppercase"
                        style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                        The Outcome
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            "Coordinators spend less time proving impact",
                            "Communities self-govern funding",
                            "Impact data becomes reusable infrastructure",
                            "Cleanups scale without centralized control"
                        ].map((outcome, index) => (
                            <div key={index} className="flex flex-col items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#58B12F]/10 flex items-center justify-center text-[#58B12F] font-bold text-lg border border-[#58B12F]/20">
                                    {index + 1}
                                </div>
                                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                    {outcome}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </main>
    );
}
