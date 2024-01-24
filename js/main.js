
// truncateCradTitle
window.addEventListener("load",function(){
    truncateCradTitle();
});

function truncateCradTitle() {
    var cardList = document.getElementsByClassName("card-title");
    console.log(cardList);
    for (var i = 0; i < cardList.length; i++) {
        
        var text = cardList[i].innerHTML;
        var newText = truncateString(text, 35);
        cardList[i].innerHTML = newText;
    }

}
function truncateString(str, num) {
    if (str.length > num) {
        // cong noi chuoi
        return str.slice(0, num) + "...";

    }
    else {
        return str;
    }
}
// sidebar Mini
// khai báo biến kiểu kameo
var toggleBtn = document.querySelector('.sidebarMini__button');
var sidebarMini =document.querySelector('.sidebarMini');
// button chuyen doi
var switchBtn = document.querySelector('#checkbox');
//  them su kien  
toggleBtn.addEventListener('click',function(){
    // classList khoong de code hien tai chi them
    sidebarMini.classList.toggle('is-opened');

}
);
switchBtn.addEventListener('click',function(){
    // classList khoong de code hien tai chi them
    document.querySelector('body').classList.toggle('darkMode');

}
);
