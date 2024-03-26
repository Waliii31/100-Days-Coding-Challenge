// *Question 40: Album: Create albumects for music albums.

function makeAlbum(artist: string, title: string, tracks?: number){
    let album = {ArtistName : artist, Title : title, Track : tracks}
    if(tracks){
        album.Track = tracks;
    }

    console.log(album)
    return album
}

makeAlbum("John", "Age of stars")

// *Question 41: Magicians: Display magician names from an array.

let magicians: string[] = ["Alice", "David", "Chris"];

function showMagicians(names : string[]){
    for(let x in names){
        console.log(names[x])
    }
}

showMagicians(magicians)

// *Question 42: Great Magicians: Add "the Great" to magician names.

function MessageNames(names : string[]){
    for(let x in names){
        console.log("The great " + names[x])
    }
}

MessageNames(magicians)