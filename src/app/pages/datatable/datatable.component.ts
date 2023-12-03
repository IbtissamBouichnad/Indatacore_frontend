import { Component, NgModuleDecorator, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

interface DataItem {
  id: number;
  name: string;
  description: string;
}



@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [DatatableComponent,MatTableModule,CommonModule,FormsModule,HttpClientModule],
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.css'
})


export class DatatableComponent implements OnInit  {
  apiUrl = 'http://localhost:3000/data';
  data: DataItem[] = [];
  selectedItem: DataItem = {} as DataItem;
  isEditing = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get<DataItem[]>(this.apiUrl)
      .subscribe((response) => {
        this.data = response;
      });
  }

  deleteData(id: number) {
    const url = `${this.apiUrl}/${id}`;
    this.http.delete<any>(url).subscribe(
      () => {
        this.data = this.data.filter(item => item.id !== id);
        console.log(`Item with ID ${id} deleted.`);
      },
      error => {
        console.error('Error deleting item:', error);
      }
    );
  }

  editData(row: DataItem) {
    this.selectedItem = { ...row };
    this.isEditing = true;
  }

  onSubmit(editForm: NgForm) {
    if (editForm.valid) {
      this.http.put(`${this.apiUrl}/${this.selectedItem.id}`, this.selectedItem)
        .subscribe(() => {
          this.fetchData();
          this.isEditing = false;
          editForm.resetForm(); 
        });
    } 
  }
}
