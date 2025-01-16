import { Injectable } from '@angular/core';

import { UserModel } from '../models/user.model';
import { IonicAutoCompleteService } from 'projects/ionic-auto-complete/src/public-api';

@Injectable()
export class PeopleService implements IonicAutoCompleteService {
    labelAttribute = 'full_name';

    public objects: UserModel[] = [
        {
            first_name: 'Dominic',
            last_name: 'Elliot',
            full_name: 'Dominic Elliot',
        },
        {
            first_name: 'Duke',
            last_name: 'Ellington',
            full_name: 'Duke Ellington',
        },
        {
            first_name: 'Jeremy',
            last_name: 'Quick',
            full_name: 'Jeremy Quick',
        },
        {
            first_name: 'Matt',
            last_name: 'Smith',
            full_name: 'Matt Smith',
        },
        {
            first_name: 'Matthew',
            last_name: 'Drake',
            full_name: 'Matthew Drake',
        },
        {
            first_name: 'Yu',
            last_name: 'Lee',
            full_name: 'Yu Lee',
        },
        {
            first_name: 'Zach',
            last_name: 'Smith',
            full_name: 'Zach Smith',
        }
    ];

    constructor() {

    }

    getResults(keyword: any) {
        keyword = keyword.toLowerCase();

        return this.objects.filter(
            (object) => {
                const value = (object as any)[this.labelAttribute].toLowerCase();

                return value.includes(keyword);
            }
        );
    }
}
