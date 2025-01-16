import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { CountryModel } from '../models/country.model';
import { IonicAutoCompleteService } from 'projects/ionic-auto-complete/src/public-api';

@Injectable()
export class CountryService implements IonicAutoCompleteService {
    labelAttribute = 'name';

    private countries: CountryModel[] = [];

    constructor(
        private http: HttpClient
    ) {

    }

    getResults(keyword?: string): Observable<any[]> {
        keyword = typeof keyword === 'string' ? keyword : '';

        let observable: Observable<any>;

        if (this.countries.length === 0) {
            observable = this.http.get<CountryModel[]>('https://restcountries.com/v3.1/all').pipe(
                map(
                    (results: CountryModel[]) => {
                        if (results) {
                            this.countries = results;
                        }

                        return this.countries;
                    }
                )
            );
        } else {
            observable = of(this.countries);
        }

        return observable.pipe(
            map(
                (result: CountryModel[]) => {
                    return result.filter(
                        (item) => {
                            return item.name?.common?.toLowerCase().startsWith(
                                keyword.toLowerCase()
                            );
                        }
                    );
                }
            )
        );
    }
}
