import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  addressForm!: FormGroup;
  addresses: any[] = [];
  pickpoint: boolean = false;
  hideDotBox: boolean = true;
  constructor(private modalService: NgbModal, private formBuilder: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.addressForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]], // Pincode must be exactly 6 digits
      area: [''],
      locality: [''],
      city: ['', Validators.required],  // Make city required
      state: ['', Validators.required], // Make state required
      contact: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]  // Contact number must be 10 digits
    });
  }

  open(content: any) {
    this.modalService.open(content);
  }
  onSubmit() {
    if (this.addressForm.valid) {
      this.addresses.push(this.addressForm.value);
      this.addressForm.reset();
      this.modalService.dismissAll();
      if(this.addresses.length > 0){
        this.hideDotBox = false;
      }
      else{
        this.hideDotBox = true;
      }
    } else {
      console.log('Form is invalid');
      console.log(this.addressForm.errors);
      Object.keys(this.addressForm.controls).forEach(key => {
        const controlErrors = this.addressForm.get(key)?.errors;
        if (controlErrors != null) {
          console.log('Key control: ' + key + ', error: ', controlErrors);
        }
      });
    }
  }

}

