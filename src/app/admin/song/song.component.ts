import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SongRequest, SongResponse } from 'src/app/model/song';
import { MessageService } from 'primeng/api';
import { SongService } from 'src/app/api/song.service';
import { AppService } from 'src/app/api/app.service';




@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  uploadedFiles: any[] = [];
  songRequest: SongRequest[] = [];
  multiple: boolean = true

  songResponseList: SongResponse[] = [];
  selectSong: SongResponse = new SongResponse();
  // employee:Deduction[]
  dataList: SongRequest[] = [];
  display: boolean = false
  formdata: SongRequest = new SongRequest();
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
  selectedProduct3: SongResponse[] = [];
  selectedProducts3: SongResponse[] = [];
  category: any[] = []
  dialogClose: boolean = true;
  stateOptions: any[];
  loadingStyle: string = "";
  blocked: boolean = true;
  editData: SongRequest = new SongRequest();



  constructor(private messageService: MessageService, private songService: SongService,
    private service: AppService) {
    this.stateOptions = [{ label: 'Close', value: 'close' }, { label: 'Active', value: 'active' }];


  }

  //   onUpload(event:any) {
  //     for(let file of event.files) {
  //         this.uploadedFiles.push(file);
  //     }

  //     this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  // }
  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      songname: new FormControl('', Validators.required),
      artist: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      account: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      produceby: new FormControl('', Validators.required),
      filetyple: new FormControl('', Validators.required),
      cover: new FormControl('', Validators.required),
      album: new FormControl('', Validators.required),
      tag: new FormControl('', Validators.required),

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

    this.listSong();

  }


  addSong() {
    this.loadingStyle = "p-button-raise spinner"
    this.blocked = true
    let formdata = new SongRequest()
    formdata.songname = this.form.controls['songname'].value;
    formdata.artist = this.form.controls['artist'].value;
    formdata.category = this.form.controls['category'].value;
    formdata.country = this.form.controls['country'].value;
    formdata.account = this.form.controls['account'].value;
    formdata.description = this.form.controls['escription'].value;
    formdata.produceby = this.form.controls['produceby'].value;
    formdata.filetype = this.form.controls['filetype'].value;
    formdata.cover = this.form.controls['cover'].value;
    formdata.album = this.form.controls['album'].value;
    formdata.tag = this.form.controls['tag'].value;

    if (this.editData.id != null && this.editData.id != undefined) {
      formdata.id = this.editData.id
    }
    this.songService.addSong(formdata).subscribe(res => {
      this.loadingStyle = "p-button-raise"
      this.blocked = false
      this.form.reset();
      this.listSong();

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
        this.editData = new SongRequest()
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
      songname: new FormControl('', Validators.required),
      artist: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      account: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      produceby: new FormControl('', Validators.required),
      filetyple: new FormControl('', Validators.required),
      cover: new FormControl('', Validators.required),
      album: new FormControl('', Validators.required),
      tag: new FormControl('', Validators.required),
    })
  }


  onRowEditInit(result: SongRequest) {
    this.editData = result;
    // this.formTitle='Edit Record'

    this.form = new FormGroup({
      songname: new FormControl(result.songname, Validators.required),
      artist: new FormControl(result.artist, Validators.required),
      country: new FormControl(result.country, Validators.required),
      category: new FormControl(result.category, Validators.required),
      account: new FormControl(result.account, Validators.required),
      description: new FormControl(result.description, Validators.required),
      produceby: new FormControl(result.produceby, Validators.required),
      filetype: new FormControl(result.filetype, Validators.required),
      cover: new FormControl(result.cover, Validators.required),
      album: new FormControl(result.album, Validators.required),
      tag: new FormControl(result.tag, Validators.required),

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

  listSong() {
    this.songService.listSong(this.service.PAGE, this.service.SIZE)
      .subscribe(res => {
        this.songResponseList = res;
      })
  }


  deleteSong() {
    this.songService.deleteSong(this.selectSong.id).subscribe(res => {
      console.log(res)
      alert("Album deleted successfully");
      this.listSong();
      this.form.reset();
    },
      error => {
        alert("Something went wrong")
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
