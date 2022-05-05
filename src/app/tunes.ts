import { Time } from "@angular/common"

export class AccountRelease {
    id: bigint
    email: string
    password: string
    phonenumber: string
    constructor(id: bigint, email: string, password: string, phonenumber: string) {
        this.id = id
        this.email = email
        this.password = password
        this.phonenumber = phonenumber
    }
}


export class AlbumRelease {
    id: bigint
    albumname: string
    artistname: string
    country: string
    category: string
    duration: Time
    releasedate: Date
    noofsong: bigint
    datecreated: Date
    albumcover: string
    description: string
    songid: bigint

    constructor(id: bigint, albumname: string, artistname: string, country: string, category: string,
        duration: Time, releasedate: Date, noofsong: bigint, datecreated: Date, albumcover: string,
        description: string, songid: bigint) {
        this.id = id
        this.albumname = albumname
        this.artistname = artistname
        this.country = country
        this.category = category
        this.duration = duration
        this.releasedate = releasedate
        this.noofsong = noofsong
        this.datecreated = datecreated
        this.albumcover = albumcover
        this.description = description
        this.songid = songid
    }
}

export class FavouriteRelease {
    id: bigint
    accounntid: bigint
    songid: bigint
    constructor(id: bigint, accountid: bigint, songid: bigint) {
        this.id = id
        this.accounntid = accountid
        this.songid = songid
    }
}

export class PlaylistsRelease {
    id: bigint
    title: string
    noofsong: bigint
    category: string
    nameofsong: string
    duration: Time
    datecreated: Date
    noofstream: bigint
    description: string
    songid: bigint
    albumid: bigint

    constructor(id: bigint, title: string, noofsong: bigint, category: string, nameofsong: string,
        duration: Time, datecreated: Date, noofstream: bigint, description: string, songid: bigint, albumid: bigint
    ) {
        this.id = id
        this.title = title
        this.noofsong = noofsong
        this.category = category
        this.nameofsong = nameofsong
        this.duration = duration
        this.datecreated = datecreated
        this.noofstream = noofstream
        this.description = description
        this.songid = songid
        this.albumid = albumid
    }
}

export class SongRelease {
    id: bigint
    songname: string
    artistname: string
    country: string
    category: string
    duration: Time
    releasedate: Date
    produceby: string
    filetype: string
    censor: string
    datecreated: Date
    likes: bigint
    noofdownload: bigint
    cover: string
    description: string
    album: string
    noofstreams: bigint
    features: string
    share: string
    artist: string
    tag: string

    constructor(id: bigint, songname: string, artistname: string, country: string, category: string, duration: Time,
        releasedate: Date, produceby: string, filetype: string, censor: string, datecreated: Date,
        likes: bigint, noofdownload: bigint, cover: string, description: string, album: string, noofstreams: bigint,
        features: string, share: string, artist: string, tag: string
    ) {
        this.id = id
        this.songname = songname
        this.artistname = artistname
        this.country = country
        this.category = category
        this.duration = duration
        this.releasedate = releasedate
        this.produceby = produceby
        this.filetype = filetype
        this.censor = censor
        this.datecreated = datecreated
        this.likes = likes
        this.noofdownload = noofdownload
        this.cover = cover
        this.description = description
        this.album = album
        this.noofstreams = noofstreams
        this.features = features
        this.share = share
        this.artist = artist
        this.tag = tag
    }
}