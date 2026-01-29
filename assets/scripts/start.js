// open
$(document).on("click", "#startBtn", function (e) {
    e.stopPropagation();
    $("#start").css("z-index", 99999).toggleClass("d-none");
});

// close
$(document).on("click", function (e) {
    if (!$(e.target).closest("#start, #startBtn").length) {
        $("#start").addClass("d-none");
    }
});