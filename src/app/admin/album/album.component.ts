import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlbumRequest, AlbumResponse } from 'src/app/model/album';
import { MessageService } from 'primeng/api';
import { AlbumService } from 'src/app/api/album.service';
import { AppService } from 'src/app/api/app.service';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  albumList: AlbumRequest[] = [];
  uploadedFiles: any[] = [];
  albumResponseList: AlbumResponse[] = [];
  selectAlbum: AlbumResponse = new AlbumResponse();

  // employee:Deduction[]
  dataList: AlbumRequest[] = [];
  display: boolean = false
  formdata: AlbumRequest = new AlbumRequest();
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
  selectedProduct3: AlbumResponse[] = [];
  selectedProducts3: AlbumResponse[] = [];
  category: any[] = []
  dialogClose: boolean = true;
  stateOptions: any[];
  loadingStyle: string = "";
  blocked: boolean = true;
  editData: AlbumRequest = new AlbumRequest();



  constructor(private messageService: MessageService,
    private albumService: AlbumService, private service: AppService) {
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
      artistName: new FormControl('', Validators.required),
      albumname: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      songid: new FormControl('', Validators.required),
      albumcover: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),

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

    this.fetchUsers();

  }




  // filterCountry(event){

  // }


  addAlbum() {
    this.loadingStyle = "p-button-raise spinner"
    this.blocked = true
    let formdata = new AlbumRequest();
    formdata.albumcover = this.form.controls['albumcover'].value;
    formdata.category = this.form.controls['category'].value;
    formdata.albumname = this.form.controls['albumname'].value;
    formdata.country = this.form.controls['country'].value;
    formdata.songid = this.form.controls['songid'].value;
    formdata.country = this.form.controls['country'].value;
    formdata.albumcover = this.form.controls['albumcover'].value;
    formdata.description = this.form.controls['description'].value;


    if (this.editData.id != null && this.editData.id != undefined) {
      formdata.id = this.editData.id
    }
    this.albumService.addAlbum(formdata).subscribe(rs => {
      this.loadingStyle = "p-button-raise"
      this.blocked = false
      this.form.reset();

      if (rs['message'] == this.service.SUCCESS) {
        this.service.SUCCESS_TITLE, rs['data'];
        this.fetchUsers();
        // this.emptyAddForm();       
      }
      else {
        this.service.ERROR_TITLE, rs['data'];
      }
      if (this.editData.id) {
        this.display = false;
        this.editData = new AlbumRequest()
      }


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
      artistName: new FormControl('', Validators.required),
      albumname: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      songid: new FormControl('', Validators.required),
      albumcover: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),

    })
  }


  onRowEditInit(result: AlbumRequest) {
    this.editData = result;
    // this.formTitle='Edit Record'

    this.form = new FormGroup({
      artistName: new FormControl(result.artistName, Validators.required),
      albumname: new FormControl(result.albumname, Validators.required),
      country: new FormControl(result.country, Validators.required),
      category: new FormControl(result.category, Validators.required),
      songid: new FormControl(result.songid, Validators.required),
      albumcover: new FormControl(result.albumcover, Validators.required),
      description: new FormControl(result.description, Validators.required),
    })
    this.display = true;
  }


  // confirmDelete(event: Event) {
  //   this.albumService.albumService.confirm({
  //     target: event.target,
  //     message: 'Are you sure that you want to proceed?',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this.deleteSetting()
  //     },
  //     reject: () => {
  //       this.selectedRecord = new AlbumRequest()
  //       reject action
  //     }
  //   });

  // }

  fetchUsers() {
    this.albumService.listAlbum(this.service.PAGE, this.service.SIZE)
      .subscribe(res => {
        this.albumResponseList = res
      })
  }


  deleteAlbum() {
    this.albumService.deleteAlbum(this.selectAlbum.id).subscribe(res => {
      console.log(res)
      alert("Album deleted successfully");
      this.fetchUsers();
      this.form.reset();
    },
      error => {
        alert('Error')
      }
    )

  }

  // badgeLength (responseList : AlbumResponse[]): any{
  //   if (responseList.length != null && responseList.length != undefined){
  //    return responseList.length;
  //   }

  // }
}


















