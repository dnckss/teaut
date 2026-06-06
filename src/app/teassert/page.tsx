import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { teassertItems } from "@/data/teassert";

export const metadata: Metadata = {
  title: "티저트 Teassert",
  description:
    "차로 만들어낸 세상 어디에도 없는 티읕만의 디저트. 보이 티라미수, 원두 초콜릿, 티 버터 크래커, 보이 약밥, 오란다.",
};

export default function TeassertPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="page-eyebrow">TEASSERT</p>
          <h1 className="page-title">티저트</h1>
          <p className="page-subtitle">Tea + Dessert · 티읕만의 시그니처 디저트</p>
        </div>
      </section>

      <section className="teassert-intro">
        <div className="container">
          <h2>
            차로 만들어 낸,
            <br />
            세상 어디에도 없는 티읕만의{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>
              &quot;티저트&quot;
            </em>
          </h2>
          <p>차의 풍미와 디저트의 즐거움이 만나, 새로운 한 입을 선사합니다.</p>
        </div>
      </section>

      <section className="teassert-feature-section">
        <div className="container">
          <div className="feature-card">
            <div className="feature-visual">
              <Image
                src="/teassert/cake.png"
                alt="티읕 시그니처 보이 티라미수 홀케이크"
                fill
                sizes="(max-width: 768px) 1vw, 600px"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <div className="feature-text">
              <p className="feature-eyebrow">SIGNATURE · 티읕 시그니처</p>
              <h2 className="feature-name">
                Pu&apos;er
                <br />
                Tiramisu
              </h2>
              <p className="feature-name-kr">티읕 시그니처 보이 티라미수</p>
              <p className="feature-desc">
                커피 대신 보이차청을 사용해
                <br />
                레이디핑거와 생크림으로 만든 정통 티라미수.
                <br />
                세상 어디에도 없는 티읕만의 시그니처!
              </p>
              <span className="feature-tag">홀케이크 주문 · 카운터 문의</span>
            </div>
          </div>
        </div>
      </section>

      <section className="teassert-grid-section">
        <div className="container">
          <div className="cat-header">
            <p className="cat-eyebrow">TEASSERT MENU</p>
            <h2 className="cat-title">티저트 메뉴</h2>
            <p className="cat-desc">차의 깊은 풍미를 디저트에 담은, 티읕만의 특별한 한 입</p>
          </div>

          <div className="teassert-grid">
            {teassertItems.map((item) => (
              <article className="teassert-card" key={item.name}>
                <div className="teassert-visual" style={{ background: item.gradient }}>
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 280px"
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <span
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "60px",
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      {item.char}
                    </span>
                  )}
                </div>
                <div className="teassert-body">
                  <h3>{item.name}</h3>
                  <p className="en-name">{item.en}</p>
                  <p className="price">{item.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "80px 0",
          backgroundColor: "var(--color-bg-warm)",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "32px",
              fontWeight: 500,
              marginBottom: "16px",
            }}
          >
            차 한 잔과 함께
          </h2>
          <p style={{ color: "var(--color-text-light)", marginBottom: "32px" }}>
            티저트는 티읕의 차 한 잔과 함께 가장 빛납니다.
          </p>
          <Link href="/menu" className="btn btn-primary">
            차 메뉴 보러가기
          </Link>
        </div>
      </section>
    </>
  );
}
