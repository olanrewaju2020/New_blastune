
export class ArtistRequest {
    id: number = 0;
    name: string = '';
    email: string = '';
    image: string = '';
    recordlabel: string = '';

}
export class ArtistResponse {
    id: number = 0;
    name: string = "";
    email: string = "";
    image: string = "";
    recordlabel: string = "";
    datecreated: Date = new Date();

}