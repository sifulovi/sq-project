import {Component, Input, OnInit} from '@angular/core';
import {AuthorService} from '../../../service/author.service';
import {AuthorModel} from '../../../model/author.model';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {PROJECT_CONSTANT} from '../../../@constant/assignment';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input()
  componentName: string;

  pageNo                    = 0;
  authorList: AuthorModel[] = [];
  isDataLoading             = true;
  showPagination            = false;
  projectConstant           = PROJECT_CONSTANT;

  constructor(
    private authorService: AuthorService,
    private notification: NzNotificationService) {
  }

  ngOnInit(): void {
    this.authorList = [];
    if (this.componentName === 'Authors') {
      this.authorListData();
    } else {
      this.favoriteAuthorList()
    }
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
      },
      () => {
        this.showPagination = true;
        console.log('complete!');
      }
    );
  }

  favoriteAuthorList(): void {
    const data = this.authorService.getFavoriteAuthList() as AuthorModel[];
    this.authorList = data;
    console.log(`sfsdf ${data}`);
  }

  addFavoriteAuthor(payload: AuthorModel): void {
    this.isDataLoading = true;
    this.authorService.addFavoriteAuthor(payload);
    this.createNotification(this.projectConstant.MESSAGE.ADD_FAV.type, PROJECT_CONSTANT.MESSAGE.ADD_FAV.content);
    this.authorListData();
  }

  deleteFavoriteAuthor(payload: AuthorModel): void {
    this.authorService.deleteFavoriteAuthor(payload);
    this.ngOnInit();
    this.createNotification(this.projectConstant.MESSAGE.DELETE_FAV.type, PROJECT_CONSTANT.MESSAGE.DELETE_FAV.content);
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
