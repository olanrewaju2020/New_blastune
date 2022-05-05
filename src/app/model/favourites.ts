export class FavouritesRequest {
    id: number;

    accountid: number;

    songid: number;
    constructor(id: number, accountid: number, songid: number) {
        this.id = id;
        this.accountid = accountid;
        this.songid = songid;
    }

}
export class FavouritesResponse{
    accountid: number;
    songid: number;

    constructor(id: number, accountid: number, songid: number) {
        this.accountid = accountid;
        this.songid = songid;
    }

}