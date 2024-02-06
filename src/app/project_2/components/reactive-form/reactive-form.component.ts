import { Component, inject, Input, signal } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { FormBuilder,FormGroup,ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export default class ReactiveFormComponent {
  @Input() id?:string;
  private fb = inject(FormBuilder);

  title = signal('Reactive Form');

  public myForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });


  isValidField(field:string):boolean | null {
    return this.myForm.controls[field].errors
          && this.myForm.controls[field].touched;
  }


  getMessageError(field:string): string | null {
    if( !this.myForm.controls[field] ) return null;
    const errors = this.myForm.controls[field].errors || {};
    for( const key of Object.keys(errors) ) {
      switch( key ) {
        case 'required':
          return 'Field required';
        case 'minlength':
          return `Field should have a min  ${errors[key].requiredLength}`;
        case 'maxlength':
          return `Field should have a max ${errors[key].requiredLength}`;
        case 'email':
          return 'Field should be a valid email';
      }
    }
    return null;
  }

  onSave():void {
    if( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }
  }
  handleReset():void {
    this.myForm.reset();
  }
}
