import { Component, OnInit } from '@angular/core';
import {StudentservService} from '../studentserv.service'
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentServ:StudentservService) { }

  ngOnInit(): void {
  }

}
