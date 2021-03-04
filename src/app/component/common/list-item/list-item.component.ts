import {Component, Input, OnInit} from '@angular/core';
import {AuthorService} from '../../../service/author.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input()
  componentName: string;

  authorList: [];

  constructor(private authorService: AuthorService) {
  }

  ngOnInit(): void {

    this.authorService.getAuthorList().subscribe(
      res => {
        console.log(res);
        this.authorList = res.results;
      },
      err => {
        console.log('err');
      }
    );
    console.log('asdasdsad');
  }

}
