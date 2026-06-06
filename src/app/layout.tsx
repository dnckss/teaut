import type { Metadata } from "next";
import type { ReactNode } from "react";

// 원본 디자인 CSS (그대로 이식) → 오버라이드 순서대로 임포트
import "@/styles/style.css";
import "@/styles/sub.css";
import "./globals.css";

import { site } from "@/data/site";
import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/layout/ScrollReveal";
import SmoothScroll from "@/components/layout/SmoothScroll";

export const metadata: Metadata = {
  // TODO(Phase 4): 실제 배포 도메인으로 교체
  metadataBase: new URL("https://teaut.example.com"),
  title: {
    default: `${site.name} ${site.nameKo} | ${site.tagline}`,
    template: `%s | ${site.name} ${site.nameKo}`,
  },
  description: site.description,
  icons: { icon: site.logo },
  openGraph: {
    title: `${site.name} ${site.nameKo}`,
    description: site.description,
    type: "website",
    images: [site.logo],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <UtilityBar />
        <Header />
        {children}
        <Footer />
        <ScrollReveal />
        <SmoothScroll />
      </body>
    </html>
  );
}
