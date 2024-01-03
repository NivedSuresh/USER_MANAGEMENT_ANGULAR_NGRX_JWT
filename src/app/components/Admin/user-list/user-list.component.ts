import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { ADDUSERComponent } from '../add-user/add-user.component';
import {Store} from "@ngrx/store";
import {User} from "../../../sharable/models/User.model";
import {getUsersList} from "../../../sharable/store/user/User.selectors";
import {deleteUser, loadAllUsers, loadUser, openPopUP} from "../../../sharable/store/user/User.action";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class USERLISTComponent implements OnInit{

  allUsers :User[] =[];
  displayedColumns :string[] = ["id", "username", "email", "phoneNumber", "role", "actions"];
  dataSource :any;

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;

  constructor(
    private dialog :MatDialog,
    private store :Store
  ){}

  ngOnInit(): void {
    this.store.dispatch(loadAllUsers());
    this.store.select(getUsersList).subscribe(allUsers =>{
      this.allUsers = allUsers;
      this.dataSource = new MatTableDataSource<User>(this.allUsers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  addUser() {
    this.store.dispatch(openPopUP());
    this.openPopup("", "Create User");
  }

  openPopup(providedCode :string, providedTitle: string){
    this.dialog.open(ADDUSERComponent, {
      enterAnimationDuration : '400ms',
      exitAnimationDuration : '400ms',
      width : '50%',
      data : {
        code : providedCode,
        title : providedTitle,
      }
    })
  }

  editUser(id: string) {
    this.store.dispatch(loadUser({id : id}));
    this.openPopup(id, "UPDATE USER");
  }

  deleteUser(user : User) {
    if(confirm(`Are you sure you want to delete ${user.username}?`)){
      this.store.dispatch(deleteUser({user : user}));
    }
  }
}
