import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  

  constructor() { 
  }
 
  ngOnInit(): void {
  }
  overlay = {'opacity':'0','z-index':-1}
  search(){
    this.overlay = {'opacity':'1','z-index':99};
  }
  close(){
    this.overlay = {'opacity':'0','z-index':-1};
  }

}
