"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import mainImg from "../../gy photo .jpeg";
import sqlLogo from "../../sql-new-logo.png";
import pythonLogo from "../../python logo.png";
import powerbiLogo from "../../power_bi-removebg-preview.png";
import emailIcon from "../../email.png";
import githubIcon from "../../github.png";
import linkedinIcon from "../../linkedin.png";
import certificateImg from "../../certifcate.png";

// Animation Variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Home() {
  const [selectedCert, setSelectedCert] = useState<boolean>(false);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = "Gautam Yadav";
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < text.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, 70); // speed up typing
    } else if (!isDeleting && displayText.length === text.length) {
      // Pause after typing
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length - 1));
      }, 40); // speed up deleting
    } else if (isDeleting && displayText.length === 0) {
      // Start typing again immediately
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#0a0a0a]/0 to-[#0a0a0a] animate-gradient" />
      </div>

      {/* HERO SECTION */}
      <main id="home" className="relative z-10 min-h-[80vh] md:min-h-screen pt-20 md:pt-32 px-5 md:px-8 pb-4 md:pb-8 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between w-full max-w-[1500px] mx-auto gap-6 md:gap-12 overflow-hidden">
        {/* Left Column for text content */}
        <div className="flex-1 w-full flex flex-col items-center md:items-start justify-start md:pl-4 lg:pl-12 pt-4 md:pt-16">
          <div className="hero-content text-center md:text-left w-full">

            {/* Mobile-only circular avatar */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex md:hidden justify-center mb-8"
            >
              <div className="group relative rounded-full overflow-hidden border-[3px] border-[#60A5FA]/30 shadow-[0_0_30px_rgba(96,165,250,0.2),0_0_60px_rgba(96,165,250,0.1)] transition-all duration-500 animate-float" style={{ width: 'clamp(180px, 50vw, 250px)', height: 'clamp(180px, 50vw, 250px)' }}>
                <Image
                  src={mainImg}
                  alt="Gautam Yadav Profile"
                  fill
                  className="object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                  quality={100}
                  priority
                />
              </div>
            </motion.div>

            {/* Name Reveal */}
            <motion.h1 
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="m-0 leading-none font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#60A5FA] md:whitespace-nowrap min-h-[1.2em] flex items-center justify-center md:justify-start" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}>
              {displayText}<span className="text-[#60A5FA] font-light opacity-80 animate-pulse ml-1">|</span>
            </motion.h1>
            
            {/* Role Text */}
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              whileHover={{ textShadow: "0px 0px 8px rgba(96,165,250,0.8)" }}
              className="mt-5 md:mt-[50px] text-[11px] sm:text-[13px] md:text-[18px] font-semibold tracking-[2px] sm:tracking-[3px] md:tracking-[4px] text-[#60A5FA] uppercase drop-shadow-[0_0_10px_rgba(96,165,250,0.5)] md:whitespace-nowrap cursor-default inline-block">
              Data Analyst | SQL | Python | Power BI | Excel
            </motion.p>

            {/* Desktop Only Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden md:block mt-12 max-w-[600px] text-gray-300 text-sm md:text-[16px] leading-relaxed font-light"
            >
              Data Analyst passionate about working with data and uncovering meaningful insights. Currently building projects using SQL, Python, Power BI, and Excel. Interested in data visualization, reporting, and business analytics. Always learning new skills and exploring real-world datasets. Seeking opportunities to grow and contribute as a Data Analyst.
            </motion.p>

            {/* HERO BUTTONS */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-row items-center justify-center md:justify-start gap-4 sm:gap-8 md:gap-16 mt-10 md:mt-20">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(59,130,246,0.5)" }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#3b82f6] text-white font-semibold text-sm md:text-lg px-5 md:px-8 py-3 md:py-3.5 rounded-xl transition-colors duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center min-w-[120px] md:min-w-[160px]">
                Contact
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(59,130,246,0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="#" className="bg-transparent border-2 border-[#3b82f6] text-[#3b82f6] font-semibold text-sm md:text-lg px-5 md:px-8 py-3 md:py-3.5 rounded-xl transition-colors duration-300 flex items-center justify-center min-w-[130px] md:min-w-[200px]">
                Download CV
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Desktop-only Image Column */}
        <div className="hidden md:flex flex-1 w-full justify-end translate-x-4 lg:translate-x-6 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="group relative w-full max-w-lg aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/10 bg-gray-900/50 backdrop-blur-sm animate-float">
            <Image
              src={mainImg}
              alt="Gautam Yadav"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
              quality={100}
              priority
            />
          </motion.div>
        </div>
      </main>


      {/* ABOUT ME SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUpVariant}
        id="about" className="relative w-full py-16 md:py-32 px-8 bg-[#0a0a0a]">
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
      </motion.section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="relative w-full py-24 px-8 bg-[#0a0a0a]">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto flex flex-col">
          <motion.div variants={staggerItem} className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#60A5FA] tracking-tight">
              Projects
            </h2>
            <div className="flex-grow border-t border-white/10 mt-2"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Supply Chain Project */}
            <motion.div 
              variants={staggerItem}
              whileHover={{ y: -8, borderColor: "rgba(59,130,246,0.5)", boxShadow: "0px 0px 20px rgba(59,130,246,0.2)" }}
              className="flex flex-col p-8 rounded-2xl bg-[#0d0d0f] border border-white/5 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Supply Chain Analytics Dashboard</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Developed a Power BI dashboard to monitor supplier performance, inventory management, shipment tracking, and customer analytics, providing actionable insights for business optimization.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["Power BI", "DAX", "Power Query", "Data Modeling"].map(tech => (
                  <span key={tech} className="bg-[#1f2937] text-gray-300 text-xs px-3 py-1.5 rounded-md font-medium">{tech}</span>
                ))}
              </div>

              <h4 className="text-white font-semibold mb-4 text-sm">Key Insights:</h4>
              <ul className="space-y-3 mb-8">
                {[
                  "Improved supply chain visibility",
                  "Reduced inventory inefficiencies",
                  "Tracked delivery performance",
                  "Monitored revenue and profit KPIs"
                ].map((insight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00df9a] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-400 text-sm">{insight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/gautam9034/samsung-supply-chain-dashboard" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#1f2937] hover:bg-[#374151] transition-colors text-white text-sm font-medium px-4 py-2.5 rounded-lg w-fit">
                  <Image src={githubIcon} alt="GitHub" width={16} height={16} className="opacity-80 object-contain" />
                  GitHub
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* TECHNICAL SKILLS SECTION */}
      <section id="skills" className="relative w-full py-24 px-8 bg-[#0a0a0a]">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto flex flex-col">
          <motion.div variants={staggerItem} className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#60A5FA] tracking-tight drop-shadow-[0_0_20px_rgba(96,165,250,0.4)]">
              Technical Skills
            </h2>
            <div className="flex-grow border-t border-white/10 mt-2"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto w-full">
            <div className="relative border-l border-[#1e3a8a] ml-4 md:ml-8 space-y-16">

              {/* Category 1 */}
              <motion.div variants={staggerItem} className="relative pl-10">
                <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]"></div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#38bdf8] mb-6 tracking-wide">Data Analysis</h3>
                <div className="flex flex-wrap gap-4">
                  <motion.div whileHover={{ y: -5, borderColor: "rgba(250,204,21,0.3)", boxShadow: "0px 0px 20px rgba(250,204,21,0.15)" }} className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-[#0d0d0f] border border-white/5 transition-all duration-300 shadow-lg cursor-default">
                    <Image src={pythonLogo} alt="Python" width={40} height={40} className="object-contain" />
                    <span className="text-gray-300 text-sm md:text-base font-medium">Python</span>
                  </motion.div>
                  <motion.div whileHover={{ y: -5, borderColor: "rgba(59,130,246,0.3)", boxShadow: "0px 0px 20px rgba(59,130,246,0.15)" }} className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-[#0d0d0f] border border-white/5 transition-all duration-300 shadow-lg cursor-default">
                    <Image src={sqlLogo} alt="SQL" width={40} height={40} className="object-contain" />
                    <span className="text-gray-300 text-sm md:text-base font-medium">PostgreSQL</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Category 2 */}
              <motion.div variants={staggerItem} className="relative pl-10">
                <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]"></div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#38bdf8] mb-6 tracking-wide">Visualization</h3>
                <div className="flex flex-wrap gap-4">
                  <motion.div whileHover={{ y: -5, borderColor: "rgba(234,179,8,0.3)", boxShadow: "0px 0px 20px rgba(234,179,8,0.15)" }} className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-[#0d0d0f] border border-white/5 transition-all duration-300 shadow-lg cursor-default">
                    <Image src={powerbiLogo} alt="Power BI" width={40} height={40} className="object-contain" />
                    <span className="text-gray-300 text-sm md:text-base font-medium">Power BI</span>
                  </motion.div>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <section id="certifications" className="relative w-full py-24 px-8 bg-[#0a0a0a]">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto flex flex-col">
          <motion.div variants={staggerItem} className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#60A5FA] tracking-tight">
              Certifications
            </h2>
            <div className="flex-grow border-t border-white/10 mt-2"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Certificate Card */}
            <motion.div
              variants={fadeUpVariant}
              whileHover={{ y: -8, scale: 1.02, borderColor: "rgba(6,182,212,0.3)", boxShadow: "0px 0px 25px rgba(6,182,212,0.15)" }}
              onClick={() => setSelectedCert(true)}
              className="flex flex-col p-5 rounded-2xl bg-[#111111] border border-white/5 transition-all duration-300 group cursor-pointer"
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
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* LET'S CONNECT SECTION */}
      <section id="contact" className="relative w-full py-24 px-8 bg-[#0a0a0a]">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto flex flex-col items-center">
          <motion.h2 variants={staggerItem} className="text-4xl md:text-5xl font-bold mb-16 tracking-tight flex items-center gap-4">
            <span className="text-4xl">👉</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#60A5FA]">Let's Connect</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-4xl">
            {/* Email Card */}
            <motion.a variants={staggerItem} whileHover={{ y: -8, borderColor: "rgba(59,130,246,0.3)", boxShadow: "0px 0px 25px rgba(59,130,246,0.15)" }} href="mailto:ydv565645@gmail.com" className="group flex flex-col items-center justify-center p-10 rounded-2xl bg-[#0d0d0f] border border-white/5 transition-all duration-300">
              <div className="w-14 h-14 mb-5 rounded-full bg-[#161618] flex items-center justify-center border border-white/5 shadow-inner">
                <Image src={emailIcon} alt="Email" width={28} height={28} className="object-contain" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Email</h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">ydv565645@gmail.com</p>
            </motion.a>

            {/* LinkedIn Card */}
            <motion.a variants={staggerItem} whileHover={{ y: -8, borderColor: "rgba(10,102,194,0.3)", boxShadow: "0px 0px 25px rgba(10,102,194,0.15)" }} href="https://www.linkedin.com/in/gautam-yadav-6661a732a" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center justify-center p-10 rounded-2xl bg-[#0d0d0f] border border-white/5 transition-all duration-300">
              <div className="w-14 h-14 mb-5 rounded-full bg-[#161618] flex items-center justify-center border border-white/5 shadow-inner">
                <Image src={linkedinIcon} alt="LinkedIn" width={28} height={28} className="object-contain" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">LinkedIn</h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">gautam-yadav</p>
            </motion.a>

            {/* GitHub Card */}
            <motion.a variants={staggerItem} whileHover={{ y: -8, borderColor: "rgba(255,255,255,0.3)", boxShadow: "0px 0px 25px rgba(255,255,255,0.1)" }} href="https://github.com/gautam9034" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center justify-center p-10 rounded-2xl bg-[#0d0d0f] border border-white/5 transition-all duration-300">
              <div className="w-14 h-14 mb-5 rounded-full bg-[#161618] flex items-center justify-center border border-white/5 shadow-inner">
                <Image src={githubIcon} alt="GitHub" width={28} height={28} className="object-contain" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">GitHub</h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">gautam9034</p>
            </motion.a>
          </div>

          <motion.div variants={staggerItem} className="mt-20 text-center text-gray-300 flex items-center gap-3 text-base md:text-lg">
            <span className="text-2xl md:text-3xl">👉</span> "Open to internships, collaborations, and opportunities."
          </motion.div>
        </motion.div>
      </section>

      {/* MODAL / LIGHTBOX */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-pointer"
            onClick={() => setSelectedCert(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
