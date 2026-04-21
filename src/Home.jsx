import { useState, useEffect, useRef } from "react";
import ProjectModal from "./components/ProjectModal";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  {
    category: "Front-End",
    skills: ["VITE", "React", "JavaScript", "AXIOS", "HTML5 / CSS3", "Tailwind", "Bootstrap", "GIT"],
  },
  {
    category: "Design",
    skills: ["Figma", "Wordpress", "Elementor", "illustrator", "Photoshop", "AE", "Id", "Pr"],
  },
];

const experience = [
  { company: "酷澎股份有限公司", title: "詢價專案人員", year: "2025.08 - 2026.03" },
  { company: "海陽光鮮股份有限公司", title: "設計與專案經理", year: "2023.07 - 2025.07" },
  { company: "森柒概念", title: "設計實習生", year: "2023.02 - 2023.06" },
];

const education = [
  { school: "亞洲大學 ", title: "視覺傳達系", year: "2019 - 2023" },
  { school: "桃園市立壽山高中", title: "普通科", year: "2016 - 2019" },
];

const complete = [
  { name: "TISDC 決賽入圍", year: "2024" },
  { name: "紅點設計獎 Winner", year: "2023" },
  { name: "TISDC 決賽入圍", year: "2023" },
  { name: "紅點設計獎 Winner", year: "2022" },
];

const projectData = [
  {
    id: "la-nuit-puff",
    demo: "https://carol0127.github.io/LaNuitPuff/",
    repo: "https://github.com/Carol0127/LaNuitPuff",
    hero: "https://github.com/Carol0127/PortfolioPhoto/blob/main/lanuit.jpg?raw=true",
    projectName: "La Nuit Puff",
    tags: "REACT + VITE + Bootstrap",
    category: "E-COMMERCE‧2026",
    intro:
      "專為法式甜點設計的線上購物平台，包含完整購物車邏輯與後台管理系統，專注於流暢的結帳流程與現代化的 UI 介面。歷經 6 週設計規劃後，用 18 天業餘時間完成 15+ 頁面 React 開發。整合 Redux 全域狀態管理與獨立後台 CRUD 系統。",
    challenges: [
      {
        title: "開發亮點與歷程",
        content:
          "• 狀態管理: 使用 Redux Toolkit 建立 8 個 Slice 統籌全域狀態。\n• 表單驗證: 整合 React Hook Form 處理 5+ 種複雜表單邏輯。\n• API 整合: 串接 20+ 個 API，處理商品 CRUD 與訂單管理。\n• 獨立後台: 開發管理系統，支援商品上架、分類管理與圖片上傳。",
      },
      {
        title: "挑戰 1: CSS 動畫庫衝突",
        content:
          "在開發過程中發現 API 回傳的原始資料欄位無法完全支援視覺設計的需求。為確保不影響進度，我梳理了前端資料映射邏輯，在資料進入組件前進行補完與格式化，確保前端介面具備豐富展示內容，同時維持資料結構嚴謹性。",
      },
      {
        title: "挑戰 2: 購物車狀態同步",
        content:
          "專案中使用 AOS 增加視覺動態，但在特定頁面發現其 transform 屬性會與 Bootstrap 5 佈局引擎產生位移衝突。局部優化：針對衝突區塊停用 AOS 並改以原生 CSS 轉場實作；相容良好的頁面則保留。這次經驗鍛鍊了我排查 CSS 渲染衝突的能力，在技術限制與視覺效果間找到最佳平衡。",
      },
    ],
  },
  {
    id: "oops",
    demo: "https://carol0127.github.io/OOPS/",
    repo: "https://github.com/Carol0127/OOPS",
    hero: "https://github.com/Carol0127/PortfolioPhoto/blob/main/%E6%BA%90%E5%88%9D%E7%B6%AD%E5%BA%A6.webp?raw=true",
    projectName: "OOPS",
    tags: "REACT + VITE + Firebase + Tailwind",
    category: "FULL-STACK PLATFORM‧2026",
    intro:
      "整合 React 與 Firebase 的品牌形象網站。系統建構於 Firebase BaaS 架構並導入 GSAP。前期規劃2週完成 Figma 稿與資料庫設計；專注開發10天內達成 React 元件化、Firebase 串接與 RWD 適配。",
    challenges: [
      {
        title: "開發亮點與歷程",
        content:
          "• Firebase 整合: 實作 Auth 狀態持久化，設計 4 個 Firestore 集合架構與 Storage 圖片處理。\n• 動畫系統: 使用 GSAP 建立 6+ 個滾動觸發動畫，包含視差效果與 Timeline 序列。",
      },
      {
        title: "挑戰 1: 獨立開發的全棧解決方案",
        content:
          "過去設計經驗常受限於後端支援，難以實作客製化管理功能。本專案首次採用 Firebase (BaaS)，自主規劃 Firestore 非關聯式資料建模，精確定義前端所需的資料格式，成功實踐前端獨立完成全棧開發的可能性，大幅縮短開發週期並降低維護門檻。",
      },
      {
        title: "挑戰 2: 動態視覺的代碼實作",
        content:
          "專案導入 GSAP 並結合 AI 協作。透過 AI 快速生成動畫語法雛形，再由我手動微調 ScrollTrigger 觸發時機與 Timeline 節奏。",
      },
    ],
  },
];

