import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts:Post[];
  isEdit:boolean = false;
  //dependency injection for service
  constructor(private dataService:DataService) { 


  }

  ngOnInit() {
    this.name = 'John Doe';
    this.age = 30;
    this.address = {
      street:'50 st',
      city:'Boston',
      state:'MA'
    }
    this.hobbies = ['Write Code','Watch movies'],
    this.email = 'mail@mail.com'

    this.dataService.getPosts().subscribe((posts)=>{
      this.posts = posts;
    })
  }

  onClick(){
    this.name = 'Test';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby){
    this.hobbies.push(hobby);
    return false;
  }
  deleteHobby(hobby){
    for(let i = 0; i <this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i,1);
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address{
   street: string,
    city:string,
    state: string
}

interface Post{
   id: number,
    title:string,
    body: string,
    userId: number
}
