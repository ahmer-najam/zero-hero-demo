import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-reactive-demo',
  templateUrl: './reactive-demo.component.html',
  styleUrls: ['./reactive-demo.component.css'],
})
export class ReactiveDemoComponent implements OnInit {
  form: FormGroup;
  formData: Employee;
  constructor(public service: EmployeeService) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      userName: new FormControl('', Validators.required),
      deptName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });

    this.formData = {
      userName: 'Ahmer Najam',
      deptName: 'IT',
      email: 'ahmer.najam@mbe4you.com',
    };

    this.form.setValue(this.formData);
  }

  onSubmit() {
    this.formData = this.form.value;
    console.log(this.formData);

    this.form.reset();
  }
}