const archiveProjects = [
  {
    id: "fisheryard",
    hero: "https://github.com/Carol0127/PortfolioPhoto/blob/main/archive/%E5%B0%81%E9%9D%A2%E5%9C%96_fisheryard.webp?raw=true",
    video: "https://www.youtube.com/watch?v=OiE46SjJPvs&t=1s",
    demo: "https://www.fisheryard.com/",
    name: "Fisheryard 全民養殖平台",
    year: "2025",
    roles: ["UIUX設計", "系統邏輯規劃", "系統前後端溝通", "動畫設計"],
    overview:
      "全民養殖平台是一個專為養殖業打造的小額群募平台，致力於讓水產養殖變得更貼近大眾，讓投資者能夠輕鬆參與，同時為養殖戶提供穩定的資金支持，推動產業向更永續的方向發展。平台透過數據化管理與透明化機制，降低門檻，使養殖投資更加簡單、直覺且可信賴。",
    Highlights: [
      "將複雜的「微型投資回報計算」轉譯為前端可呈現的資訊流，提升數位體驗",
      "負責管理 8+ 個核心功能頁面的資訊架構，並確保在模擬投資數據時，UI 能保持高度的易讀性。",
      "定義 8+ 個 API 欄位需求，確保前端展示與後端邏輯精準對接",
      "設計CIS 識別系統並透過資訊圖表化與介紹短片， 降低投資概念理解門檻",
    ],
    photo: [
      "https://github.com/Carol0127/PortfolioPhoto/blob/main/archive/%E5%85%A8%E6%B0%91%E9%A4%8A%E6%AE%96%E5%B9%B3%E5%8F%B0%E5%9C%96%E6%AA%94-1.webp?raw=true",
      "https://github.com/Carol0127/PortfolioPhoto/blob/main/archive/%E5%85%A8%E6%B0%91%E9%A4%8A%E6%AE%96%E5%B9%B3%E5%8F%B0%E5%9C%96%E6%AA%94-2.webp?raw=true",
    ],
  },
  {
    id: "Deep Forest Inn",
    hero: "https://github.com/Carol0127/PortfolioPhoto/blob/main/archive/%E5%B0%81%E9%9D%A2%E5%9C%96_%E6%B7%B1%E6%A3%AE%E6%97%85.webp?raw=true",
    demo: "https://cdesign0.wordpress.com/2024/11/25/%e6%b7%b1%e6%a3%ae%e6%97%85%ef%bc%8edeep-forest-inn/",
    name: "Deep Forest Inn 深森旅",
    year: "2025",
    roles: ["UIUX設計", "訂房系統插件整合", "前後端溝通", "品牌識別設計"],
    overview:
      "深森旅是阿里山的新興旅宿品牌，從品牌創立初期即著手規劃完整的品牌識別系統，融合「日出」、「鐵道」、「飯店名稱」及「便當徽章」等元素，展現奮起湖的獨特人文與自然風貌。在數位應用上，我們為官方網站導入「訂房系統」與「散客便當系統」，提升旅客預訂的便利性，同時優化旅館的自動化管理流程，讓營運更加高效。",
    Highlights: [
      "整合「訂房系統」與「便當預訂」雙功能模組",
      "串接金流 API 處理訂金自動化支付",
      "客製化訂單通知信自動發送邏輯",
    ],
    photo: ["https://github.com/Carol0127/PortfolioPhoto/blob/main/archive/%E6%B7%B1%E6%A3%AE%E6%97%85.webp?raw=true"],
  },
  {
    id: "Your Smile",
    hero: "https://github.com/Carol0127/PortfolioPhoto/blob/main/archive/%E5%B0%81%E9%9D%A2%E5%9C%96_%E9%9C%93%E7%9A%84%E5%BF%AB%E6%A8%82e%E5%AD%B8%E9%99%A2.webp?raw=true",
    name: "Your Smile 霓的快樂E學院",
    year: "2024",
    roles: ["UIUX設計", "系統邏輯規劃", "產品策略規劃"],
    overview:
      "協助霓的快樂Ｅ學院打造全新官方網站，並結合Ｅ化系統，替學院解決人力登記及記帳的問題，並以創辦人理念打造一個溫馨有質感的網站。",
    Highlights: [
      "管理 15+ 門課程資料，定義 3 種繳費週期的資料結構與計算邏輯",
      "設計後台課程管理系統，支援批次上架與編輯",
      "規劃家長前台查詢介面，降低客服詢問成本",
    ],
    photo: [
      "https://github.com/Carol0127/PortfolioPhoto/blob/main/archive/%E9%9C%93%E6%A8%A1%E6%93%AC%E6%AA%94%E6%A1%88.webp?raw=true",
    ],
  },
];

