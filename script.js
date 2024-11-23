let nome;
let sucesso;
const popup = document.getElementById("popup");

function Liberar() {
    nome = prompt("Quem está mechendo ?");

    if (nome === "Victor" || nome === "victor") {
        sucesso = true;
        AtivarPopUp(sucesso);
    }
    else if (nome === "Hannele" || nome === "hannele") {
        sucesso = true;
        AtivarPopUp(sucesso);
    }
    else {
        sucesso = false;
        AtivarPopUp(sucesso);
    }
}

function AtivarPopUp(sucesso) {

    if(sucesso === false) {
        popup.style.display = "block";
        popup.style.backgroundColor = "rgba(255, 97, 97, 0.7)";
        popup.innerHTML = "Acesso negado!";

        setTimeout(() => {
            popup.style.display = "none";
            popup.style.backgroundColor = "";
            popup.innerHTML = "";
        }, 3000);
    }
    else {
        popup.style.backgroundColor = "rgba(96, 254, 22, 0.7)";
        popup.style.color = "black";
        popup.innerHTML = "Acesso garantido!";
    
        popup.style.display = "block";
    
        setTimeout(() => {
            popup.style.display = "none";
            popup.style.backgroundColor = "";
            popup.innerHTML = "";
        }, 3000);
    }
}