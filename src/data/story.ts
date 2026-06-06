export interface HealthCard {
  name: string;
  lines: string[];
}

export interface TeaBenefit {
  name: string;
  desc: string;
}

export interface EventStep {
  num: string;
  title: string;
  desc: string;
}

export const healthCards: HealthCard[] = [
  { name: "카테킨", lines: ["항산화 작용", "지방축적 억제"] },
  { name: "카페인", lines: ["집중력 향상", "피로 해소"] },
  { name: "비타민 C, E, B2", lines: ["노화 방지", "피부 미용"] },
  { name: "테아닌", lines: ["카페인 작용 억제", "심신 안정"] },
  { name: "당류", lines: ["혈당 상승 억제", "건강한 식습관"] },
  { name: "무기질", lines: ["면역력 강화", "신체 균형"] },
];

export const myths: string[] = [
  "차는 물맛이다.",
  "다기를 사용해 시간을 들여야 한다.",
  "오랫동안 마셔야 한다.",
];

export const teaBenefits: TeaBenefit[] = [
  { name: "보이차", desc: "소화기관 연동 운동을 촉진하고 위장을 보호" },
  { name: "백차", desc: "1년된 차, 3년된 약, 7년된 보배!" },
  { name: "홍차", desc: "심장 건강 증진, 면역력 강화 그리고 뇌 기능 향상" },
  { name: "국화차", desc: "풍부 자하와 고지혈증이 탁월하고 두통, 숙면에 도움" },
  { name: "우롱차", desc: "노폐물 제거, 항산화, 지방 분해 고로 다이어트 최고!" },
];

export const eventSteps: EventStep[] = [
  {
    num: "1",
    title: "방문 후 후기 작성",
    desc: "티읕 방문 후 사진 또는 후기를 작성해주세요",
  },
  {
    num: "2",
    title: "플랫폼 선택 업로드",
    desc: "인스타그램 / 네이버 / 카카오맵 중 택1",
  },
  {
    num: "3",
    title: "직원에게 보여주기",
    desc: "업로드 후 직원에게 화면을 보여주면 OK!",
  },
];
