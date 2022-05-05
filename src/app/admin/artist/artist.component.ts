import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ArtistRequest, ArtistResponse } from 'src/app/model/artist';
import { MessageService } from 'primeng/api';
import { ArtistService } from 'src/app/api/artist.service';
import { AppService } from 'src/app/api/app.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  artistRequest: ArtistRequest[] = [];
  uploadedFiles: any[] = [];
  artistResponseList: ArtistResponse[] = [];

  selectArtist: ArtistRequest = new ArtistRequest();
  dataList: ArtistRequest[] = [];
  display: boolean = false
  formdata: ArtistRequest = new ArtistRequest();
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
  selectedProduct3: ArtistResponse[] = [];
  selectedProducts3: ArtistResponse[] = [];
  category: any[] = []
  dialogClose: boolean = true;
  stateOptions: any[];
  loadingStyle: string = "";
  blocked: boolean = true;
  editData: ArtistRequest = new ArtistRequest();



  constructor(private messageService: MessageService, private artistService: ArtistService,
    private service: AppService) {
    this.stateOptions = [{ label: 'Close', value: 'close' }, { label: 'Active', value: 'active' }];


  }

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      recordlabel: new FormControl('', Validators.required)
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

    this.listArtist();

  }
  // filterCountry(event){

  // }

  addArtist() {
    this.loadingStyle = "p-button-raise spinner"
    this.blocked = true
    let formdata = new ArtistRequest()
    formdata.name = this.form.controls['staff'].value;
    formdata.email = this.form.controls['amount'].value;
    formdata.image = this.form.controls['category'].value;
    formdata.recordlabel = this.form.controls['deductionstatus'].value;

    if (this.editData.id != null && this.editData.id != undefined) {
      formdata.id = this.editData.id
    }
    this.artistService.addArtist(formdata).subscribe(res => {
      this.loadingStyle = "p-button-raise"
      this.blocked = false
      this.form.reset();
      this.listArtist();

      // if (rs['message'] == this.service.SUCCESS) {
      //   this.service.showMessage(this.service.MSG_SUCCESS, this.service.SUCCESS_TITLE, rs['data']);
      //   this.listDeduction();
      //   this.emptyAddForm();       
      // } 
      // else {
      //   this.service.showMessage(this.service.MSG_ERROR, this.service.ERROR_TITLE, rs['data']);
      // }
      if (this.editData.id) {
        this.display = false;
        this.editData = new ArtistRequest()
      }


    }
      , error => {
        this.loadingStyle = "p-button-raise"
        this.blocked = false
        // this.service.showMessage(this.service.MSG_ERROR, this.service.ERROR_TITLE, error);
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
      image: new FormControl('', Validators.required),
      recordlabel: new FormControl('', Validators.required),
    })
  }


  onRowEditInit(result: ArtistRequest) {
    this.editData = result;
    // this.formTitle='Edit Record'

    this.form = new FormGroup({
      name: new FormControl(result.name, Validators.required),
      email: new FormControl(result.email, Validators.required),
      image: new FormControl(result.image, Validators.required),
      recordlabel: new FormControl(result.recordlabel, Validators.required),

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
  listArtist() {
    this.artistService.listArtist(this.service.PAGE, this.service.SIZE)
      .subscribe(res => {
        this.artistResponseList = res;
      })
  }


  deleteArtist() {
    this.artistService.deleteArtist(this.selectArtist.id).subscribe(res => {
      console.log(res)
      alert("Album deleted successfully");
      this.listArtist();
      this.form.reset();
    },
      error => {
        alert('Something went wrong')
      }
    )

  }



  // filterCountry(event:any){
  //   let query = event.query;
  //   console.log("Hello Guys, Let's have Chai");
  // }
  //   closeDialog(){
  //     this.display=false;
  //   this.dialogClose = false;
  // }
  // close(){
  //   this.display=false;
  // }




  // onSubmit(value: string) {
  //   this.submitted = true;
  // }



}