const RecognitionsProjects = [
  {
    id: "Under the Sound of Lian",
    hero: "https://github.com/Carol0127/PortfolioPhoto/blob/main/Recognitions/%E5%B0%81%E9%9D%A2%E5%9C%96_%E8%81%B2%E8%97%BA%E4%B8%8B.webp?raw=true",
    name: "Under the Sound of Lian‧聲藺下",
    year: "2023",
    roles: ["展覽規劃", "文創設計", "海報設計", "視覺傳達"],
    overview:
      "台灣苑裡鎮的藺編工藝迄今已有三百多年，團隊以編織、族群、聲音做為發想，並以黑膠唱片結合苗栗的藺草編織，藺編的每一編就如同黑膠唱片中的一圈圈紋路，乘載了文化及民族的獨特性，並傳承給後代。",
    photo: [
      "https://github.com/Carol0127/PortfolioPhoto/blob/main/Recognitions/%E8%81%B2%E8%97%BA%E4%B8%8B-1.webp?raw=true",
      "https://github.com/Carol0127/PortfolioPhoto/blob/main/Recognitions/%E8%81%B2%E8%97%BA%E4%B8%8B-2.webp?raw=true",
    ],
  },
  {
    id: "In The Name of Beauty",
    hero: "https://github.com/Carol0127/PortfolioPhoto/blob/main/Recognitions/%E5%B0%81%E9%9D%A2%E5%9C%96_%E4%BB%A5%E7%BE%8E%E4%B9%8B%E5%90%8D.webp?raw=true",
    name: "In The Name of Beauty‧以美之名",
    year: "2022",
    roles: ["海報設計", "視覺傳達"],
    overview:
      "為了符合大眾的普遍審美，人們逐漸出現了容貌焦慮，一切不符合大眾審美的都該改變，因此不健康的減肥也開始了。「一切都打著美的名義進行」但美只能有一種嗎？這不單單是尺寸的問題，而是一個大眾健康意識問題。",
    photo: [
      "https://github.com/Carol0127/PortfolioPhoto/blob/main/Recognitions/%E4%BB%A5%E7%BE%8E2.webp?raw=true",
      "https://github.com/Carol0127/PortfolioPhoto/blob/main/Recognitions/%E4%BB%A5%E7%BE%8E3.webp?raw=true",
    ],
  },
];

