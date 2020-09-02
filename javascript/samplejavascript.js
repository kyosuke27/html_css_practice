/*
//window.confirm->画面上にボックス出現
if(window.confirm('ゲームスタート！！準備はいい')){
    console.log('ゲーム開始します。');
}else{
    console.log('ゲーム終了します。');
}

//prompt->テキストボックス付きのconfirm入力用テキストボックス表示
let answer=window.prompt('ヘルプを見ますか？');
if(answer==='yes'){
    window.alert('タップでジャンプ、障害物をよけます。');
}
*/
//window.alert->OKボタンのみのボックスを表示する。上記変数をconsoleに表示
//console.log(answer);
/*
//3分岐処理
let answer=window.prompt('ヘルプを見ますか?');
if(answer==='yes'){
    window.alert('タップでジャンプ、障害物をよけます。')
}else if(answer=='no'){
    window.alert('ゲーム起動中...');
}else{
    window.alert('yesかnoでお答えください。');
}
*/

/*
let number=Math.floor(Math.random()*6);//Math.floor->引数で与えられた数以下の最大の整数を返す
console.log(number);
let answer=parseInt(window.prompt('数当てゲーム。0~5の数字を入力してね。'));//ユーザーが入力する数字
let message;
if(answer===number){
    message='あたり';
}else if(answer<number){
    message='もっと大きい値だよ!';
}else if(answer>number){
    message='もっと小さい値だよ!';
}else{
    message='0~5を入力してね!';
}

window.alert(message);
*/

/*
//時間の取得
let hour=new Date().getHours();//日時、時間から時間の部分を取得
//let dayHour=new Date();日時、時間の取得
//console.log(hour);
//console.log(dayHour);
if(hour>=19&&hour<21){
    window.alert('お弁当30%OFF!');
}else if(hour===9||hour===15){
    window.alert('お弁当1個買ったら1個おまけ!');
}else{
    window.alert('お弁当はいかがですか');
}
*/

/*
//繰り返し処理
for(let i=1;i<=10;i++){
    console.log(i+'枚');
}


//繰り返し処理を用いた、ゲーム
let enemy=100;
let attack;
let count=0;

window.alert('戦闘スタート');
while(enemy>0){
    attack=Math.floor(Math.random()*30)+1;
    console.log('モンスターに'+attack+'のダメージ!');
    console.log('モンスターの体力 : '+enemy);
    enemy-=attack;
    count++;

}
window.alert(count+'回でモンスターを倒した!');


//関数の利用

let total=function(p//配列
    
    let todo=['デザインカンプ作成','データ整理','勉強会申し込み','牛乳買う'];
    todo.push('歯医者に行く');
    for(){{}rice){
    let tax=0.1;
    return price+price*tax;
}

console.log('コーヒーメーカーの値段は'+total(8000)+'円（税込み）です。');
document.getElementById('output').textContent = 'コーヒーメーカーの値段は' + total(8000) + '円（税込み）です。';


//関数を用いたFizzBuzz問題

let fizzbuzz=function(num){
    if(num%3==0&&num%5==0){
        console.log('FizzBuzz!');
    }else if(num%3==0){
        return 'Fizz!';
    }else if(num%5==0){
        return 'Buzz';
    }else{
        return num;
    }
}
for(let i=1;i<=30;i++){
    console.log(fizzbuzz(i));
}
*/

/*
//配列

let todo=['デザインカンプ作成','データ整理','勉強会申し込み','牛乳買う'];
todo.push('歯医者に行く');
for(let i=0;i<todo.length;i++){
    let li=document.createElement('li');//<li></li>タグの生成、()の中はタグ名
    li.textContent=todo[i];
    document.getElementById('list').appendChild(li);//<ul class="list"><ul>に上記で作った<li></li>追加
}
*/

/*
//オブジェクト->{プロパティ:データ}で表される
let jsbook={title:'JavaScript入門',price:2500,stock:3};

//for...in文->オブジェクトのプロパティをとってこれる
for(let p in jsbook){//pにはjsbookのプロパティが代入される
    console.log(p+'='+jsbook[p]);//プロパティのデータを読み取るときは->オブジェト名[プロパティ]
}

document.getElementById('title').textContent=jsbook.title;
document.getElementById('price').textContent=jsbook.price;
document.getElementById('stock').textContent=jsbook.stock;
*/

