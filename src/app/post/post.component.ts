import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface postResponse{
  title:string
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any = [];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { 
    http.get(this.url).subscribe((response)=>{
      console.log(response);
      this.posts = response
    })
  }

  ngOnInit(): void {
  }

  createPost(title:HTMLInputElement){
    title.value = ""
    let post: any = { title:title.value}
    this.http.post(this.url, JSON.stringify(post))
    .subscribe(response=>{
     post.title= response
     this.posts.splice(0,0,post)
      console.log(response);
      
    })
  }

}
