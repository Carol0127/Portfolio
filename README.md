## Carol Chen (陳意涵)

**Front-End Developer** 擁有 2 年視覺設計與專案管理經驗，目前專注於 React 開發。
期許消弭設計與開發間的溝通落差，並將累積的設計經驗導入實作中。

[Portfolio](https://carol0127.github.io/Portfolio/) | [Email](mailto:a52524444@gmail.com)

# 🥐 La Nuit Puff - 法式甜點電商平台

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646cff.svg)](https://vitejs.dev/)
[![Redux](https://img.shields.io/badge/Redux-Toolkit-764abc.svg)](https://redux-toolkit.js.org/)

> **「從美感出發，以邏輯落地。」**
>
> 這是一個獨立開發的 B2C 電商平台，專注於流暢的購物體驗與嚴謹的後台管理系統。

## 📖 專案介紹 (Project Intro)

本專案旨在建立一套完整的電子商務解決方案。開發核心在於實踐 **Redux Toolkit** 的全域狀態管理，並處理 20+ 個 API 的非同步資料流。

## 🛠️ 技術棧 (Tech Stack)

- **Framework:** React 19 (Vite)
- **State Management:** Redux Toolkit (8+ Slices)
- **Styling:** Bootstrap 5 / SCSS
- **Form Handling:** React Hook Form
- **Animation:** AOS (Animate On Scroll)
- **API Control:** Axios

## ✨ 核心功能 (Key Features)

- **完整購物流程：** 包含商品分類、加入購物車、訂單結帳與狀態追蹤。
- **後台管理系統 (CMS)：** 獨立開發商品 CRUD 系統、分類管理與圖片上傳功能。
- **全域狀態同步：** 確保前台操作與後台資料流即時同步。
- **回應式設計 (RWD)：** 針對多種載具進行介面優化，提供一致的視覺體驗。

## 🧠 技術挑戰與解決方案 (Challenges & Solutions)

### 挑戰一：資料欄位與視覺需求的映射

**問題：** 原始 API 回傳資料不足以支撐精細的設計排版。
**對策：** 在 API 進入組件前實作 Data Mapping 邏輯，進行資料補完與格式化，維持前端介面的豐富度。

### 挑戰二：CSS 渲染衝突排查

**問題：** AOS 動畫屬性與 Bootstrap 佈局引擎產生位移衝突。
**對策：** 透過開發者工具排查渲染層級，局部改以原生 CSS Transition 替代，成功解決排版問題。

---

[🔗 Live Demo](https://carol0127.github.io/LaNuitPuff/) | [📂 Source Code](https://github.com/Carol0127/LaNuitPuff)

# 👾 OOPS - 品牌形象與全端互動平台

[![Firebase](https://img.shields.io/badge/Firebase-BaaS-ffca28.svg)](https://firebase.google.com/)
[![GSAP](https://img.shields.io/badge/Animation-GSAP-88ce02.svg)](https://greensock.com/gsap/)
[![Tailwind](https://img.shields.io/badge/CSS-Tailwind-38bdf8.svg)](https://tailwindcss.com/)

> **「當原創 IP 遇上全端技術。」**
>
> 結合 Firebase 雲端架構與 GSAP 動畫，打造具備互動感的敘事體驗的品牌網站。

## 📖 專案介紹 (Project Intro)

此專案為 OOPS 原創 IP 的全棧品牌網站，核心挑戰在於 **Firebase (BaaS) 的整合應用** 與 **GSAP 滾動動畫**。透過自主規劃 Firestore 非關聯式資料建模，實作了 Auth 權限控管與資料持久化。這是我將設計美感與全端開發思維完美結合的實踐專案。

## 🛠️ 技術棧 (Tech Stack)

- **Framework:** React 19 (Vite)
- **Database/Auth:** Firebase (Firestore / Storage / Authentication)
- **Animation:** GSAP (ScrollTrigger / Timeline)
- **Styling:** Tailwind CSS (v4)
- **Deployment:** GitHub Pages

## ✨ 核心功能 (Key Features)

- **Firebase 全端整合：** 實作會員登入狀態持久化、Firestore 資料存取與圖片存儲。
- **沉浸式動效：** 運用 GSAP 建立 6+ 個滾動觸發動畫與視差效果。
- **獨立全端開發：** 前期 2 週完成 Figma 稿與資料庫建模，10 天內完成全站開發。
- **高效開發模式：** 導入 AI 協作工具優化動畫語法與架構，極大化產出品質。

## 🧠 技術挑戰與解決方案 (Challenges & Solutions)

### 挑戰一：非關聯式資料庫建模

**問題：** 需在無後端支援下，規劃適合前端展示的資料架構。
**對策：** 自主設計 Firestore 集合架構，精確定義 Data Schema，實現前端獨立完成全棧開發。

### 挑戰二：複雜動畫的效能平衡

**問題：** 多重 ScrollTrigger 觸發時可能導致畫面卡頓。
**對策：** 優化 GSAP Timeline 節奏，並結合 `will-change` 屬性提升 GPU 渲染效率，確保動畫流暢度。

---

[🔗 Live Demo](https://carol0127.github.io/OOPS/) | [📂 Source Code](https://github.com/Carol0127/OOPS)
