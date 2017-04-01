$("#nightmodel").click(function(){
    document.getElementById('switch_mode').classList.toggle("nightmodel");
    if(document.getElementById('switch_mode').classList.contains("nightmodel")) {
        localStorage.setItem("night",true);
    }
    else {
        localStorage.setItem("night",false);
    }
    dayModeState();
});


function dayModeState() {
    var night=localStorage.getItem('night');
    console.log("night_mode:" + night);
    if(night==="true") {
        // document.getElementById('switch_mode').classList.remove("noghtmodel");
        document.getElementById('nightmodel').innerHTML='<i id = "moon" class="fa fa-moon-o fa-fw"></i>'
    }

   else {
        // document.getElementById('switch_mode').classList.add("nightmodel");
        document.getElementById('nightmodel').innerHTML='<i id = "moon" class="fa fa-lightbulb-o fa-fw"></i>'
    }
}

dayModeState();

// --------------------------------------------

// $("#nightmodel").click(function(){
//     if ($("#nightmodel").is(".night")){
//         $("#nightmodel").removeClass("night");
//         $(".fa-lightbulb-o").addClass("fa-moon-o fa-fw");
//         $(".fa-fw").removeClass("fa-lightbulb-o");
//         $("body").removeClass("night_big_body");
//         $(".content-wrap").removeClass("night_big_block");
//         $(".header-inner").removeClass("night_big_block");
//         $(".sidebar-inner").removeClass("night_big_block");
//         $(".headband").removeClass("night_small_meta");
//         $(".site-meta").removeClass("night_small_meta");
//         $(".posts-expand .post-title-link").removeClass("night_small_line");
//         $(".posts-expand .post-eof").removeClass("night_small_line");
//         $(".menu-item-active a").removeClass("night_small_menu_active");
//         $(".menu .menu-item a").removeClass("night_small_menu");
//         $(".site-author-name").removeClass("night_small_authorname");
//         $(".post-button .btn").removeClass("night_small_btn");
//         $(".pagination .page-number.current").removeClass("night_small_number_current");
//         $(".pagination .page-number").removeClass("night_small_number");
//         $(".next").removeClass("night_small_number");
//         $("a.author").removeClass("night_small_beian");
//         $(".links-of-author-item a").removeClass("night_small_author_item");
//     }
//     else {
//         $("#nightmodel").addClass("night");
//         $(".fa-moon-o").addClass("fa-lightbulb-o fa-fw");
//         $(".fa-fw").removeClass("fa-moon-o");
//         $("body").addClass("night_big_body");
//         $(".headband").addClass("night_small_meta");
//         $(".content-wrap").addClass("night_big_block");
//         $(".header-inner").addClass("night_big_block");
//         $(".sidebar-inner").addClass("night_big_block");
//         $(".menu .menu-item a").addClass("night_small_menu");
//         $(".menu-item-active a").addClass("night_small_menu_active");
//         $(".menu-item-active a").removeClass("night_small_menu");
//         $(".posts-expand .post-title-link").addClass("night_small_line");
//         $(".posts-expand .post-eof").addClass("night_small_line");
//         $(".site-meta").addClass("night_small_meta");
//         $(".post-button .btn").addClass("night_small_btn");
//         $(".pagination .page-number.current").addClass("night_small_number_current");
//         $(".pagination .page-number").addClass("night_small_number");
//         $(".next").addClass("night_small_number");
//         $("a.author").addClass("night_small_beian");
//         $(".links-of-author-item a").addClass("night_small_author_item");
//         $(".site-author-name").addClass("night_small_authorname");
//     }
//
// });
