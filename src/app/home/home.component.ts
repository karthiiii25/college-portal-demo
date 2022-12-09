import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
tt:timetable[]=
[
  {subject:"physics",subject1:"maths",subject2:"chemistry",subject3:"english",subject4:"english"},
  {subject:"physics",subject1:"maths",subject2:"chemistry",subject3:"english",subject4:"pet"},
  {subject:"maths",subject1:"maths",subject2:"chemistry",subject3:"english",subject4:"pet"},
  {subject:"physics",subject1:"physics",subject2:"chemistry",subject3:"english",subject4:"pet"},
  {subject:"physics",subject1:"maths",subject2:"maths",subject3:"maths",subject4:"pet"},
  {subject:"physics",subject1:"maths",subject2:"chemistry",subject3:"english",subject4:"pet"}
  
]
}
class timetable
{
  subject:string|undefined;
  subject1:string|undefined;
  subject2:string|undefined;
  subject3:string|undefined;
  subject4:string|undefined
}