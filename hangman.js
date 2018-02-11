function composerList(name, yearsLived, piece, performer) {
    var composer = {};
    composer.name = name;
    composer.yearsLived = yearsLived;
    composer.piece = piece;
    composer.performer = performer;
}
var composers = [
    { "RACHMANINOFF", "1873-1943", "Piano Concerto No. 2 Op. 18", "Arthur Rubinstein, Piano"},
    { "WAGNER", "1813-1883", "Ride of the Valkyries - Ring", "Berlin Philharmonic Orchestra, Herbert von Karajan, Conductor"},
    { "SCHUBERT", "1797-1828", "Impromptu Op. 90 No. 3", "Alfred Brendel, Piano"},
    { "BEETHOVEN", "1770-1827", "Symphony No. 9, Second Movement - Scherzo", "Berlin Philharmonic Orchestra, Herbert von Karajan, Conductor"},
    { "HOLST", "1874-1934", "The Planets I. Mars, Bringer of War", "Orchestre Symphonique De Montreal, Charles Dutoit, Conductor"},
    { "MOZART", "1756-1791", "Piano Sonata No. 11 in A, First Movement", "Mitsuko Uchida, Piano"},
    { "CHOPIN", "1810-1849", "Nocturne No. 16 in E-Flat, Op. 55 No. 2", "Ivo Pogorelich, Piano"}
    { "SATIE", "1866-1925", "Gymnopedie No. 1", "Aldo Ciccolini, Piano"},
    { "BARBER", "1910-1981", "Adagio for Strings, Op. 11", "Atlanta Symphony Orchestra, Yoel Levi, Conductor"}
];

composers.forEach(list => composerList(list));

// assign random composer as the hangman answer
var randomComposerIndex = Math.floor(Math.random() * composers.length);
var lettersInName = [];

for (var i = 0; i < composerList[randomComposerIndex].name.length; i++) {
    lettersInName[i] = composerList[randomComposerIndex].name.charAt(i);
}

document.onkeyup = function (event) {
    var command = String.fromCharCode(event.which).toUpperCase();
    if (lettersInName.indexOf[command] >= 0) {
        // write letter spaces with letter filled in
    }
}
