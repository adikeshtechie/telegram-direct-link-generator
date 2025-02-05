let input = document.getElementById("link");
document.getElementById("wrapper").style.display = 'none';

const urlParams = new URLSearchParams(window.location.search);
const value = urlParams.get("id");
const verify = urlParams.get("ver")

if (verify == "create") {
    document.getElementById("wrapper").style.display = 'flex';
}

if (value) {
    window.location.href = decodeText(value);
} else {
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("submit").addEventListener("click", () => {
            let generatedLink = directLinkGenerator();
            document.getElementById("directlink").href = generatedLink;
            document.getElementById("directlink").innerHTML = `Link: ${generatedLink}`;
        });

        input.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                document.getElementById("submit").click();
            }
        });

        document.getElementById("copy").addEventListener("click", () => {
            let generatedLink = directLinkGenerator();
            if (generatedLink) {
                copyToClipboard(generatedLink);
                alert("Direct Link Copied to Clipboard!");
            }
        });
    });
}

function encodeText(text) {
    return btoa(encodeURIComponent(text));
}

function decodeText(encodedText) {
    return decodeURIComponent(atob(encodedText));
}

function directLinkGenerator() {
    let link = input.value;
    let parts = link.split("/");
    if (parts.length < 5) return "";

    let channelName = parts[3];
    let postId = parts[4];
    let directLink = encodeText(`tg://resolve?domain=${channelName}&post=${postId}`);
    return `https://telegramdirectlinkgenerator.netlify.app/?id=${directLink}`;
}

function copyToClipboard(text) {
    let textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}
