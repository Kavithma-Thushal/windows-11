// open
function openApp(id) {
    $(".window").css("z-index", 1);

    const win = $("#" + id);
    win.removeClass("d-none").css("z-index", 10);

    addToTaskbar(id, win.data("title"), win.data("icon"));
}

// search
$(document).on("click", "#search", function () {
    const win = $("#browser");
    const urlInput = win.find("#url");
    const iframe = win.find("#iframe");
    const loader = win.find("#loader");
    const googleLogo = win.find("#googleLogo");

    let url = urlInput.val();
    if (!/^https?:\/\//i.test(url)) url = 'https://' + url;

    googleLogo.hide();
    loader.removeClass("d-none");
    iframe.attr("src", url);
});

// close
$(document).on("click", ".close", function () {
    const win = $(this).closest(".window");
    removeFromTaskbar(win.attr("id"));

    if (win.attr("id") === "browser") {
        win.find("#url").val("");
        win.find("#iframe").attr("src", "about:blank");
        win.find("#googleLogo").show();
        win.data("loaded", false);
    }

    win.addClass("d-none");
});

$("#url").on("keypress", function (e) {
    if (e.key === "Enter") $("#search").click();
});

$("#iframe").on("load", function () {
    $("#loader").addClass("d-none");
});