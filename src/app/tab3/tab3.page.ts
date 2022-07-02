import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  form: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    // private contactService: ContactService,
    public toastController: ToastController

  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });
  }


  save(){
    let name = this.form.get('name').value;
    let type = this.form.get('type').value.toLowerCase();
    let address = this.form.get('address').value;
    this.onOpen(`https://api.whatsapp.com/send?phone=555399999999&text=Hello!%20My%20name%20is%20${name}%20and%20I'd%20like%20to%20receive%20a%20${type}%20donation%20on%20my%20address:%20${address}`);
    this.form.reset();
  }

  onOpen(url: string){
    window.open(url, '_blank').focus();
  }

}

