import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksListComponent } from './components/books-list/books-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { AddBookComponent } from './components/add-book/add-book.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'books-list' },
  { path: 'books-list', component: BooksListComponent },
  { path: 'edit-book/:id', component: BookDetailComponent},
  { path: 'add-book', component: AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
