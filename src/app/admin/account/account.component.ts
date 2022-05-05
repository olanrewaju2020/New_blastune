import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/api/account.service';
import { AppService } from 'src/app/api/app.service';
import { BaseService } from 'src/app/api/base.service';
import { AccountRequest, AccountResponse } from 'src/app/model/accounts';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  accountList: AccountRequest[] = []
  accountResponseList: AccountResponse[] = [];
  selectAccount: AccountResponse = new AccountResponse();

  // employee:Deduction[]
  dataList: AccountRequest[] = [];
  display: boolean = false
  formdata: AccountRequest = new AccountRequest();
  dialogVisible: boolean = true;
  // true:string;
  scrollableCols: any[] = [];
  // selectedRecord : SongResponse='';
  frozenCols: any[] = [];
  // selectedMaintainance: Deduction[];
  loading: boolean = false;
  // clonedProducts: { [s: string]: Deduction; } = {};
  _selectedColumns: any[] = [];
  productDialog: boolean = false;
  submitted: boolean = false;
  cols: any[] = [];
  filteredCountries: any[] = [];
  selectedProduct3: AccountResponse[] = [];
  selectedProducts3: AccountResponse[] = [];
  category: any[] = []
  dialogClose: boolean = true;
  stateOptions: any[];
  loadingStyle: string = "";
  blocked: boolean = true;
  editData: AccountRequest = new AccountRequest();



  constructor(private base: BaseService, private accountService: AccountService,
    private service: AppService) {
    this.stateOptions = [{ label: 'Close', value: 'close' }, { label: 'Active', value: 'active' }];


  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phonenumber: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)

    })


    this.category = [
      { name: 'Active', value: 'active' },
      { name: 'Close', value: 'close' }
    ];

    // this.createFormControl();
    this.category = [
      { name: 'Active' },
      { name: 'Close' }


    ];
    this.cols = [
      { field: 'deductioncategory', header: 'Deduction Category' },
      { field: 'staff', header: 'Staff' },
      { field: 'amount', header: 'Amount' },
      { field: 'deductionstatus', header: 'Deduction Status' },
      { field: 'trandate', header: 'Transaction Date' },

      { field: 'datecreated', header: 'Datecreated' },
    ];

    this.fetchUsers()
  }

  // filterCountry(event){

  // }

  addAccount() {
    this.loadingStyle = "p-button-raise spinner"
    this.blocked = true
    let formdata = new AccountRequest();
    formdata.name = this.form.controls['name'].value;
    formdata.email = this.form.controls['email'].value;
    formdata.phonenumber = this.form.controls['phonenumber'].value;
    formdata.password = this.form.controls['password'].value;

    if (this.editData.id != null && this.editData.id != undefined) {
      formdata.id = this.editData.id
    }
    this.accountService.addAccount(formdata).subscribe(res => {
      this.loadingStyle = "p-button-raise"
      this.blocked = false
      this.form.reset();
      this.fetchUsers()

      // if (rs['message'] == this.albumService.SUCCESS) {
      // this.messageService.showMessage(this.service.MSG_SUCCESS, this.service.SUCCESS_TITLE, rs['data']);
      //   this.listDeduction();
      //   this.emptyAddForm();       
      // } 
      // else {
      //   this.service.showMessage(this.service.MSG_ERROR, this.service.ERROR_TITLE, rs['data']);
      // }
      // if (this.editData.id) {
      //   this.display = false;
      //   this.editData = new AccountRequest()
      // }


    },
      error => {
        this.loadingStyle = "p-button-raise"
        this.blocked = false

      })
  }

  openDialog() {
    this.display = true;
  }
  getCloseEvent(closable: boolean) {
    this.display = closable

  }

  createFormControl() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phonenumber: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }


  onRowEditInit(result: AccountRequest) {
    this.editData = result;
    // this.formTitle='Edit Record'

    this.form = new FormGroup({
      name: new FormControl(result.name, Validators.required),
      email: new FormControl(result.email, Validators.required),
      phonenumber: new FormControl(result.phonenumber, Validators.required),
      password: new FormControl(result.password, Validators.required),

    })
    this.display = true;
  }


  //   confirmDelete(event: Event) {
  //     this.service.confirmationService.confirm({
  //         target: event.target,
  //         message: 'Are you sure that you want to proceed?',
  //         icon: 'pi pi-exclamation-triangle',
  //         accept: () => {
  //           this.deleteSetting()
  //         },
  //         reject: () => {
  //           this.selectedRecord= new DeductionResponse()
  //             //reject action
  //         }
  //     });
  // }

  fetchUsers() {
    this.accountService.fetchAccount(this.service.SIZE, this.service.SIZE)
      .subscribe(res => {
        this.accountResponseList = res;

      })
  }

  deleteAccount() {
    this.accountService.deleteAccount(this.selectAccount.id).subscribe(res => {
      console.log(res)
      alert(" deleted successfully");
      this.fetchUsers()
      this.form.reset();

    },
      error => {
        alert('Error')
      }

    )
  }



}
