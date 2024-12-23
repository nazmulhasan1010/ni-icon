$(function () {
    let showing = $('.content-showing-box p span');
    $(showing).text($('.class-items').length)
    $('.class-copy').click(function (e) {
        let className = $(this).siblings('.icon-info').find($('.icon-class-text')).text();
        let html = `<i class="${className}"></i>`;
        navigator.clipboard.writeText(html).then(() => {
            $(this).css('background-color', 'green').children('i').removeClass('ni-content-copy').addClass('ni-check')
            setTimeout(() => {
                $(this).css('background-color', 'rgb(107, 107, 107)').children('i').addClass('ni-content-copy').removeClass('ni-check')
            }, 1000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    })

    $('.icon-search').keyup(function (e) {
        let value = $(this).val();
        $('.class-items').addClass('d-none');
        let items = $(`.icon-class-text:contains(${value})`).parents('.class-items').removeClass('d-none');
        $(showing).text($(items).length)
    })
})
