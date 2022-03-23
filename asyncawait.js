function 학생정보조회_Promise(학생학번) {
  return new Promise(function (resolove, reject) {
    ajax(baseUrl + "student-info/" + 학생학번, function (response) {
      resolove(response);
    });
  });
}

function 고교주소조회_Promise(학생주민번호, 고교명) {
  return new Promise(function (resolove, reject) {
    ajax(baseUrl + "highschoolDB/" + 고교명, function (response) {
      resolove([학생주민번호, response]);
    });
  });
}

function 고교수업조회_Promise(학생주민번호, 고교DB주소) {
  return new Promise(function (resolove, reject) {
    ajax(
      baseUrl + "classes/" + 고교DB주소 + "/" + 학생주민번호,
      function (response) {
        resolove(response);
      }
    );
  });
}

function 수업정보조회_Promise(고3수학수업코드) {
  return new Promise(function (resolove, reject) {
    ajax(baseUrl + "classes-info/" + 고3수학수업코드, function (response) {
      resolove(response);
    });
  });
}

async function 고3수학교사찾기(학생학번) {
  let 학생정보 = await 학생정보조회_Promise(학생학번); /* 프로미스객체 */
  let 고교DB주소 = await 고교주소조회_Promise(학생정보["고교명"]);
  let 수강과목일람 = await 고교수업조회_Promise(
    학생정보["주민번호"],
    고교DB주소
  );
  let 수업정보 = await 수업정보조회_Promise(수강과목일람["고3수학"]);
  console.log(`담당교사: ${수업정보["교사명"]}`);
}

고3수학교사찾기("12345");
