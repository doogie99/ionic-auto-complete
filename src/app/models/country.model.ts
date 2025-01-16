export class CountryModel {
    public name!: {
        common: string;
        official: string;
        nativeName: {
            [key: string]: {
                official: string;
                common: string;
            }
        };
    }
    // public alpha2Code!: string;
    // public alpha3Code!: string;
    public altSpellings!: string[];
    public area!: number;
    public borders!: string[];
    // public callingCodes!: string[];
    public capital!: string[];
    public cioc!: string;
    // public demonym!: string;
    public flag!: string;
    public latLang!: number[];
    // public numericCode!: string;
    public region!: string;
    public subregion!: string;
    public timezones!: string[];

    constructor() {

    }
}
