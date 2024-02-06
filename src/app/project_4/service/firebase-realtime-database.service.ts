import { Injectable } from '@angular/core';
import { Observable, from, map, shareReplay } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';

interface IUser {
  userId: string;
  name: string;
  email: string;
  password: string;
  age: number
}

type UserDb ={
  users: IUser[];
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseRealtimeDatabaseService {

  constructor(private db: AngularFireDatabase) {}

  createUser(user: IUser): Observable<void> {
    const userId = this.db.createPushId();
    const newUserPromise = this.db.object(`/users/${userId}`).set(user);
    return from(newUserPromise);
  }

  getUserById(userId: string): Observable<IUser> {
    return this.db.object(`/users/${userId}`).valueChanges() as Observable<IUser>;
  }

  updateUser(userId: string, updatedUser: IUser): Observable<void> {
    const updateUserPromise = this.db.object(`/users/${userId}`).update(updatedUser);
    return from(updateUserPromise);
  }

  deleteUser(userId: string): Observable<void> {
    const deleteUserPromise = this.db.object(`/users/${userId}`).remove()
    return from(deleteUserPromise);
  }

  getAllUsers(): Observable<IUser[]> {
    return this.db.list('/users').snapshotChanges().pipe(
      map((data:any) => data),
      shareReplay()
    );
  }

}
