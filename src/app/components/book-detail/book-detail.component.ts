import { Component, NgZone, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  //styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder : FormBuilder,
    private router : Router,
    private ngZone : NgZone,
    private activatedRoute : ActivatedRoute,
    private crudService : CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.GetBook(this.getId).subscribe(res => {
      this.updateForm.setValue({
        isbn: res['isbn'],
        title: res['title'],
        author: res['author'],
        description : res['description'],
        published_year : res['published_year'],
        publisher : res['publisher']
      });
    });

    this.updateForm = this.formBuilder.group({
      isbn : [''],
      title: [''],
      author: [''],
      description: [''],
      published_year: [''],
      publisher : ['']
    });
   }

  ngOnInit() {}
  onUpdate(): any {
    this.crudService.updateBook(this.getId, this.updateForm.value)
      .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
        }, (err) => {
        console.log(err);
      });
    }

}
