import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-items-firebase',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AngularFirestoreModule,
  ],
  templateUrl: './items-firebase.component.html',
  styleUrl: './items-firebase.component.css'
})
export default class ItemsFirebaseComponent {
  private fb = inject(FormBuilder);
  private firestore = inject(AngularFirestore);
  private storage = inject(AngularFireStorage);

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: ['', [Validators.required]],
    image: ['', [Validators.required]],
  });


  onSave():void {
    if( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.firestore.collection('items').add(this.myForm.value);

    this.myForm.reset();
  }

  isValidField(field:string):boolean | null {
    return this.myForm.controls[field].errors
          && this.myForm.controls[field].touched;
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];

    const filePath = `images/${file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, file);

    uploadTask.then(snapshot => {
      snapshot.ref.getDownloadURL().then(downloadURL => {
        console.log('File available at', downloadURL);
      });
    });
  }

  getMessageError(field:string): string | null {
    if( !this.myForm.controls[field] ) return null;
    const errors = this.myForm.controls[field].errors || {};
    for( const key of Object.keys(errors) ) {
      switch( key ) {
        case 'required':
          return 'Field required';
      }
    }
    return null;
  }
}
