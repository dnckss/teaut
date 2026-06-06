export interface PremiumItem {
  name: string;
  price: string;
}

export interface PremiumGroup {
  title: string;
  titleSub?: string;
  origin: string;
  items: PremiumItem[];
}

export const premiumGroups: PremiumGroup[] = [
  {
    title: "보이숙차",
    origin: "중국 운남",
    items: [
      { name: "이무차장 자왕수병 2019", price: "18,000원" },
      { name: "맹해반장 (대익)", price: "13,000원" },
      { name: "자왕수병 노자두", price: "19,000원" },
    ],
  },
  {
    title: "보이생차",
    origin: "중국 운남",
    items: [
      { name: "녹대수 2014", price: "18,000원" },
      { name: "대후계", price: "50,000원" },
    ],
  },
  {
    title: "우롱차",
    titleSub: "(청차)",
    origin: "대만 / 중국 복건성 민남",
    items: [
      { name: "대만 목책철관음", price: "19,000원" },
      { name: "봉황단총", price: "18,000원" },
      { name: "대우령", price: "27,000원" },
      { name: "대홍포", price: "25,000원" },
    ],
  },
  {
    title: "홍차",
    origin: "중국 운남, 중국",
    items: [
      { name: "이무정산 압병 홍차", price: "14,000원" },
      { name: "정산소종 2020", price: "18,000원" },
    ],
  },
];
