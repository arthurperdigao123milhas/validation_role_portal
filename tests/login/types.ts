//export type PaymentType = "Pix" | "Boleto" | "Pix Desconto!" | "Boleto Desconto!" | "Cartão de Credito"


export interface Config {
    url: string,
    
    LOGIN_URL: string,
    PASSWORD_URL: string,

    ADULTO_QTD: number,
    KID_QTD: number,
    BABY_QTD: number,

    DATA_IDA: string,
    DATA_VOLTA: string,

    count_payment: number,

    reembolso_garant: string

}