import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showButton, setShowButton] = useState(false); // 👈 新增：控制按鈕是否顯示的狀態
  const menuTl = useRef(null);
  const overlayRef = useRef(null);

  // --- 監聽滾動，控制按鈕顯示 ---
  useEffect(() => {
    const handleScroll = () => {
      // 當滾動距離大於視窗高度的 80% 時（快要離開第一屏時），顯示按鈕
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // 初次載入先檢查一次
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- 選單動畫 Timeline ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      menuTl.current = gsap
        .timeline({ paused: true })
        // 1. 背景浮現
        .to(overlayRef.current, {
          autoAlpha: 1,
          duration: 0.25,
          ease: "power2.inOut",
        })
        // 2. 文字遮罩升起
        .fromTo(
          ".menu-item",
          {
            y: "110%",
            rotation: 3,
          },
          {
            y: "0%",
            rotation: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: "power3.out",
          },
          "-=0.15",
        );
    });
    return () => ctx.revert();
  }, []);

  // --- 監聽選單開關狀態 ---
  useEffect(() => {
    if (menuTl.current) {
      if (isMenuOpen) {
        menuTl.current.play();
        document.body.style.overflow = "hidden"; // 鎖定背景滾動
      } else {
        menuTl.current.reverse();
        document.body.style.overflow = ""; // 解除鎖定
      }
    }
  }, [isMenuOpen]);

  const navItems = ["About", "Project", "Archive"];

  return (
    <div className="pointer-events-none fixed inset-0 z-110">
      {/* 1. 極簡文字按鈕 */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        // 👈 關鍵修改：加入 showButton 的判斷，並加上 translate-y 讓它有「滑出來」的感覺
        className={`absolute top-8 right-8 z-120 font-dela  text-h5 lg:text-h4 transition-all duration-500 uppercase hover:scale-110 
          ${
            showButton || isMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto" // 顯示：透明度 1，回到原位，可點擊
              : "opacity-0 -translate-y-8 pointer-events-none" // 隱藏：透明度 0，往上收起，不可點擊
          }
          ${
            isMenuOpen
              ? "text-white" // 打開時：純白
              : "text-primary-300" // 關閉時：混色
          }
        `}
      >
        {isMenuOpen ? "[ CLOSE ]" : "[ MENU ]"}
      </button>

      {/* 2. 巨型排版覆蓋選單 (Overlay) */}
      <div
        ref={overlayRef}
        className="pointer-events-auto absolute inset-0 bg-neutral-900 z-100 flex flex-col justify-center px-6 lg:px-20 invisible opacity-0"
      >
        <nav className="flex flex-col gap-2 lg:gap-4">
          {navItems.map((item) => (
            <div
              key={item}
              className="overflow-hidden"
            >
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="menu-item block font-dela text-[45px] md:text-[100px] lg:text-[140px] text-white hover:text-transparent hover:[-webkit-text-stroke:2px_white] transition-all duration-300 leading-none uppercase"
              >
                {item}
              </a>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
