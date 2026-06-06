"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// legacy main.js setupSmoothScroll() 재현: 헤더(+ 메뉴 탭) 높이만큼 보정해 부드럽게 스크롤
export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const el = document.querySelector(href);
      if (!el) return;

      e.preventDefault();
      const header = document.querySelector<HTMLElement>(".main-header");
      const headerH = header?.offsetHeight ?? 80;
      const catNav = document.querySelector<HTMLElement>(".cat-nav");
      const catH =
        catNav && getComputedStyle(catNav).position === "sticky"
          ? catNav.offsetHeight
          : 0;
      const top =
        el.getBoundingClientRect().top + window.pageYOffset - (headerH + catH + 20);
      window.scrollTo({ top, behavior: "smooth" });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  return null;
}
