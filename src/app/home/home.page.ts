import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  routeLists: RouteLists[] = [
    {
      icon: 'locate',
      name: 'Mapa',
      redirectTo: '/map'
    },
    {
      icon: 'map',
      name: 'Cargar GPX',
      redirectTo: '/load-route'
    }
  ];
  constructor() {}

}

interface RouteLists {
  icon: string;
  name: string;
  redirectTo: string;
}
