$(document).on("click", "#startBtn", function (e) {
    e.stopPropagation();
    $("#startMenu").toggleClass("d-none");
});

// click outside to close
$(document).on("click", function (e) {
    if (!$(e.target).closest("#startMenu, #startBtn").length) {
        $("#startMenu").addClass("d-none");
    }
});