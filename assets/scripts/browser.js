$(document).on("click", "#search", function () {
    const win = $("#browser");
    const urlInput = win.find("#url");
    const iframe = win.find("#iframe");
    const loader = win.find("#loader");

    let url = urlInput.val();
    if (!/^https?:\/\//i.test(url)) url = 'https://' + url;

    loader.removeClass("d-none");
    iframe.attr("src", url);
});

$("#url").on("keypress", function (e) {
    if (e.key === "Enter") $("#search").click();
});

$("#iframe").on("load", function () {
    $("#loader").addClass("d-none");
});