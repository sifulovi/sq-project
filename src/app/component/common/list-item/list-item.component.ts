import {Component, Input, OnInit} from '@angular/core';
import {AuthorService} from '../../../service/author.service';
import {AuthorModel} from '../../../model/author.model';
import {NzNotificationService} from 'ng-zorro-antd/notification';

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

  constructor(
    private authorService: AuthorService,
    private notification: NzNotificationService) {
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
    const message = ' A Author is added in favorite list!';
    this.createNotification('success', message);
    this.authorListData();

  }

  authorListData(): void {
    this.authorList = [];
    this.authorService.getAuthorList(this.pageNo).subscribe(
      res => {
        res.results.map(
          item => {
            const data = this.authorService.getFavoriteAuthList();
            const getFavAuthor = data.find(i => i._id === item._id);
            if (getFavAuthor) {
              this.authorList.push(getFavAuthor);
            } else {
              this.authorList.push(item);
            }
          }
        );
      },
      () => {
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
    this.authorService.deleteFavoriteAuthor(payload);
    this.ngOnInit();
    const message = 'A Author is deleted from favorite list!';
    this.createNotification('error', message);
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

  createNotification(type: string, message: string): void {
    this.notification.create(type, message, '');
  }

}
