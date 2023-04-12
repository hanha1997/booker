import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkComponent } from './bookmark.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateBookmarkComponent } from './create-bookmark/create-bookmark.component';
import { MatCardModule } from '@angular/material/card';
import { Bookmark1Component } from './bookmark1/bookmark1.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { AddLinkComponent } from './bookmark1/add-link/add-link.component';

@NgModule({
  declarations: [
    BookmarkComponent,
    CreateBookmarkComponent,
    Bookmark1Component,
    AddLinkComponent
  ],
  entryComponents: [CreateBookmarkComponent, Bookmark1Component, AddLinkComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    RouterModule,
  ],
  exports: [BookmarkComponent]
})
export class BookmarkModule { }
