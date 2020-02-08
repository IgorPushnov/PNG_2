$(function() {

    let nav = $("#nav");
    let copyright = $("#copyright_nav")
    let navToggle = $("#navToggle");
    let newToggle = $("#newToggle")
    let newTitle = $("#copyright_link--first");

    /* Toggle */
    navToggle.on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");
    });

    newToggle.on("click", function(event) {
        event.preventDefault();
        copyright.toggleClass("view");
        newTitle.html("&#183;&nbsp;&nbsp;&nbsp;&nbsp;Home");
    });

});
