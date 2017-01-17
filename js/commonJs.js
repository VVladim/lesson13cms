$('.list-item-1 .item').on('click', function () {
    var item1 = $(this).index();
    $(this).addClass('.active');
    $(this).siblings('.active');

    $('.list-item-2 .item').eq(item1).text();
});
// console.log ('111');
