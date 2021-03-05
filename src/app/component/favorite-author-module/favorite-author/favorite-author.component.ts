import {Component, OnInit} from '@angular/core';
import {PROJECT_CONSTANT} from '../../../@constant/assignment';

@Component({
  selector: 'app-favorite-author',
  templateUrl: './favorite-author.component.html',
  styleUrls: ['./favorite-author.component.scss']
})
export class FavoriteAuthorComponent implements OnInit {

  componentName = PROJECT_CONSTANT.ASSIGNMENT.FAV_AUTHOR;

  constructor() {
  }

  ngOnInit(): void {
  }

}
