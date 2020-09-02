let thumbs=document.querySelectorAll('.thumb');

for(let i=0;i<thumbs.length;i++){
    thumbs[i].onclick=function(){
        console.log(this.dataset.image);
        document.getElementById("bigimg").src=this.dataset.image;
    };
}