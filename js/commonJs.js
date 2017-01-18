$('.list-item-1 .item').on('click', function () {
    var indexItem = $(this).index();

    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    $('.list-item-2 .item').removeClass('active');
    $('.list-item-2 .item').eq(indexItem).addClass('active');
});
// console.log ('111');
