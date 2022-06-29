console.log('***** Music Collection *****')

const collection = [];

/**
 * Create a new album object with the input param as properties that is pushed into the collection [] and returns the new object
 * @param {string} title Input title of album
 * @param {string} artist Input album artist
 * @param {number} yearPublished Input year of album release
 * @return new album object
 */


function addToCollection(title, artist, yearPublished){
    console.log('in addToCollection:', title, artist, yearPublished);
    const album = {
        title: title,
        artist: artist,
        year: yearPublished,
    };
    console.log('new object:', album);
    collection.push(album);
    return album;
};

// addToCollection function test

console.log('test addToCollection', addToCollection('Cheese', 'Stromae', 2010));
console.log(collection);
console.log('test addToCollection', addToCollection('Sainthood', 'Tegan and Sara', 2009));
console.log(collection);
console.log('test addToCollection', addToCollection('Coconut Oil', 'Lizzo', 2016));
console.log(collection);
console.log('test addToCollection', addToCollection('Rumours', 'Fleetwood Mac', 1977));
console.log(collection);
console.log('test addToCollection', addToCollection('Heard It In a Past Life', 'Maggie Rogers', 2019));
console.log(collection);
console.log('test addToCollection', addToCollection('Chris', 'Christine And the Queens', 2018));
console.log(collection);

