test1 = document.querySelector(".box1");
test2 = document.querySelector(".box2");
test3 = document.querySelector(".box3");

test1.addEventListener("click", () => {
  동기집안일();
});

test2.addEventListener("click", () => {
  비동기집안일();
});

test3.addEventListener("click", () => {
  콜백지옥();
});

/*****************************************/

function 세탁기돌리는중() {
  let start = Date.now();
  for (let i = 0; i < 1000000000; i++) {}
  let end = Date.now();
  console.log(`세탁기 완료 : ${end - start}ms`);
  console.log(`빨래 널기`);
}

function 동기집안일() {
  console.log("----동기: 창문 닦기----");
  console.log("----동기: 세탁기 돌리기----"); /*세탁기가 끝나야 빨래 널기 가능*/
  세탁기돌리는중(); /* 세탁기가 돌아가는 동안 방 청소는 진행할 수 없음*/
  console.log("----동기: 방 청소----");
  console.log("------------------------------");
}

function 비동기집안일() {
  console.log("----비동기: 창문 닦기----");
  console.log("----비동기: 세탁기 돌리기----");
  setTimeout(() => {
    세탁기돌리는중();
  }, 3000); /* 세탁기가 돌아가는 동안 방 청소는 진행할 수 있음*/
  console.log("----비동기: 방 청소----");
}

function 콜백지옥() {
  setTimeout(() => {
    alert("안녕");
  }, 2000);
}
