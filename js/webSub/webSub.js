
// 아이콘 카테고리-----------------------------------

$('#iconCategoryMenuBox p').each(function (index) {
    // 인덱스 번호 구하기
    $('#iconCategoryMenuBox p').eq(index).click(function () {
        // p style 초기화 및 css
        $(this).addClass('styleP').css("font-size", "35px")
        
        $(this).siblings().css("font-size", "30px").removeClass('styleP');
        $('#worksBox').children().hide().removeClass('fadeIn');
        $('#worksBox').children('.'+$(this).text().toLowerCase()).show().addClass('fadeIn');
      
      //   if (catind == 0) {
      //       $('#worksBox .all').show();
      //   } else if (catind == 1) {
      //       $('#worksBox .all').hide();
      //       $('#worksBox .ai').show();
      //   } else if (catind == 2) {
      //       $('#worksBox .all').hide();
      //       $('#worksBox .ps').show();
      //   } else if (catind == 3) {
      //       $('#worksBox .all').hide();
      //       $('#worksBox .id').show();
      //   }
    })
})

// $('#worksBox').children().hide();
// $('#worksBox').children('.'+$(this)).hide();


// $('#iconCategoryMenuBox p').eq(index).click(function(){
//     const target = $(this);
//     target.addClass('styleP').css("font-size", "35px");
//     const others = target.siblings();
//     others.removeClass('styleP').css("font-size", "30px");

//     //클릭한 요소의 id값 호출
//     let id = $(this).attr('id');
//     //div id="worksBoxCover" 안의 자식들 중 클래스가 id값과 같은 것만 보여줌
//     $('#worksBox').children().hide();
//     $('#worksBox').children('.'+id).show();
// })