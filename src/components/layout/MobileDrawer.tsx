"use client";

import Link from "next/link";
import { useEffect } from "react";
import { site, mainNav, utilityNav } from "@/data/site";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ open, onClose }: Props) {
  // 드로어 열렸을 때 body 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Esc 로 닫기
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className={open ? "mobile-drawer is-open" : "mobile-drawer"}
      id="mobileDrawer"
      aria-hidden={!open}
    >
      <div className="drawer-backdrop" onClick={onClose} />
      <aside className="drawer-panel">
        <div className="drawer-head">
          <Link href="/" className="drawer-logo" onClick={onClose}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={site.logo} alt={site.name} />
          </Link>
          <button
            className="drawer-close"
            type="button"
            onClick={onClose}
            aria-label="닫기"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="drawer-nav">
          <ul>
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={onClose}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="drawer-utility">
          {utilityNav.map((item) => (
            <a key={item.label} href={item.href} onClick={onClose}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="drawer-footer">
          <p>{site.copyright.replace(". All rights reserved.", "")}</p>
        </div>
      </aside>
    </div>
  );
}
