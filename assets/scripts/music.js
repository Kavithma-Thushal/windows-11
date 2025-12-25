$(document).on("dblclick", ".explorer-music", function (e) {
    e.stopPropagation();
    openApp($(this).data("app"));
});

// Click on a song row to play
$(document).on("click", "#songsTable tbody tr", function () {
    const src = $(this).data("src");
    if (!src) return;

    // Select the audio player dynamically
    const audioPlayer = document.getElementById("audioPlayer");
    if (!audioPlayer) return;

    // Set the audio source and play
    audioPlayer.src = src;
    audioPlayer.play();

    // Update "Now Playing" text
    const title = $(this).find("td:first").text().trim();
    $("#music .border-top .text-light").text(title);
});

$(document).on("click", "#playBtn", function () {
    const audio = document.getElementById("audioPlayer");
    if (audio.paused) {
        audio.play();
        $(this).html('<i class="bi bi-pause-fill"></i>');
    } else {
        audio.pause();
        $(this).html('<i class="bi bi-play-fill"></i>');
    }
});