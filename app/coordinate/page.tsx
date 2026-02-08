
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
                    <p className="text-lg text-gray-200">
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
                    <p className="text-gray-200 mb-8 text-lg">
                        Impact coordinators struggle with:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            {
                                icon: (
                                    <svg className="w-10 h-10 text-[#58B12F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                ),
                                title: "Fragmented data"
                            },
                            {
                                icon: (
                                    <svg className="w-10 h-10 text-[#58B12F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                ),
                                title: "Manual reporting"
                            },
                            {
                                icon: (
                                    <svg className="w-10 h-10 text-[#58B12F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                ),
                                title: "Trust bottlenecks"
                            },
                            {
                                icon: (
                                    <svg className="w-10 h-10 text-[#58B12F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                ),
                                title: "No shared infrastructure",
                                subtitle: "for verification",
                            },
                            {
                                icon: (
                                    <svg className="w-10 h-10 text-[#58B12F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                    </svg>
                                ),
                                title: "Hard-to-govern",
                                subtitle: "funding decisions",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center hover:border-[#58B12F]/50 transition-colors flex flex-col items-center"
                            >
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="text-white font-medium">
                                    {item.title}
                                    {item.subtitle && (
                                        <span className="block text-gray-300 text-sm mt-1">
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
                        <p className="text-gray-200 mb-6">
                            We treat DMRV as a public good layer:
                        </p>
                        <div className="space-y-6">
                            {[
                                {
                                    icon: (
                                        <svg className="w-6 h-6 text-[#58B12F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                        </svg>
                                    ),
                                    title: "Cleanup records are immutable"
                                },
                                {
                                    icon: (
                                        <svg className="w-6 h-6 text-[#58B12F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    ),
                                    title: "Data structures are open and interoperable"
                                },
                                {
                                    icon: (
                                        <svg className="w-6 h-6 text-[#58B12F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                        </svg>
                                    ),
                                    title: "No dependency on proprietary standards"
                                },
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="mt-1 shrink-0">{item.icon}</div>
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
                                icon: (
                                    <svg className="w-10 h-10 text-[#58B12F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                title: "$cDCU Token",
                                desc: "Used for proposals and voting",
                            },
                            {
                                icon: (
                                    <svg className="w-10 h-10 text-[#58B12F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                ),
                                title: "Gardens.fund",
                                desc: "Coordination platform",
                            },
                            {
                                icon: (
                                    <svg className="w-10 h-10 text-[#58B12F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                title: "Community Decides",
                                desc: "Verification rules, funding priorities, new pools",
                            },
                        ].map((item, index) => (
                            <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-xl relative overflow-hidden group hover:border-[#58B12F]/50 transition-all">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#58B12F]/5 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-[#58B12F]/10 transition-colors" />
                                <div className="mb-6">{item.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-200">{item.desc}</p>
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
