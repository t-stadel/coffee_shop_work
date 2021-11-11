import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AuthService} from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    constructor(
        private auth: AuthService,
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();

            // Perform required auth actions
            this.auth.load_jwts();
            this.auth.check_token_fragment();

            // @todo: check
            // Perform m2m auth actions
            if (this.auth.can('manage:managers') ||
                this.auth.can('manage:baristas')) {
                // this.auth.get_all('users', 'CS_USER');
                // this.auth.get_all('roles', 'CS_ROLES');
                // this.auth.get_role_id_by_name('Manager');
            }

        });
    }
}