/*
//フォームの入力内容を取得する
//ボタンを押されたかどうか判定する
document.getElementById('form').onsubmit=function(){//onsubmitイベント->ボタンがクリックされたとき、入力内容がサーバーに送信される直前に発生
    console.log('クリックされました');
};//パラメータ（引数）もリターン（戻り値）ない関数
document.getElementById('form').onsubmit=function(){
    let search=document.getElementById('form').word.value;//取得した要素.読み取りたい部品のname属性.value
    document.getElementById('output').textContent='『'+search+'』の検索中...';
    return false;//htmlの基本動作をキャンセルしている
}
*/
/*
//分かりやすく日時を表示する（日時用メソッドの利用）
let now=new Date();//引数が無いときは現在日時を取得する
let year=now.getFullYear();//月を取得するメソッド、ただし、取得データは(実際の月-1)の月が取得できる
let month=now.getMonth();
let date=now.getDate();
let hour=now.getHours()
let min=now.getMinutes();

let output=year+'/'+(month+1)+'/'+date+' '+hour+':'+min;
document.getElementById('time').textContent=output;
*/

/*
//12時間時計にする
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let date = now.getDate();
let hour = now.getHours()
let min = now.getMinutes();
let ampm='';

if(hour>12){
    ampm='p.m.';
}else{
    ampm='a.m.';
}

let output = year + '/' + (month + 1) + '/' + date + ' ' + (hour % 12) + ':' + min + ampm;
document.getElementById('time').textContent=output;
*/
/*
//指定した数字の前に指定した数だけ0を付ける関数

let addZero=function(num,digit){
    let numString=String(num);//数字のnumを文字列化する
    while(numString.length<digit){
        numString='0'+numString;
    }
    return numString;
}

let songs=[
    'Stella',
    'Satin',
    'Caravan',
    'Besame'
];

for(let i=0;i<songs.length;i++){
    let paragraph=document.createElement('p');
    paragraph.textContent=addZero(i+1,2)+'. '+songs[i];
    document.getElementById('list').appendChild(paragraph);
}
*/

/*
//任意の小数点以下切り捨て関数

let point=function(num,digit){
    let time=Math.pow(10,digit);//少数点以下の桁数をずらす
    return Math.floor(num*time)/time;//ずらした小数点を元に戻して返す
}
*/

/*
//タイマーの関数->指定された日にちから現在までの差を求める
let countdown=function(due){
    let now=new Date();
    let rest=due.getTime()-now.getTime();//ある時刻から、現在の時刻を引く　->　残り時刻
    let sec=Math.floor(rest/1000)%60;//ミリ秒->秒へ
    let min=Math.floor(rest/1000/60)%60;//ミリ秒から->分へ
    let hours=Math.floor(rest/1000/60/60)%24;//ミリ秒から=>時へ
    let days=Math.floor(rest/1000/60/60/24);//ミリ秒から->日へ
    let count=[days,hours,min,sec];//配列として格納

    return count;//配列を戻り値として返す
}

let goal=new Date();//時刻の取得
goal.setHours(23);//時間のセット
goal.setMinutes(59);//分のセット
goal.setSeconds(59);//秒のセット

console.log(countdown(goal));
let counter=countdown(goal);//セットした時間との差を求める
let time=counter[1]+'時間'+counter[2]+'分'+counter[3]+'秒';//書式を整える
document.getElementById('timer').textContent=time;//pタグにセット

let recalc=function(){
    let counter=countdown(goal);
    let time = counter[1] + '時間' + counter[2] + '分' + counter[3] + '秒';
    document.getElementById('timer').textContent=time;
    refresh(recalc);
}

let refresh=function(recalc){
    setTimeout(recalc,1000);//1秒ごとにrecalcファンクションを実行するメソッド
    //setTime(ファンクション,待ち時間)
}

recalc();

//東京オリンピック（2021）タイマー
let goal2=new Date(2021,6,24);

let recalc2=function(){
    let counter=countdown(goal2);
    document.getElementById('day').textContent=counter[0];
    document.getElementById('hour').textContent = counter[1];
    document.getElementById('min').textContent = counter[2];
    document.getElementById('sec').textContent = counter[3];
    refresh(recalc2);
}

recalc2();
//let counter1=countdown(goal2);//現在日時と東京オリンピックの時刻差
//recalc(goal2);
*/

