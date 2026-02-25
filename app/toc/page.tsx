import Link from "next/link"; // kept for back link
import {
  ArrowLeft,
  GitBranch,
  Zap,
  Camera,
  ScanSearch,
  Link2,
  Trophy,
  Waves,
  Users,
  ClipboardList,
  Wallet,
  Coins,
  Building2,
  Code2,
  CheckCircle2,
  Circle,
  ArrowRight,
  AlertTriangle,
  AlertCircle,
  CheckCheck,
  Bot,
  Eye,
  Lock,
  Unlock,
  BarChart3,
  FileText,
  Vote,
  Handshake,
  BookOpen,
  Clock,
  Target,
  ChevronRight,
} from "lucide-react";

/* ─── Tiny inline SVG checkmark for lists ─── */
function CheckMark({ green = true }: { green?: boolean }) {
  return (
    <span
      className={`inline-flex items-center justify-center w-4 h-4 rounded-full shrink-0 ${green ? "bg-[#58B12F]/15 text-[#58B12F]" : "bg-[#FAFF00]/10 text-[#FAFF00]"}`}
    >
      <CheckCircle2 className="w-3 h-3" />
    </span>
  );
}

/* ─── Section label ─── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-mono text-[#58B12F] tracking-widest mb-3 uppercase flex items-center gap-2">
      <span className="w-4 h-px bg-[#58B12F]/60" />
      {children}
    </p>
  );
}

/* ─── Section heading ─── */
function SectionHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`text-4xl md:text-5xl font-bebas text-white mb-4 leading-tight tracking-tight ${className}`}>
      {children}
    </h2>
  );
}

/* ─── Card wrapper ─── */
function Card({
  children,
  accent = "green",
  className = "",
}: {
  children: React.ReactNode;
  accent?: "green" | "yellow" | "none";
  className?: string;
}) {
  const accentClass =
    accent === "green"
      ? "hover:border-[#58B12F]/40 hover:shadow-[0_0_30px_rgba(88,177,47,0.07)]"
      : accent === "yellow"
        ? "hover:border-[#FAFF00]/30 hover:shadow-[0_0_30px_rgba(250,255,0,0.05)]"
        : "";
  return (
    <div
      className={`bg-neutral-900/80 border border-neutral-800 rounded-2xl transition-all duration-300 ${accentClass} ${className}`}
    >
      {children}
    </div>
  );
}

