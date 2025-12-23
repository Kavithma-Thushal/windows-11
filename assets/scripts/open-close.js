$(".window").draggable({handle: ".bg-light"});

function openApp(id) {
    $(".window").css("z-index", 1);
    $("#" + id).removeClass("d-none").css("z-index", 10);
}

$(".app-icon").on("dblclick", function (e) {
    e.stopPropagation();
    openApp($(this).data("app"));
});

$(".app-launch").on("click", function (e) {
    e.stopPropagation();
    openApp($(this).data("app"));
    $("#startMenu").addClass("d-none");
});

$(".task-app").on("click", function () {
    openApp($(this).data("app"));
});

$(".close").click(function () {
    $(this).closest(".window").addClass("d-none");
});

$(".minimize").click(function () {
    $(this).closest(".window").addClass("d-none");
});

$("#startBtn").click(function () {
    $("#startMenu").toggleClass("d-none");
});

$(document).click(function (e) {
    if (!$(e.target).closest("#startMenu, #startBtn").length) {
        $("#startMenu").addClass("d-none");
    }
});

function clock() {
    let time = new Date().toLocaleTimeString([], {hour: 'numeric', minute: '2-digit', hour12: true});
    $("#clock").text(time.toUpperCase());
}

setInterval(clock, 1000);
clock();