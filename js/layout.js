//menu

$(document).ready(function () {
  $("#menuNav li a").click(function () {
    // 모든 형제 요소의 스타일 제거
    $(this).parent().siblings().children().removeClass("menuNavColor");

    // 클릭한 형제 요소에 스타일 적용
    $(this).addClass("menuNavColor");
  });
});

// usb slide
$(".usb p").each(function (index) {
  $(".usb")
    .eq(index)
    .click(function () {
      // 인덱스 번호 구하는 변수
      let ind = $(this).index();
      // usb 오른쪽으로 들어가는 함수
      $(this).addClass("slideRight").siblings().removeClass("slideRight");
      // 프로그래스바 클래스 삭제
      $(
        "#skillsProBar, #skillsSelectedBox #SelectedBox, #DetailBox p"
      ).removeClass();
      $("#skillsDetailBox").children("#DetailBox").children("p").text("");
      // usb 백그라운드 색상
      $(".usb p").css("background-color", "transparent");
      $(".usbPort").css(
        "background-color",
        $(this).children("p").css("border-color")
      );
      $(this)
        .children("p")
        .css("background-color", $(this).children("p").css("border-color"));

      // usb index번호 추출후 값마다 내용 수정
      if (ind == 0) {
        $("#skillsProBar").addClass("htmlBar");
        $("#skillsSelectedBox #SelectedBox").addClass("skillsSelectedHtml");
        $("#skillsDetailBox")
          .children("#DetailBox")
          .children("p")
          .addClass("skillsDetailFade")
          .html(
            "시맨틱 태그를 이용한 웹 페이지와 내용물 구축, 구조화, 컨텐츠 별 타입 설정 가능</br></br>문자, 이미지, 목록, 링크 등</br>다양한 컨텐츠 삽입 가능"
          );
      } else if (ind == 1) {
        $("#skillsProBar").addClass("cssBar");
        $("#skillsSelectedBox #SelectedBox").addClass("skillsSelectedCss");
        $("#skillsDetailBox")
          .children("#DetailBox")
          .children("p")
          .addClass("skillsDetailFade")
          .html(
            "컨텐츠, 레이아웃, 글꼴 및 html 내부의</br>시각적 요소를 css스타일로 구분 가능</br></br>keyframes와 transition을 이용한</br>애니메이션 구현 가능</br></br>width와 height의 비율을 이용한</br>반응형 웹 구현 가능"
          );
      } else if (ind == 2) {
        $("#skillsProBar").addClass("jqBar");
        $("#skillsSelectedBox #SelectedBox").addClass("skillsSelectedJq");
        $("#skillsDetailBox")
          .children("#DetailBox")
          .children("p")
          .addClass("skillsDetailFade")
          .html(
            "플러그인을 활용한 웹페이지 동적 이벤트</br>구현 가능</br></br> 플러그인을 활용한 웹페이지 레이아웃,</br>시각적 요소 강화 구현 가능</br></br>jQuery 문법을 이용한 조건부 탭메뉴</br>구현 가능"
          );
      } else if (ind == 3) {
        $("#skillsProBar").addClass("jsBar");
        $("#skillsSelectedBox #SelectedBox").addClass("skillsSelectedJs");
        $("#skillsDetailBox")
          .children("#DetailBox")
          .children("p")
          .addClass("skillsDetailFade")
          .html(
            "라이브러리를 활용한 웹페이지 동적이벤트 </br>구현 가능</br></br>웹페이지 시각적 요소 강화 구현 가능"
          );
      } else if (ind == 4) {
        $("#skillsProBar").addClass("aiBar");
        $("#skillsSelectedBox #SelectedBox").addClass("skillsSelectedAi");
        $("#skillsDetailBox")
          .children("#DetailBox")
          .children("p")
          .addClass("skillsDetailFade")
          .html(
            "펜툴 기반의 아트웍 제작 가능</br></br>패스 파인더를 활용해 조밀한 드로잉 가능</br></br>bitmap에서 vector로 이미지 타입 변환 가능</br></br>간단한 이미지 편집 가능"
          );
      } else if (ind == 5) {
        $("#skillsProBar").addClass("psBar");
        $("#skillsSelectedBox #SelectedBox").addClass("skillsSelectedPs");
        $("#skillsDetailBox")
          .children("#DetailBox")
          .children("p")
          .addClass("skillsDetailFade")
          .html(
            "이미지 편집 기반의 아트웍 제작 가능</br></br>도구들을 활용한 이미지 편집, 보정 및</br>gif 파일 생성 가능"
          );
      } else if (ind == 6) {
        $("#skillsProBar").addClass("idBar");
        $("#skillsSelectedBox #SelectedBox").addClass("skillsSelectedId");
        $("#skillsDetailBox")
          .children("#DetailBox")
          .children("p")
          .addClass("skillsDetailFade")
          .html("마스터 페이지, 스타일 관리 등을 이용한</br>출판편집 가능");
      }
    });
});

// pc 전원버튼 클릭 이벤트
$(function () {
  $("#btnOff").click(function () {
    // pc전원버튼 on/off
    if ($(this).hasClass("pcBtnOn") == true) {
      $(this).removeClass("pcBtnOn");
    } else {
      $(this).addClass("pcBtnOn");
    }
    //pc 스크린 on/off
    if ($("#pcScreen").hasClass("pcfadeIn") == true) {
      $("#pcScreen").removeClass("pcfadeIn");
    } else {
      $("#pcScreen").addClass("pcfadeIn");
    }

    $('.howtoPC').hide();
  });
});

// pc screen 아이콘 원클릭 임시선택

        $('.Shortcuts').each(function (index) {
            $('.Shortcuts').eq(index).click(function () {
              $(this).children('.ShortcutsBG').addClass('ShortcutsBGcolor')
                .parent().siblings().children('.ShortcutsBG')
                .removeClass('ShortcutsBGcolor');
            });
          
              // 더블클릭으로 각 링크 배정
             $(this).dblclick(function() {
               let dbind = $(this).index();
          
               if (dbind == 0) {
                 $(location).attr("href", "./html/webSubPage.html")
               }
               else if (dbind == 1) {
                $(location).attr("href", "./html/designSubPage.html")
             }
        })

        });


  
     
         

// 안에 텍스트 바꾸는 함수
// $(this).children('p').html('<div>내용</div>');
// $(this).children('p').text('내용');












// 휠로 이동시 네비게이션 색바꾸기

 