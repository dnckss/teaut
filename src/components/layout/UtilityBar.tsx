import Link from "next/link";
import { utilityNav } from "@/data/site";

export default function UtilityBar() {
  return (
    <div className="utility-bar">
      <div className="container">
        <ul className="utility-nav">
          {utilityNav.map((item) => (
            <li key={item.label}>
              {/* 회원·고객센터 등은 백엔드 단계에서 실제 라우트로 연결 예정 (현재 placeholder) */}
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
          <li>
            <Link href="/#store" className="utility-store">
              매장찾기
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
