import { Component } from '@angular/core';

import { PeopleService } from '../../services/people.service';
import { UserModel } from '../../models/user.model';
import { IonicAutoCompleteOptions } from 'projects/ionic-auto-complete/src/lib/ionic-auto-complete-options.model';

@Component({
    selector: 'multi-function',
    templateUrl: 'team-picker.component.html',
    styleUrls: [
        'team-picker.component.scss'
    ],
    standalone: false
})
export class TeamPickerComponent {
    public otherTeamOptions: IonicAutoCompleteOptions;
    public otherTeamIsSelecting: boolean = false;
    public teamOptions: IonicAutoCompleteOptions;

    public otherTeam: UserModel[] = [];
    public selected: UserModel[] = [];

    constructor(
        public provider: PeopleService
    ) {
        this.teamOptions = new IonicAutoCompleteOptions();
        this.teamOptions.autocomplete = 'on';
        this.teamOptions.debounce = 750;
        this.teamOptions.searchIcon = 'assets/icons/add-user.svg';
        this.teamOptions.type = 'search';
        this.teamOptions.placeholder = 'Select team member';

        this.otherTeamOptions = new IonicAutoCompleteOptions();
        this.otherTeamOptions.autocomplete = 'on';
        this.otherTeamOptions.debounce = 750;
        this.teamOptions.searchIcon = 'assets/icons/add-user.svg';
        this.teamOptions.type = 'search';
        this.teamOptions.placeholder = 'Select opponent';
    }

    on(output: any, event: any): void {
        console.log(output);
        // console.log(event);
    }

    random(): void {
        const users = this.provider.getResults('');

        const count = users.length;

        this.otherTeam.push(users[Math.round(Math.random() * count)]);
    }

    selectTeam(name: string): void {
        this.on('itemSelected', name);

        this.selectOtherTeam();
    }

    selectOtherTeam(): void {
        this.otherTeamIsSelecting = true;

        setTimeout(
            () => {
                this.random();

                this.otherTeamIsSelecting = false;
            },
            Math.random() * 1000 * 5
        )
    }
}
