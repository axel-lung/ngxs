import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddUser, Refresh } from 'src/app/shared/users/state/user.action';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {

  constructor(private store: Store) {}

  refresh(){
    this.store.dispatch(new Refresh());
  }

  addUser(user: User) {
    this.store.dispatch(new AddUser(user));
  }
}
