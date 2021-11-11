import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

import {environment} from '../../environments/environment';

const JWTS_LOCAL_KEY = 'JWTS_LOCAL_KEY';
const JWTS_ACTIVE_INDEX_KEY = 'JWTS_ACTIVE_INDEX_KEY';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    url = environment.auth0.url;
    audience = environment.auth0.audience;
    clientId = environment.auth0.clientId;
    callbackURL = environment.auth0.callbackURL;

    token: string;
    payload: any;

    constructor() {
    }

    // Login-Link for auth0-Authentication
    build_login_link(callbackPath = '') {
        let link = 'https://';
        link += this.url + '.auth0.com';
        link += '/authorize?';
        link += 'audience=' + this.audience + '&';
        link += 'response_type=token&';
        link += 'client_id=' + this.clientId + '&';
        link += 'redirect_uri=' + this.callbackURL + callbackPath;
        return link;
    }

    // Auth0-Logout
    build_logout_link() {
        let link = 'https://';
        link += this.url + '.auth0.com';
        link += '/v2/logout?';
        link += 'client_id=' + this.clientId;
        return link;
    }

    // invoked in app.component on load
    check_token_fragment() {
        // parse the fragment
        const fragment = window.location.hash.substr(1).split('&')[0].split('=');
        // check if the fragment includes the access token
        if (fragment[0] === 'access_token') {
            // add the access token to the jwt
            this.token = fragment[1];
            // save jwts to localstore
            this.set_jwt();
        }
    }

    set_jwt() {
        localStorage.setItem(JWTS_LOCAL_KEY, this.token);
        if (this.token) {
            this.decodeJWT(this.token);
        }
    }

    load_jwts() {
        this.token = localStorage.getItem(JWTS_LOCAL_KEY) || null;
        if (this.token) {
            this.decodeJWT(this.token);
        }
    }

    activeJWT() {
        return this.token;
    }

    decodeJWT(token: string) {
        const jwtservice = new JwtHelperService();
        this.payload = jwtservice.decodeToken(token);
        console.log(this.payload);
        return this.payload;
    }

    logout() {
        this.token = '';
        this.payload = null;
        this.set_jwt();
        document.location.href = this.build_logout_link();
    }

    can(permission: string) {
        return this.payload &&
            this.payload.permissions &&
            this.payload.permissions.length &&
            this.payload.permissions.indexOf(permission) >= 0;
    }

    get_permissions_of_type(permissionType: string) {
        const perms = [];
        this.payload.permissions.forEach((perm) => {
            if (perm.split(':')[1].slice(0, permissionType.length) === permissionType) {
                perms.push(perm);
            }
        });
        if (perms.length === 0) {
            perms.push('You dont have the permission to manage ' + permissionType + '!');
        }
        return perms;
    }

}
