$(function(){
    let duration=300;

    //1行目のボタンの処理
    $('#buttons1 button:nth-child(-n+4)')
        .on('mouseover',function(){
            $(this).stop(true).animate({
                backgroundColor:'#ae5e9b',
                color:'#fff'
            },duration);
        })
        .on('mouseout',function(){
            $(this).stop(true).animate({
                backgroundColor:'#fff',
                color:'#ebc000'
            },duration);
        });

    //2行目のボタンの処理
    $('#buttons1 button:nth-child(n+5):nth-child(-n+8)')
        .on('mouseover',function(){
            $(this).stop(true).animate({
                borderWidth:'12px',
                color:'#ae5e9b'
            },duration,'easeOutSine');
        })
        .on('mouseout',function(){
            $(this).stop(true).animate({
                borderWidth:'0px',
                color:'#ebc000'
            },duration,'easeOutSine');
        });
    //3行目のボタンの処理
    $('#buttons1 button:nth-child(n+9)')
        .on('mouseenter',function(){
            $(this).find('> span').stop(true).animate({
                width:'100%'
            },duration,'easeOutQuad');
        })
        .on('mouseleave',function(){
            $(this).find('> span').stop(true).animate({
                width:'0%'
            },duration,'easeOutQuad');
        });

    let $images=$('#images p');

    //1つ目の画像
    $images.filter(':nth-child(1)')
        .on('mouseover',function(){
            $(this).find('strong, span').stop(true).animate({
                opacity:1//opacity->要素の不透明度、コンテンツを隠したりできる。
            },duration);
        })
        .on('mouseout',function(){
            $(this).find('strong, span').stop(true).animate({
                opacity:0
            },duration);
        })
    //2つ目の画像
    $images.filter(':nth-child(2)')
        .on('mouseover',function(){
            $(this).find('strong').stop(true).animate({
                opacity:1,
                left:'0%'
            },duration);
        $(this).find('span').stop(true).animate({
            opacity:1
        },duration);
        })
        .on('mouseout',function(){
            $(this).find('strong').stop(true).animate({
                opacity:0,
                left:'-200%'
            },duration);
            $(this).find('span').stop(true).animate({
                opacity:0
            },duration);
        });

    //3つ目の画像
    $images.filter(':nth-child(3)')
        .on('mouseover',function(){
            $(this).find('strong').stop(true).animate({
                bottom:'0px'
            },duration);
            $(this).find('span').stop(true).animate({
                opacity:1
            },duration);
            $(this).find('img').stop(true).animate({
                top:'-20px'
            },duration*1.3);
        })
        .on('mouseout',function(){
            $(this).find('strong').stop(true).animate({
                bottom:'-80px'
            },duration);
            $(this).find('span').stop(true).animate({
                opacity:0
            },duration);
            $(this).find('img').stop(true).animate({
                top:'0px'
            },duration);
        }) 

        //丸いボタン

        $('#buttons2 button').each(function(index){
            let pos =index*40-40;
            $(this).css('top',pos);
        })
        .on('mouseover',function(){
            let $btn=$(this).stop(true).animate({
                backgroundColor:'#faee00',
                color:'#000'
            },duration);
            $btn.find('img:first-child').stop(true).animate({
                opacity:0
            },duration);
            $btn.find('img:nth-child(2)').stop(true).animate({
                opacity:1
            },duration);
        })
        .on('mouseout',function(){
            let $btn=$(this).stop(true).animate({
                backgroundColor:'#fff',
                color:'#01b169',
            },duration);
            $btn.find('img:first-child').stop(true).animate({
                opacity:1
            },duration);
            $btn.find('img:nth-child(2)').stop(true).animate({
                opacity:0
            },duration);
        })
});