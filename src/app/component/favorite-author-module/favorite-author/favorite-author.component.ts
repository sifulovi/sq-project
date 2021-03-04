import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-favorite-author',
  templateUrl: './favorite-author.component.html',
  styleUrls: ['./favorite-author.component.scss']
})
export class FavoriteAuthorComponent implements OnInit {

  componentName = 'Favorite Authors';

  constructor() {
  }

  ngOnInit(): void {
  }

}
