$(document).on("click", "#songsTable tbody tr", function () {
    const src = $(this).data("src");
    if (!src) return;

    const audioPlayer = document.getElementById("audioPlayer");
    if (!audioPlayer) return;
    audioPlayer.src = src;
    audioPlayer.play();

    // Update "Now Playing"
    const title = $(this).find("td:first").text().trim();
    $("#music span.text-light").text(title);
});