const archiveSections = [
  { title: "Design & PM", data: archiveProjects },
  { title: "Recognitions", data: RecognitionsProjects },
];

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
                    您好，我是 Carol / 陳意涵，很高興認識您！ 我畢業於亞洲大學視覺傳達設計系，目前擁有 2
                    年視覺設計與專案管理經驗，於2025年決定轉職成為兼具美感與實作力的前端工程師。面對挑戰，我秉持鑽研底層原理的負責態度，致力於建立完整的技術體系，並期許為團隊提供最具效益的解決方案。
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="col-span-4 bg-neutral-200 p-6 lg:p-10 gsap-up">
                <h4 className="text-h3 text-neutral-700 mb-4 lg:mb-6">遊戲啟發的 UI/UX 靈魂</h4>
                <p className="text-body-m text-neutral-700">
                  打開新遊戲時，我總會思考遊戲體驗是否有流暢及有引導性，促使我前往UI/UX 領域。
                </p>
              </div>
              <div className="col-span-4 bg-neutral-200 p-6 lg:p-10 gsap-up">
                <h4 className="text-h3 text-neutral-700 mb-4 lg:mb-6">低溝通成本的跨界橋樑</h4>
                <p className="text-body-m text-neutral-700">
                  憑藉 PM 背景能精準預見開發痛點，成為設計與工程間的翻譯官。
                </p>
              </div>
              <div className="col-span-4 bg-neutral-200 p-6 lg:p-10 gsap-up">
                <h4 className="text-h3 text-neutral-700 mb-4 lg:mb-6">深究本質的開發態度</h4>
                <p className="text-body-m text-neutral-700">
                  善用 AI 工具協作以極大化開發效率，但始終堅持掌握技術底層邏輯。
                </p>
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
                      className="gsap-up flex flex-col lg:flex-row justify-between border border-neutral-400 p-4 lg:p-6"
                    >
                      <div className="mb-4 lg:mb-0">
                        <h4 className="text-h4  mb-2 lg:mb-3">{item.company}</h4>
                        <p className="text-h6 text-neutral-500">{item.title}</p>
                      </div>
                      <p className="text-h6 ">{item.year}</p>
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
                      className="gsap-up flex flex-col lg:flex-row justify-between border border-neutral-400 p-4 lg:p-6"
                    >
                      <div>
                        <h4 className="text-h4  mb-3">{item.school}</h4>
                        <p className="text-h6 text-neutral-500">{item.title}</p>
                      </div>
                      <p className="text-h6 ">{item.year}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {complete.map((item, index) => (
                    <div
                      key={index}
                      className="gsap-up flex lg:flex-col items-center justify-between lg:items-end lg:col-span-3 bg-neutral-800 p-6"
                    >
                      <h4 className="text-h4 text-white lg:text-end lg:mb-3">
                        <span className="material-symbols-outlined align-bottom me-2">trophy</span>
                        {item.name}
                      </h4>
                      <h6 className="text-h6 text-white text-end">{item.year}</h6>
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

                <div className="grid lg:grid-cols-2 gap-6 items-start">
                  <div className="col-span-1 space-y-3">
                    <p className="px-4 py-2 bg-neutral-800 text-white text-h4 inline-block">{project.tags}</p>
                    <h2 className="text-display-2">{project.projectName}</h2>
                    <p className="text-label-m">{project.category}</p>
                    <p className="text-body-s">{project.intro}</p>
                  </div>

                  {/* 右側技術挑戰區塊 (手風琴) */}
                  <div className="col-span-1 space-y-5">
                    <h4 className="text-h4"># 技術實踐與開發攻克</h4>
                    <div className="flex flex-col space-y-5">
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
                <div className="space-y-2 lg:space-y-0 lg:flex mt-4 lg:mt-0 lg:absolute lg:top-0 lg:right-0 transition-opacity duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
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
