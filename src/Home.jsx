import { useState, useEffect, useRef } from "react";
import ProjectModal from "./components/ProjectModal";

import {
  techStack,
  experience,
  education,
  complete,
  projectData,
  RecognitionsProjects,
  archiveSections,
  archiveProjects,
} from "./portfolioData";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [activeTitle, setActiveTitle] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mainRef = useRef(null);
  const cursorRef = useRef(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // --- 圖片預加載邏輯 (Image Preloading) ---
  useEffect(() => {
    // 收集所有過往專案與得獎紀錄的封面圖 URL
    const imagesToPreload = [
      ...archiveProjects.map((project) => project.hero),
      ...RecognitionsProjects.map((project) => project.hero),
    ];

    // 告訴瀏覽器在背景默默下載這些圖片
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []); // 只有在組件初次載入時執行一次

  // --- GSAP 動畫區塊 ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero 區塊的進場動畫
      gsap.from(".hero-anim, .shrink", {
        z: -200,
        filter: "blur(10px)",
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        stagger: {
          amount: 0.5,
          from: "random",
        },
        ease: "expo.out",
        delay: 0.2,
      });

      // 2. 每個 Section 的滾動視差進場
      const sections = gsap.utils.toArray(".scroll-section");
      sections.forEach((sec) => {
        // 先把該區塊內的元素抓出來
        const upElements = sec.querySelectorAll(".gsap-up");

        // 👉 關鍵修復：檢查裡面如果有東西 (長度大於 0)，才叫 GSAP 執行動畫
        if (upElements.length > 0) {
          gsap.from(upElements, {
            scrollTrigger: {
              trigger: sec,
              start: "top 85%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          });
        }
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  // --- Cursor Tracking 邏輯 ---
  useEffect(() => {
    if (!cursorRef.current) return;

    // 使用 quickTo 優化效能，滑鼠移動時會有平滑的延遲跟隨感
    const xMove = gsap.quickTo(cursorRef.current, "x", { duration: 0.3, ease: "power3" });
    const yMove = gsap.quickTo(cursorRef.current, "y", { duration: 0.3, ease: "power3" });

    const handleMouseMove = (e) => {
      xMove(e.clientX);
      yMove(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-50 overflow-visible"
      >
        <div
          className={`relative -left-1/2 -top-1/2 w-75 aspect-video   transition-all duration-300 ease-out ${
            hoveredImage ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          {hoveredImage && (
            <img
              src={hoveredImage}
              alt="Project Preview"
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      <div ref={mainRef}>
        <section
          id="top"
          className="scroll-section w-full lg:h-screen flex flex-col justify-center"
        >
          <div className="hero-anim flex flex-col lg:flex-row bg-neutral-800 h-screen lg:basis-[60%] px-4 py-10 lg:p-10 justify-between gap-10">
            <div className="flex lg:gap-4 shrink">
              <div className="shrink">
                <img
                  src="PF.png"
                  alt="PF"
                  className="max-w-full h-auto block"
                />
              </div>
              <div className="shrink">
                <img
                  src="O.png"
                  alt="O"
                  className="max-w-full h-auto block"
                />
              </div>
              <div className="shrink">
                <img
                  src="RTLIO.png"
                  alt="RTLIO"
                  className="max-w-full h-auto block"
                />
              </div>
            </div>

            <div className="flex flex-col items-end justify-between ">
              <div className="text-end mb-7 lg:mb-0">
                <h5 className="text-h5 text-neutral-100 mb-3">Yi Han Chen // 2026</h5>
                <h5 className="text-h5 text-neutral-100">Front-End Developer‧ UI UX·Designer</h5>
              </div>
              <span className="text-neutral-100 text-[100px]! lg:text-[140px]! material-symbols-outlined leading-none">
                south_east
              </span>
            </div>
          </div>
          <div className="lg:basis-[40%] h-screen px-4 py-10 lg:p-10 flex flex-col-reverse justify-between lg:flex-row lg:items-end">
            <ul className="hero-anim flex flex-col gap-6 text-end lg:text-start text-h3">
              <li>
                <a
                  href="#about"
                  className="group flex items-center justify-end lg:justify-start gap-2 transition-colors duration-300 hover:text-neutral-500"
                >
                  <span className="transition-transform duration-300 lg:group-hover:translate-x-2">About ‧ 關於我</span>
                  <span className="material-symbols-outlined opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 lg:group-hover:translate-x-2">
                    arrow_forward
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  className="group flex items-center justify-end lg:justify-start gap-2 transition-colors duration-300 hover:text-neutral-500"
                >
                  <span className="transition-transform duration-300 lg:group-hover:translate-x-2">
                    Project ‧ 專案開發
                  </span>
                  <span className="material-symbols-outlined opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 lg:group-hover:translate-x-2">
                    arrow_forward
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#archive"
                  className="group flex items-center justify-end lg:justify-start gap-2 transition-colors duration-300 hover:text-neutral-500"
                >
                  <span className="transition-transform duration-300 lg:group-hover:translate-x-2">
                    Archive ‧ 過往專案
                  </span>
                  <span className="material-symbols-outlined opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 lg:group-hover:translate-x-2">
                    arrow_forward
                  </span>
                </a>
              </li>
            </ul>
            <div className="mb-6 lg:mb-0">
              <h2 className="hero-anim font-dela text-[60px] md:text-[100px] lg:text-[120px] ">HELLO</h2>
              <h2 className="hero-anim font-dela text-[60px] md:text-[100px] lg:text-[120px] ">I’m Carol</h2>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="scroll-section bg-neutral-800 px-4 py-20 lg:py-30"
        >
          <div className="max-w-324 mx-auto">
            <div className="grid grid-cols-1 gap-x-6 items-center mb-8  lg:mb-15 lg:grid-cols-12">
              <div className="lg:col-span-4 gsap-up">
                <img
                  src="https://github.com/Carol0127/PortfolioPhoto/blob/main/Carol.jpg?raw=true"
                  alt="Carol"
                  className="w-full h-auto mb-10 lg:mb-0"
                />
              </div>
              <div className="lg:col-span-1"></div>
              <div className="lg:col-span-7 gsap-up">
                <h2 className="text-white font-dela text-[50px] lg:text-[100px] mb-7 lg:mb-15">#INTJ</h2>
                <div>
                  <p className="tagHeading">Hi , I am Carol</p>
                  <p className="text-body-m text-white">
                    您好，我是 Carol / 陳意涵 很高興認識您！
                    我具備設計與專案管理背景，擅長在開發前期與設計端對齊技術實踐方案，藉此減少後續來回修改的開發成本，並確保程式邏輯與介面易用性的高度結合。
                  </p>
                  <ul className="text-neutral-100 text-body-m">
                    <li>
                      <strong>技術實作：</strong>主攻 React，具備電商與後台系統開發經驗，涵蓋 API
                      串接、狀態管理與權限控管。
                    </li>
                    <li>
                      <strong>跨職能背景：</strong>擁有 2 年設計與 PM 經驗，能精準拆解 UI/UX
                      結構為模組化元件，在工程實作中達成視覺還原。
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              {/* 卡片 1 */}
              <div className="col-span-4 gsap-up">
                <div className="h-full bg-neutral-200 p-6 lg:p-10 hover:-translate-y-2 hover:shadow-xl hover:bg-white transition-all duration-500 cursor-default">
                  <h4 className="text-h3 text-neutral-700 mb-4 lg:mb-6">遊戲啟發的 UI/UX 靈魂</h4>
                  <p className="text-body-m text-neutral-700">
                    打開新遊戲時，我總會思考遊戲體驗是否有流暢及有引導性，促使我前往UI/UX 領域。
                  </p>
                </div>
              </div>

              {/* 卡片 2 */}
              <div className="col-span-4 gsap-up">
                <div className="h-full bg-neutral-200 p-6 lg:p-10 hover:-translate-y-2 hover:shadow-xl hover:bg-white transition-all duration-500 cursor-default">
                  <h4 className="text-h3 text-neutral-700 mb-4 lg:mb-6">低溝通成本的跨界橋樑</h4>
                  <p className="text-body-m text-neutral-700">
                    憑藉 PM 背景能精準預見開發痛點，成為設計與工程間的翻譯官。
                  </p>
                </div>
              </div>

              {/* 卡片 3 */}
              <div className="col-span-4 gsap-up">
                <div className="h-full bg-neutral-200 p-6 lg:p-10 hover:-translate-y-2 hover:shadow-xl hover:bg-white transition-all duration-500 cursor-default">
                  <h4 className="text-h3 text-neutral-700 mb-4 lg:mb-6">深究本質的開發態度</h4>
                  <p className="text-body-m text-neutral-700">
                    善用 AI 工具協作以極大化開發效率，但始終堅持掌握技術底層邏輯。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-section bg-neutral-200 px-4 py-20 lg:py-30">
          <div className="max-w-324 mx-auto">
            <p className="gsap-up tagHeading font-dela text-[30px] lg:text-[56px] lg:mb-14">TECH STACK</p>
            {techStack.map((item) => (
              <div
                key={item.category}
                className="gsap-up mb-10"
              >
                <h4 className="text-h1  mb-4">#{item.category}</h4>
                <div className="flex flex-wrap gap-2 lg:gap-4">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-h5 bg-neutral-800 text-neutral-100 hover:bg-primary-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="scroll-section px-4 py-20 lg:py-30">
          <div className="max-w-324 mx-auto flex flex-col gap-24">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="lg:col-span-7  mx-auto lg:ml-0 gsap-up">
                <p className="tagHeading font-dela text-[30px] lg:text-[56px] mb-4 text-center">EXPERIENCE</p>
                <p className="text-display-2  text-center lg:text-start">#工作經歷</p>
              </div>
              <div className="lg:col-span-5">
                <ul className="flex flex-col gap-6">
                  {experience.map((item) => (
                    <li
                      key={item.company}
                      className="gsap-up"
                    >
                      {/* 將原本 li 上的 class 移到這個內層 div 上，並加上 hover 效果 */}
                      <div className="flex flex-col lg:flex-row justify-between border border-neutral-400 p-4 lg:p-6 hover:bg-white hover:border-neutral-600 hover:pl-8 hover:shadow-sm transition-all duration-300 cursor-default">
                        <div className="mb-4 lg:mb-0">
                          <h4 className="text-h4 mb-2 lg:mb-3">{item.company}</h4>
                          <p className="text-h6 text-neutral-500">{item.title}</p>
                        </div>
                        <p className="text-h6">{item.year}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
              <div className="lg:col-span-7 mx-auto lg:ml-0 gsap-up">
                <p className="tagHeading font-dela text-[30px] lg:text-[56px] mb-4">EDUCATION</p>
                <p className="text-display-2 ">#學歷及得獎紀錄</p>
              </div>
              <div className="lg:col-span-5">
                <ul className="flex flex-col gap-6">
                  {education.map((item) => (
                    <li
                      key={item.school}
                      className="gsap-up"
                    >
                      {/* 同樣將效果放在內層 div */}
                      <div className="flex flex-col lg:flex-row justify-between border border-neutral-400 p-4 lg:p-6 hover:bg-white hover:border-neutral-600 hover:pl-8 hover:shadow-sm transition-all duration-300 cursor-default">
                        <div>
                          <h4 className="text-h4 mb-3">{item.school}</h4>
                          <p className="text-h6 text-neutral-500">{item.title}</p>
                        </div>
                        <p className="text-h6">{item.year}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {complete.map((item, index) => (
                    <div
                      key={index}
                      className="gsap-up lg:col-span-3"
                    >
                      {/* 內層 div 加上 h-full 確保排版等高，並處理 hover 背景微亮與浮起 */}
                      <div className="h-full flex lg:flex-col items-center justify-between lg:items-end bg-neutral-800 p-6 hover:bg-neutral-700 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 cursor-default">
                        <h4 className="text-h4 text-white lg:text-end lg:mb-3">
                          <span className="material-symbols-outlined align-bottom me-2">trophy</span>
                          {item.name}
                        </h4>
                        <h6 className="text-h6 text-white text-end">{item.year}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="project"
          className="scroll-section bg-neutral-300 px-4 py-20 lg:py-30"
        >
          <div className="max-w-324 mx-auto">
            <h4 className="gsap-up tagHeading font-dela text-[30px] lg:text-[56px] ">SIDE PROJECT</h4>
            {projectData.map((project) => (
              <div
                key={project.id}
                className="gsap-up group bg-white p-4 lg:p-6 mb-10 relative "
              >
                <img
                  src={project.hero}
                  alt={project.projectName}
                  className="w-full h-46.75 lg:h-105 object-cover mb-6"
                />

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  {/* 左側:專案資訊 */}
                  <div className="col-span-1 space-y-3">
                    <p className="px-4 py-2 bg-neutral-800 text-white text-h4 inline-block">{project.tags}</p>
                    <h2 className="text-display-2 ">{project.projectName}</h2>
                    <p className="text-label-m">{project.category}</p>

                    <p className="text-body-s">{project.intro}</p>
                    <hr />
                    <p className="text-body-s whitespace-pre-line leading-relaxed">{project.highlights}</p>
                  </div>

                  {/* 右側技術挑戰區塊 (手風琴) */}
                  <div className="col-span-1 space-y-4">
                    <h4 className="text-h4"># 技術實踐與開發攻克</h4>
                    <div className="flex flex-col space-y-4">
                      {project.challenges.map((item) => (
                        <div key={item.title}>
                          <div
                            className="bg-neutral-200 flex justify-between px-3 py-5 cursor-pointer hover:bg-neutral-300 transition-colors"
                            onClick={() => setActiveTitle(activeTitle === item.title ? null : item.title)}
                          >
                            <p className="text-h6">{item.title}</p>
                            <span
                              className={`material-symbols-outlined transition-transform duration-300 ${
                                activeTitle === item.title ? "rotate-180" : ""
                              }`}
                            >
                              keyboard_arrow_down
                            </span>
                          </div>

                          <div
                            className={`grid transition-all duration-300 ease-in-out ${
                              activeTitle === item.title ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            }`}
                          >
                            <div className="overflow-hidden">
                              <div className="p-4 bg-white border border-t-0 border-neutral-200 whitespace-pre-line">
                                <p className="text-body-s">{item.content}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 右上角 Hover 出現的連結區塊 */}
                <div className="space-y-2 lg:space-y-0 lg:flex mt-4 lg:mt-0 lg:absolute lg:top-0 lg:right-0 ">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 lg:flex-none flex items-center justify-center gap-1 p-3 bg-neutral-800 text-white hover:bg-primary-300 transition-colors border-r border-neutral-700"
                  >
                    <span className="text-h6 ">LIVE DEMO</span>
                    <span className="material-symbols-outlined text-[20px] lg:text-[24px]!">arrow_outward</span>
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 lg:flex-none flex items-center justify-center gap-1 p-3 bg-neutral-800 text-white hover:bg-primary-300 transition-colors"
                  >
                    <span className="text-h6 ">REPO</span>
                    <span className="material-symbols-outlined text-[20px] lg:text-[24px]!">code</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="archive"
          className="scroll-section px-4 py-20 lg:py-30"
        >
          <div className="max-w-324 mx-auto">
            {archiveSections.map((section) => (
              <div
                key={section.title}
                className="gsap-up mb-20 last:mb-0"
              >
                <h3 className="tagHeading font-dela text-[30px] lg:text-[56px] text-center mx-auto lg:mx-0 lg:mb-12">
                  {section.title}
                </h3>
                <div className="flex flex-col">
                  {section.data.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => openModal(item)}
                      onMouseEnter={() => setHoveredImage(item.hero)} // 加入 Hover 觸發圖片預覽
                      onMouseLeave={() => setHoveredImage(null)} // 離開時清除圖片
                      className="py-6 border-b border-neutral-400 last:border-0 
                     cursor-pointer transition-all duration-300 ease-out
                     hover:translate-x-3 hover:ps-4 relative z-10"
                    >
                      <div className="flex justify-between items-center gap-2 mb-5 pointer-events-none">
                        <h4 className="text-h4">{item.name}</h4>
                        <h5 className="text-label-m">{item.year}</h5>
                      </div>
                      <div className="flex flex-wrap gap-2 pointer-events-none">
                        {item.roles.map((role, index) => (
                          <p
                            key={index}
                            className="bg-neutral-600 text-white py-2 px-3 text-label-m"
                          >
                            {role}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default Home;
