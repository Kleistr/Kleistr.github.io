$("#nightmodel").click(function(){
    if ($("#nightmodel").is(".night")){
        $("#nightmodel").removeClass("night");
        $(".fa-sun-o").addClass("fa-moon-o");
        $(".fa-moon-o").removeClass("fa-sun-o");
        $("body").removeClass("night_big_body");
        $(".content-wrap").removeClass("night_big_block");
        $(".header-inner").removeClass("night_big_block");
        $(".sidebar-inner").removeClass("night_big_block");
        $(".headband").removeClass("night_small_meta");
        $(".site-meta").removeClass("night_small_meta");
        $(".posts-expand .post-title-link").removeClass("night_small_line");
        $(".posts-expand .post-eof").removeClass("night_small_line");
        $(".menu-item-active a").removeClass("night_small_menu_active");
        $(".menu .menu-item a").removeClass("night_small_menu");
        $(".site-author-name").removeClass("night_small_authorname");
        $(".post-button .btn").removeClass("night_small_btn");
        $(".pagination .page-number.current").removeClass("night_small_authorname");
    }
    else {
        $("#nightmodel").addClass("night");
        $(".fa-moon-o").addClass("fa-sun-o");
        $(".fa-sun-o").removeClass("fa-moon-o");
        $("body").addClass("night_big_body");
        $(".headband").addClass("night_small_meta");
        $(".content-wrap").addClass("night_big_block");
        $(".header-inner").addClass("night_big_block");
        $(".sidebar-inner").addClass("night_big_block");
        $(".menu-item-active a").addClass("night_small_menu_active");
        $(".menu .menu-item a").addClass("night_small_menu");
        $(".posts-expand .post-title-link").addClass("night_small_line");
        $(".posts-expand .post-eof").addClass("night_small_line");
        $(".site-meta").addClass("night_small_meta");
        $(".post-button .btn").addClass("night_small_btn");
        $(".pagination .page-number.current").addClass("night_small_authorname");
        $(".site-author-name").addClass("night_small_authorname");
    }

});