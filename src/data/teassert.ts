export interface TeassertItem {
  name: string;
  en: string;
  price: string;
  image?: string; // 제품 사진 (없으면 gradient + char 폴백)
  gradient: string; // 폴백 배경
  char: string; // 폴백 문자
}

// 가격: 매장 메뉴판(public/paper/tessert_paper) 기준
export const teassertItems: TeassertItem[] = [
  {
    name: "보이 티라미수",
    en: "Pu'er Tiramisu",
    price: "8,900원",
    image: "/teassert/tiramisu.png",
    gradient: "linear-gradient(135deg,#8b3e22 0%,#3a1810 100%)",
    char: "티",
  },
  {
    name: "보이 스콘 & 생크림",
    en: "Pu'er Scone & Cream",
    price: "5,300원",
    // TODO: public/teassert/scone.png 추가 시 image 연결 → 자동으로 사진 표시
    gradient: "linear-gradient(135deg,#d9b48a 0%,#8a5a2e 100%)",
    char: "🥐",
  },
  {
    name: "보이 약식",
    en: "Pu'er Yaksik",
    price: "3,900원",
    image: "/teassert/yakbap.png",
    gradient: "linear-gradient(135deg,#8b5a3c 0%,#4a2c1a 100%)",
    char: "飯",
  },
  {
    name: "쌀 조청 오란다",
    en: "Oranda",
    price: "3,000원",
    image: "/teassert/oranda.png",
    gradient: "linear-gradient(135deg,#c45c4a 0%,#6b2818 100%)",
    char: "⭕",
  },
  {
    name: "티 버터 크래커",
    en: "Tea Butter Cracker",
    price: "3,400원",
    image: "/teassert/cracker.png",
    gradient: "linear-gradient(135deg,#d4a574 0%,#8b5a3c 100%)",
    char: "茶",
  },
  {
    name: "원두 초콜릿",
    en: "Coffee Bean Chocolate",
    price: "3,800원",
    image: "/teassert/choco.png",
    gradient: "linear-gradient(135deg,#5a3a26 0%,#2d1a0e 100%)",
    char: "咖",
  },
];
