$(function(){

  // checkbox 객체
  var $check_box = $('.check_list input:checkbox');
  var handle_checkbox = function(){
    if($(this).is(":checked")) {
      var _id = $(this).attr('id')
      $('label[for=' + _id + ']').addClass('checked');
    } else {
      var _id = $(this).attr('id')
      $('label[for=' + _id + ']').removeClass('checked');
    }
  }

  $check_box.each(function(i, el){
    // for, id 속성 추가
    $(this).prev().attr('for', 'check' + i);
    $(this).attr('id', 'check' + i);
    
    if($(this).is(":checked")) {
      var _id = $(this).attr('id')
      $('label[for=' + _id + ']').addClass('checked');
    }
  })

  // 채크 이벤트 검사
  $check_box.on('change', handle_checkbox)


});