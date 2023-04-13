import { Link, LinksGQL } from './../../../generated-types';
import { BookmarkGQL, Bookmark } from '../../../132';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import {switchMap} from 'rxjs';
import { AddLinkComponent } from './add-link/add-link.component';

@Component({
  selector: 'app-bookmark1',
  templateUrl: './bookmark1.component.html',
  styleUrls: ['./bookmark1.component.scss']
})
export class Bookmark1Component implements OnInit {
  bookmark: Bookmark; 
  links: Link[];
  isLoading = true;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly BookmarkGQL: BookmarkGQL,
    private readonly dialog: MatDialog,
    private readonly LinksGQL: LinksGQL
  ) {

  }
  
  
  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => {
          return this.BookmarkGQL.watch({ _id: params['id'] }).valueChanges;
        }),
        switchMap((result) => {
          this.bookmark = result.data.bookmark;
          return this.LinksGQL.watch({ urls: result.data.bookmark.links })
            .valueChanges;
        })
      )
      .subscribe((result) => {
        this.isLoading = result.loading;
        this.links = result.data.links;
      });
  }


  onAdd() {
    this.dialog.open(AddLinkComponent, {
      data: { bookmark: this.bookmark}
    });
  }

  onLinkClick(url: string) {
    window.open(url, '_blank');
  }

}
