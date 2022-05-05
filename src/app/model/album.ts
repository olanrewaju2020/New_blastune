

export class AlbumRequest {
    id: number = 0;
    albumname: string = '';
    artistName: string = '';
    country: string = '';
    category: string = '';
    duration: Date = new Date();
    noofsong: number = 0;
    accountid: number = 0;
    songid: number = 0;
    albumcover: string = '';
    description: string = '';

}


export class AlbumResponse {
    id: number =0;
    albumname: string ='';
    artistName: string = '';
    country: string = '';
    category: string = '';
    duration: Date = new Date();
    releaseDate: Date = new Date();
    noofsong: number =0;
    datecreated: Date = new Date();
    albumcover: string = '';
    description: string = '';


}