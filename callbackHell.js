function 학생정보조회(학생학번, 학생정보로할일) {
  ajax(baseUrl + "student-info/" + 학생학번, function (response) {
    학생정보로할일(response);
  });
}

function 고교주소조회(고교명, 주소로할일) {
  ajax(baseUrl + "highschoolDB/" + 고교명, function (response) {
    주소로할일(response);
  });
}

function 고교수업조회(고교DB주소, 학생주민번호, 과목일람할일) {
  ajax(
    baseUrl + "classes/" + 고교DB주소 + "/" + 학생주민번호,
    function (response) {
      과목일람할일(response);
    }
  );
}

function 수업정보조회(고3수학수업코드, 수업정보로할일) {
  ajax(baseUrl + "classes-info/" + 고3수학수업코드, function (response) {
    수업정보로할일(response);
  });
}

function 고3수학교사찾기(학생학번) {
  학생정보조회(학생학번, 
    function (학생정보) {
      let 학생주민번호 = 학생정보["주민번호"];
      let 고교명 = 학생정보["고등학교명"];
      고교주소조회(고교명, 
        function (고교DB주소) {
          고교수업조회(고교DB주소, 학생주민번호, 
            function (과목일람) {
              let 고3수학수업코드 = 과목일람["고3수학"];
              수업정보조회(고3수학수업코드, 
                function (수업정보) {
                  console.log(`담당교사: ${수업정보["교사명"]}`);
                }
              );
            }
          );
        }
      );
    }
  );
}

고3수학교사찾기("12345");
