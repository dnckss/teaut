// Tea°ut 메뉴 데이터 (단일 소스)
// 기존: menu.html(카드) + js/menu.js(모달 ITEM_DATA)에 같은 정보가 이원화되어 있었음.
// → 하나의 타입으로 통합. 카드/모달이 동일 객체를 사용한다.

export interface MenuPrice {
  label: string; // HOT / ICE
  price: string; // "5,500원"
}

export interface MenuItem {
  id: string;
  title: string;
  flower?: boolean; // 달.보.라 🌸 표시
  letter: string; // 비주얼의 한자 (사진 없을 때 폴백)
  image?: string; // 제품 사진 경로 (있으면 한자 대신 사진 표시)
  gradient: string; // gradient-* 클래스 (폴백 배경)
  note: string; // 카드/모달의 테이스팅 노트
  desc: string; // 모달 상세 설명
  cardExtra?: string; // 카드의 옵션 안내 (.item-extra)
  extra?: string; // 모달의 옵션 안내
  prices: MenuPrice[];
  tag?: string; // 비주얼 배지 텍스트 (DECAF / SIGNATURE / ICE ONLY / SOLD OUT)
  tagClass?: string; // tag-signature / tag-ice / tag-soldout
  featured?: boolean;
  soldout?: boolean;
  catLabel: string; // 모달 eyebrow ("TEA · 차")
}

export interface MenuCategory {
  id: string;
  eyebrow: string;
  title: string;
  titleSub?: string;
  desc: string;
  alt?: boolean; // .menu-cat.alt (배경 교차)
  items: MenuItem[];
}

const TEA_CAT = "TEA · 차";
const DECAF_CAT = "DECAF · 디카페인";

