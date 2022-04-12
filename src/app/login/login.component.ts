import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});

  constructor(private fb:FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      firstName:[],
      lastName:[],
      address:this.fb.array([this.addAddressGroup()])
    });
  }
  addAddressGroup()
  {
    return this.fb.group({
      streetAddress:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      zipcode:['',[Validators.required,Validators.maxLength(6)]]
    });
  }

  addAddress()
  {
    this.addressArray.push(this.addAddressGroup());
  }

  removeAddress(index:number){
    this.addressArray.removeAt(index);
  }

  get addressArray(){
    return <FormArray>this.loginForm.get('address');
  }

  submit()
  {
    console.log(this.loginForm.value);
    this.userService.addUserInformation(this.loginForm.value);
  }

}
