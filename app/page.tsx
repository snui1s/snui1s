import NextImage from "next/image";
import {
  SiReact,
  SiTauri,
  SiRust,
  SiFastapi,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiPandas,
  SiJavascript,
  SiCplusplus,
  SiPhp,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiJupyter,
  SiGit,
  SiDocker,
  SiNodedotjs,
  SiExpress,
  SiSqlite,
  SiPytorch,
  SiLangchain,
  SiGithub,
  SiPostgresql,
  SiHuggingface,
  SiVercel,
  SiRender,
  SiTypescript,
  SiAstro,
} from "react-icons/si";
import { TbTerminal2 } from "react-icons/tb";
import {
  HiSparkles,
  HiAcademicCap,
  HiEnvelope,
  HiPhone,
  HiMapPin,
} from "react-icons/hi2";
import { FaJava, FaDatabase } from "react-icons/fa6";
import WavyDivider from "./components/WavyDivider";



export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand selection:text-background relative overflow-x-hidden">
      {/* Background Detail */}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 py-4 md:py-6 bg-background border-b border-white/5 shadow-lg lg:px-24">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[10px] md:text-sm font-medium tracking-wide text-text-secondary uppercase cursor-pointer">
          {["Home", "About Me", "Experience", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-brand transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
              </a>
            ),
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-4 md:px-8 lg:px-24">
        {/* Hero Section */}
        <section
          id="home"
          className="flex min-h-screen flex-col items-center justify-center"
        >
          <div className="max-w-4xl w-full flex flex-col items-center text-center">
            <div className="relative w-32 h-32 md:w-48 md:h-48 mb-8 group">
              <div className="absolute -inset-1 bg-brand rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative w-full h-full rounded-full border-4 border-brand overflow-hidden">
                <NextImage
                  src="/profilepic2.jpg"
                  alt="Pawee Profile"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>
            </div>

            <p className="mb-4 text-xs md:text-sm font-medium tracking-[0.2em] text-text-secondary uppercase">
              Tryna bring LLMs into the web.
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-none mb-6">
              I&apos;m <span className="text-brand">Pawee</span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-text-secondary leading-relaxed font-light">
              A{" "}
              <span className="text-foreground font-medium">
                Junior AI Engineer
              </span>{" "}
              based in Bangkok, Thailand. <br />I bridge the gap between{" "}
              <span className="text-brand font-medium">Data Science</span> and{" "}
              <span className="text-brand font-medium">
                Full-Stack Development
              </span>
              , turning raw models into interactive web applications.
            </p>

            <div className="mt-12">
              <a
                href="#projects"
                className="px-8 py-3 bg-brand text-background font-bold rounded-sm hover:opacity-90 transition-all active:scale-95 duration-200 inline-block"
              >
                View My Work
              </a>
            </div>
          </div>
        </section>

        <WavyDivider variant={1} />

        {/* Experience Section */}
        <section
          id="experience"
          className="min-h-screen py-32 flex flex-col items-center justify-center scroll-mt-2"
        >
          <div className="max-w-4xl w-full">
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-16 underline decoration-brand decoration-4 underline-offset-8">
              Experience
            </h2>

            <div className="space-y-12">
              <div className="relative pl-8 border-l-2 border-brand/20 hover:border-brand transition-colors group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-brand group-hover:bg-brand transition-colors"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight">
                    HR AI Trainee (Internship)
                  </h3>
                  <span className="text-sm font-mono text-brand font-bold bg-brand/10 px-3 py-1 rounded-full w-fit">
                    Nov 2025 - Feb 2026
                  </span>
                </div>
                <p className="text-lg text-foreground/80 font-bold mb-4">
                  Charoen Pokphand Foods Public Company Limited (CPF)
                </p>
                <ul className="grid gap-4 text-text-secondary leading-relaxed font-light">
                  <li className="flex gap-3">
                    <span className="text-brand mt-0.5">•</span>
                    <span>
                      Solving complex HR challenges using Programming and AI
                      integration like Excel automation, data pipeline and RAG.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand mt-0.5">•</span>
                    <span>
                      Developing high-performance data pipelines and data
                      preparation for RAG (Retrieval-Augmented Generation)
                      systems.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand mt-0.5">•</span>
                    <span>
                      Implemented automated candidate scraping from JobsDB to
                      streamline the recruitment pipeline.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand mt-0.5">•</span>
                    <span>
                      Optimized application performance, reducing startup time
                      from over 60s to 3s (a 95% improvement).
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-2 border-brand/20 hover:border-brand transition-colors group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-brand group-hover:bg-brand transition-colors"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight">
                    Seasonal Event Staff
                  </h3>
                  <span className="text-sm font-mono text-brand font-bold bg-brand/10 px-3 py-1 rounded-full w-fit">
                    2023 - 2025
                  </span>
                </div>
                <p className="text-lg text-foreground/80 font-bold mb-4">
                  Thai Beverage Public Company Limited
                </p>
                <ul className="grid gap-4 text-text-secondary leading-relaxed font-light">
                  <li className="flex gap-3">
                    <span className="text-brand mt-0.5">•</span>
                    <span>
                      Assisted in managing festival activities and handling a
                      high volume of tourists in a fast-paced environment.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand mt-0.5">•</span>
                    <span>
                      Regularly communicated with international tourists to
                      provide information and assistance.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand mt-0.5">•</span>
                    <span>
                      Assisted in managing daily store operations and maintained
                      daily sales records.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand mt-0.5">•</span>
                    <span>
                      Gained practical experience in teamwork, problem-solving,
                      and time management during major cultural events.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-2 border-brand/20 hover:border-brand transition-colors group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-brand group-hover:bg-brand transition-colors"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight">
                    Part-Time CAD
                  </h3>
                  <span className="text-sm font-mono text-brand font-bold bg-brand/10 px-3 py-1 rounded-full w-fit">
                    2021
                  </span>
                </div>
                <p className="text-lg text-foreground/80 font-bold mb-4">
                  Triple T Broad Band Public Company Limited
                </p>
                <ul className="grid gap-4 text-text-secondary leading-relaxed font-light">
                  <li className="flex gap-3">
                    <span className="text-brand mt-0.5">•</span>
                    <span>
                      Studied network/internet infrastructure systems, basic
                      AutoCAD, and organizational overview.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand mt-0.5">•</span>
                    <span>
                      Gained hands-on experience in 2D drawing using AutoCAD for
                      a fiber optic cable installation plan.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <WavyDivider variant={2} />

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen py-32 flex flex-col items-center justify-center scroll-mt-2"
        >
          <div className="max-w-4xl w-full">
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-16 underline decoration-brand decoration-4 underline-offset-8">
              Projects
            </h2>

            <div className="grid gap-12">
              <div className="group relative block">
                <div className="absolute -inset-4 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative">
                  <span className="text-xs font-bold tracking-[0.2em] text-brand uppercase mb-2 block">
                    Featured Project
                  </span>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl md:text-5xl font-black tracking-tight group-hover:text-brand transition-colors">
                      <a
                        href="https://github.com/snui1s/Raku"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline decoration-brand decoration-2 underline-offset-4"
                      >
                        楽 Raku
                      </a>
                    </h3>
                    <div className="h-0.5 grow mx-8 bg-foreground/10 group-hover:bg-brand/30 transition-colors hidden md:block"></div>
                    <span className="text-sm font-mono text-text-secondary">
                      01
                    </span>
                  </div>
                  <p className="text-lg md:text-xl text-text-secondary font-light max-w-3xl leading-relaxed">
                    A blazing-fast, distraction-free note-taking app. <br />
                    <span className="text-foreground/80 italic font-medium">
                      Emphasizes speed and simplicity with robust auto-save
                      capabilities and native performance.
                    </span>
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-[10px] font-bold tracking-[0.15em] text-text-secondary/40 uppercase">
                    {[
                      "Native Application Development",
                      "Cross-Platform Desktop App",
                      "High-Performance Computing",
                      "UI/UX Development",
                      "Local Data Persistence",
                    ].map((skill, i, arr) => (
                      <div key={skill} className="flex items-center gap-3">
                        <span>{skill}</span>
                        {i < arr.length - 1 && (
                          <div className="w-1 h-1 rounded-full bg-brand/20 shrink-0 hidden md:block" />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 text-2xl text-text-secondary/60">
                    <div className="group/icon relative flex items-center gap-2 md:block">
                      <SiReact className="hover:text-[#61DAFB] transition-colors" />
                      <span className="text-[10px] font-bold tracking-widest uppercase md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity bg-background md:px-2 md:py-1 md:rounded whitespace-nowrap">
                        React
                      </span>
                    </div>
                    <div className="group/icon relative flex items-center gap-2 md:block">
                      <SiTauri className="hover:text-[#24C8DB] transition-colors" />
                      <span className="text-[10px] font-bold tracking-widest uppercase md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity bg-background md:px-2 md:py-1 md:rounded whitespace-nowrap">
                        Tauri
                      </span>
                    </div>
                    <div className="group/icon relative flex items-center gap-2 md:block">
                      <SiTailwindcss className="hover:text-[#06B6D4] transition-colors" />
                      <span className="text-[10px] font-bold tracking-widest uppercase md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity bg-background md:px-2 md:py-1 md:rounded whitespace-nowrap">
                        Tailwind
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative block">
                <div className="absolute -inset-4 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold tracking-[0.2em] text-brand uppercase">
                      Intern Project • AI & Psychology
                    </span>
                    <object>
                      <a
                        href="https://kemii-snails.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-bold tracking-[0.2em] text-foreground/50 hover:text-brand transition-colors flex items-center gap-1.5 group/demo"
                      >
                        <HiSparkles className="text-brand" />
                        LIVE DEMO
                        <span className="w-4 h-[1px] bg-brand/30 group-hover/demo:w-6 transition-all"></span>
                      </a>
                    </object>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl md:text-5xl font-black tracking-tight group-hover:text-brand transition-colors">
                      <a
                        href="https://github.com/snui1s/Kemii"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline decoration-brand decoration-2 underline-offset-4"
                      >
                        Kemii
                      </a>
                    </h3>
                    <div className="h-0.5 grow mx-8 bg-foreground/10 group-hover:bg-brand/30 transition-colors hidden md:block"></div>
                    <span className="text-sm font-mono text-text-secondary">
                      02
                    </span>
                  </div>
                  <p className="text-lg md:text-xl text-text-secondary font-light max-w-3xl leading-relaxed">
                    A comprehensive team optimization system leveraging
                    psychometric data and V&apos;s proprietary Kemii Golden
                    Formula. <br />
                    <span className="text-foreground/80 italic font-medium">
                      Ensures balanced teams with high skill coverage and
                      harmony, featuring a Generative AI Guild Strategist for
                      coaching.
                    </span>
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-[10px] font-bold tracking-[0.15em] text-text-secondary/40 uppercase">
                    {[
                      "Proprietary Optimization & Matching Algorithms",
                      "Statistical Analysis & Modeling",
                      "Generative AI Strategic Guidance",
                      "Full-Stack System Design",
                      "API & System Security (JWT/RBAC)",
                      "Database Design & Management",
                    ].map((skill, i, arr) => (
                      <div key={skill} className="flex items-center gap-3">
                        <span>{skill}</span>
                        {i < arr.length - 1 && (
                          <div className="w-1 h-1 rounded-full bg-brand/20 shrink-0 hidden md:block" />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 text-2xl text-text-secondary/60">
                    <div className="group/icon relative flex items-center gap-2 md:block">
                      <SiFastapi className="hover:text-[#05998B] transition-colors" />
                      <span className="text-[10px] font-bold tracking-widest uppercase md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity bg-background md:px-2 md:py-1 md:rounded whitespace-nowrap">
                        FastAPI
                      </span>
                    </div>
                    <div className="group/icon relative flex items-center gap-2 md:block">
                      <SiNextdotjs className="hover:text-foreground transition-colors" />
                      <span className="text-[10px] font-bold tracking-widest uppercase md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity bg-background md:px-2 md:py-1 md:rounded whitespace-nowrap">
                        Next.js
                      </span>
                    </div>
                    <div className="group/icon relative flex items-center gap-2 md:block">
                      <HiSparkles className="hover:text-brand transition-colors" />
                      <span className="text-[10px] font-bold tracking-widest uppercase md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity bg-background md:px-2 md:py-1 md:rounded whitespace-nowrap">
                        AI
                      </span>
                    </div>
                    <div className="group/icon relative flex items-center gap-2 md:block">
                      <SiTailwindcss className="hover:text-[#06B6D4] transition-colors" />
                      <span className="text-[10px] font-bold tracking-widest uppercase md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity bg-background md:px-2 md:py-1 md:rounded whitespace-nowrap">
                        Tailwind
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group relative block">
                <div className="absolute -inset-4 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold tracking-[0.2em] text-brand uppercase">
                      AI Agent
                    </span>
                    <object>
                      <a
                        href="https://skrut.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-bold tracking-[0.2em] text-foreground/50 hover:text-brand transition-colors flex items-center gap-1.5 group/demo"
                      >
                        <HiSparkles className="text-brand" />
                        LIVE DEMO
                        <span className="w-4 h-[1px] bg-brand/30 group-hover/demo:w-6 transition-all"></span>
                      </a>
                    </object>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl md:text-5xl font-black tracking-tight group-hover:text-brand transition-colors">
                      <a
                        href="https://github.com/snui1s/skrut_ai_web"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline decoration-brand decoration-2 underline-offset-4"
                      >
                        Skrut AI
                      </a>
                    </h3>
                    <div className="h-0.5 grow mx-8 bg-foreground/10 group-hover:bg-brand/30 transition-colors hidden md:block"></div>
                    <span className="text-sm font-mono text-text-secondary">
                      03
                    </span>
                  </div>
                  <p className="text-lg md:text-xl text-text-secondary font-light max-w-3xl leading-relaxed">
                    The Intelligent Resume Evaluation Agent for Modern HR.{" "}
                    <br />
                    <span className="text-foreground/80 italic font-medium">
                      High-performance, privacy-first tool for evaluating
                      resumes beyond keyword matching.
                    </span>
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-[10px] font-bold tracking-[0.15em] text-text-secondary/40 uppercase">
                    {[
                      "Multi-Agent Orchestration (LangGraph)",
                      "Hybrid OCR & Document Processing",
                      "Anti-Hallucination Guardrails",
                      "Semantic Skill Family Mapping",
                      "Stateless Privacy-First Architecture",
                      "Recruitment Workflow Automation",
                    ].map((skill, i, arr) => (
                      <div key={skill} className="flex items-center gap-3">
                        <span>{skill}</span>
                        {i < arr.length - 1 && (
                          <div className="w-1 h-1 rounded-full bg-brand/20 shrink-0 hidden md:block" />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 text-2xl text-text-secondary/60">
                    <div className="group/icon relative flex items-center gap-2 md:block">
                      <SiFastapi className="hover:text-[#05998B] transition-colors" />
                      <span className="text-[10px] font-bold tracking-widest uppercase md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity bg-background md:px-2 md:py-1 md:rounded whitespace-nowrap">
                        FastAPI
                      </span>
                    </div>
                    <div className="group/icon relative flex items-center gap-2 md:block">
                      <SiNextdotjs className="hover:text-foreground transition-colors" />
                      <span className="text-[10px] font-bold tracking-widest uppercase md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity bg-background md:px-2 md:py-1 md:rounded whitespace-nowrap">
                        Next.js
                      </span>
                    </div>
                    <div className="group/icon relative flex items-center gap-2 md:block">
                      <SiLangchain className="hover:text-brand transition-colors" />
                      <span className="text-[10px] font-bold tracking-widest uppercase md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity bg-background md:px-2 md:py-1 md:rounded whitespace-nowrap">
                        LangGraph
                      </span>
                    </div>
                    <div className="group/icon relative flex items-center gap-2 md:block">
                      <SiTailwindcss className="hover:text-[#06B6D4] transition-colors" />
                      <span className="text-[10px] font-bold tracking-widest uppercase md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity bg-background md:px-2 md:py-1 md:rounded whitespace-nowrap">
                        Tailwind
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative block">
                <div className="absolute -inset-4 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold tracking-[0.2em] text-brand uppercase">
                      Full-Stack Blog
                    </span>
                    <object>
                      <a
                        href="https://shiori-blog.space"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-bold tracking-[0.2em] text-foreground/50 hover:text-brand transition-colors flex items-center gap-1.5 group/demo"
                      >
                        <HiSparkles className="text-brand" />
                        LIVE DEMO
                        <span className="w-4 h-[1px] bg-brand/30 group-hover/demo:w-6 transition-all"></span>
                      </a>
                    </object>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl md:text-5xl font-black tracking-tight group-hover:text-brand transition-colors">
                      <a
                        href="https://github.com/snui1s/Shiori-Blog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline decoration-brand decoration-2 underline-offset-4"
                      >
                        栞 Shiori
                      </a>
                    </h3>
                    <div className="h-0.5 grow mx-8 bg-foreground/10 group-hover:bg-brand/30 transition-colors hidden md:block"></div>
                    <span className="text-sm font-mono text-text-secondary">
                      04
                    </span>
                  </div>
                  <p className="text-lg md:text-xl text-text-secondary font-light max-w-3xl leading-relaxed">
                    Shiori means bookmark — a high-performance blog
                    template with a minimalist aesthetic. <br />
                    <span className="text-foreground/80 italic font-medium">
                      Features threaded comments, Google OAuth, a rich Tiptap
                      editor, Cloudinary image CDN, Admin Dashboard, and a Turso database.
                    </span>
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-[10px] font-bold tracking-[0.15em] text-text-secondary/40 uppercase">
                    {[
                      "SSR & Hybrid Rendering",
                      "Rich Text Editing (Tiptap)",
                      "Google OAuth & Auth System",
                      "Threaded Comment System",
                      "Image CDN (Cloudinary)",
                      "SEO & Structured Data",
                    ].map((skill, i, arr) => (
                      <div key={skill} className="flex items-center gap-3">
                        <span>{skill}</span>
                        {i < arr.length - 1 && (
                          <div className="w-1 h-1 rounded-full bg-brand/20 shrink-0 hidden md:block" />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 text-2xl text-text-secondary/60">
                    <div className="group/icon relative flex items-center gap-2 md:block">
                      <SiAstro className="hover:text-[#FF5D01] transition-colors" />
                      <span className="text-[10px] font-bold tracking-widest uppercase md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity bg-background md:px-2 md:py-1 md:rounded whitespace-nowrap">
                        Astro
                      </span>
                    </div>
                    <div className="group/icon relative flex items-center gap-2 md:block">
                      <SiReact className="hover:text-[#61DAFB] transition-colors" />
                      <span className="text-[10px] font-bold tracking-widest uppercase md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity bg-background md:px-2 md:py-1 md:rounded whitespace-nowrap">
                        React
                      </span>
                    </div>
                    <div className="group/icon relative flex items-center gap-2 md:block">
                      <SiTypescript className="hover:text-[#3178C6] transition-colors" />
                      <span className="text-[10px] font-bold tracking-widest uppercase md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity bg-background md:px-2 md:py-1 md:rounded whitespace-nowrap">
                        TypeScript
                      </span>
                    </div>
                    <div className="group/icon relative flex items-center gap-2 md:block">
                      <SiSqlite className="hover:text-[#003B57] transition-colors" />
                      <span className="text-[10px] font-bold tracking-widest uppercase md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity bg-background md:px-2 md:py-1 md:rounded whitespace-nowrap">
                        Turso
                      </span>
                    </div>
                    <div className="group/icon relative flex items-center gap-2 md:block">
                      <SiTailwindcss className="hover:text-[#06B6D4] transition-colors" />
                      <span className="text-[10px] font-bold tracking-widest uppercase md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity bg-background md:px-2 md:py-1 md:rounded whitespace-nowrap">
                        Tailwind
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative block">
                <div className="absolute -inset-4 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative">
                  <span className="text-xs font-bold tracking-[0.2em] text-brand uppercase mb-2 block">
                    Intern Project • Data & AI
                  </span>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl md:text-5xl font-black tracking-tight group-hover:text-brand transition-colors">
                      <a
                        href="https://github.com/snui1s/careerpath_ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline decoration-brand decoration-2 underline-offset-4"
                      >
                        CareerPath AI
                      </a>
                    </h3>
                    <div className="h-0.5 grow mx-8 bg-foreground/10 group-hover:bg-brand/30 transition-colors hidden md:block"></div>
                    <span className="text-sm font-mono text-text-secondary">
                      05
                    </span>
                  </div>
                  <p className="text-lg md:text-xl text-text-secondary font-light max-w-3xl leading-relaxed">
                    An intelligent AI-powered career advisory engine that
                    analyzes career goals and identifies skill gaps. <br />
                    <span className="text-foreground/80 italic font-medium">
                      Recommends personalized learning paths with context-aware
                      guidance for professional growth.
                    </span>
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-[10px] font-bold tracking-[0.15em] text-text-secondary/40 uppercase">
                    {[
                      "RAG Architecture",
                      "LLM Application Development",
                      "ETL Pipeline",
                      "Vector Search & Retrieval",
                      "Semantic Search",
                      "Personalized Recommendation Systems",
                      "Conversational AI Context Management",
                    ].map((skill, i, arr) => (
                      <div key={skill} className="flex items-center gap-3">
                        <span>{skill}</span>
                        {i < arr.length - 1 && (
                          <div className="w-1 h-1 rounded-full bg-brand/20 shrink-0 hidden md:block" />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 text-2xl text-text-secondary/60">
                    <div className="group/icon relative flex items-center gap-2 md:block">
                      <SiPython className="hover:text-[#3776AB] transition-colors" />
                      <span className="text-[10px] font-bold tracking-widest uppercase md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity bg-background md:px-2 md:py-1 md:rounded whitespace-nowrap">
                        Python
                      </span>
                    </div>
                    <div className="group/icon relative flex items-center gap-2 md:block">
                      <HiSparkles className="hover:text-brand transition-colors" />
                      <span className="text-[10px] font-bold tracking-widest uppercase md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity bg-background md:px-2 md:py-1 md:rounded whitespace-nowrap">
                        RAG
                      </span>
                    </div>
                    <div className="group/icon relative flex items-center gap-2 md:block">
                      <SiLangchain className="hover:text-[#121212] transition-colors" />
                      <span className="text-[10px] font-bold tracking-widest uppercase md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity bg-background md:px-2 md:py-1 md:rounded whitespace-nowrap">
                        LangChain
                      </span>
                    </div>
                    <div className="group/icon relative flex items-center gap-2 md:block">
                      <FaDatabase className="hover:text-[#3178C6] transition-colors" />
                      <span className="text-[10px] font-bold tracking-widest uppercase md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity bg-background md:px-2 md:py-1 md:rounded whitespace-nowrap">
                        ChromaDB
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative block">
                <div className="absolute -inset-4 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative">
                  <span className="text-xs font-bold tracking-[0.2em] text-brand uppercase mb-2 block">
                    Intern Project • Automation & Data
                  </span>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl md:text-5xl font-black tracking-tight group-hover:text-brand transition-colors">
                      <a
                        href="https://github.com/snui1s/recruitment_site_scraper"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline decoration-brand decoration-2 underline-offset-4"
                      >
                        Candidate Scraper
                      </a>
                    </h3>
                    <div className="h-0.5 grow mx-8 bg-foreground/10 group-hover:bg-brand/30 transition-colors hidden md:block"></div>
                    <span className="text-sm font-mono text-text-secondary">
                      06
                    </span>
                  </div>
                  <p className="text-lg md:text-xl text-text-secondary font-light max-w-3xl leading-relaxed">
                    An automated tool designed for efficient job candidate data
                    extraction and resume collection. <br />
                    <span className="text-foreground/80 italic font-medium">
                      Featuring auto-restart, deduplication, and seamless Excel
                      export capabilities for recruiters.
                    </span>
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-[10px] font-bold tracking-[0.15em] text-text-secondary/40 uppercase">
                    {[
                      "Web Scraping Automation",
                      "Headless Browser Automation",
                      "Data Extraction",
                      "Data Deduplication",
                      "Batch Processing",
                      "Robust Error Handling",
                      "Session Management",
                      "Data Export",
                      "File Management",
                    ].map((skill, i, arr) => (
                      <div key={skill} className="flex items-center gap-3">
                        <span>{skill}</span>
                        {i < arr.length - 1 && (
                          <div className="w-1 h-1 rounded-full bg-brand/20 shrink-0 hidden md:block" />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 text-2xl text-text-secondary/60">
                    <div className="group/icon relative flex items-center gap-2 md:block">
                      <SiPython className="hover:text-[#3776AB] transition-colors" />
                      <span className="text-[10px] font-bold tracking-widest uppercase md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity bg-background md:px-2 md:py-1 md:rounded whitespace-nowrap">
                        Python
                      </span>
                    </div>
                    <div className="group/icon relative flex items-center gap-2 md:block">
                      <TbTerminal2 className="hover:text-[#2EAD33] transition-colors" />
                      <span className="text-[10px] font-bold tracking-widest uppercase md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity bg-background md:px-2 md:py-1 md:rounded whitespace-nowrap">
                        Playwright
                      </span>
                    </div>
                    <div className="group/icon relative flex items-center gap-2 md:block">
                      <SiPandas className="hover:text-[#150458] transition-colors" />
                      <span className="text-[10px] font-bold tracking-widest uppercase md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity bg-background md:px-2 md:py-1 md:rounded whitespace-nowrap">
                        Pandas
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative block">
                <div className="absolute -inset-4 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold tracking-[0.2em] text-brand uppercase">
                      Interactive AI Agent
                    </span>
                    <object>
                      <a
                        href="https://pawee-chatbot.onrender.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-bold tracking-[0.2em] text-foreground/50 hover:text-brand transition-colors flex items-center gap-1.5 group/demo"
                      >
                        <HiSparkles className="text-brand" />
                        LIVE DEMO
                        <span className="w-4 h-[1px] bg-brand/30 group-hover/demo:w-6 transition-all"></span>
                      </a>
                    </object>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl md:text-5xl font-black tracking-tight group-hover:text-brand transition-colors">
                      <a
                        href="https://github.com/snui1s/Pawee_ChatBot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline decoration-brand decoration-2 underline-offset-4"
                      >
                        Pawee ChatBot
                      </a>
                    </h3>
                    <div className="h-0.5 grow mx-8 bg-foreground/10 group-hover:bg-brand/30 transition-colors hidden md:block"></div>
                    <span className="text-sm font-mono text-text-secondary">
                      07
                    </span>
                  </div>
                  <p className="text-lg md:text-xl text-text-secondary font-light max-w-3xl leading-relaxed">
                    A production-ready digital representative answering profile
                    questions in real-time. <br />
                    <span className="text-foreground/80 italic font-medium">
                      Features agentic tools for lead capture into Supabase and
                      real-time knowledge gap logging.
                    </span>
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-[10px] font-bold tracking-[0.15em] text-text-secondary/40 uppercase">
                    {[
                      "Agentic Tool Integration (Supabase)",
                      "Automated Knowledge Gap Logging",
                      "Context-Aware Sliding Window Memory",
                      "Multilingual LLM Orchestration",
                      "RAG-driven Knowledge Retrieval",
                      "High-Performance Postgres Pooling",
                    ].map((skill, i, arr) => (
                      <div key={skill} className="flex items-center gap-3">
                        <span>{skill}</span>
                        {i < arr.length - 1 && (
                          <div className="w-1 h-1 rounded-full bg-brand/20 shrink-0 hidden md:block" />
                        )}
                      </div>
                    ))}
                  </div>
                    <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 text-2xl text-text-secondary/60">
                      <div className="group/icon relative flex items-center gap-2 md:block">
                        <SiPython className="hover:text-[#3776AB] transition-colors" />
                        <span className="text-[10px] font-bold tracking-widest uppercase md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity bg-background md:px-2 md:py-1 md:rounded whitespace-nowrap">
                          Python
                        </span>
                      </div>
                      <div className="group/icon relative flex items-center gap-2 md:block">
                        <SiLangchain className="hover:text-brand transition-colors" />
                        <span className="text-[10px] font-bold tracking-widest uppercase md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity bg-background md:px-2 md:py-1 md:rounded whitespace-nowrap">
                          LangChain
                        </span>
                      </div>
                      <div className="group/icon relative flex items-center gap-2 md:block">
                        <HiSparkles className="hover:text-brand transition-colors" />
                        <span className="text-[10px] font-bold tracking-widest uppercase md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity bg-background md:px-2 md:py-1 md:rounded whitespace-nowrap">
                          Supabase
                        </span>
                      </div>
                    </div>
                </div>
              </div>


            </div>
          </div>
        </section>

        <WavyDivider variant={3} />

        {/* About Me Section */}
        <section
          id="about-me"
          className="min-h-screen py-32 flex flex-col items-center justify-center scroll-mt-2"
        >
          <div className="max-w-4xl w-full">
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-16 underline decoration-brand decoration-4 underline-offset-8 text-center md:text-left">
              About Me
            </h2>

            <div className="space-y-16">
              {/* Full Width: Objective */}
              <div className="relative p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-brand"></div>
                <div className="relative">
                  <h3 className="text-xs font-bold tracking-[0.2em] text-brand uppercase mb-6 flex items-center gap-2">
                    <HiSparkles /> Objective
                  </h3>
                  <p className="text-xl md:text-3xl text-foreground leading-tight font-black tracking-tight max-w-4xl">
                    I&apos;m a final-year IT student specializing in{" "}
                    <span className="text-brand">Data Science</span>, on track
                    for{" "}
                    <span className="italic underline decoration-brand/30 underline-offset-8">
                      First-Class Honors
                    </span>
                    . I seek an AI Engineer role to drive business growth
                    through workflow automation and intelligence.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                {/* Education */}
                <div>
                  <h3 className="text-xs font-bold tracking-[0.2em] text-brand uppercase mb-10 flex items-center gap-2">
                    <HiAcademicCap className="text-sm" /> Education
                  </h3>
                  <div className="space-y-10">
                    <div className="group">
                      <h4 className="text-xl font-black mb-1">
                        King Mongkut&apos;s University of Technology North
                        Bangkok
                      </h4>
                      <p className="text-sm text-text-secondary font-mono mb-3">
                        2022 - 2026
                      </p>
                      <p className="text-foreground/90 font-medium">
                        B.Sc. in Information Technology
                      </p>
                      <p className="text-lg text-brand font-black mt-2">
                        GPA: 3.80
                      </p>
                    </div>
                    <div className="opacity-60 group">
                      <h4 className="text-xl font-bold mb-1">
                        Samutsakorn Technical College
                      </h4>
                      <p className="text-sm text-text-secondary font-mono mb-3">
                        2019 - 2022
                      </p>
                      <p className="text-foreground/80">
                        Vocational Certificate in Electronics
                      </p>
                      <p className="text-sm text-text-secondary font-bold mt-1">
                        GPA: 3.50
                      </p>
                    </div>
                  </div>
                </div>

                {/* Student Projects */}
                <div>
                  <h3 className="text-xs font-bold tracking-[0.2em] text-brand uppercase mb-10 flex items-center gap-2">
                    <HiSparkles className="text-sm" /> Student Projects
                  </h3>
                  <div className="space-y-10">
                    <div className="group">
                      <h4 className="text-xl font-black mb-1">
                        Movie Review Web App
                      </h4>
                      <p className="text-sm text-text-secondary font-mono mb-3">
                        2024 | Full-Stack Development
                      </p>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        CRUD application built with Node.js, Express, and
                        SQLite. Features admin dashboard and user favorite
                        systems.
                      </p>
                    </div>
                    <div className="group">
                      <h4 className="text-xl font-bold mb-1">
                        Real-Time Detection of Chickens and Eggs
                      </h4>
                      <p className="text-sm text-text-secondary font-mono mb-3">
                        2025 | Machine Learning
                      </p>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        YOLOv11 model with 93% accuracy. Processed 6000+ custom
                        annotated images via Roboflow.
                      </p>
                    </div>
                    <div className="opacity-80 group">
                      <h4 className="text-xl font-bold mb-1">
                        Defective Tire Classification
                      </h4>
                      <p className="text-sm text-text-secondary font-mono mb-3">
                        2024 | AI Project
                      </p>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        Fine-tuned MobileNetV2 achieving 90% accuracy for
                        manufacturing quality control.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Width: Personal Note */}
              <div className="relative p-6 md:p-12 rounded-3xl bg-white/5 border border-white/10 overflow-hidden group">
                <div className="absolute top-0 right-0 w-2 h-full bg-brand"></div>
                <div className="relative">
                  <h3 className="text-xs font-bold tracking-[0.2em] text-brand uppercase mb-6 flex items-center gap-2 justify-start md:justify-end">
                    Behind the Code <HiSparkles />
                  </h3>
                  <div className="space-y-4 text-left md:text-right">
                    <p className="text-xl md:text-2xl font-medium text-foreground">
                      Hi, I&apos;m Pawee. Thanks for stopping by!
                    </p>
                    <p className="text-lg text-text-secondary leading-relaxed font-light">
                      You&apos;ll see many projects here because I&apos;m a big
                      believer in{" "}
                      <span className="text-foreground font-medium border-b border-brand/20 pb-0.5">
                        AI-augmented development
                      </span>{" "}
                      (Vibe Coding). <br></br>I use AI as a speed booster to
                      handle the coding, so I can focus on my true goal{" "}
                      <br></br> to being a{" "}
                      <span className="text-brand font-bold">
                        Problem Solver
                      </span>{" "}
                      and an{" "}
                      <span className="text-brand font-bold">
                        Aspiring Product Manager
                      </span>
                      .
                    </p>
                    <p className="text-lg text-text-secondary leading-relaxed font-light">
                      I believe in building for the community, so all my
                      projects are{" "}
                      <span className="text-foreground font-bold bg-white/5 px-2 py-0.5 rounded">
                        Open Source
                      </span>
                      . Feel free to use them or build something even better!{" "}
                      <span className="text-brand font-medium">
                        Thanks for checking out my work.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="mt-20">
              <h3 className="text-xs font-bold tracking-[0.2em] text-brand uppercase mb-10 text-center">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                <div className="space-y-4">
                  <p className="text-xs font-black uppercase tracking-widest text-text-secondary border-b border-brand/20 pb-2">
                    Languages
                  </p>
                  <div className="flex flex-wrap gap-x-8 gap-y-6 text-3xl text-text-secondary/60">
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiPython className="group-hover/s:text-[#3776AB] transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        Python
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiJavascript className="group-hover/s:text-[#F7DF1E] transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        JavaScript
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiTypescript className="group-hover/s:text-[#3178C6] transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        TypeScript
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiCplusplus className="group-hover/s:text-[#00599C] transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        C++
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <FaJava className="group-hover/s:text-[#ED8B00] transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        Java
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiPhp className="group-hover/s:text-[#777BB4] transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        PHP
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-xs font-black uppercase tracking-widest text-text-secondary border-b border-brand/20 pb-2">
                    Data & AI
                  </p>
                  <div className="flex flex-wrap gap-x-8 gap-y-6 text-3xl text-text-secondary/60">
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiPandas className="group-hover/s:text-[#150458] transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        Pandas
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiNumpy className="group-hover/s:text-[#013243] transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        NumPy
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiScikitlearn className="group-hover/s:text-[#F7931E] transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        Scikit
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiTensorflow className="group-hover/s:text-[#FF6F00] transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        TF
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiKeras className="group-hover/s:text-[#D00000] transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        Keras
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiPytorch className="group-hover/s:text-[#EE4C2C] transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        PyTorch
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiLangchain className="group-hover/s:text-brand transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        LangGraph
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiHuggingface className="group-hover/s:text-[#FFD21E] transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        HuggingFace
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <FaDatabase className="group-hover/s:text-brand transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        ChromaDB
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <FaDatabase className="group-hover/s:text-[#E91E63] transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        Qdrant
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-xs font-black uppercase tracking-widest text-text-secondary border-b border-brand/20 pb-2">
                    Web & Backend
                  </p>
                  <div className="flex flex-wrap gap-x-8 gap-y-6 text-3xl text-text-secondary/60">
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiAstro className="group-hover/s:text-[#FF5D01] transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        Astro
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiNextdotjs className="group-hover/s:text-foreground transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        Next.js
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiReact className="group-hover/s:text-[#61DAFB] transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        React
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiNodedotjs className="group-hover/s:text-[#339933] transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        Node.js
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiExpress className="group-hover/s:text-foreground transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        Express
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiFastapi className="group-hover/s:text-[#05998B] transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        FastAPI
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiTauri className="group-hover/s:text-[#24C8DB] transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        Tauri
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiTailwindcss className="group-hover/s:text-[#06B6D4] transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        Tailwind
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-xs font-black uppercase tracking-widest text-text-secondary border-b border-brand/20 pb-2">
                    Tools & DB
                  </p>
                  <div className="flex flex-wrap gap-x-8 gap-y-6 text-3xl text-text-secondary/60">
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiPostgresql className="group-hover/s:text-[#336791] transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        PostgreSQL
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiSqlite className="group-hover/s:text-[#003B57] transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        SQLite
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiGit className="group-hover/s:text-[#F05032] transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        Git
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiDocker className="group-hover/s:text-[#2496ED] transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        Docker
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <TbTerminal2 className="group-hover/s:text-[#2EAD33] transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        Playwright
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiJupyter className="group-hover/s:text-[#F37626] transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        Jupyter
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiVercel className="group-hover/s:text-foreground transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        Vercel
                      </span>
                    </div>
                    <div className="group/s relative cursor-pointer flex items-center gap-3 md:inline-flex md:items-center md:justify-center">
                      <SiRender className="group-hover/s:text-[#D6F8F0] transition-colors" />
                      <span className="text-[10px] bg-background md:px-2 md:py-1 md:rounded md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover/s:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-widest uppercase">
                        Render
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WavyDivider variant={1} />

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen py-32 flex flex-col items-center justify-center scroll-mt-2"
        >
          <div className="max-w-4xl w-full text-center">
            <h2 className="text-3xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
              LET&apos;S <span className="text-brand">CONNECT</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-12 mb-20 text-text-secondary">
              <a
                href="mailto:p.indulakshana@gmail.com"
                className="flex items-center gap-2 hover:text-brand transition-colors text-lg"
              >
                <HiEnvelope className="text-brand" /> p.indulakshana@gmail.com
              </a>
              <a
                href="tel:0654549633"
                className="flex items-center gap-2 hover:text-brand transition-colors text-lg"
              >
                <HiPhone className="text-brand" /> 065-454-9633
              </a>
              <a
                href="https://github.com/snui1s"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand transition-colors text-lg"
              >
                <SiGithub className="text-brand" /> github.com/snui1s
              </a>
            </div>

            <div className="inline-flex flex-col items-center gap-4 px-12 py-10 border border-foreground/10 rounded-2xl bg-white/5 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              <HiMapPin className="text-4xl text-brand mb-2" />
              <p className="text-2xl font-bold">Saochingcha, Bangkok</p>
              <p className="text-text-secondary">
                Available for AI Engineer roles.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 opacity-80">
        <div className="max-w-4xl mx-auto px-8 lg:px-0 flex flex-col items-center text-center gap-8">
          <div className="flex gap-8 text-[10px] md:text-xs text-text-secondary uppercase tracking-[0.3em] font-black">
            <a href="#about-me" className="hover:text-brand transition-all">
              About
            </a>
            <a href="#experience" className="hover:text-brand transition-all">
              Experience
            </a>
            <a href="#projects" className="hover:text-brand transition-all">
              Projects
            </a>
            <a href="#contact" className="hover:text-brand transition-all">
              Contact
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-[10px] text-text-secondary/40 uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} PAWEE INDULAKSHANA. ALL RIGHTS
              RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
