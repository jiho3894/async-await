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

학생정보조회_Promise("12345")
  .then(function (학생정보) {
    let 학생주민번호 = 학생정보["주민번호"];
    let 고교명 = 학생정보["고등학교명"];
    return 고교주소조회_Promise(학생주민번호, 고교명);
  })
  .then(function (학생주민번호and고교DB주소) {
    return 고교수업조회_Promise(
      학생주민번호and고교DB주소[0],
      학생주민번호and고교DB주소[1]
    );
  })
  .then(function (수강과목일람) {
    let 고3수학수업코드 = 수강과목일람["고3수학"];
    return 수업정보조회_Promise(고3수학수업코드);
  })
  .then(function (수업정보) {
    console.log(`담당교사: ${수업정보["교사명"]}`);
  });
