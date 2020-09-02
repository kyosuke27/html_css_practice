let images = [//配列に画像のパスを用意しておく
    '../../img/image-1.jpg',
    '../../img/image-2.jpg',
    '../../img/image-3.jpg',
    '../../img/image-4.jpg',
    '../../img/image-5.jpg'
];

let current=0;//現在のページ番号

//ページ番号の更新処理関数
let changeImage=function(num){
    if(current+num>=0&&current+num<images.length){//currentの範囲は0～4まで
        current+=num;
    }
    pageNum();
    //イメージ画像を更新する処理
    document.getElementById('main_image').src=images[current];
};

//ページ番号表示関数
let pageNum=function(){
    document.getElementById('page').textContent=(current+1)+'/'+images.length;
}

pageNum();

//前のページを表示
document.getElementById('prev').onclick=function(){
    changeImage(-1);
};

//次のページを表示
document.getElementById('next').onclick=function(){
    changeImage(1);
};