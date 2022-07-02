import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() { }

  onBloodDonation() {
    this.onOpen('https://www.google.com/maps/search/?api=1&query=pontos+de+doacao+de+sangue');
  }
  onClothesDonation() {
    this.onOpen('https://www.google.com/maps/search/?api=1&query=pontos+de+doacao+de+roupas');
  }
  onFoodDonation() {
    this.onOpen('https://www.google.com/maps/search/?api=1&query=pontos+de+doacao+de+alimentos');
  }

  onOpen(url: string){
    window.open(url, '_blank').focus();
  }

}
