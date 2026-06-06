"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { menuCategories, type MenuItem } from "@/data/menu";

export default function MenuExplorer() {
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const [activeCat, setActiveCat] = useState<string>("");

  // 카테고리 스크롤스파이 (legacy menu.js)
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".menu-cat");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveCat(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // 모달: body 스크롤 잠금 + Esc 닫기
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      {/* Category Tab Nav */}
      <nav className="cat-nav">
        <div className="container">
          <ul>
            {menuCategories.map((cat) => (
              <li key={cat.id}>
                <a
                  href={`#${cat.id}`}
                  className={activeCat === cat.id ? "cat-link is-active" : "cat-link"}
                  data-cat={cat.id}
                >
                  {cat.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Category sections */}
      {menuCategories.map((cat) => (
        <section
          key={cat.id}
          className={cat.alt ? "menu-cat alt" : "menu-cat"}
          id={cat.id}
        >
          <div className="container">
            <div className="cat-header">
              <p className="cat-eyebrow">{cat.eyebrow}</p>
              <h2 className="cat-title">
                {cat.title}
                {cat.titleSub ? (
                  <>
                    {" "}
                    <span className="cat-sub">{cat.titleSub}</span>
                  </>
                ) : null}
              </h2>
              <p className="cat-desc">{cat.desc}</p>
            </div>

            <div className="item-grid">
              {cat.items.map((item) => (
                <article
                  key={item.id}
                  className={
                    "item-card" +
                    (item.featured ? " featured" : "") +
                    (item.soldout ? " soldout" : "")
                  }
                  data-item={item.id}
                  style={item.soldout ? { cursor: "not-allowed" } : undefined}
                  onClick={() => {
                    if (!item.soldout) setSelected(item);
                  }}
                >
                  <div className={`item-visual ${item.gradient}`}>
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 300px"
                        style={{ objectFit: "cover" }}
                      />
                    ) : null}
                    {item.tag ? (
                      <span
                        className={item.tagClass ? `item-tag ${item.tagClass}` : "item-tag"}
                      >
                        {item.tag}
                      </span>
                    ) : null}
                    {item.image ? null : (
                      <span className="item-letter">{item.letter}</span>
                    )}
                  </div>
                  <div className="item-body">
                    <h3>
                      {item.title}
                      {item.flower ? (
                        <>
                          {" "}
                          <span className="flower">🌸</span>
                        </>
                      ) : null}
                    </h3>
                    <p className="item-note">{item.note}</p>
                    {item.cardExtra ? (
                      <p className="item-extra">{item.cardExtra}</p>
                    ) : null}
                    <div className="price-row">
                      {item.prices.map((p) => (
                        <span className="price" key={p.label}>
                          <em>{p.label}</em> {p.price}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Item Detail Modal */}
      <div
        className={selected ? "modal is-open" : "modal"}
        id="itemModal"
        aria-hidden={!selected}
      >
        <div className="modal-backdrop" onClick={() => setSelected(null)} />
        <div
          className="modal-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
        >
          <button
            className="modal-close"
            type="button"
            onClick={() => setSelected(null)}
            aria-label="닫기"
          >
            ×
          </button>
          {selected ? (
            <div className="modal-body">
              <div className={`modal-visual ${selected.gradient}`}>
                {selected.image ? (
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 420px"
                    style={{ objectFit: "cover" }}
                  />
                ) : null}
                {selected.image ? null : (
                  <span className="modal-letter">{selected.letter}</span>
                )}
              </div>
              <div className="modal-content">
                <p className="modal-eyebrow">{selected.catLabel}</p>
                <h2 id="modalTitle">
                  {selected.title}
                  {selected.flower ? " 🌸" : ""}
                </h2>
                <p className="modal-note">{selected.note}</p>
                <div className="modal-section">
                  <h4>설명</h4>
                  <p>{selected.desc}</p>
                </div>
                {selected.extra ? (
                  <div className="modal-section">
                    <h4>옵션</h4>
                    <p>{selected.extra}</p>
                  </div>
                ) : null}
                <div className="modal-prices">
                  {selected.prices.map((p) => (
                    <div className="modal-price" key={p.label}>
                      <em>{p.label}</em>
                      <strong>{p.price}</strong>
                    </div>
                  ))}
                </div>
                <p className="modal-foot">전메뉴 100% 수제 · 1인 1잔 · 원산지: 중국</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
