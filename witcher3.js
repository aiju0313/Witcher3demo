const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");



//バーガーをクリックするとメニューが開閉する
if(burgerMenu && navbarMenu){
    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("is-active");
        navbarMenu.classList.toggle("is-active");
    });
}

//menu-linksをクリックするとメニューが閉じる
document.querySelectorAll(".menu-link").forEach((link) =>{
    link.addEventListener("click", () =>{
        burgerMenu.classList.remove("is-active");
        navbarMenu.classList.remove("is-active");
    });
});

//スクロール時にヘッダーの背景を変更する
window.addEventListener("scroll", () => {
    if(this.scrollY >= 85) {
        headerMenu.classList.add("on-scroll");
    } else{
        headerMenu.classList.remove("on-scroll");
    }
});


//ウィンドウ・サイズ変更時のnavbar menuを修正
window.addEventListener("resize", () => {
    if(window.innerWidth > 768) {
        if(navbarMenu.classList.contains("is-active")){
            navbarMenu.classList.remove("is-active");
        }
    }
});