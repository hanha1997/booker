import { BookmarksGQL } from '../../132';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { CreateBookmarkComponent } from './create-bookmark/create-bookmark.component';
import { Bookmark } from 'src/132';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {

  bookmarks$: Observable<Bookmark[]>
  constructor(private readonly dialog: MatDialog, private readonly bookmarksGQL: BookmarksGQL, private readonly router: Router ) {

  }

  ngOnInit(): void {
    this.bookmarks$ = this.bookmarksGQL.watch().valueChanges.pipe(map((result) => result.data.bookmarks));
  }

  onFabClick() {
    this.dialog.open(CreateBookmarkComponent)
  }

  onBookmarkClick(bookmarksId : string) {
    this.router.navigate(['/bookmarks', bookmarksId])
  }
}
