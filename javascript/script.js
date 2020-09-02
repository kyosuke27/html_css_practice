
let lang = document.querySelector('html').lang;

let opt;
if (lang === 'ja') {
    opt = document.querySelector('option[value="Japanese_sample.html"]');
} else if (lang === 'en') {
    opt = document.querySelector('option[value="English_sample.html"]');
} else {
    opt = document.querySelector('option[value="Chinese_sample.html"]');
}

opt.selected=true;

document.getElementById('form').select.onchange=function(){
    location.href=document.getElementById('form').select.value;
    //href=>表示しているページのURLを表す->URLが変更された時更新がかかる
}


document.getElementById('form').select.onchange = function () {
    location.href = document.getElementById('form').select.value;
    //href=>表示しているページのURLを表す->URLが変更された時更新がかかる
}