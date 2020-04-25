import moment from "moment";
import "moment/locale/pt-br";

const data = moment().format("LL");

const mensagemDiv = document.getElementById("mensagem");
mensagemDiv.innerHTML = `Hoje é ${data}.`;

console.log("Olá Mundo!");
