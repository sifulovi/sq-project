import {Component, OnInit} from '@angular/core';
import {PROJECT_CONSTANT} from '../../../@constant/assignment';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  componentName = PROJECT_CONSTANT.ASSIGNMENT.AUTHOR;


  constructor() { }

  ngOnInit(): void {
  }

}
