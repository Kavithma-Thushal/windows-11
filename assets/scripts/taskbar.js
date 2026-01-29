// add app to taskbar dynamically
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

// remove app from taskbar
function removeFromTaskbar(id) {
    $("#taskbar-" + id).remove();
}

// set time
function time() {
    let time = new Date().toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    });
    $("#time").text(time.toUpperCase());
}

setInterval(time, 1000);
time();

// set date
function date() {
    const now = new Date();

    const month = now.getMonth() + 1;
    const day = now.getDate();
    const year = now.getFullYear();

    $("#date").text(month + "/" + day + "/" + year);
}

setInterval(date, 1000);
date();