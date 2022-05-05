import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/api/app.service';
import { PlaylistService } from 'src/app/api/playlist.service';
import { PlaylistRequest, PlaylistResponse } from 'src/app/model/playlist';


@Component({
  selector: 'app-aplaylists',
  templateUrl: './aplaylists.component.html',
  styleUrls: ['./aplaylists.component.scss']
})
export class AplaylistsComponent implements OnInit {
  [x: string]: any;
  form: FormGroup = new FormGroup({});
  playlistRequest: PlaylistRequest[] = [];

  playListResponseList: PlaylistResponse[] = [];
  selectPlayList: PlaylistRequest = new PlaylistRequest();

  // employee:Deduction[]
  dataList: PlaylistRequest[] = [];
  display: boolean = false
  formdata: PlaylistRequest = new PlaylistRequest();
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
  selectedProduct3: PlaylistResponse[] = [];
  selectedProducts3: PlaylistResponse[] = [];
  category: any[] = []
  dialogClose: boolean = true;
  stateOptions: any[];
  loadingStyle: string = "";
  blocked: boolean = true;
  editData: PlaylistRequest = new PlaylistRequest();



  constructor(private PlaylistService: PlaylistService, private service: AppService) {
    this.stateOptions = [{ label: 'Close', value: 'close' }, { label: 'Active', value: 'active' }];


  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      accountid: new FormControl('', Validators.required),
      nameofsong: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      songid: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      favourite: new FormControl('', Validators.required),

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
  addPlaylist() {
    this.loadingStyle = "p-button-raise spinner"
    this.blocked = true
    let formdata = new PlaylistRequest()
    formdata.title = this.form.controls['title'].value;
    formdata.accountid = this.form.controls['accountid'].value;
    formdata.category = this.form.controls['category'].value;
    formdata.nameofsong = this.form.controls['nameofsong'].value;
    formdata.songid = this.form.controls['songid'].value;
    formdata.description = this.form.controls['description'].value;
    formdata.favourite = this.form.controls['favourite'].value;


    if (this.editData.id != null && this.editData.id != undefined) {
      formdata.id = this.editData.id
    }
    this.PlaylistService.addPlaylist(formdata).subscribe(res => {
      this.loadingStyle = "p-button-raise"
      this.blocked = false
      this.form.reset();
      this.fetchUsers()


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
        this.editData = new PlaylistRequest();
      }


    }
      , error => {
        alert("Error");
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
      title: new FormControl('', Validators.required),
      accountid: new FormControl('', Validators.required),
      nameofsong: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      songid: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      favourite: new FormControl('', Validators.required)
    })
  }


  onRowEditInit(result: PlaylistRequest) {
    this.editData = result;
    // this.formTitle='Edit Record'

    this.form = new FormGroup({
      title: new FormControl(result.title, Validators.required),
      accountid: new FormControl(result.accountid, Validators.required),
      nameofsong: new FormControl(result.nameofsong, Validators.required),
      category: new FormControl(result.category, Validators.required),
      songid: new FormControl(result.songid, Validators.required),
      description: new FormControl(result.description, Validators.required),
      favourite: new FormControl(result.favourite, Validators.required),

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
    this.PlaylistService.listPlaylist(this.service.PAGE, this.service.SIZE)
      .subscribe(res => {
        this.playListResponseList = res;
      })

  }

  deletePlaylist() {
    this.PlaylistService.deletePlaylist(this.selectPlayList.id).subscribe(res => {
      console.log(res)
      alert("Album deleted successfully");
      this.fetchUsers();
      this.form.reset();

    },
      error => {
        alert("Something went wrong");
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