export default function TocPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#58B12F] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* ─── Back link ─── */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#58B12F] hover:text-[#58B12F]/70 font-semibold text-sm transition-colors group mb-12"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* ─── Hero ─── */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FAFF00]/20 bg-[#FAFF00]/5 text-[#FAFF00] text-xs font-mono mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FAFF00] animate-pulse" />
            THEORY OF CHANGE · v2.2
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-tight tracking-tighter mb-5 font-bebas">
            WHY CLEANUP{" "}
            <span className="text-[#58B12F]">STAYS INVISIBLE</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            DeCleanup Network converts grassroots environmental action into verified, funded, and onchain-permanent impact.
          </p>

          {/* Stats strip */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-10">
            {[
              { label: "Systemic Gaps", value: "3" },
              { label: "Pathways", value: "4" },
              { label: "SMART Outcomes", value: "15+" },
              { label: "Horizon", value: "48mo" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bebas text-[#58B12F] leading-none">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1 font-mono">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 01 Root Cause ─── */}
        <section id="problem" className="py-16 md:py-24 border-t border-white/5 scroll-mt-24">
          <SectionLabel>01 - Root Cause</SectionLabel>
          <SectionHeading>
            The problem isn&apos;t a lack of action
          </SectionHeading>
          <p className="text-gray-300 max-w-2xl mb-12 leading-relaxed">
            Volunteers organize. NGOs mobilize. Communities clean every single day. The problem is that this action remains
            invisible - producing no data that funders, partners, or institutions can trust, verify, or build upon.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              {
                Icon: Unlock,
                title: "Trust Gap",
                desc: "Funders and partners cannot verify outcomes. Decisions rely entirely on self-reported claims.",
                note: "Capital stays on the sidelines",
                accent: "green" as const,
                iconColor: "text-[#58B12F]",
                iconBg: "bg-[#58B12F]/10",
                titleColor: "text-[#58B12F]",
              },
              {
                Icon: GitBranch,
                title: "Coordination Gap",
                desc: "Local actions remain fragmented. Efforts duplicate. Best practices never travel beyond a single neighborhood.",
                note: "No network effect compounds",
                accent: "yellow" as const,
                iconColor: "text-[#FAFF00]",
                iconBg: "bg-[#FAFF00]/10",
                titleColor: "text-[#FAFF00]",
              },
              {
                Icon: Zap,
                title: "Incentive Gap",
                desc: "Volunteers and organizers receive no structured recognition. Participation stays episodic.",
                note: "Cleanup stays episodic",
                accent: "green" as const,
                iconColor: "text-[#58B12F]",
                iconBg: "bg-[#58B12F]/10",
                titleColor: "text-[#58B12F]",
              },
            ].map(({ Icon, title, desc, note, accent, iconColor, iconBg, titleColor }) => (
              <Card key={title} accent={accent} className="p-6">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${iconBg} mb-4`}>
                  <Icon className={`w-5 h-5 ${iconColor}`} />
                </div>
                <h3 className={`text-xl font-bebas tracking-wide ${titleColor} mb-2`}>{title}</h3>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">{desc}</p>
                <p className="text-xs font-mono text-gray-500 flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3" />
                  {note}
                </p>
              </Card>
            ))}
          </div>

          {/* Vision callout */}
          <div className="relative bg-neutral-900/80 border border-[#58B12F]/25 rounded-2xl p-6 md:p-8 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#58B12F] to-[#58B12F]/0 rounded-l-2xl" />
            <p className="text-gray-200 font-medium leading-relaxed pl-2">
              A world where every cleanup event produces{" "}
              <span className="text-[#58B12F] font-semibold">trusted, portable data</span> that connects grassroots action
              to institutional funding, policy decisions, and regenerative ecosystem coordination.
            </p>
            <p className="text-xs text-gray-500 mt-3 font-mono pl-2">DeCleanup Network - Long-Term Vision (5-10 Years)</p>
          </div>
        </section>

        {/* ─── 02 Core Logic ─── */}
        <section id="logic" className="py-16 md:py-24 border-t border-white/5 scroll-mt-24">
          <SectionLabel>02 - Core Logic</SectionLabel>
          <SectionHeading>From photo to funded impact</SectionHeading>
          <p className="text-gray-300 max-w-2xl mb-12 leading-relaxed">
            A single verified submission triggers a chain of value that compounds over time.
          </p>

          {/* Flow steps - connected with connector lines on desktop */}
          <div className="relative mb-12">
            {/* Connector line on desktop */}
            <div className="hidden lg:block absolute top-[38px] left-[10%] right-[10%] h-px bg-gradient-to-r from-[#58B12F]/0 via-[#58B12F]/30 to-[#58B12F]/0 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
              {[
                { num: "01", Icon: Camera, label: "Documentation", desc: "Geotagged before/after photos in under 60 seconds" },
                { num: "02", Icon: ScanSearch, label: "Verification", desc: "DMRV - AI + human review validates evidence" },
                { num: "03", Icon: Link2, label: "Onchain Record", desc: "Immutable anchoring on Base / Celo" },
                { num: "04", Icon: Trophy, label: "Reward", desc: "$DCU + Impact Product NFT per verified event" },
                { num: "05", Icon: Waves, label: "Capital Flow", desc: "Funders use verified dashboards - fund more cleanups" },
              ].map((step, i) => (
                <Card key={step.num} accent="green" className="p-5 flex flex-col items-start">
                  <p className="text-xs font-mono text-[#58B12F] mb-3">{step.num}</p>
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#58B12F]/10 mb-3">
                    <step.Icon className="w-4 h-4 text-[#58B12F]" />
                  </div>
                  <h3 className="text-lg font-bebas tracking-wide text-white mb-1">{step.label}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                  {i < 4 && (
                    <ChevronRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#58B12F]/40 z-20" />
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* 30-second test */}
          <Card className="p-6 md:p-8">
            <p className="text-xs font-mono text-[#58B12F] tracking-widest mb-3 flex items-center gap-2">
              <Target className="w-3.5 h-3.5" />
              30-Second Strategy Test
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              We discovered that{" "}
              <strong className="text-white">grassroots cleanup cannot attract institutional capital because it produces no verifiable data.</strong>{" "}
              So we are prioritizing{" "}
              <em className="text-[#58B12F] not-italic font-medium">verification infrastructure first</em> - a 60-second documentation process that
              creates immutable onchain records. We are testing this by running a hybrid AI + human validation pipeline and piloting with few communities around the world. If we can show{" "}
              <strong className="text-[#FAFF00]">80% DMRV compliance and 3+ funders using dashboard data by month 12</strong>, we will scale
              organizer activation across 10+ countries.
            </p>
          </Card>
        </section>

        {/* ─── 03 Inputs / Outputs ─── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <SectionLabel>03 - Resources</SectionLabel>
          <SectionHeading>Inputs - Outputs</SectionHeading>
          <p className="text-gray-300 max-w-2xl mb-12 leading-relaxed">
            What we put in and what the network produces. Outputs connect to measurable behavior change.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <div>
              <h3 className="text-lg font-bebas text-[#58B12F] mb-4 flex items-center gap-2">
                <ArrowRight className="w-4 h-4" />
                Inputs
              </h3>
              <div className="space-y-3">
                {[
                  { Icon: Users, text: "Human capital (volunteers, organizers, devs)" },
                  { Icon: Code2, text: "Technology (Base + Celo, AI/ML, DMRV)" },
                  { Icon: Coins, text: "Financial (Giveth, Gitcoin, Octant, $bDCU)" },
                  { Icon: Handshake, text: "Partnerships (disposal, municipal, ReFi)" },
                  { Icon: BookOpen, text: "Knowledge (DMRV, ESG, impact standards)" },
                ].map(({ Icon, text }) => (
                  <Card key={text} accent="green" className="p-4 flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#58B12F]/10 shrink-0">
                      <Icon className="w-4 h-4 text-[#58B12F]" />
                    </div>
                    <span className="text-sm text-gray-200">{text}</span>
                  </Card>
                ))}
              </div>
            </div>

            {/* Outputs */}
            <div>
              <h3 className="text-lg font-bebas text-[#FAFF00] mb-4 flex items-center gap-2">
                <ArrowRight className="w-4 h-4" />
                Outputs
              </h3>
              <div className="space-y-3">
                {[
                  { Icon: CheckCheck, text: "Verified cleanup records (DMRV threshold)" },
                  { Icon: FileText, text: "Waste datasets (ESG reporting)" },
                  { Icon: Link2, text: "Immutable onchain logs" },
                  { Icon: BarChart3, text: "Impact dashboards for funders" },
                  { Icon: Vote, text: "Governance proposals (onchain)" },
                ].map(({ Icon, text }) => (
                  <Card key={text} accent="yellow" className="p-4 flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#FAFF00]/10 shrink-0">
                      <Icon className="w-4 h-4 text-[#FAFF00]" />
                    </div>
                    <span className="text-sm text-gray-200">{text}</span>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 04 Pathways ─── */}
        <section id="pathways" className="py-16 md:py-24 border-t border-white/5 scroll-mt-24">
          <SectionLabel>04 - Causal Pathways</SectionLabel>
          <SectionHeading>Four pathways to systemic change</SectionHeading>
          <p className="text-gray-300 max-w-2xl mb-12 leading-relaxed">
            Each pathway is an independent theory of how one type of intervention produces lasting change.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                pathwayId: "P1",
                title: "Trust Creation",
                sub: "Simple docs - capital flows",
                accent: "green" as const,
                steps: [
                  "Documentation under 60s",
                  "Geotag + timestamp",
                  "Verifiable onchain records",
                  "Funders gain confidence",
                  "Capital flows to verified cleanups",
                ],
              },
              {
                pathwayId: "P2",
                title: "Coordination Scaling",
                sub: "Shared infrastructure - network effects",
                accent: "yellow" as const,
                steps: [
                  "Shared DMRV across regions",
                  "Common data standards",
                  "Organizers discover best practices",
                  "Knowledge transfer",
                  "Effectiveness improves network-wide",
                ],
              },
              {
                pathwayId: "P3",
                title: "Incentive Alignment",
                sub: "Recognition - sustained behavior",
                accent: "green" as const,
                steps: [
                  "$bDCU structured recognition",
                  "Tangible acknowledgment per action",
                  "Episodic - sustained participation",
                  "Documentation normalized",
                  "Data quality improves",
                ],
              },
              {
                pathwayId: "P4",
                title: "Verification Credibility",
                sub: "AI + human - institutional trust",
                accent: "yellow" as const,
                steps: [
                  "Open source waste detection model",
                  "AI flags for human review",
                  "Hybrid reduces fraud",
                  "Quality = network reputation",
                  "Partners trust for ESG reporting",
                ],
              },
            ].map((pw) => (
              <Card key={pw.pathwayId} accent={pw.accent} className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-mono font-bold ${pw.accent === "green" ? "bg-[#58B12F]/15 text-[#58B12F]" : "bg-[#FAFF00]/10 text-[#FAFF00]"}`}
                  >
                    {pw.pathwayId}
                  </span>
                  <div>
                    <h3 className="text-xl font-bebas text-white leading-tight">{pw.title}</h3>
                    <p className="text-xs text-gray-500">{pw.sub}</p>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {pw.steps.map((s) => (
                    <li key={s} className="flex items-center gap-2.5 text-sm text-gray-200">
                      <CheckMark green={pw.accent === "green"} />
                      {s}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* ─── 05 SMART Outcomes ─── */}
        <section id="outcomes" className="py-16 md:py-24 border-t border-white/5 scroll-mt-24">
          <SectionLabel>05 - SMART Outcomes</SectionLabel>
          <SectionHeading>Measurable targets across three horizons</SectionHeading>
          <p className="text-gray-300 max-w-2xl mb-12 leading-relaxed">
            Outputs are activity. Outcomes are behavior change. Every target passes the &quot;So What?&quot; test.
          </p>

          <div className="space-y-10">
            {[
              {
                phase: "Short-Term",
                range: "0-12 Months",
                color: "text-[#58B12F]",
                borderColor: "border-[#58B12F]/30",
                outcomes: [
                  "300 verified submissions (DMRV)",
                  "25 organizers in 10+ countries",
                  "30% repeat volunteer rate",
                  "80% DMRV compliance",
                  "85% AI waste detection accuracy",
                  "3+ funders using dashboards",
                ],
              },
              {
                phase: "Medium-Term",
                range: "12-24 Months",
                color: "text-[#FAFF00]",
                borderColor: "border-[#FAFF00]/20",
                outcomes: [
                  "3+ funding decisions citing DeCleanup",
                  "75k kg verified waste documented",
                  "100+ stakers in verification",
                  "3 multi-country campaigns",
                  "10+ governance proposals",
                  "3+ ReFi integrations",
                ],
              },
              {
                phase: "Long-Term",
                range: "24-48 Months",
                color: "text-white",
                borderColor: "border-white/10",
                outcomes: [
                  "$100k+ capital to verified cleanups",
                  "30% partners adopting DMRV",
                  "70% community-initiated campaigns",
                  "10+ ESG reports referencing data",
                  "80% decisions by community vote",
                  "Self-sustaining feedback loop",
                ],
              },
            ].map((block) => (
              <div key={block.phase}>
                <div className="flex items-center gap-3 mb-5">
                  <Clock className={`w-4 h-4 ${block.color}`} />
                  <p className="text-xs font-mono text-gray-400">
                    <span className={`${block.color} font-semibold`}>{block.phase}</span> · {block.range}
                  </p>
                </div>
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-l-2 ${block.borderColor} pl-5`}>
                  {block.outcomes.map((o) => (
                    <Card key={o} accent="green" className="p-4">
                      <p className="text-sm text-gray-200 leading-snug">{o}</p>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 06 Decentralization Roadmap ─── */}
        <section id="verification" className="py-16 md:py-24 border-t border-white/5 scroll-mt-24">
          <SectionLabel>06 - Decentralization Roadmap</SectionLabel>
          <SectionHeading>Verification: trusted to trustless</SectionHeading>
          <p className="text-gray-300 max-w-2xl mb-12 leading-relaxed">
            Progressive decentralization. Quality standards first, then distributed responsibility.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                badge: "Active Now",
                badgeStyle: "bg-[#58B12F]/15 text-[#58B12F]",
                Icon: Eye,
                title: "Phase 1",
                subtitle: "Human Review",
                desc: "Core team manually reviews every submission.",
                borderActive: true,
                items: [
                  "Manual photo review",
                  "Geotag validation",
                  "Timestamp checking",
                  "Before / after comparison",
                  "Feedback to submitters",
                ],
              },
              {
                badge: "In Development",
                badgeStyle: "bg-amber-500/15 text-amber-400",
                Icon: Bot,
                title: "Phase 2",
                subtitle: "AI-Assisted",
                desc: "AI-assisted validation; human confirms.",
                borderActive: false,
                items: [
                  "Open source trash detection",
                  "Duplicate detection",
                  "Geo inconsistency flagging",
                  "Fraud probability scoring",
                  "Human confirms AI flags",
                ],
              },
              {
                badge: "Planned",
                badgeStyle: "bg-neutral-700/50 text-gray-400",
                Icon: Lock,
                title: "Phase 3",
                subtitle: "Trustless",
                desc: "Decentralized: token holders become verifiers.",
                borderActive: false,
                items: [
                  "Community staking for verification",
                  "Stake-weighted votes",
                  "Verification rewards",
                  "Slashing for false approvals",
                  "Fully onchain governance",
                ],
              },
            ].map((ph) => (
              <Card
                key={ph.title}
                accent="green"
                className={`p-6 ${ph.borderActive ? "border-[#58B12F]/35 shadow-[0_0_30px_rgba(88,177,47,0.07)]" : ""}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-mono px-2.5 py-1 rounded-full ${ph.badgeStyle}`}>{ph.badge}</span>
                  <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center">
                    <ph.Icon className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bebas text-white mb-0.5">{ph.title}</h3>
                <p className="text-xs font-mono text-[#58B12F] mb-2">{ph.subtitle}</p>
                <p className="text-sm text-gray-400 mb-5 leading-relaxed">{ph.desc}</p>
                <ul className="space-y-2.5">
                  {ph.items.map((it) => (
                    <li key={it} className="flex items-center gap-2.5 text-sm text-gray-200">
                      <CheckMark />
                      {it}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* ─── 07 Stakeholders ─── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <SectionLabel>07 - Stakeholders</SectionLabel>
          <SectionHeading>Who makes the network work</SectionHeading>
          <p className="text-gray-300 max-w-2xl mb-12 leading-relaxed">
            Six participant types. The network functions when all six are active.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { Icon: Users, name: "Volunteers", label: "Clean. Document. Earn.", accent: "green" as const },
              { Icon: ClipboardList, name: "Organizers", label: "Launch campaigns", accent: "green" as const },
              { Icon: Wallet, name: "Funders", label: "Anyone can fund impact", accent: "yellow" as const },
              { Icon: Coins, name: "$DCU Holders", label: "Trade. Govern. Stake. Verify.", accent: "yellow" as const },
              { Icon: Building2, name: "Partners", label: "Municipalities & waste", accent: "green" as const },
              { Icon: Code2, name: "Developers", label: "Build & maintain", accent: "green" as const },
            ].map(({ Icon, name, label, accent }) => (
              <Card key={name} accent={accent} className="p-5 text-center flex flex-col items-center gap-3">
                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${accent === "green" ? "bg-[#58B12F]/10" : "bg-[#FAFF00]/10"}`}>
                  <Icon className={`w-5 h-5 ${accent === "green" ? "text-[#58B12F]" : "text-[#FAFF00]"}`} />
                </div>
                <div>
                  <h3 className="text-lg font-bebas text-white">{name}</h3>
                  <p className="text-xs text-gray-500">{label}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* ─── 08 Assumptions ─── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <SectionLabel>08 - Assumptions</SectionLabel>
          <SectionHeading>What must be true and how we test it</SectionHeading>
          <p className="text-gray-300 max-w-2xl mb-12 leading-relaxed">
            Every pathway rests on assumptions. We state them, test early, and pivot if they fail.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-neutral-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-neutral-900 border-b border-neutral-800">
                  <th className="text-left py-4 px-6 font-bebas text-white tracking-wide">Assumption</th>
                  <th className="text-left py-4 px-6 font-bebas text-white tracking-wide whitespace-nowrap">Timeline</th>
                  <th className="text-left py-4 px-6 font-bebas text-white tracking-wide">Success Criteria</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {[
                  ["Volunteers document if process <60s", "Month 1-3", "70%+ completion rate"],
                  ["Funders value verified over self-reported", "Month 3-6", "1+ funding decision cites data"],
                  ["Onchain anchoring adds trust", "Month 3-6", "<10% user confusion"],
                  ["Community governance attracts participants", "Month 12-18", "5+ proposals, 10%+ participation"],
                  ["AI verification improves accuracy", "Month 3-6", "85%+ trash detection accuracy"],
                  ["Fair-launch prevents extractive behavior", "Month 1-6", "No holder >5%; <30% sell pressure"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-neutral-800/50 hover:bg-neutral-900/60 transition-colors">
                    <td className="py-4 px-6">{row[0]}</td>
                    <td className="py-4 px-6 font-mono text-[#58B12F] whitespace-nowrap">{row[1]}</td>
                    <td className="py-4 px-6 text-gray-400">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── 09 Risk Register ─── */}
        <section id="risks" className="py-16 md:py-24 border-t border-white/5 scroll-mt-24">
          <SectionLabel>09 - Risk Register</SectionLabel>
          <SectionHeading>Known risks - how we respond</SectionHeading>
          <p className="text-gray-300 max-w-2xl mb-12 leading-relaxed">
            Good strategy names risks, assigns probability and impact, and prepares mitigations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { level: "High", name: "Low Adoption from Friction", mit: "UX target <60s; feedback on every rejection." },
              { level: "High", name: "Funder Indifference to Verified Data", mit: "Validate with grant partners; reframe to coordination if needed." },
              { level: "High", name: "Regulatory Uncertainty", mit: "Utility-only framing; legal counsel as we scale." },
              { level: "Medium", name: "Token Speculation Overrides Utility", mit: "Fair-launch; staking for verification." },
              { level: "Medium", name: "AI Verification Errors", mit: "Hybrid: AI flags, humans confirm; publish metrics." },
              { level: "Medium", name: "Governance Apathy", mit: "Progressive decentralization; expand as participation proves sustained." },
              { level: "Medium", name: "Local Disposal Gaps", mit: "Partner with municipalities before expanding region." },
              { level: "Medium", name: "Data Quality Inconsistency", mit: "Strict DMRV; reject with actionable feedback." },
              { level: "Managed", name: "Community Trust Erosion", mit: "Transparent governance; fair-launch; no insider advantages." },
            ].map((r) => {
              const levelMap = {
                High: {
                  Icon: AlertTriangle,
                  badge: "bg-red-500/15 text-red-400",
                  iconColor: "text-red-400",
                  iconBg: "bg-red-500/10",
                },
                Medium: {
                  Icon: AlertCircle,
                  badge: "bg-amber-500/15 text-amber-400",
                  iconColor: "text-amber-400",
                  iconBg: "bg-amber-500/10",
                },
                Managed: {
                  Icon: CheckCircle2,
                  badge: "bg-[#58B12F]/15 text-[#58B12F]",
                  iconColor: "text-[#58B12F]",
                  iconBg: "bg-[#58B12F]/10",
                },
              }[r.level] ?? {
                Icon: Circle,
                badge: "bg-neutral-700/50 text-gray-400",
                iconColor: "text-gray-400",
                iconBg: "bg-neutral-700/20",
              };

              return (
                <Card key={r.name} accent="none" className="p-5 hover:border-neutral-700/70">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className={`text-xs font-mono px-2.5 py-1 rounded-full ${levelMap.badge}`}>
                      {r.level} Impact
                    </span>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${levelMap.iconBg}`}>
                      <levelMap.Icon className={`w-4 h-4 ${levelMap.iconColor}`} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bebas text-white mb-1 leading-tight">{r.name}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{r.mit}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bebas text-white mb-4 leading-tight">
              Ready to be part of the proof?
            </h2>
            <p className="text-gray-300 mb-10 leading-relaxed">
              Every cleanup you verify is a data point that makes the next funder more confident.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://dapp.decleanup.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#58B12F] hover:bg-[#58B12F]/90 text-black font-semibold transition-all hover:shadow-[0_0_30px_rgba(88,177,47,0.35)] hover:-translate-y-0.5 duration-300"
              >
                Start your first cleanup
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/DecentralizedCleanup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-neutral-600 hover:border-[#58B12F]/50 text-gray-200 font-semibold transition-all hover:-translate-y-0.5 duration-300"
              >
                Join community
              </a>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
}
