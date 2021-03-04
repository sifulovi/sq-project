import {Component, Input, OnInit} from '@angular/core';
import {AuthorService} from '../../../service/author.service';
import {AuthorModel} from '../../../model/author.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input()
  componentName: string;

  authorList: AuthorModel[] = [];
  isDataLoading = true;

  constructor(private authorService: AuthorService) {
  }

  ngOnInit(): void {
    if (this.componentName === 'Authors') {
      this.authorListData();
    } else {
      this.favoriteAuthorList();
    }
  }


  addFavoriteAuthor(payload: AuthorModel): void {
    this.authorService.addFavoriteAuthor(payload);
  }

  authorListData(): void {
    this.authorService.getAuthorList().subscribe(
      res => {
        console.log(res);
        this.authorList = res.results as AuthorModel[];
      },
      err => {
        this.isDataLoading = false;
      }
    );
  }

  favoriteAuthorList(): void {
    const data = this.authorService.getFavoriteAuthList();
    this.authorList = data;
    console.log(`sfsdf ${data}`);
  }

  deleteFavoriteAuthor(id): void {
    this.authorService.deleteFavoriteAuthor(id);
    this.favoriteAuthorList();
  }
}
