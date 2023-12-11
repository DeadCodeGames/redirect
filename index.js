function getURL() {
    return new URLSearchParams(window.location.search).get("id");
}

async function redirect(ID) {
    const list = await fetch("index.json").then(response => response.json());
    if (list[ID]) {
        const spanname = document.createElement('span');
        spanname.id = "name";
        spanname.textContent = list[ID]["name"];
        setTimeout(() => {
            document.querySelector("body").querySelector("span").parentNode.insertBefore(spanname, document.querySelector("body").querySelector("span").nextSibling); setOwO();
            setTimeout(() => {
                window.location.href = list[ID]["redir"];
            }, 1000);
        }, Math.random()*1500);
    }
}

function setOwO() {
    const owo = ["owo", "OwO", "oWo", "Ōwò", "uwu", "UwU", "uWu", "iwi", "qwq", "pwp", "TwT", "тwт", "TmT", "тmт", "ôWô", "òwó", "ùwú", ">w<", "-w-", ">m<", "omo", "OmO", "umu", "UmU", "-m-", "owø", "^w^"];
    document.querySelector("uwu").textContent = owo[Math.round(Math.random() * owo.length)];
}
redirect(getURL());