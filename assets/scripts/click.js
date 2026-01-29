// desktop apps → double click
$(document).on("dblclick", ".app-icon", function (e) {
    e.stopPropagation();
    openApp($(this).data("app"));
});

// start menu apps → click
$(document).on("click", ".app-launch", function (e) {
    e.stopPropagation();
    openApp($(this).data("app"));
    $("#startMenu").addClass("d-none");
});

// taskbar apps → click
$(document).on("click", ".task-app", function () {
    const id = $(this).data("app");
    $(".window").css("z-index", 1);
    $("#" + id).removeClass("d-none").css("z-index", 10);
});

// minimize
$(document).on("click", ".minimize", function () {
    $(this).closest(".window").addClass("d-none");
});