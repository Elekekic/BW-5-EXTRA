export interface Fatture {

    numeroFattura: number,
    data: Date,
    importo: number,
    statoFattura: string,
    cliente : {
        id : number,
        ragioneSociale : string,
        email : string
    }
}
