
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
    title: "Fund Verified Impact | DeCleanup Rewards",
    description:
        "Verifiable impact infrastructure, not speculation. Fund what you can verify.",
};

export default function FundersPage() {
    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-[#58B12F] selection:text-black">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                {/* Back Button */}
                <div className="mb-8">
                    <Link
                        href="/#who-is-this-for"
                        className="inline-flex items-center gap-2 text-[#58B12F] hover:text-[#58B12F]/80 font-semibold text-sm md:text-base transition-colors duration-200 group"
                    >
                        <svg
                            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-200"
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
                        <span>Back to Home</span>
                    </Link>
                </div>

                {/* Page Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bebas uppercase text-white mb-6 tracking-wide">
                        For those who fund real-world impact
                    </h1>
                    <p className="text-xl md:text-2xl text-[#58B12F] mb-4 font-medium uppercase">
                        Verifiable impact infrastructure, not speculation
                    </p>
                    <p className="text-lg text-gray-200">
                        Fund what you can verify.
                    </p>
                </div>

                {/* Main Content */}
                <div className="mb-16 max-w-5xl mx-auto text-left space-y-8">

                    {/* The Problem - Visual Cards */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                                <svg className="w-6 h-6 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white">The Problem</h3>
                        </div>

                        <p className="text-gray-200 text-sm mb-4">Funders want:</p>

                        <div className="grid sm:grid-cols-2 gap-3">
                            {[
                                {
                                    icon: (
                                        <svg className="w-10 h-10 text-[#58B12F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    ),
                                    text: "Proof that money led to real action"
                                },
                                {
                                    icon: (
                                        <svg className="w-10 h-10 text-[#58B12F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    ),
                                    text: "Transparency without heavy overhead"
                                },
                                {
                                    icon: (
                                        <svg className="w-10 h-10 text-[#58B12F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    ),
                                    text: "Repeatable, scalable funding models"
                                },
                                {
                                    icon: (
                                        <svg className="w-10 h-10 text-[#58B12F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    ),
                                    text: "Less trust, more verification"
                                }
                            ].map((problem, idx) => (
                                <div
                                    key={idx}
                                    className="group relative p-4 rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="shrink-0">{problem.icon}</div>
                                        <p className="text-sm text-gray-300 leading-relaxed pt-2">{problem.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Arrow Transition */}
                    <div className="flex justify-center py-4">
                        <svg className="w-12 h-12 text-[#58B12F] animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>

                    {/* What DeCleanup Enables */}
                    <div className="rounded-2xl border border-[#58B12F]/30 bg-gradient-to-br from-[#58B12F]/10 to-green-600/5 p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-[#58B12F]/20 flex items-center justify-center">
                                <svg className="w-6 h-6 text-[#58B12F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white">What DeCleanup Enables</h3>
                        </div>

                        <p className="text-gray-300 text-sm mb-6">
                            We offer <span className="text-[#58B12F] font-semibold">verifiable impact infrastructure</span>. Funders can:
                        </p>

                        <div className="grid sm:grid-cols-2 gap-3">
                            {[
                                {
                                    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
                                    text: "Fund cleanup pools"
                                },
                                {
                                    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                                    text: "See immutable proof of execution"
                                },
                                {
                                    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
                                    text: "Support open verification infrastructure"
                                },
                                {
                                    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                                    text: "Hold tokens connected to real-world activity"
                                }
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#58B12F]/50 transition-all duration-300 group"
                                >
                                    <div className="text-[#58B12F] shrink-0 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <p className="text-sm text-gray-200">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* DMRV from Funder's Perspective */}
                    <div className="rounded-2xl border border-cyan-500/30 bg-gray-900/90 p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                                <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white">DMRV from a Funder&apos;s Perspective</h3>
                        </div>

                        {/* Flow Diagram */}
                        <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-500/20">
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm font-medium text-white">Funds flow</span>
                                </div>
                                <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                                <div className="flex items-center gap-2">
                                    <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm font-medium text-white">Cleanups happen</span>
                                </div>
                                <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                                <div className="flex items-center gap-2">
                                    <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm font-medium text-white">Proof published</span>
                                </div>
                            </div>
                            <p className="text-xs text-cyan-300 mt-3 text-center">Records are tamper-resistant</p>
                        </div>

                        {/* Data Capabilities */}
                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                            <div>
                                <p className="text-sm text-gray-200 mb-3 font-medium">Data can be:</p>
                                <div className="space-y-2">
                                    {["Audited", "Aggregated", "Reused across reports and ecosystems"].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                            <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <p className="text-sm text-gray-200 mb-3 font-medium">This reduces:</p>
                                <div className="grid sm:grid-cols-3 gap-2">
                                    {[
                                        {
                                            icon: (
                                                <svg className="w-8 h-8 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                                </svg>
                                            ),
                                            text: "Greenwashing risk"
                                        },
                                        {
                                            icon: (
                                                <svg className="w-8 h-8 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                                </svg>
                                            ),
                                            text: "Reporting costs"
                                        },
                                        {
                                            icon: (
                                                <svg className="w-8 h-8 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                            ),
                                            text: "Trust-based claims"
                                        }
                                    ].map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="p-3 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 text-center flex flex-col items-center"
                                        >
                                            <div className="mb-2">{item.icon}</div>
                                            <p className="text-xs text-gray-300">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Outcome */}
                    <div className="rounded-2xl border border-[#FAFF00]/30 bg-gradient-to-br from-[#FAFF00]/10 to-yellow-600/5 p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                                <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white">The Outcome</h3>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-4 mb-6">
                            {[
                                {
                                    icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                                    text: "Funding tied to verifiable action",
                                    color: "text-green-400"
                                },
                                {
                                    icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
                                    text: "Better accountability",
                                    color: "text-blue-400"
                                },
                                {
                                    icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
                                    text: "Open infrastructure worth supporting",
                                    color: "text-purple-400"
                                }
                            ].map((outcome, idx) => (
                                <div
                                    key={idx}
                                    className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 group"
                                >
                                    <div className={`${outcome.color} mb-3 flex justify-center group-hover:scale-110 transition-transform`}>
                                        {outcome.icon}
                                    </div>
                                    <p className="text-sm text-gray-300 leading-relaxed">{outcome.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Taglines */}
                        <div className="space-y-3 text-center pt-4 border-t border-white/10">
                            <p className="text-sm text-gray-200 italic">
                                A <span className="text-[#FAFF00] font-semibold not-italic">base layer</span> for future impact finance
                            </p>
                            <p className="text-lg font-bold text-[#58B12F]">
                                Fund what you can verify.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Dive into tokenomics Link */}
                <div className="mb-12 max-w-3xl mx-auto">
                    <Link
                        href="/tokenomics"
                        className="block rounded-xl border border-[#FAFF00]/40 bg-[#FAFF00]/10 px-6 py-4 text-center font-medium text-white hover:bg-[#FAFF00]/20 hover:border-[#FAFF00]/60 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                        <span>Dive into tokenomics</span>
                        <svg className="w-5 h-5 text-[#FAFF00] transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </main>
    );
}
