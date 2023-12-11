function getURL() {
    return new URLSearchParams(window.location.search).get("id");
}

async function redirect(ID) {
    const list = await fetch("index.json").then(response => response.json());
    if (list[ID]) {
        const spanname = document.createElement('span');
        spanname.id = "name";
        spanname.textContent = list[ID]["name"];
        document.querySelector("body").appendChild(spanname)
    }
}

redirect(getURL());