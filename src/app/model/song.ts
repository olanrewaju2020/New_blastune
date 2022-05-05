export class SongRequest {
    id: number = 0;
    songname: string = "";
    artist: string = "";
    country: string = "";
    category: string = "";
    accountid: number = 0;
    produceby: string = "";
    filetype: string = "";
    censor: string = "";
    cover: string = "";
    description: string = "";
    album: string = "";
    feature: string = "";
    share: string = "";
    tag: string = "";
    account: any;

}



export class SongResponse {
    id: number = 0;
    songname: string = "";
    artistname: string = "";
    country: string = "";
    category: string = "";
    duration: Date = new Date();
    produceby: string = "";
    filetype: string = "";
    censor: string = "";
    likes: number = 0;
    noofdownload: number = 0;
    cover: string = "";
    description: string = "";
    album: string = "";
    noofstreams: number = 0;
    feature: string = "";
    share: string = "";
    artist: string = "";
    tag: string = "";




}

