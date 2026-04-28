export const techStack = [
  {
    category: "Front-End",
    skills: ["VITE", "React", "JavaScript", "AXIOS", "HTML5 / CSS3", "Tailwind", "Bootstrap", "GIT"],
  },
  {
    category: "Design",
    skills: ["Figma", "Wordpress", "Elementor", "illustrator", "Photoshop", "AE", "Id", "Pr"],
  },
];

export const experience = [
  { company: "酷澎股份有限公司", title: "詢價專案人員", year: "2025.08 - 2026.03" },
  { company: "海陽光鮮股份有限公司", title: "設計與專案經理", year: "2023.07 - 2025.07" },
  { company: "森柒概念", title: "設計實習生", year: "2023.02 - 2023.06" },
];

export const education = [
  { school: "亞洲大學 ", title: "視覺傳達系", year: "2019 - 2023" },
  { school: "桃園市立壽山高中", title: "普通科", year: "2016 - 2019" },
];

export const complete = [
  { name: "TISDC 決賽入圍", year: "2024" },
  { name: "紅點設計獎 Winner", year: "2023" },
  { name: "TISDC 決賽入圍", year: "2023" },
  { name: "紅點設計獎 Winner", year: "2022" },
];

export const projectData = [
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
          "• 狀態管理: 使用 Redux Toolkit 建立 8 個 Slice 統籌全域狀態。\n• 表單驗證: 整合 React Hook Form 處理 5+ 種表單邏輯。\n• API 整合: 串接 20+ 個 API，處理商品 CRUD 與訂單管理。\n• 獨立後台: 開發管理系統，支援商品上架、分類管理與圖片上傳。",
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
    category: "SERVERLESS PLATFORM‧2026",
    intro:
      "整合 React 與 Firebase 的品牌形象網站。系統建構於 Firebase BaaS 架構並導入 GSAP。前期規劃2週完成 Figma 稿與資料庫設計；專注開發10天內達成 React 元件化、Firebase 串接與 RWD 適配。",
    challenges: [
      {
        title: "開發亮點與歷程",
        content:
          "• BaaS 系統整合：實作 Firebase Auth 狀態持久化，並正規化設計 4 個 Firestore 集合與 Storage 存儲架構。\n" +
          "• 資料流封裝：建立獨立的 Service Layer 處理資料庫操作，實現高度解耦的 React 元件設計。\n" +
          "• 網站效能優化：基於 Vite 環境開發，並運用 Code Splitting 技術將載入效能從5秒優化到2秒。",
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

export const archiveProjects = [
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

export const RecognitionsProjects = [
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

export const archiveSections = [
  { title: "Design & PM", data: archiveProjects },
  { title: "Recognitions", data: RecognitionsProjects },
];
