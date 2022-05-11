import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  items=[
    {
      title:'Why is the sky blue?', content:'The sky is not blue'
    },
    {
      title:'What does the orange taste good?', content:'It taste orange'
    },
    {
      title:'What color is the cat?', content:'Its blue'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
