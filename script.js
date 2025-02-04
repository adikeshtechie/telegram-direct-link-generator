let input = document.getElementById("link");

function directLinkGenerator() {
    let link = input.value;
    let parts = link.split("/");
    let channelName = parts[3];
    let postId = parts[4];
    let directLink = `tg://resolve?domain=${channelName}&post=${postId}`;
    return directLink;
}

function copyToClipboard(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}


document.getElementById("submit").addEventListener("click", ()=> {
    document.getElementById("directlink").href = directLinkGenerator();
    document.getElementById("directlink").innerHTML = `Link Generator: ${directLinkGenerator()}`;
});

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        document.getElementById("submit").click()
    }
});

document.getElementById("copy").addEventListener("click", ()=> {
    copyToClipboard(directLinkGenerator());
    alert("Direct Link Copied to Clipboard!")
});