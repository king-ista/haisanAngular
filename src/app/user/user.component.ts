import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
users=[
  {id:1,img:"https://photo-cms-tpo.epicdn.me/w1966/Uploaded/2023/jaetgs/2023_04_10/340223716-785554269578031-8334480889249279829-n-4825.jpg",name:"Tiểu Vy",price:1000000},
  {id:2,img:"https://photo-cms-tpo.epicdn.me/w1966/Uploaded/2023/jaetgs/2023_04_10/340276368-214631787830250-3084642797507982856-n-1219.jpg",name:"Lương Thùy Linh",price:700000},
  {id:3,img:"https://photo-cms-tpo.epicdn.me/w1966/Uploaded/2023/jaetgs/2023_04_10/336650625-590460266371905-3437502112292493238-n-611.jpg",name:"Phương Nhi",price:500000},
]
}
