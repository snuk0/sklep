$(".tp-title-text").on("click", function(event) {
    event.preventDefault();
    if($(this).text() == "hot")
    {
        $(".tp-title-text").removeClass("active");
        $(this).addClass("active");
        $(".tp_body_card").removeClass("selected");
        $("#hot_section").addClass("selected");
    } else if(($(this).text() == "on sale"))
    {
        $(".tp-title-text").removeClass("active");
        $(this).addClass("active");
        $(".tp_body_card").removeClass("selected");
        $("#onsale_section").addClass("selected");
    } else if(($(this).text() == "trending now"))
    {
        $(".tp-title-text").removeClass("active");
        $(this).addClass("active");
        $(".tp_body_card").removeClass("selected");
        $("#trending_section").addClass("selected");
    } else if(($(this).text() == "new arrivals"))
    {
        $(".tp-title-text").removeClass("active");
        $(this).toggleClass("active");
        $(".tp_body_card").removeClass("selected");
        $("#narrivals_section").addClass("selected");
    }
});