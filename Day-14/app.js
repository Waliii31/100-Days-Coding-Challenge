// *Question 40: Album: Create albumects for music albums.
function makeAlbum(artist, title, tracks) {
    var album = { ArtistName: artist, Title: title, Track: tracks };
    if (tracks) {
        album.Track = tracks;
    }
    console.log(album);
    return album;
}
makeAlbum("John", "Age of stars");
// *Question 41: Magicians: Display magician names from an array.
var magicians = ["Alice", "David", "Chris"];
function showMagicians(names) {
    for (var x in names) {
        console.log(names[x]);
    }
}
showMagicians(magicians);
// *Question 42: Great Magicians: Add "the Great" to magician names.
function MessageNames(names) {
    for (var x in names) {
        console.log("The great " + names[x]);
    }
}
MessageNames(magicians);
