$(document).on("click", "#startBtn", function (e) {
    e.stopPropagation();
    $("#start").toggleClass("d-none");
});

// click outside to close
$(document).on("click", function (e) {
    if (!$(e.target).closest("#start, #startBtn").length) {
        $("#start").addClass("d-none");
    }
});