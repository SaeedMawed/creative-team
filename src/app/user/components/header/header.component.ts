import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  header_variable= false;
  @HostListener("document:scroll")
  scrollFunction(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
      this.header_variable=true;
      console.log(1)
    }
    else {
      this.header_variable=false;
    }
  }

}
