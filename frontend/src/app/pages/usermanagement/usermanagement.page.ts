import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-usermanagement',
    templateUrl: './usermanagement.page.html',
    styleUrls: ['./usermanagement.page.scss'],
})


export class UsermanagementPage implements OnInit {
    roles: any;


    constructor(public auth: AuthService) {
    }

    ngOnInit() {
    }


}
