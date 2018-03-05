import { Component } from '@angular/core';

import { ListPage } from '../list/list';
import { MapPage } from '../map/map';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListPage;
  tab2Root = MapPage;

  constructor() {

  }
}
