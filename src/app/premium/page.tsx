import type { Metadata } from "next";
import Link from "next/link";
import { premiumGroups } from "@/data/premium";

export const metadata: Metadata = {
  title: "프리미엄 다도",
  description:
    "송나라 여요세트 다기와 함께하는 티읕의 프리미엄 다도. 보이숙차·보이생차·우롱차·홍차 프리미엄 라인업.",
};

export default function PremiumPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="page-eyebrow">PREMIUM</p>
          <h1 className="page-title">프리미엄 다도</h1>
          <p className="page-subtitle">엄선된 명품 차와 함께하는 다도 시간</p>
          <p className="page-desc">
            중국 명산지에서 들여온 프리미엄 찻잎과
            <br />
            송나라 여요세트 다기로 정성껏 다도를 경험해보세요.
          </p>
        </div>
      </section>

      <section className="premium-intro">
        <div className="container">
          <span className="premium-note">2026 현재 시가 · 1인 기준</span>
          <p
            style={{
              maxWidth: "640px",
              margin: "0 auto",
              color: "var(--color-text-light)",
              lineHeight: 1.8,
            }}
          >
            티읕의 프리미엄 라인업은 매일의 한 잔을 넘어, <br />
            중국 명산지의 풍토와 시간이 담긴 차를 정성껏 우려 드리는 다도 경험입니다.
          </p>
        </div>
      </section>

      <section className="premium-list-section">
        <div className="container">
          {premiumGroups.map((group) => (
            <div className="premium-group" key={group.title}>
              <div className="premium-group-head">
                <h2 className="premium-group-title">
                  {group.title}
                  {group.titleSub ? (
                    <>
                      {" "}
                      <span
                        style={{
                          fontSize: "0.6em",
                          color: "var(--color-text-light)",
                          fontWeight: 400,
                        }}
                      >
                        {group.titleSub}
                      </span>
                    </>
                  ) : null}
                </h2>
                <span className="premium-group-origin">ORIGIN · {group.origin}</span>
              </div>
              <div className="premium-items">
                {group.items.map((item) => (
                  <div className="premium-item" key={item.name}>
                    <span className="premium-item-name">{item.name}</span>
                    <span className="premium-item-price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="dagi-section">
        <div className="container">
          <div className="dagi-card">
            <div className="dagi-title-block">
              <p className="dagi-eyebrow">BASIC TEAWARE</p>
              <h2 className="dagi-title">
                기본 다기
                <br />
                <span style={{ color: "var(--color-accent)", fontSize: "0.8em" }}>여요세트</span>
              </h2>
            </div>
            <p className="dagi-desc">
              송나라 시절 황제의 요청으로 만들어진 작품, 여요(汝窯).
              <br />
              크고 작은 사이에 미세한 빙렬(氷裂)이 새겨져,
              <br />
              사용할수록 차맛과 함께 깊이를 더해가는 다기입니다.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "60px 0 100px",
          backgroundColor: "var(--color-bg)",
          textAlign: "center",
        }}
      >
        <div className="container">
          <p
            style={{
              color: "var(--color-text-light)",
              fontSize: "14px",
              lineHeight: 1.8,
              maxWidth: "640px",
              margin: "0 auto",
            }}
          >
            * 프리미엄 다도는 매장 내에서만 제공됩니다.
            <br />* 시가 적용 메뉴로, 일부 차는 시기에 따라 가격이 변동될 수 있습니다.
            <br />* 다도 체험 예약은 매장에 문의해 주세요.
          </p>
          <div style={{ marginTop: "36px" }}>
            <Link href="/menu" className="btn btn-outline-dark">
              전체 메뉴 보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
