import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

//import { AboutPage } from '../about/about';
import { SchedulePage } from '../schedule/schedule';
//import { SpeakerListPage } from '../speaker-list/speaker-list';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = SchedulePage;
  tab2Root: any = LoginPage;
  tab3Root: any = SignupPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
