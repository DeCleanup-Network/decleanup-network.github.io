"use client";
import React from "react";
import {
    AlertTriangle,
    Users,
    Zap,
    FileCheck,
    Globe,
    ArrowRight
} from "lucide-react";

export default function TheoryOfChange() {
    return (
        <div className="w-full relative py-8">
            {/* Background Grid */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex items-center gap-3 mb-12">
                    <span className="text-xs font-mono text-gray-300 border border-gray-800 px-2 py-1 rounded">APPENDIX A</span>
                    <h2 className="text-3xl text-white font-bebas tracking-wide">THEORY OF <span className="text-[#58B12F]">CHANGE</span></h2>
                </div>

                {/* Flow Container */}
                <div className="flex flex-col lg:flex-row items-stretch justify-between gap-0 relative">

                    {/* 1. The Problem (Input State) */}
                    <div className="w-full lg:w-64 flex flex-col items-center justify-center p-6 border border-rose-500/20 bg-rose-900/5 rounded-2xl relative group hover:border-rose-500/40 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center mb-4 text-rose-500 border border-rose-500/20 group-hover:scale-110 transition-transform">
                            <AlertTriangle className="w-6 h-6" />
                        </div>
                        <h3 className="text-rose-500 text-xl mb-1 tracking-tight font-bebas">PROBLEM</h3>
                        <p className="text-center text-rose-200/60 text-sm font-medium">Results are Invisible</p>

                        {/* Additional Details on Hover (Desktop) or Static (Mobile) */}
                        <div className="mt-4 space-y-2 text-center opacity-0 group-hover:opacity-100 transition-opacity absolute inset-0 flex flex-col justify-center items-center bg-[#0A0A0A]/95 backdrop-blur-sm rounded-2xl border border-rose-500/20 z-20 pointer-events-none group-hover:pointer-events-auto">
                            <div className="text-[10px] text-rose-500 uppercase tracking-widest font-bold mb-2">Pain Points</div>
                            <div className="text-xs text-gray-300">Inconsistent Data</div>
                            <div className="text-xs text-gray-300">Hard to Verify</div>
                            <div className="text-xs text-gray-300">Undercapitalized</div>
                        </div>
                        {/* Mobile Fallback for Details - visible if preferred, but hover is fine for this robust component */}
                    </div>

                    {/* Connector 1 */}
                    <div className="h-16 w-0.5 lg:h-0.5 lg:w-24 bg-neutral-800 mx-auto lg:my-auto relative self-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>

                    {/* 2. The Engine (The Solution Box) */}
                    <div className="flex-1 border border-neutral-700 bg-[#0F0F0F] rounded-2xl p-6 lg:p-8 flex flex-col gap-6 relative shadow-2xl">
                        <div className="absolute -top-3 left-6 bg-[#0F0F0F] px-2 text-xs text-gray-300 font-mono border border-neutral-800 rounded">THE ENGINE</div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center h-full">
                            {/* Inputs */}
                            <div className="text-center">
                                <div className="text-xs text-blue-400 uppercase tracking-widest mb-3 font-bold">INPUTS</div>
                                <div className="bg-blue-900/10 border border-blue-500/20 p-4 rounded-xl flex flex-col items-center gap-3 h-full justify-center hover:border-blue-500/40 transition-colors">
                                    <Users className="text-blue-400 w-8 h-8" />
                                    <span className="text-sm text-gray-300">People & Funds</span>
                                </div>
                            </div>

                            {/* Activities (Center) */}
                            <div className="text-center relative">
                                {/* Flow Arrows (Desktop) */}
                                <div className="hidden md:block absolute top-1/2 -left-3 -translate-y-1/2">
                                    <ArrowRight className="text-gray-700 w-5 h-5" />
                                </div>
                                <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2">
                                    <ArrowRight className="text-gray-700 w-5 h-5" />
                                </div>

                                <div className="text-xs text-[#FAFF00] uppercase tracking-widest mb-3 font-bold">ACTIVITIES</div>
                                <div className="bg-[#FAFF00]/5 border border-[#FAFF00]/30 p-4 rounded-xl flex flex-col items-center gap-3 shadow-[0_0_15px_rgba(250,255,0,0.05)] hover:shadow-[0_0_20px_rgba(250,255,0,0.1)] transition-shadow">
                                    <Zap className="text-[#FAFF00] w-8 h-8 animate-pulse" />
                                    <span className="text-sm text-gray-200 font-medium">Events & DMRV</span>
                                </div>
                            </div>

                            {/* Outputs */}
                            <div className="text-center">
                                <div className="text-xs text-[#58B12F] uppercase tracking-widest mb-3 font-bold">OUTPUTS</div>
                                <div className="bg-[#58B12F]/10 border border-[#58B12F]/20 p-4 rounded-xl flex flex-col items-center gap-3 hover:border-[#58B12F]/40 transition-colors">
                                    <FileCheck className="text-[#58B12F] w-8 h-8" />
                                    <span className="text-sm text-gray-300">Verified Data</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Connector 2 */}
                    <div className="h-16 w-0.5 lg:h-0.5 lg:w-24 bg-neutral-800 mx-auto lg:my-auto relative self-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>

                    {/* 3. Outcomes & Impact */}
                    <div className="flex flex-col gap-4 w-full lg:w-64">
                        {/* Timeline Outcomes */}
                        <div className="border border-neutral-800 bg-neutral-900/50 rounded-xl p-4 space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                                <div className="text-[10px] text-gray-200 font-mono uppercase">SHORT: Documented</div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                                <div className="text-[10px] text-gray-300 font-mono uppercase">MID: Funded</div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#58B12F]"></div>
                                <div className="text-[10px] text-white font-mono uppercase">LONG: Infrastructure</div>
                            </div>
                        </div>

                        {/* Final Impact Card */}
                        <div className="flex-1 bg-gradient-to-br from-[#58B12F]/10 to-emerald-900/20 border border-[#58B12F]/30 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(88,177,47,0.1)] hover:shadow-[0_0_40px_rgba(88,177,47,0.2)] transition-shadow">
                            <Globe className="text-[#58B12F] w-10 h-10 mb-2" />
                            <h3 className="text-white text-2xl tracking-tight font-bebas">IMPACT</h3>
                            <p className="text-[#58B12F] text-[10px] font-bold uppercase tracking-wider">Credible Action</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
