import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BookmarksDocument, CreateBookmarkGQL } from 'src/132';

@Component({
  selector: 'app-create-bookmark',
  templateUrl: './create-bookmark.component.html',
  styleUrls: ['./create-bookmark.component.scss']
})
export class CreateBookmarkComponent implements OnInit {

  bookmarkName = new FormControl('', [Validators.required])
  constructor(private readonly createBookmarkGQL: CreateBookmarkGQL, private readonly dialogRef: MatDialogRef<CreateBookmarkComponent>) {
  }
  ngOnInit(): void {
    
  }
  createBookmark() {
    
    this.createBookmarkGQL.mutate({
      createBookmarkData: { name : this.bookmarkName.value ?? ''},
    }, {
      refetchQueries: [
        {
          query: BookmarksDocument
        }
      ]
    }).subscribe(() => {
      this.dialogRef.close();
    })
  }
  getBookmarkNameError() {
    if (this.bookmarkName.hasError('required')) {
      return 'You must enter a value.';
    }
    return '';
  }
}
