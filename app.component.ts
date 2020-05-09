import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoproject';
  services=['SMART CONTRACTS DEVELOPMENT','EXCHANGES','BLOCKCHAIN DEVELOPMENT',
  'HYPERLEDGER',
  'PRIVATE BLOCKCHAIN DEVELOPMENT','WALLET'];
  userModel= new User('','','','','');
  fun(){
    for(var i=0;i<this.services.length;i++)
    {
      alert(this.services[i]);
    }
  }
}

