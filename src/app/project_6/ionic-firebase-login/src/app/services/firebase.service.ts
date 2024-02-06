
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore) {}

  login(username: string, password: string): Promise<any> {
    return this.auth.signInWithEmailAndPassword(username, password);
  }

  getItems(): Observable<any[]> {
    return this.firestore.collection('items').valueChanges();
  }
}
