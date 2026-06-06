"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// legacy main.js setupReveal() 재현: 스크롤 시 페이드+업 애니메이션
const REVEAL_SELECTORS = [
  ".menu-card",
  ".store-card",
  ".news-card",
  ".section-header",
  ".story-text",
  ".story-image",
  ".item-card",
  ".premium-group",
  ".teassert-card",
  ".health-card",
  ".myth-item",
  ".event-step",
  ".cta-card",
  ".feature-card",
  ".dagi-card",
];

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const els = document.querySelectorAll<HTMLElement>(REVEAL_SELECTORS.join(","));
    els.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
