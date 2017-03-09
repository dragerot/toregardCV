import { Addresse} from "./Adresse";

interface IKundeService {
    add();
}

class KundeService implements IKundeService {
    private _id  : number;
    private _ssn : string;

    constructor(id : number, ssn : string){
           this._id=id;
           this._ssn=ssn;
           var a = new Addresse();
        }

    get Id(): number {
        return this._id;
    }

    set Id(value: number) {
        this._id = value;
    }

    get Ssn(): string {
        return this._ssn;
    }

    set Ssn(value: string) {
        this._ssn = value;
    }

    add() {
    }
}

class Order {
    private ordreId : string;

    constructor(kunde: KundeService){

    }

}
