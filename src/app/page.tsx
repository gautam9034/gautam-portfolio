"use client";
import React, { useState } from "react";
import Image from "next/image";
import mainImg from "../../main photo port.png";
import sqlLogo from "../../sql-new-logo.png";
import pythonLogo from "../../python logo.png";
import powerbiLogo from "../../power_bi-removebg-preview.png";
import emailIcon from "../../email.png";
import githubIcon from "../../github.png";
import linkedinIcon from "../../linkedin.png";
import certificateImg from "../../certifcate.png";

export default function Home() {
  const [selectedCert, setSelectedCert] = useState<boolean>(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <main id="home" className="min-h-screen pt-24 md:pt-32 px-5 md:px-8 pb-8 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between w-full max-w-[1500px] mx-auto gap-6 md:gap-12 overflow-hidden">
        {/* Left Column for text content */}
        <div className="flex-1 w-full flex flex-col items-center md:items-start justify-start md:pl-4 lg:pl-12 pt-4 md:pt-16">
          <div className="hero-content text-center md:text-left w-full">

            {/* Mobile-only circular avatar — above name */}
            <div className="flex md:hidden justify-center mb-8">
              <div className="group relative rounded-full overflow-hidden border-[3px] border-[#60A5FA]/30 shadow-[0_0_30px_rgba(96,165,250,0.2),0_0_60px_rgba(96,165,250,0.1)] transition-all duration-500" style={{ width: 'clamp(180px, 50vw, 250px)', height: 'clamp(180px, 50vw, 250px)' }}>
                <Image
                  src={mainImg}
                  alt="Gautam Yadav Profile"
                  fill
                  className="object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105"
                  quality={100}
                  priority
                />
              </div>
            </div>

            <h1 className="m-0 leading-none font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#60A5FA] md:whitespace-nowrap" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}>
              Gautam Yadav
            </h1>
            <p className="mt-5 md:mt-[50px] text-[11px] sm:text-[13px] md:text-[18px] font-semibold tracking-[2px] sm:tracking-[3px] md:tracking-[4px] text-[#60A5FA] uppercase drop-shadow-[0_0_10px_rgba(96,165,250,0.5)] md:whitespace-nowrap">
              Data Analyst | SQL | Python | Power BI | Excel
            </p>

            {/* HERO BUTTONS */}
            <div className="flex flex-row items-center justify-center md:justify-start gap-4 sm:gap-8 md:gap-16 mt-10 md:mt-32">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold text-sm md:text-lg px-5 md:px-8 py-3 md:py-3.5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] flex items-center justify-center min-w-[120px] md:min-w-[160px]">
                Contact
              </a>
              <a href="#" className="bg-transparent border-2 border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6]/10 font-semibold text-sm md:text-lg px-5 md:px-8 py-3 md:py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center min-w-[130px] md:min-w-[200px]">
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Desktop-only Image Column — hidden on mobile */}
        <div className="hidden md:flex flex-1 w-full justify-end translate-x-4 lg:translate-x-6 items-center">
          <div className="group relative w-full max-w-lg aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/30 border border-white/10 bg-gray-900/50 backdrop-blur-sm transition-all duration-500">
            <Image
              src={mainImg}
              alt="Gautam Yadav"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              quality={100}
              priority
            />
          </div>
        </div>
      </main>

      {/* ABOUT ME SECTION */}
      <section id="about" className="relative w-full py-24 md:py-32 px-8 bg-gradient-to-b from-[#0a0a0a] to-[#0d1326] border-t border-white/5">
        <div className="absolute top-0 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent left-1/4"></div>
        <div className="max-w-6xl mx-auto flex flex-col z-10 relative">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#60A5FA] tracking-tight">
              About Me
            </h2>
            <div className="flex-grow border-t border-white/10 mt-2"></div>
          </div>
          <div className="max-w-4xl space-y-6 text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light text-left">
            <p>
              I'm Gautam Yadav, a second-year B.A. Computer Applications student at DU SOL with a strong interest in data analytics. I work with SQL, Python, and Power BI to analyze data, uncover insights, and solve real-world problems.
            </p>
            <p>
              I'm continuously learning, building projects, and improving my analytical skills to grow as a Data Analyst.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="relative w-full py-24 px-8 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto flex flex-col">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#60A5FA] tracking-tight">
              Projects
            </h2>
            <div className="flex-grow border-t border-white/10 mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Supply Chain Project */}
            <div className="flex flex-col p-8 rounded-2xl bg-[#0d0d0f] border border-white/5 hover:border-[#06b6d4]/30 hover:shadow-[0_0_25px_rgba(6,182,212,0.1)] transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Supply Chain Analytics Dashboard</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Developed a Power BI dashboard to monitor supplier performance, inventory management, shipment tracking, and customer analytics, providing actionable insights for business optimization.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-[#1f2937] text-gray-300 text-xs px-3 py-1.5 rounded-md font-medium">Power BI</span>
                <span className="bg-[#1f2937] text-gray-300 text-xs px-3 py-1.5 rounded-md font-medium">DAX</span>
                <span className="bg-[#1f2937] text-gray-300 text-xs px-3 py-1.5 rounded-md font-medium">Power Query</span>
                <span className="bg-[#1f2937] text-gray-300 text-xs px-3 py-1.5 rounded-md font-medium">Data Modeling</span>
              </div>

              <h4 className="text-white font-semibold mb-4 text-sm">Key Insights:</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00df9a] mt-2 flex-shrink-0"></div>
                  <span className="text-gray-400 text-sm">Improved supply chain visibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00df9a] mt-2 flex-shrink-0"></div>
                  <span className="text-gray-400 text-sm">Reduced inventory inefficiencies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00df9a] mt-2 flex-shrink-0"></div>
                  <span className="text-gray-400 text-sm">Tracked delivery performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00df9a] mt-2 flex-shrink-0"></div>
                  <span className="text-gray-400 text-sm">Monitored revenue and profit KPIs</span>
                </li>
              </ul>

              <div className="mt-auto">
                <a href="https://github.com/gautam9034/samsung-supply-chain-dashboard" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#1f2937] hover:bg-[#374151] transition-colors text-white text-sm font-medium px-4 py-2.5 rounded-lg w-fit">
                  <Image src={githubIcon} alt="GitHub" width={16} height={16} className="opacity-80 object-contain" />
                  GitHub
                </a>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* TECHNICAL SKILLS SECTION */}
      <section id="skills" className="relative w-full py-24 px-8 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto flex flex-col">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#60A5FA] tracking-tight drop-shadow-[0_0_20px_rgba(96,165,250,0.4)]">
              Technical Skills
            </h2>
            <div className="flex-grow border-t border-white/10 mt-2"></div>
          </div>

          <div className="max-w-4xl mx-auto w-full">
            <div className="relative border-l border-[#1e3a8a] ml-4 md:ml-8 space-y-16">

              {/* Category 1 */}
              <div className="relative pl-10">
                <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]"></div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#38bdf8] mb-6 tracking-wide">Data Analysis</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-[#0d0d0f] border border-white/5 hover:-translate-y-1.5 hover:border-yellow-400/30 hover:shadow-[0_0_20px_rgba(250,204,21,0.15)] transition-all duration-300 shadow-lg">
                    <Image src={pythonLogo} alt="Python" width={40} height={40} className="object-contain" />
                    <span className="text-gray-300 text-sm md:text-base font-medium">Python</span>
                  </div>
                  <div className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-[#0d0d0f] border border-white/5 hover:-translate-y-1.5 hover:border-blue-400/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 shadow-lg">
                    <Image src={sqlLogo} alt="SQL" width={40} height={40} className="object-contain" />
                    <span className="text-gray-300 text-sm md:text-base font-medium">PostgreSQL</span>
                  </div>
                </div>
              </div>

              {/* Category 2 */}
              <div className="relative pl-10">
                <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]"></div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#38bdf8] mb-6 tracking-wide">Visualization</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-[#0d0d0f] border border-white/5 hover:-translate-y-1.5 hover:border-yellow-500/30 hover:shadow-[0_0_20px_rgba(234,179,8,0.15)] transition-all duration-300 shadow-lg">
                    <Image src={powerbiLogo} alt="Power BI" width={40} height={40} className="object-contain" />
                    <span className="text-gray-300 text-sm md:text-base font-medium">Power BI</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <section id="certifications" className="relative w-full py-24 px-8 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto flex flex-col">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#60A5FA] tracking-tight">
              Certifications
            </h2>
            <div className="flex-grow border-t border-white/10 mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Certificate Card */}
            <div
              onClick={() => setSelectedCert(true)}
              className="flex flex-col p-5 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#06b6d4]/30 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300 group cursor-pointer"
            >
              <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden mb-5 bg-[#1a1a1a]">
                <Image src={certificateImg} alt="Certificate" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-gray-600/90 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-xl">View Certificate</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#00df9a] transition-colors duration-300 mb-2">Intro to Data Analytics</h3>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00df9a]"></div>
                <p className="text-sm text-gray-400">Simplilearn SkillUp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LET'S CONNECT SECTION */}
      <section id="contact" className="relative w-full py-24 px-8 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight flex items-center gap-4">
            <span className="text-4xl">👉</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#60A5FA]">Let's Connect</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-4xl">
            {/* Email Card */}
            <a href="mailto:ydv565645@gmail.com" className="group flex flex-col items-center justify-center p-10 rounded-2xl bg-[#0d0d0f] border border-white/5 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all duration-300">
              <div className="w-14 h-14 mb-5 rounded-full bg-[#161618] flex items-center justify-center border border-white/5 shadow-inner">
                <Image src={emailIcon} alt="Email" width={28} height={28} className="object-contain" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Email</h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">ydv565645@gmail.com</p>
            </a>

            {/* LinkedIn Card */}
            <a href="https://www.linkedin.com/in/gautam-yadav-6661a732a" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center justify-center p-10 rounded-2xl bg-[#0d0d0f] border border-white/5 hover:-translate-y-2 hover:border-[#0A66C2]/30 hover:shadow-[0_0_25px_rgba(10,102,194,0.15)] transition-all duration-300">
              <div className="w-14 h-14 mb-5 rounded-full bg-[#161618] flex items-center justify-center border border-white/5 shadow-inner">
                <Image src={linkedinIcon} alt="LinkedIn" width={28} height={28} className="object-contain" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">LinkedIn</h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">gautam-yadav</p>
            </a>

            {/* GitHub Card */}
            <a href="https://github.com/gautam9034" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center justify-center p-10 rounded-2xl bg-[#0d0d0f] border border-white/5 hover:-translate-y-2 hover:border-zinc-400/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="w-14 h-14 mb-5 rounded-full bg-[#161618] flex items-center justify-center border border-white/5 shadow-inner">
                <Image src={githubIcon} alt="GitHub" width={28} height={28} className="object-contain" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">GitHub</h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">gautam9034</p>
            </a>
          </div>

          <div className="mt-20 text-center text-gray-300 flex items-center gap-3 text-base md:text-lg">
            <span className="text-2xl md:text-3xl">👉</span> "Open to internships, collaborations, and opportunities."
          </div>
        </div>
      </section>

      {/* MODAL / LIGHTBOX */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-pointer transition-opacity"
          onClick={() => setSelectedCert(false)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 p-2 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] bg-[#0a0a0a]">
              <Image src={certificateImg} alt="Certificate Full View" fill className="object-contain" />
            </div>

            <div className="mt-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Intro to Data Analytics</h2>
              <p className="text-gray-400 text-sm">Simplilearn SkillUp</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
