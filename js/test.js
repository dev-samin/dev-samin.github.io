let questionList = 
[
    '좋아하는 음식과 싫어하는 음식은?',
    '사람들에게 어떤 첫 인상을 남기고 싶은가?',
    '3년 전의 나에게 해주고 싶은 말은?',
    '죽는다면 남기고 싶은 유언은?',
    '소중히 여기는 물건과 이유는?',
    '키우고 싶은 반려동물은?',
    '기억에 남는 선물과 이유눈?',
    '겪은 에피소소드 중 가장 재미있었던 일은?',
    '돈 vs 행복 중 나의 선택은?',
    '나의 10년후를 상상해 본다면?',
    '지금 당장 200억이 생긴다면 무엇을 할 것인가?',
    '나만의 일상 속 소소한 행복이 있다면?',
    '모임에서 제일 싫은 유형은?',
    '최근 기뻤던 일이 있다면?',
    '나의 진로에 가장 큰 영향을 끼친 사람은?',
    '어릴 적 장래희망은?',
    '내 인생에 가장 큰 희망을 주는 사핢은?',
    '우울함을 극복하는 나만의 방법이 있다면?',
    '지우고 싶은 과거가 있다면?',
    '닮고 싶은 롤 모델은?',
    '나의 습관 중 고쳐야 할 점은?',
    '나의 마음을 움직인 명언이 있다면?',
    '살면서 해낸 일 중 가장 자랑스러운 것은?'
];



let card = document.getElementById('card');
let question = document.getElementById('question');

question.innerText = questionList[Math.floor(Math.random() * (questionList.length - 1))];

card.addEventListener('click', () => {
    question.innerText = questionList[Math.floor(Math.random() * (questionList.length - 1))];
})



