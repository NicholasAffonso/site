document.onclick = function(){
    goHome()
};
document.onscroll = function(){
    goHome()
};
function goHome() {
    window.location.replace("/pages/home.html");
}