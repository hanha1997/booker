import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CreateBookmarkComponent } from './create-bookmark.component';
import { FormsModule } from '@angular/forms';
import { BookmarkModule } from '../bookmark.module';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    // CreateBookmarkComponent
  ],
  // entryComponents: [CreateBookmarkComponent],
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    FormsModule,
    // BookmarkModule
  ],
  exports: []
})
export class CreateBookmarkModule { }
