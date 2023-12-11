function getURL() {
    return new URLSearchParams(window.location.search).get("id");
}

async function redirect(ID) {
    const list = await fetch("index.json").then(response => response.json());
    if (list[ID]) {
        document.querySelector("body").appendChild('<span id="name">' + list[ID]["name"] + '</span>')
    }
}

document.addEventListener("DOMContentLoaded", redirect(getURL()));
  