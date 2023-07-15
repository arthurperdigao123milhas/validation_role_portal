import { Config } from "./types";



export const configs: Config = {
        url: "https://dev-cancelamento123.plataforma13.com.br/", // Escolha a URL

                //DADOS DE LOGIN
    LOGIN_URL: "arthur.souza@123milhas.com.br",
    PASSWORD_URL: "Arthur@2022",


                //QUANTIDADE DE PESSOAS NA VIAGEM
    ADULTO_QTD: 1,
    KID_QTD: 0,
    BABY_QTD: 0,

                //Escolher a data de ida e volta

    DATA_IDA: "04-08-2023",
    DATA_VOLTA: "12-08-2023",

                // QUANTAS VEZES VAI FAZER A COMPRA
    count_payment: 1, 

    reembolso_garant: "Sem Reembolso Garantido",
// Sem Reembolso Garantido" , 24h antes do voo (ida), 48, 72
    
}