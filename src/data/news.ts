export interface NewsItem {
  date: string;
  title: string;
  summary: string;
}

export const news: NewsItem[] = [
  {
    date: "2026.05.15",
    title: "티읕 리뷰 이벤트 안내",
    summary:
      "인스타그램·네이버·카카오맵에 후기를 남겨주세요. 매장에서 확인 즉시 OK!",
  },
  {
    date: "2026.05.02",
    title: "Pu'er Tiramisu 홀케이크 주문",
    summary: "티읕 시그니처 보이 티라미수, 이제 홀케이크로 주문 가능합니다.",
  },
  {
    date: "2026.04.20",
    title: "프리미엄 다도 라인업 확장",
    summary: "대후계, 대우령 등 명품 차 라인업이 새롭게 추가되었습니다.",
  },
];
