$(function(){
    let duration=300;

    let $aside=$('.page-main>aside');//page-mainクラスの中のaside要素取得
    let $asideButton=$aside.find('button')//aside要素の中のbutton要素
        .on('click',function(){
            $aside.toggleClass('open');//aside要素にopenクラスがあるのかどうか?
            if($aside.hasClass('open')){//aside要素がopenクラスを持っているとき
                $aside.stop(true).animate({
                    left:'-70px'
                },duration,'easeOutBack');
                $asideButton.find('img')
                    .attr('src','img/btn_close.png');//img要素のsrc属性の値をimg/btn_close.pngへ変更
            }else{//aside要素がopenクラスを持っていないとき
                $aside.stop(true).animate({
                    left:'-350px'
                },duration,'easeInBack');
                $asideButton.find('img')
                    .attr('src','img/btn_open.png');//img要素のsrc属性の値をimg/btn_open.pngへ変更

            };
        });
});

/*
toggleClass()メソッド->引数に指定されたクラス名がjQueryオブジェクト内の要素のclass属性に
指定されているか確認し、指定されていない場合は追加し、すでに指定されている場合は
削除するメソッド
*/

/*
hasClass()メソッド->引数に渡したクラス名が、対象要素のclass属性に
含まれていればtrueを返し、含まれていなければfalseを返す 
*/

/*
attrメソッド->要素の属性値の取得または属性値の設定を行うメソッド
*/