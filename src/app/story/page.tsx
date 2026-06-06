import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { healthCards, myths, teaBenefits, eventSteps } from "@/data/story";

export const metadata: Metadata = {
  title: "티읕 스토리",
  description:
    "하루 한 잔, 건강한 습관. 티읕(Tea°ut)의 시작과 건강한 차 이야기, 리뷰 이벤트.",
};

export default function StoryPage() {
  return (
    <>
      <section className="story-hero">
        <div className="container">
          <p className="story-hero-author">TEA°UT STORY</p>
          <h1 className="story-hero-quote">
            &quot;하루 한 잔,
            <br />
            건강한 습관.&quot;
          </h1>
          <p className="story-hero-author">— 티읕(Tea°ut) —</p>
        </div>
      </section>

      <section className="story-content">
        <div className="container">
          <div className="story-block">
            <p className="story-block-eyebrow">OUR BEGINNING</p>
            <h2>차를 처음 만나는 새로운 방식</h2>
            <p className="lead">
              티읕(Tea°ut)은 차를 처음 만나는 새로운 방식의 한 잔을 제안합니다.
            </p>
            <p>
              중국에 살며 자연스레 스며든 차 문화에
              <br />
              미국 유학 시절 느꼈던 자유로움을 더해,
            </p>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--color-primary)",
                fontSize: "19px",
              }}
            >
              한국에서 탄생한 티읕만의 이름으로 시작된 티 하우스입니다.
            </p>
          </div>
        </div>
      </section>

      <section className="myths-section">
        <div className="container">
          <div className="story-block">
            <p className="story-block-eyebrow">BREAKING MYTHS</p>
            <h2>차에 대한 고정관념을 깨고</h2>
            <p>
              티읕은 음료화·테이크아웃 등 새로운 방식으로,
              <br />
              차를 더 쉽고 친근하게 즐길 수 있도록 제안합니다.
            </p>
          </div>

          <div className="myth-list">
            {myths.map((m) => (
              <div className="myth-item" key={m}>
                {m}
              </div>
            ))}
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "50px",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <p style={{ color: "var(--color-text-light)", fontSize: "16px", lineHeight: 1.8 }}>
              이런 고정관념을 깨고,
              <br />
              정확한 소분과 재사용 금지 원칙을 통해
              <br />
              <strong style={{ color: "var(--color-primary)" }}>
                항상 일정한 맛과 품질을 보장
              </strong>
              합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="health-section">
        <div className="container">
          <div className="health-header">
            <p className="story-block-eyebrow">HEALTH BENEFIT</p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px,3.5vw,38px)",
                fontWeight: 500,
                color: "var(--color-text)",
                marginBottom: "18px",
              }}
            >
              하루 한 잔, 건강한 습관
            </h2>
            <p style={{ color: "var(--color-text-light)", maxWidth: "600px", margin: "0 auto" }}>
              차 한 잔에는 우리 몸을 위한 다양한 영양 성분이 담겨 있습니다.
            </p>
          </div>

          <div className="health-grid">
            {healthCards.map((card) => (
              <div className="health-card" key={card.name}>
                <h4>{card.name}</h4>
                <p>
                  {card.lines.map((line, i) => (
                    <Fragment key={line}>
                      {i > 0 ? <br /> : null}
                      {line}
                    </Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>

          <div className="tea-benefit-block">
            <h3>티읕의 차는 어떤게 좋을까?</h3>
            <div className="tea-benefit-list">
              {teaBenefits.map((b) => (
                <div className="tea-benefit-item" key={b.name}>
                  <strong>{b.name}</strong>
                  <span>{b.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="review-event-section">
        <div className="container">
          <div className="review-event-card">
            <p className="story-block-eyebrow">EVENT</p>
            <h2>티읕 리뷰 이벤트</h2>
            <p className="event-sub">— 마니 보아주세요! —</p>

            <div className="event-steps">
              {eventSteps.map((step) => (
                <div className="event-step" key={step.num}>
                  <span className="event-step-num">{step.num}</span>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        style={{ padding: "100px 0", backgroundColor: "var(--color-bg)", textAlign: "center" }}
      >
        <div className="container">
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "28px",
                lineHeight: 1.6,
                color: "var(--color-primary)",
                marginBottom: "40px",
              }}
            >
              오늘 여러분의 한잔이
              <br />
              더 건강해졌으면 합니다.
            </p>
            <Link href="/menu" className="btn btn-primary">
              티읕 메뉴 만나기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
