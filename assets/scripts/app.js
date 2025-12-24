$(document).on("mouseenter", ".window", function () {
    $(".window").css("z-index", 1);
    $(this).css("z-index", 10);
});

// draggable
$(document).on("mouseenter", ".window", function () {
    $(this).draggable({handle: ".border-bottom:first"});
});

// open app
function openApp(id) {
    $(".window").css("z-index", 1);

    const win = $("#" + id);
    win.removeClass("d-none").css("z-index", 10);

    addToTaskbar(id, win.data("title"), win.data("icon"));

    if (id === "browser" && !win.data("loaded")) {
        win.find("#iframe").attr("src", "https://example.com");
        win.data("loaded", true);
    }
}

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

// close & minimize
$(document).on("click", ".close", function () {
    const win = $(this).closest(".window");
    removeFromTaskbar(win.attr("id"));
    win.addClass("d-none");
});

$(document).on("click", ".minimize", function () {
    $(this).closest(".window").addClass("d-none");
});

// start button
$(document).on("click", "#startBtn", function (e) {
    e.stopPropagation();
    $("#startMenu").toggleClass("d-none");
});

// click outside closes start menu
$(document).on("click", function (e) {
    if (!$(e.target).closest("#startMenu, #startBtn").length) {
        $("#startMenu").addClass("d-none");
    }
});

// clock
function clock() {
    let time = new Date().toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    });
    $("#clock").text(time.toUpperCase());
}

setInterval(clock, 1000);
clock();

function addToTaskbar(id, title, icon) {
    if ($("#taskbar-" + id).length) return;

    $("#taskbarApps").append(`
        <i class="bi ${icon} fs-4 task-app"
           id="taskbar-${id}"
           data-app="${id}"
           title="${title}">
        </i>
    `);
}

function removeFromTaskbar(id) {
    $("#taskbar-" + id).remove();
}