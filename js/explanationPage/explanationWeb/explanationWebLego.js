const $text = document.querySelector(".drtext");

// 글자 모음
const letters = [
  "이 작품은 부족하거나 밋밋한 웹사이트 시장조사중 알게 된 'Lego' 의 홈페이지를 다시 디자인해본 웹 사이트 입니다. 장난감 판매 사이트라는 것을 생각하여 최대한 둥글둥글하고 시선을 끌도록 설계했습니다. 버튼으로 동작하는 스크롤 네비게이션, iframe을 이용한 탭 박스,애니메이션 등, 동적인 요소들을 넣어 리디자인 했습니다."
]

// 글자 입력 속도
const speed = 50;
let i = 0;

// 타이핑 효과
const typing = async () => {  
  const letter = letters[i].split("");
  
  while (letter.length) {
    await wait(speed);
    $text.innerHTML += letter.shift(); 
  }
  
  // 잠시 대기
  await wait(800);
  
  // 지우는 효과
  remove();
}

// 글자 지우는 효과
// const remove = async () => {
//   const letter = letters[i].split("");
  
//   while (letter.length) {
//     await wait(speed);
    
//     letter.pop();
//     $text.innerHTML = letter.join(""); 
//   }
  
//   // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
//   // i = !letters[i+1] ? 0 : i + 1;
//   // typing();
// }

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
setTimeout(typing, 1500);