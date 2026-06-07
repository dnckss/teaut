import Image from "next/image";
import Link from "next/link";
import { stores } from "@/data/stores";
import { news } from "@/data/news";

interface HomeSignature {
  href: string;
  title: string;
  desc: string;
  price: string;
  background: string;
  image: string;
  badge?: string;
  badgeClass?: string;
}

// 홈 시그니처 카드는 메뉴 페이지 카드와 문구가 달라 별도 구성 (index.html 원본 그대로)
const homeSignatures: HomeSignature[] = [
  {
    href: "/menu#signature",
    title: "달.보.라 🌸",
    desc: "달콤한 보이차 라떼. 티읕의 대표 시그니처, 부드럽고 깊이 있는 한 잔.",
    price: "6,900원",
    background: "linear-gradient(135deg,#f0a8b8 0%,#c45c75 100%)",
    image: "/menu/dalbora.png",
    badge: "SIGNATURE",
    badgeClass: "new",
  },
  {
    href: "/menu#tea",
    title: "보이차",
    desc: "소화·위장 보호·흙향. 오랜 시간 발효시킨 깊고 진한 보이차.",
    price: "5,500원",
    background: "linear-gradient(135deg,#8b5a3c 0%,#4a2c1a 100%)",
    image: "/menu/boicha.png",
    badge: "BEST",
  },
  {
    href: "/menu#latte",
    title: "차로 만든 달콤한 라떼",
    desc: "아포·홍차·계화·설국·호지 중 선택. 차의 풍미와 우유의 부드러움이 만난 밀크티.",
    price: "7,600원",
    background: "linear-gradient(135deg,#e8d8c0 0%,#b08a5e 100%)",
    image: "/menu/tea-latte.png",
  },
  {
    href: "/menu#cold",
    title: "진짜 홍차 아이스티",
    desc: "진짜 홍차 잎만을 사용해 잡은 건강함과 고급스러움.",
    price: "ICE 7,000원",
    background: "linear-gradient(135deg,#d99a6d 0%,#8b4a26 100%)",
    image: "/menu/real-icetea.png",
    badge: "NEW",
    badgeClass: "new",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">TEA°UT</p>
          <h1 className="hero-title">
            하루 한 잔,
            <br />
            건강한 습관.
          </h1>
          <p className="hero-desc">
            중국의 차 문화와 미국의 자유로움을 더해, 한국에서 탄생한 새로운 티 하우스.
            <br />
            티읕에서 정성껏 내린 차 한 잔을 만나보세요.
          </p>
          <div className="hero-actions">
            <Link href="/menu" className="btn btn-primary">
              메뉴 보기
            </Link>
            <Link href="/story" className="btn btn-outline">
              티읕 이야기
            </Link>
          </div>
        </div>
        <div className="hero-scroll">
          <span>SCROLL</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="promo-banner">
        <div className="container">
          <div className="promo-text">
            <p className="promo-tag">SIGNATURE</p>
            <h2>Pu&apos;er Tiramisu</h2>
            <p>커피 대신 보이차청으로 만든, 티읕만의 시그니처 티라미수</p>
          </div>
          <Link href="/teassert" className="promo-link">
            자세히 보기 →
          </Link>
        </div>
      </section>

      {/* Signature Menu */}
      <section className="menu-section" id="menu">
        <div className="container">
          <div className="section-header center">
            <p className="section-eyebrow">SIGNATURE</p>
            <h2 className="section-title">티읕이 정성껏 내린 차</h2>
            <p className="section-desc">
              전메뉴 100% 수제 · 1인 1잔 · 원산지: 중국
              <br />
              엄선된 찻잎과 깊이 있는 블렌딩으로 완성한 시그니처 메뉴.
            </p>
          </div>

          <div className="menu-grid">
            {homeSignatures.map((s) => (
              <Link href={s.href} className="menu-card" key={s.title}>
                <div className="menu-img" style={{ background: s.background }}>
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    style={{ objectFit: "cover" }}
                  />
                  {s.badge ? (
                    <span
                      className={s.badgeClass ? `menu-badge ${s.badgeClass}` : "menu-badge"}
                    >
                      {s.badge}
                    </span>
                  ) : null}
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="menu-price">{s.price}</span>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "56px" }}>
            <Link href="/menu" className="btn btn-outline-dark">
              전체 메뉴 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="story-section" id="story">
        <div className="container story-inner">
          <div className="story-text">
            <p className="section-eyebrow">OUR STORY</p>
            <h2 className="section-title">
              차 한 잔에
              <br />
              담긴 정성
            </h2>
            <p>
              티읕(Tea°ut)은 한국어의 첫 자음 ㅌ에서 시작되었습니다. 중국에 살며 자연스레
              스며든 차 문화에, 미국 유학 시절 느꼈던 자유로움을 더해 한국에서 탄생한 티
              하우스입니다.
            </p>
            <p>
              &quot;차는 물맛이다&quot;, &quot;다기를 사용해 시간을 들여야 한다&quot; — 이런
              고정관념을 깨고, 음료화·테이크아웃 등 새로운 방식으로 차를 더 쉽고 친근하게 즐길
              수 있도록 제안합니다.
            </p>
            <Link href="/story" className="btn btn-outline-dark">
              티읕 이야기 →
            </Link>
          </div>
          
        </div>
      </section>

      {/* CTA Grid */}
      <section style={{ padding: "120px 0", backgroundColor: "var(--color-bg)" }}>
        <div className="container">
          <div className="cta-grid">
            <Link href="/premium" className="cta-card">
              <p className="cta-eyebrow">PREMIUM</p>
              <h3>프리미엄 다도</h3>
              <p>
                송나라 여요세트 다기와 함께하는 명품 차 한 잔의 시간.
                보이숙차·생차·우롱차·홍차 프리미엄 라인업.
              </p>
              <span className="cta-arrow">→</span>
            </Link>
            <Link href="/teassert" className="cta-card">
              <p className="cta-eyebrow">TEASSERT</p>
              <h3>티저트</h3>
              <p>
                차로 만들어낸 세상 어디에도 없는 티읕만의 디저트. 보이 티라미수, 원두 초콜릿,
                보이 약밥.
              </p>
              <span className="cta-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Store */}
      <section className="store-section" id="store">
        <div className="container">
          <div className="section-header center">
            <p className="section-eyebrow">FIND A STORE</p>
            <h2 className="section-title">가까운 티읕 매장</h2>
            <p className="section-desc">
              전국 어디서나, 당신의 일상 가까이에서 티읕을 만날 수 있어요.
            </p>
          </div>

          <div className="store-grid">
            {stores.map((store) => (
              <div className="store-card" key={store.name}>
                <h3>{store.name}</h3>
                <p className="store-address">{store.address}</p>
                <p className="store-hours">{store.hours}</p>
              </div>
            ))}
          </div>

          <div className="store-cta">
            <a href="#" className="btn btn-primary">
              전체 매장 보기
            </a>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="news-section" id="news">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">WHAT&apos;S NEW</p>
            <h2 className="section-title">티읕의 새소식</h2>
          </div>
          <div className="news-grid">
            {news.map((item) => (
              <article className="news-card" key={item.title}>
                <p className="news-date">{item.date}</p>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
