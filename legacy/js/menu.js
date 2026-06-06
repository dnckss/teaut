// Tea°ut Menu - Item Detail Modal & Tab Nav

const ITEM_DATA = {
    boicha: {
        cat: 'TEA · 차',
        title: '보이차',
        letter: '茶',
        gradient: 'gradient-puer',
        note: '소화 · 위장 보호 · 흙향',
        desc: '오랜 시간 발효시킨 흑차로, 깊고 진한 흙향과 부드러운 단맛이 특징입니다. 소화기관의 연동 운동을 촉진하고 위장을 보호해주는 차로 알려져 있어 식후 한 잔으로 권해드리는 차입니다.',
        prices: [['HOT', '5,500원'], ['ICE', '5,900원']]
    },
    boisaeng: {
        cat: 'TEA · 차',
        title: '보이생차',
        letter: '生',
        gradient: 'gradient-raw-puer',
        note: '녹차 느낌의 · 발효x',
        desc: '발효시키지 않고 자연 상태로 보관·숙성시킨 보이생차입니다. 녹차의 산뜻함과 보이차의 깊이를 동시에 느낄 수 있는 차로, 신선하고 청명한 맛이 일품입니다.',
        prices: [['HOT', '8,500원'], ['ICE', '8,900원']]
    },
    socheonggam: {
        cat: 'TEA · 차',
        title: '소청감',
        letter: '柑',
        gradient: 'gradient-citrus',
        note: '진피 · 감싸는 귤향',
        desc: '말린 청귤(진피) 속에 보이차를 채워 함께 숙성시킨 차로, 차를 우릴 때 은은하게 퍼지는 귤향이 매력적인 차입니다. 진피의 향과 보이차의 깊이가 조화를 이룹니다.',
        prices: [['HOT', '8,500원'], ['ICE', '8,900원']]
    },
    apocha: {
        cat: 'TEA · 차',
        title: '아포차',
        letter: '芽',
        gradient: 'gradient-fresh',
        note: '보이차 새순 · 산미 · 산뜻한',
        desc: '보이차의 가장 어린 새순만을 모아 만든 차로, 산뜻한 산미와 풋풋한 맛이 특징입니다. 가볍게 즐기기 좋은, 봄날의 신록 같은 한 잔입니다.',
        prices: [['HOT', '7,600원'], ['ICE', '8,000원']]
    },
    hongcha: {
        cat: 'TEA · 차',
        title: '홍차',
        letter: '紅',
        gradient: 'gradient-black',
        note: '카페인 · 은은한 단향',
        desc: '완전 발효차의 대표격, 깊은 호박색의 찻물과 은은한 단향이 매력적인 홍차입니다. 카페인이 들어있어 아침과 오후에 활력을 더해줍니다. 심장 건강 증진과 면역력 강화에도 도움이 됩니다.',
        prices: [['HOT', '5,500원'], ['ICE', '5,900원']]
    },
    oolong: {
        cat: 'TEA · 차',
        title: '우롱차',
        letter: '烏',
        gradient: 'gradient-oolong',
        note: '청차 · 다이어트 · 향긋한',
        desc: '반발효차 우롱은 녹차와 홍차의 중간 매력을 지닌 차입니다. 노폐물 제거와 지방 분해에 도움이 되어 다이어트 차로도 사랑받고 있습니다. 향긋하고 깊이 있는 풍미가 일품입니다.',
        prices: [['HOT', '7,500원'], ['ICE', '7,900원']]
    },
    jasmine: {
        cat: 'TEA · 차',
        title: '자스민',
        letter: '茉',
        gradient: 'gradient-jasmine',
        note: '백차 · 향기로운 · 고급스러운',
        desc: '백차에 자스민 꽃향을 입힌 차로, 우아하고 고급스러운 향이 매력적입니다. 한 모금만으로도 입안 가득 퍼지는 꽃향이 마음을 편안하게 해줍니다.',
        prices: [['HOT', '7,500원'], ['ICE', '7,900원']]
    },
    nobaek: {
        cat: 'TEA · 차',
        title: '노백차',
        letter: '白',
        gradient: 'gradient-aged',
        note: '항염 · 오래된 · 깊은',
        desc: '오랜 시간 숙성시킨 백차로, "1년된 차, 3년된 약, 7년된 보배"라는 말처럼 시간이 흐를수록 깊이를 더하는 차입니다. 항염 효과가 뛰어나 건강 차로 권해드립니다.',
        prices: [['HOT', '8,500원'], ['ICE', '8,900원']]
    },
    boiseolguk: {
        cat: 'TEA · 차',
        title: '보이설국',
        letter: '雪',
        gradient: 'gradient-blend',
        note: '블렌딩 · 중국 · 일상',
        desc: '보이차와 국화꽃을 블렌딩한 차로, 일상에서 부담 없이 즐기기 좋은 균형 잡힌 맛입니다. 중국 전통 블렌딩 방식 그대로의 풍미를 전해드립니다.',
        prices: [['HOT', '8,500원'], ['ICE', '8,900원']]
    },
    'gyehwa-hongcha': {
        cat: 'TEA · 차',
        title: '계화홍차',
        letter: '桂',
        gradient: 'gradient-osmanthus-black',
        note: '꽃향 · 홍차의 단향',
        desc: '금목서(계화)의 달콤한 꽃향과 홍차의 은은한 단향이 만난 향긋한 한 잔입니다. 가을 한가운데의 정원 같은, 따뜻하고 부드러운 차입니다.',
        prices: [['HOT', '7,500원'], ['ICE', '7,900원']]
    },
    seolguk: {
        cat: 'DECAF · 디카페인',
        title: '설국차',
        letter: '菊',
        gradient: 'gradient-chrys',
        note: '수면 · 고지혈증 · 국화',
        desc: '말린 국화꽃을 우려낸 디카페인 차로, 풍부한 자하와 고지혈증 개선에 탁월합니다. 수면에 도움이 되어 저녁에 마시기 좋은 차입니다.',
        prices: [['HOT', '6,600원'], ['ICE', '7,000원']]
    },
    gyehwa: {
        cat: 'DECAF · 디카페인',
        title: '계화차',
        letter: '桂',
        gradient: 'gradient-osmanthus',
        note: '금목서 · 꽃잎 · 기관지',
        desc: '금목서(계화) 꽃을 그대로 우려낸 디카페인 차로, 달콤한 꽃향이 매력적입니다. 기관지 건강에도 좋아 환절기에 권해드리는 차입니다.',
        prices: [['HOT', '7,600원'], ['ICE', '8,000원']]
    },
    hoji: {
        cat: 'DECAF · 디카페인',
        title: '호지차',
        letter: '焙',
        gradient: 'gradient-hoji',
        note: '탈취 · 피부미용 · 구수한',
        desc: '녹차 잎을 강한 불에 볶아 만든 디카페인 차로, 구수한 풍미가 일품입니다. 탈취 효과와 피부 미용에도 좋아 식후 한 잔으로 즐기기 좋습니다.',
        prices: [['HOT', '5,500원'], ['ICE', '5,900원']]
    },
    dalbora: {
        cat: 'SIGNATURE · 시그니처',
        title: '달.보.라 🌸',
        letter: '花',
        gradient: 'gradient-signature',
        note: '달콤한 보이차 라떼',
        desc: '티읕의 대표 시그니처 메뉴. 깊고 진한 보이차 베이스에 부드러운 우유와 달콤함을 더해 완성한 라떼입니다. "달.보.라"라는 이름처럼 달콤하고 부드러운 한 잔.',
        extra: '복숭아청 또는 딸기청 추가 가능 (+500원)',
        prices: [['HOT', '6,400원'], ['ICE', '6,900원']]
    },
    'tea-latte': {
        cat: 'TEA LATTE · 차라떼',
        title: '차로 만든 달콤한 라떼',
        letter: '奶',
        gradient: 'gradient-milk',
        note: '아포 · 홍차 · 계화 · 설국 · 호지 중 선택',
        desc: '5가지 차 베이스 중 원하는 차를 선택할 수 있는 밀크티입니다. 계화 · 설국 · 호지는 디카페인으로 저녁에도 부담 없이 즐기실 수 있습니다.',
        extra: '호지 베이스에 생강·딸기청 추가 가능 (+500원)',
        prices: [['HOT', '7,500원'], ['ICE', '7,900원']]
    },
    'tea-ade': {
        cat: 'COLD TEA DRINK · 시원한 차음료',
        title: '차로 만든 에이드',
        letter: '氷',
        gradient: 'gradient-ade',
        note: '아포 · 계화 · 설국 중 선택',
        desc: '3가지 차 베이스 중 원하는 차를 골라 시원한 탄산과 함께 즐기는 에이드입니다. 계화와 설국 베이스는 디카페인입니다.',
        prices: [['ICE', '7,800원']]
    },
    'real-icetea': {
        cat: 'COLD TEA DRINK · 시원한 차음료',
        title: '진짜 홍차 아이스티',
        letter: '紅',
        gradient: 'gradient-icetea',
        note: '진짜 홍차 잎만을 사용',
        desc: '시중의 가루나 시럽이 아닌, 정성껏 우려낸 진짜 홍차 잎만을 사용해 잡은 건강함과 고급스러움. 깊은 풍미가 살아있는 정통 아이스티입니다.',
        prices: [['ICE', '7,000원']]
    },
    lemontea: {
        cat: 'WARM TEA DRINK · 따뜻한 차음료',
        title: '계화 레몬티',
        letter: '柠',
        gradient: 'gradient-lemon',
        note: '레몬티로 상큼하게!',
        desc: '계화의 달콤한 꽃향과 레몬의 상큼함이 만난 따뜻한 차음료입니다. (현재 SOLD OUT)',
        prices: [['HOT', '7,000원']]
    },
    'ginger-hoji': {
        cat: 'WARM TEA DRINK · 따뜻한 차음료',
        title: '생강 호지차',
        letter: '薑',
        gradient: 'gradient-ginger',
        note: '몸에 좋은 생강과 호지의 구수함',
        desc: '몸을 따뜻하게 데워주는 생강과 구수한 호지차의 만남. 추운 날 한 모금이면 속까지 따뜻해지는 보양 음료입니다.',
        prices: [['HOT', '7,000원']]
    },
    'teaut-brewed': {
        cat: 'COFFEE · 커피',
        title: '티읕 브루드 커피',
        letter: '咖',
        gradient: 'gradient-coffee',
        note: '풍부한 아로마 · 산뜻한 산미',
        desc: '티읕에서 직접 선별한 원두로 정성껏 브루잉한 커피입니다. 풍부한 아로마와 산뜻한 산미의 조화로움을 한 잔에 담았습니다.',
        prices: [['HOT', '7,000원']]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('itemModal');
    if (!modal) return;

    const $title = document.getElementById('modalTitle');
    const $cat = document.getElementById('modalCat');
    const $note = document.getElementById('modalNote');
    const $desc = document.getElementById('modalDesc');
    const $extraWrap = document.getElementById('modalExtraWrap');
    const $extra = document.getElementById('modalExtra');
    const $prices = document.getElementById('modalPrices');
    const $visual = document.getElementById('modalVisual');
    const $letter = document.getElementById('modalLetter');

    function openModal(key) {
        const data = ITEM_DATA[key];
        if (!data) return;

        $title.textContent = data.title;
        $cat.textContent = data.cat;
        $note.textContent = data.note;
        $desc.textContent = data.desc;

        if (data.extra) {
            $extra.textContent = data.extra;
            $extraWrap.hidden = false;
        } else {
            $extraWrap.hidden = true;
        }

        $prices.innerHTML = data.prices.map(([label, price]) =>
            `<div class="modal-price"><em>${label}</em><strong>${price}</strong></div>`
        ).join('');

        $visual.className = 'modal-visual ' + data.gradient;
        $letter.textContent = data.letter;

        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.item-card').forEach(card => {
        if (card.classList.contains('soldout')) {
            card.style.cursor = 'not-allowed';
        }
        card.addEventListener('click', () => {
            const key = card.dataset.item;
            if (key) openModal(key);
        });
    });

    modal.querySelectorAll('[data-close]').forEach(el => {
        el.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
            closeModal();
        }
    });

    // Category tab navigation - track active section
    const catLinks = document.querySelectorAll('.cat-link');
    const sections = document.querySelectorAll('.menu-cat');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                catLinks.forEach(link => {
                    link.classList.toggle('is-active', link.dataset.cat === id);
                });
            }
        });
    }, {
        rootMargin: '-30% 0px -60% 0px'
    });

    sections.forEach(s => observer.observe(s));
});
