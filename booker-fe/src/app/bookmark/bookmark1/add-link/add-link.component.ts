import { FormControl, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { Bookmark, BookmarkDocument, UpdateBookmarkGQL } from 'src/132';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.scss']
})
export class AddLinkComponent implements OnInit {

  link = new FormControl('', [Validators.required]);
  ngOnInit(): void {
    
  }
  constructor(
    @Inject(MAT_DIALOG_DATA)
    private readonly data: {bookmark: Bookmark},
    private readonly diglogRef: MatDialogRef<AddLinkComponent>,
    private readonly updateBookmarkGQL: UpdateBookmarkGQL) {

  }
  addLink() {
    this.updateBookmarkGQL.mutate({
      updateBookmarkData: {
        _id: this.data.bookmark._id,
        links:[...this.data.bookmark.links, this.link.value ?? '']
      }
    }, {
      refetchQueries: [
        {
          query: BookmarkDocument,
          variables:{_id: this.data.bookmark._id}
        }
      ]
    }).subscribe(()=> {
      this.diglogRef.close();
    })
  }
  getLinkError() {
    if (this.link.hasError('required')) {
      return 'you must enter a value'
    }
     return '';
  }
}
