import {Component} from '@angular/core';
import {AuthorService} from './service/author.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;

  constructor(private service: AuthorService) {
    service.initFavoriteAuthor();
  }
}
