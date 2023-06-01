import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services=[
    {
      "icon":"design_services",
      "title":"Service No.1",
      "desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur similique enim animi voluptates ut obcaecati deleniti distinctio, qui sapiente quo tenetur optio quas aliquid eligendi totam, dolores ducimus iusto tempora!"
    },
    {
      "icon":"design_services",
      "title":"Service No.1",
      "desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur similique enim animi voluptates ut obcaecati deleniti distinctio, qui sapiente quo tenetur optio quas aliquid eligendi totam, dolores ducimus iusto tempora!"
    },{
      "icon":"design_services",
      "title":"Service No.1",
      "desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur similique enim animi voluptates ut obcaecati deleniti distinctio, qui sapiente quo tenetur optio quas aliquid eligendi totam, dolores ducimus iusto tempora!"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
