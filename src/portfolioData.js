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
    category: "E-COMMERCE‧2025-2026",

    intro:
      "法式甜點線上購物平台，涵蓋前台購物車與 Admin 後台系統。6 週規劃 + 18 天開發完成 15+ 頁面，專注於狀態管理與結帳流程實作。",
    highlights:
      "• 狀態管理重構: 導入 RTK 解決逐層傳遞問題，提升程式可讀性與擴展性。\n• 表單驗證處理: 整合 React Hook Form 處理結帳與註冊等 5+ 種表單驗證。\n• API 串接整合: 介接 20+ 個 RESTful API，建置資料映射層處理格式差異。\n• 獨立後台開發: 建置 Admin Panel 支援商品 CRUD 與 Route Guard 權限控管。",
    challenges: [
      {
        title: "挑戰 1：Redux 狀態集中管理",
        content:
          "【痛點】初期使用 Props Drilling 傳遞購物車與會員狀態，隨功能擴增導致元件層級過深，狀態難以追蹤。\n\n【實作】導入 Redux Toolkit 將購物車、使用者、訂單等狀態拆分為 8 個獨立 Slice 集中管理，並搭配 useSelector 提取資料。\n\n【結果】解決跨層級資料傳遞問題，落實關注點分離，提升 UI 元件的可維護性。",
      },
      {
        title: "挑戰 2：API 資料正規化與錯誤攔截",
        content:
          "【痛點】後端 API 回傳的資料結構與 UI 介面需求不符，且缺乏統一的錯誤處理機制。\n\n【實作】在 API 與 UI 層間建置「資料映射層 (Data Mapping)」預先清洗與格式化資料。並結合 Axios Interceptor 統一攔截 401/500 錯誤。\n\n【結果】統一前端資料格式，並驅動全域 Loading 與 Toast 提示，提升系統容錯率與使用者體驗。",
      },
      {
        title: "挑戰 3：React Hook Form 結帳邏輯",
        content:
          "【實作】使用 React Hook Form 構建結帳表單。透過註冊欄位規則實作即時格式驗證，並結合元件狀態完成動態運費計算。\n\n【結果】減少不必要的元件重新渲染 (Re-render)，確保送出至 API 的訂單 payload 格式正確。",
      },
      {
        title: "挑戰 4：CSS 渲染衝突排查",
        content:
          "【痛點】專案導入 AOS 動畫庫，其 transform 屬性與 Bootstrap 5 網格系統產生位移衝突。\n\n【實作】利用 Chrome DevTools 檢測並定位衝突節點。針對受影響區塊移除 AOS，改以原生 CSS Transition 實作動態效果。\n\n【結果】解決跑版問題，在維持視覺動態效果的同時確保版面穩定。",
      },
    ],
  },
  {
    id: "oops",
    demo: "https://carol0127.github.io/OOPS/",
    repo: "https://github.com/Carol0127/OOPS",
    hero: "https://github.com/Carol0127/PortfolioPhoto/blob/main/%E6%BA%90%E5%88%9D%E7%B6%AD%E5%BA%A6.webp?raw=true",
    projectName: "OOPS 形象網站",
    tags: "REACT + VITE + Firebase + Tailwind",
    category: "SERVERLESS PLATFORM‧2026",
    intro:
      "整合 React 與 Firebase 的品牌形象網站。前期規劃 2 週完成視覺與資料庫設計；隨後於 10 天內完成 React 元件化、Firebase 串接與 RWD 適配，並導入 GSAP 動畫。",

    highlights:
      "• BaaS 系統整合: 導入 Firebase Auth 與 Firestore，規劃 4 個集合處理資料建模。\n• 資料流解耦: 建立獨立 Service Layer 抽離資料庫邏輯，降低元件耦合。\n• 網站效能調校: 配置 Vite Code Splitting 將載入時間由 5 秒縮短至 2 秒。\n• 即時資料同步: 完成前台表單提交與後台 CRUD 即時動態渲染。",
    challenges: [
      {
        title: "挑戰 1：BaaS 獨立開發與 Service Layer 封裝",
        content:
          "【痛點】受限於後端資源，難以獨立實作動態資料庫。若將 Firebase 查詢直寫於元件中，容易導致代碼高度耦合。\n\n【實作】導入 Firebase (BaaS) 自主規劃 Firestore 資料建模。建立 Service Layer 抽離 CRUD 與 Auth 邏輯。\n\n【結果】React 元件僅需呼叫 Service 方法，實現關注點分離，縮短專案的開發週期。",
      },
      {
        title: "挑戰 2：權限防護與即時資料同步",
        content:
          "【實作】整合 Firebase Auth 與 React Router 實作 Route Guard (路由守衛)，未授權使用者自動導向登入頁。\n\n【結果】前台聯絡表單運用 Firestore 的 onSnapshot 特性，讓提交資料即時同步至後台管理端。",
      },
      {
        title: "挑戰 3：Vite 底層效能調校",
        content:
          "【痛點】網站包含大量影像與動畫，初始載入約 5 秒，影響 LCP 指標。\n\n【實作】配置 Vite 的 manualChunks 將第三方套件 (node_modules) 獨立打包 (Vendor Splitting) 以避免主程式碼阻塞，並執行圖片壓縮優化。\n\n【結果】將初始載入時間縮短至 2 秒以內，顯著改善網頁載入效能。",
      },
      {
        title: "挑戰 4：AI 協作與 GSAP 動畫實作",
        content:
          "【痛點】複雜的滾動觸發與序列動畫若純手工撰寫，將耗費較多的開發時間。\n\n【實作】採用 AI 輔助生成 GSAP 邏輯雛形，後續再由人工手動精準調校。\n\n【結果】高效率完成品牌視覺的動態實作，並確保跨裝置動畫的流暢度。",
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
