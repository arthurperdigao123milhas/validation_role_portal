import { configs } from "./configs";
import { runTest } from "./test";

const urlInput = document.getElementById("url");
const loginUrlInput = document.getElementById("login-url");
const passwordUrlInput = document.getElementById("password-url");
const adultoInput = document.getElementById("adulto-qtd");
const kidInput = document.getElementById("kid-qtd");
const babyInput = document.getElementById("baby-qtd");
const dataIdaInput = document.getElementById("data-ida");
const dataVoltaInput = document.getElementById("data-volta");
const countPaymentInput = document.getElementById("count-payment");
const reembolsoGarantInput = document.getElementById("reembolso-garant");

const executeButton = document.getElementById("execute-button");

executeButton.addEventListener("click", () => {
  // Atualiza as variáveis de configuração do teste com os valores dos campos de entrada
  configs.url = urlInput.value;
  configs.LOGIN_URL = loginUrlInput.value;
  configs.PASSWORD_URL = passwordUrlInput.value;
  configs.ADULTO_QTD = parseInt(adultoInput.value);
  configs.KID_QTD = parseInt(kidInput.value);
  configs.BABY_QTD = parseInt(babyInput.value);
  configs.DATA_IDA = dataIdaInput.value;
  configs.DATA_VOLTA = dataVoltaInput.value;
  configs.count_payment = parseInt(countPaymentInput.value);
  configs.reembolso_garant = reembolsoGarantInput.value;

  // Executa o teste com as variáveis de configuração atualizadas
  runTest(configs);
});
