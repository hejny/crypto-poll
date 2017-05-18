

export interface ICryptocoinAddressConstructor {
    new (address: string): ICryptocoinAddress;
}
export interface ICryptocoinAddress{

    isValid():boolean;
    getAddresInputs(since:Date):Promise<number>;
    //getUDSRate():Promise<number>;

}