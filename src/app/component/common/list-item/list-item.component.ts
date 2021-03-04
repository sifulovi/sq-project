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

  pageNo = 0;

  constructor(private authorService: AuthorService) {
  }

  ngOnInit(): void {
    this.authorList = [];
    if (this.componentName === 'Authors') {
      this.authorListData();
    } else {
      this.favoriteAuthorList();
    }
  }


  addFavoriteAuthor(payload: AuthorModel): void {
    this.isDataLoading = true;
    this.authorService.addFavoriteAuthor(payload);
  }

  authorListData(): void {
    this.authorList = [];
    this.authorService.getAuthorList(this.pageNo).subscribe(
      res => {
        res.results.map(
          item => {
            const data = this.authorService.getFavoriteAuthList();
            const getfavAuthor = data.find(i => i._id === item._id);
            if (getfavAuthor) {
              this.authorList.push(getfavAuthor);
            } else {
              this.authorList.push(item);
            }
          }
        );

        //
        // this.authorList = res.results as AuthorModel[];
      },
      err => {
        this.isDataLoading = false;
      }
    );
  }

  favoriteAuthorList(): void {
    const data = this.authorService.getFavoriteAuthList() as AuthorModel[];
    this.authorList = data;
    console.log(`sfsdf ${data}`);
  }

  deleteFavoriteAuthor(payload: AuthorModel): void {
    this.isDataLoading = true;
    const asd = this.authorService.deleteFavoriteAuthor(payload);
    console.log(asd);
    this.ngOnInit();
  }

  nextPage(): void {
    this.pageNo++;
    this.authorListData();

  }

  previousPage(): void {
    if (this.pageNo > 0) {
      this.pageNo--;
      this.authorListData();
    }

  }

}