const rawCategories: MenuCategory[] = [
  {
    id: "tea",
    eyebrow: "TEA",
    title: "차",
    desc: "엄선된 찻잎으로 정성껏 우려낸 티읕의 시그니처 차",
    items: [
      {
        id: "boicha",
        title: "보이차",
        letter: "茶",
        gradient: "gradient-puer",
        note: "소화 · 위장 보호 · 흙향",
        desc: "오랜 시간 발효시킨 흑차로, 깊고 진한 흙향과 부드러운 단맛이 특징입니다. 소화기관의 연동 운동을 촉진하고 위장을 보호해주는 차로 알려져 있어 식후 한 잔으로 권해드리는 차입니다.",
        prices: [
          { label: "HOT", price: "5,500원" },
          { label: "ICE", price: "5,900원" },
        ],
        catLabel: TEA_CAT,
      },
      {
        id: "boisaeng",
        title: "보이생차",
        letter: "生",
        gradient: "gradient-raw-puer",
        note: "녹차 느낌의 · 발효x",
        desc: "발효시키지 않고 자연 상태로 보관·숙성시킨 보이생차입니다. 녹차의 산뜻함과 보이차의 깊이를 동시에 느낄 수 있는 차로, 신선하고 청명한 맛이 일품입니다.",
        prices: [
          { label: "HOT", price: "8,500원" },
          { label: "ICE", price: "8,900원" },
        ],
        catLabel: TEA_CAT,
      },
      {
        id: "socheonggam",
        title: "소청감",
        letter: "柑",
        gradient: "gradient-citrus",
        note: "진피 · 감싸는 귤향",
        desc: "말린 청귤(진피) 속에 보이차를 채워 함께 숙성시킨 차로, 차를 우릴 때 은은하게 퍼지는 귤향이 매력적인 차입니다. 진피의 향과 보이차의 깊이가 조화를 이룹니다.",
        prices: [
          { label: "HOT", price: "8,500원" },
          { label: "ICE", price: "8,900원" },
        ],
        catLabel: TEA_CAT,
      },
      {
        id: "apocha",
        title: "아포차",
        letter: "芽",
        gradient: "gradient-fresh",
        note: "보이차 새순 · 산미 · 산뜻한",
        desc: "보이차의 가장 어린 새순만을 모아 만든 차로, 산뜻한 산미와 풋풋한 맛이 특징입니다. 가볍게 즐기기 좋은, 봄날의 신록 같은 한 잔입니다.",
        prices: [
          { label: "HOT", price: "7,600원" },
          { label: "ICE", price: "8,000원" },
        ],
        catLabel: TEA_CAT,
      },
      {
        id: "hongcha",
        title: "홍차",
        letter: "紅",
        gradient: "gradient-black",
        note: "카페인 · 은은한 단향",
        desc: "완전 발효차의 대표격, 깊은 호박색의 찻물과 은은한 단향이 매력적인 홍차입니다. 카페인이 들어있어 아침과 오후에 활력을 더해줍니다. 심장 건강 증진과 면역력 강화에도 도움이 됩니다.",
        prices: [
          { label: "HOT", price: "5,500원" },
          { label: "ICE", price: "5,900원" },
        ],
        catLabel: TEA_CAT,
      },
      {
        id: "oolong",
        title: "우롱차",
        letter: "烏",
        gradient: "gradient-oolong",
        note: "청차 · 다이어트 · 향긋한",
        desc: "반발효차 우롱은 녹차와 홍차의 중간 매력을 지닌 차입니다. 노폐물 제거와 지방 분해에 도움이 되어 다이어트 차로도 사랑받고 있습니다. 향긋하고 깊이 있는 풍미가 일품입니다.",
        prices: [
          { label: "HOT", price: "7,500원" },
          { label: "ICE", price: "7,900원" },
        ],
        catLabel: TEA_CAT,
      },
      {
        id: "jasmine",
        title: "자스민",
        letter: "茉",
        gradient: "gradient-jasmine",
        note: "백차 · 향기로운 · 고급스러운",
        desc: "백차에 자스민 꽃향을 입힌 차로, 우아하고 고급스러운 향이 매력적입니다. 한 모금만으로도 입안 가득 퍼지는 꽃향이 마음을 편안하게 해줍니다.",
        prices: [
          { label: "HOT", price: "7,500원" },
          { label: "ICE", price: "7,900원" },
        ],
        catLabel: TEA_CAT,
      },
      {
        id: "nobaek",
        title: "노백차",
        letter: "白",
        gradient: "gradient-aged",
        note: "항염 · 오래된 · 깊은",
        desc: '오랜 시간 숙성시킨 백차로, "1년된 차, 3년된 약, 7년된 보배"라는 말처럼 시간이 흐를수록 깊이를 더하는 차입니다. 항염 효과가 뛰어나 건강 차로 권해드립니다.',
        prices: [
          { label: "HOT", price: "8,500원" },
          { label: "ICE", price: "8,900원" },
        ],
        catLabel: TEA_CAT,
      },
      {
        id: "boiseolguk",
        title: "보이설국",
        letter: "雪",
        gradient: "gradient-blend",
        note: "블렌딩 · 중국 · 일상",
        desc: "보이차와 국화꽃을 블렌딩한 차로, 일상에서 부담 없이 즐기기 좋은 균형 잡힌 맛입니다. 중국 전통 블렌딩 방식 그대로의 풍미를 전해드립니다.",
        prices: [
          { label: "HOT", price: "8,500원" },
          { label: "ICE", price: "8,900원" },
        ],
        catLabel: TEA_CAT,
      },
      {
        id: "gyehwa-hongcha",
        title: "계화홍차",
        letter: "桂",
        gradient: "gradient-osmanthus-black",
        note: "꽃향 · 홍차의 단향",
        desc: "금목서(계화)의 달콤한 꽃향과 홍차의 은은한 단향이 만난 향긋한 한 잔입니다. 가을 한가운데의 정원 같은, 따뜻하고 부드러운 차입니다.",
        prices: [
          { label: "HOT", price: "7,500원" },
          { label: "ICE", price: "7,900원" },
        ],
        catLabel: TEA_CAT,
      },
    ],
  },
  {
    id: "decaf",
    eyebrow: "DECAF",
    title: "디카페인",
    desc: "카페인 없이 깊은 풍미와 향을 즐기는, 부담 없는 한 잔",
    alt: true,
    items: [
      {
        id: "seolguk",
        title: "설국차",
        letter: "菊",
        gradient: "gradient-chrys",
        note: "수면 · 고지혈증 · 국화",
        desc: "말린 국화꽃을 우려낸 디카페인 차로, 풍부한 자하와 고지혈증 개선에 탁월합니다. 수면에 도움이 되어 저녁에 마시기 좋은 차입니다.",
        prices: [
          { label: "HOT", price: "6,600원" },
          { label: "ICE", price: "7,000원" },
        ],
        tag: "DECAF",
        catLabel: DECAF_CAT,
      },
      {
        id: "gyehwa",
        title: "계화차",
        letter: "桂",
        gradient: "gradient-osmanthus",
        note: "금목서 · 꽃잎 · 기관지",
        desc: "금목서(계화) 꽃을 그대로 우려낸 디카페인 차로, 달콤한 꽃향이 매력적입니다. 기관지 건강에도 좋아 환절기에 권해드리는 차입니다.",
        prices: [
          { label: "HOT", price: "7,600원" },
          { label: "ICE", price: "8,000원" },
        ],
        tag: "DECAF",
        catLabel: DECAF_CAT,
      },
      {
        id: "hoji",
        title: "호지차",
        letter: "焙",
        gradient: "gradient-hoji",
        note: "탈취 · 피부미용 · 구수한",
        desc: "녹차 잎을 강한 불에 볶아 만든 디카페인 차로, 구수한 풍미가 일품입니다. 탈취 효과와 피부 미용에도 좋아 식후 한 잔으로 즐기기 좋습니다.",
        prices: [
          { label: "HOT", price: "5,500원" },
          { label: "ICE", price: "5,900원" },
        ],
        tag: "DECAF",
        catLabel: DECAF_CAT,
      },
    ],
  },
  {
    id: "signature",
    eyebrow: "SIGNATURE",
    title: "시그니처",
    desc: "오직 티읕에서만 만날 수 있는 시그니처 한 잔",
    items: [
      {
        id: "dalbora",
        title: "달.보.라",
        flower: true,
        letter: "花",
        gradient: "gradient-signature",
        note: "달콤한 보이차 라떼",
        desc: '티읕의 대표 시그니처 메뉴. 깊고 진한 보이차 베이스에 부드러운 우유와 달콤함을 더해 완성한 라떼입니다. "달.보.라"라는 이름처럼 달콤하고 부드러운 한 잔.',
        cardExtra: "+500원 옵션: 복숭아청 · 딸기청 추가 가능",
        extra: "복숭아청 또는 딸기청 추가 가능 (+500원)",
        prices: [
          { label: "HOT", price: "6,400원" },
          { label: "ICE", price: "6,900원" },
        ],
        tag: "SIGNATURE",
        tagClass: "tag-signature",
        featured: true,
        catLabel: "SIGNATURE · 시그니처",
      },
    ],
  },
  {
    id: "latte",
    eyebrow: "TEA LATTE",
    title: "차라떼",
    titleSub: "(밀크티)",
    desc: "차의 풍미와 부드러운 우유가 만나, 달콤하게 완성된 한 잔",
    alt: true,
    items: [
      {
        id: "tea-latte",
        title: "차로 만든 달콤한 라떼",
        letter: "奶",
        gradient: "gradient-milk",
        note: "아포 · 홍차 · 계화 · 설국 · 호지 중 선택",
        desc: "5가지 차 베이스 중 원하는 차를 선택할 수 있는 밀크티입니다. 계화 · 설국 · 호지는 디카페인으로 저녁에도 부담 없이 즐기실 수 있습니다.",
        cardExtra: "계화/설국/호지는 디카페인 · 생강·딸기청 +500원",
        extra: "호지 베이스에 생강·딸기청 추가 가능 (+500원)",
        prices: [
          { label: "HOT", price: "7,500원" },
          { label: "ICE", price: "7,900원" },
        ],
        featured: true,
        catLabel: "TEA LATTE · 차라떼",
      },
    ],
  },
  {
    id: "cold",
    eyebrow: "COLD TEA DRINK",
    title: "시원한 차음료",
    desc: "상쾌하고 청량한 차 베이스의 여름 음료",
    items: [
      {
        id: "tea-ade",
        title: "차로 만든 에이드",
        letter: "氷",
        gradient: "gradient-ade",
        note: "아포 · 계화 · 설국 중 선택",
        desc: "3가지 차 베이스 중 원하는 차를 골라 시원한 탄산과 함께 즐기는 에이드입니다. 계화와 설국 베이스는 디카페인입니다.",
        cardExtra: "계화/설국은 디카페인",
        prices: [{ label: "ICE", price: "7,800원" }],
        tag: "ICE ONLY",
        tagClass: "tag-ice",
        catLabel: "COLD TEA DRINK · 시원한 차음료",
      },
      {
        id: "real-icetea",
        title: "진짜 홍차 아이스티",
        letter: "紅",
        gradient: "gradient-icetea",
        note: "진짜 홍차 잎만을 사용해 잡은 건강함과 고급스러움",
        desc: "시중의 가루나 시럽이 아닌, 정성껏 우려낸 진짜 홍차 잎만을 사용해 잡은 건강함과 고급스러움. 깊은 풍미가 살아있는 정통 아이스티입니다.",
        prices: [{ label: "ICE", price: "7,000원" }],
        tag: "ICE ONLY",
        tagClass: "tag-ice",
        catLabel: "COLD TEA DRINK · 시원한 차음료",
      },
    ],
  },
  {
    id: "warm",
    eyebrow: "WARM TEA DRINK",
    title: "따뜻한 차음료",
    desc: "속까지 따뜻하게 데워주는 정성스러운 한 잔",
    alt: true,
    items: [
      {
        id: "lemontea",
        title: "계화 레몬티",
        letter: "柠",
        gradient: "gradient-lemon",
        note: "레몬티로 상큼하게!",
        desc: "계화의 달콤한 꽃향과 레몬의 상큼함이 만난 따뜻한 차음료입니다. (현재 SOLD OUT)",
        prices: [{ label: "HOT", price: "7,000원" }],
        tag: "SOLD OUT",
        tagClass: "tag-soldout",
        soldout: true,
        catLabel: "WARM TEA DRINK · 따뜻한 차음료",
      },
      {
        id: "ginger-hoji",
        title: "생강 호지차",
        letter: "薑",
        gradient: "gradient-ginger",
        note: "몸에 좋은 생강과 호지의 구수함",
        desc: "몸을 따뜻하게 데워주는 생강과 구수한 호지차의 만남. 추운 날 한 모금이면 속까지 따뜻해지는 보양 음료입니다.",
        prices: [{ label: "HOT", price: "7,000원" }],
        catLabel: "WARM TEA DRINK · 따뜻한 차음료",
      },
    ],
  },
  {
    id: "coffee",
    eyebrow: "COFFEE",
    title: "커피",
    desc: "티읕에서 직접 로스팅한 원두로 내린 한 잔",
    items: [
      {
        id: "teaut-brewed",
        title: "티읕 브루드 커피",
        letter: "咖",
        gradient: "gradient-coffee",
        note: "풍부한 아로마와 산뜻한 산미의 조화로움",
        desc: "티읕에서 직접 선별한 원두로 정성껏 브루잉한 커피입니다. 풍부한 아로마와 산뜻한 산미의 조화로움을 한 잔에 담았습니다.",
        prices: [{ label: "HOT", price: "7,000원" }],
        catLabel: "COFFEE · 커피",
      },
    ],
  },
];

// 제품 사진은 파일명 규칙(/menu/<id>.png)으로 자동 연결. 확장자 예외만 오버라이드.
const PHOTO_OVERRIDES: Record<string, string> = {
  "teaut-brewed": "/menu/teaut-brewed.jpg",
};

export const menuCategories: MenuCategory[] = rawCategories.map((cat) => ({
  ...cat,
  items: cat.items.map((item) => ({
    ...item,
    image: item.image ?? PHOTO_OVERRIDES[item.id] ?? `/menu/${item.id}.png`,
  })),
}));
