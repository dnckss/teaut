import type { Metadata } from "next";
import Link from "next/link";
import MenuExplorer from "@/components/menu/MenuExplorer";

export const metadata: Metadata = {
  title: "메뉴",
  description:
    "티읕의 차, 디카페인, 시그니처, 차라떼, 시원한·따뜻한 차음료, 커피 전체 메뉴. 전메뉴 100% 수제, 1인 1잔.",
};

export default function MenuPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="page-eyebrow">MENU</p>
          <h1 className="page-title">티읕 메뉴</h1>
          <p className="page-subtitle">전메뉴 100% 수제 · 1인 1잔 · 원산지: 중국</p>
          <p className="page-desc">
            &quot;하루 한 잔, 건강한 습관.&quot;
            <br />
            티읕이 정성껏 내린 차 한 잔을 만나보세요.
          </p>
        </div>
      </section>

      <MenuExplorer />

      <section className="menu-cta-section">
        <div className="container">
          <div className="cta-grid">
            <Link href="/premium" className="cta-card">
              <p className="cta-eyebrow">PREMIUM</p>
              <h3>프리미엄 다도</h3>
              <p>여요세트 다기와 함께하는 프리미엄 차 한 잔</p>
              <span className="cta-arrow">→</span>
            </Link>
            <Link href="/teassert" className="cta-card">
              <p className="cta-eyebrow">TEASSERT</p>
              <h3>티저트</h3>
              <p>차로 만들어낸 세상 어디에도 없는 티읕만의 디저트</p>
              <span className="cta-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
