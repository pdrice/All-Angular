import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data= [
    {
      name:'James', age:25, job:'designer', employed:true
    },
    {
      name:'Jill', age:27, job:'Engineer', employed:true
    },
    {
      name:'Elyse', age:29, job:'Basket', employed:true
    }
  ];

  headers = [
    {key: 'employed', label:'Has a Job?'},
    {
      key: 'name', label:'Name'
    },
    {
      key: 'age', label:'Age'
    },
    {
      key: 'job', label:'Job'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
