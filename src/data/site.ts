// Tea°ut 티읕 — 브랜드/사이트 공통 데이터 (단일 소스)
// 기존 정적 사이트는 페이지마다 헤더·푸터가 복붙되어 푸터 주소가 서로 달랐음.
// (index = 부산 / 나머지 = 서울) → 여기 한 곳에서 관리해 불일치를 제거한다.

export interface NavItem {
  href: string;
  label: string;
  strong?: boolean;
}

export const site = {
  name: "Tea°ut",
  nameKo: "티읕",
  tagline: "하루 한 잔, 건강한 습관",
  description:
    "중국 차 문화와 미국의 자유로움을 한국에서 만난 티읕. 차로 만든 시그니처 음료와 디저트, 프리미엄 다도까지.",
  
  logo: "/logo.jpg",
  copyright: "© 2026 Tea°ut. All rights reserved.",
  business: {
    // ⚠️ 기존 코드 불일치 → 부산(가장 상세한 표기)을 정본으로 채택. 추후 확인 필요.
    address: "부산 남구 대연동 60-46 B1층",
    ceo: "이혁",
    bizNumber: "010-3574-0954",
    
  },
} as const;

export const mainNav: NavItem[] = [
  { href: "/menu", label: "메뉴" },
  { href: "/premium", label: "프리미엄 다도" },
  { href: "/teassert", label: "티저트" },
  { href: "/story", label: "티읕 스토리" },
  { href: "/#store", label: "매장" },
  { href: "/#news", label: "새소식" },
];

export const utilityNav: NavItem[] = [
  { href: "#", label: "로그인" },
  { href: "#", label: "회원가입" },
  { href: "#", label: "마이페이지" },
  { href: "#", label: "기프트" },
  { href: "#", label: "고객센터" },
];

export interface FooterColumn {
  title: string;
  links: NavItem[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "티읕",
    links: [
      { href: "/story", label: "브랜드 스토리" },
      { href: "#", label: "채용 정보" },
      { href: "#", label: "제휴 문의" },
    ],
  },
  {
    title: "메뉴",
    links: [
      { href: "/menu", label: "전체 메뉴" },
      { href: "/premium", label: "프리미엄 다도" },
      { href: "/teassert", label: "티저트" },
    ],
  },
  {
    title: "약관 및 정책",
    links: [
      { href: "#", label: "이용약관" },
      { href: "#", label: "개인정보처리방침", strong: true },
      { href: "#", label: "위치기반서비스 이용약관" },
    ],
  },
];
