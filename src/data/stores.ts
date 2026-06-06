export interface Store {
  name: string;
  address: string;
  hours: string;
}

export const stores: Store[] = [
  {
    name: "티읕 W스퀘어점 (본점)",
    address: "부산광역시 남구 분포로 145, 더블유스퀘어 1층 1064호",
    hours: "평일 10:00 - 22:00 · 주말 10:00 - 22:00 · 일요일 휴무",
  },
  {
    name: "티읕 황리단길점",
    address: "경주시 첨성로 99번길 26-3",
    hours: "평일 10:00 - 22:00 · 주말 10:00 - 22:00 · 일요일 휴무",
  }
  
];
