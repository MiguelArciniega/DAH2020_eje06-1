import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = new Array();

  constructor() {
    this.students.push({
      name: 'Miguel Leopoldo Arciniega Ramirez',
      controlnumer: '16400881',
      active: true
    });
    this.students.push({
      name: 'Blanca Estefani Ramirez Barajas',
      controlnumer: '16400985',
      active: true
    });
    this.students.push({
      name: 'Edwin Antonio Arellano Mata',
      controlnumer: '16400882',
      active: false
    });
  }

  getStudents(): Student[]{
    return this.students;
  }

  changeStatus(position: number): void{
    this.students[position].active = !this.students[position].active;
  }
}

// Para aplicar MVC
// Hacer primero el modelo -> ionic g class models/student --type=model
// Desupes el controlador -> ionic g service services/student
// Por ultimo la vista -> archivo home.page.ts
