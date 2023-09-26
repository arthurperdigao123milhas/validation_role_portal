import { configs } from "./configs";
import { runTest } from "./test";

const urlInput = document.getElementById("url");
const loginUrlInput = document.getElementById("login-url");
const passwordUrlInput = document.getElementById("password-url");
const executeButton = document.getElementById("execute-button");

executeButton.addEventListener("click", () => {
  // Atualiza as variáveis de configuração do teste com os valores dos campos de entrada
  configs.url = urlInput.value;
  configs.LOGIN_URL = loginUrlInput.value;
  configs.PASSWORD_URL = passwordUrlInput.value;
  // Executa o teste com as variáveis de configuração atualizadas
  runTest(configs);
});
