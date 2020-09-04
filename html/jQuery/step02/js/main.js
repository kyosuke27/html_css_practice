/*
CSSセレクタに値を追加し、HTMLに反映する
$(function(){
    $('#typo').css('color','#ebc000');
});

$(function(){
    $('#typo .inner').css('transform','rotate(10deg)');
});
*/
/*
$(function(){
    $('#typo').on('mouseover',function(){
        $('#typo').css('color','#ebc000');
    });
    $('#typo').on('mouseout',function(){
        $('#typo').css('color','#ffffff');
    });
    $('#typo').on('click',function(){
        $('#typo').css('background-color','#ae5e9b');
        $('header').css('color','#ae5e9b');
    });
});
*/

$(function(){
    $('#typo').on('click',function(){
        $('#typo .inner').animate({
                //opacity:0,透明度->0
                //fontSize:'0px'文字の大きさ->0
                //color:'#ebc000'
                top:'100px'
            },
            1500,
            //イージング
            //'linear'
            //'swing'
            function(){
                $('#typo .inner').animate({top:'0px'},500,'swing');
            }
        );
    });
});