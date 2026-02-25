$(document).on("keydown", "#terminal-input", function (e) {

    if (e.key === "Enter") {

        let input = $(this).val().trim();
        let output = $("#terminal-output");

        output.append(`<div>C:\\Users\\kavit&gt; ${input}</div>`);

        switch (input.toLowerCase()) {

            case "help":
                output.append(`<div>
                cls - clear screen<br>
                date - show date<br>
                time - show time<br>
                about - system info<br>
                ver - windows version<br>
                whoami - current user<br>
                dir - list files<br>
                echo - print text<br>
                exit - close terminal
                </div>`);
                break;

            case "cls":
                output.html("");
                break;

            case "date":
                output.append(`<div>${new Date().toLocaleDateString()}</div>`);
                break;

            case "time":
                output.append(`<div>${new Date().toLocaleTimeString()}</div>`);
                break;

            case "about":
                output.append(`<div>Windows 11 Web Edition<br>User: kavit</div>`);
                break;

            case "ver":
                output.append(`<div>Microsoft Windows [Version 11.0 Web Edition]</div>`);
                break;

            case "whoami":
                output.append(`<div>kavit</div>`);
                break;

            case "dir":
                output.append(`<div>
                Directory of C:\\Users\\kavit<br><br>
                &lt;DIR&gt; Desktop<br>
                &lt;DIR&gt; Documents<br>
                &lt;DIR&gt; Downloads<br>
                music.mp3<br>
                notes.txt
                </div>`);
                break;

            case "exit":
                $("#terminal").addClass("d-none");
                break;

            default:
                if (input.toLowerCase().startsWith("echo ")) {
                    output.append(`<div>${input.substring(5)}</div>`);
                } else if (input.toLowerCase().startsWith("color")) {
                    if (input.includes("green")) {
                        $("#cmdBody").css({background: "black", color: "#00ff00"});
                    } else if (input.includes("white")) {
                        $("#cmdBody").css({background: "black", color: "#ffffff"});
                    }
                } else {
                    output.append(`<div>'${input}' is not recognized as an internal or external command.</div>`);
                }
        }

        $(this).val("");
        $("#cmdBody").scrollTop($("#cmdBody")[0].scrollHeight);
    }
});