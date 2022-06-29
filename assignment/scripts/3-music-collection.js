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

console.log('test addToCollection 1', addToCollection('Cheese', 'Stromae', 2010));
console.log(collection);
console.log('test addToCollection 2', addToCollection('Sainthood', 'Tegan and Sara', 2009));
console.log(collection);
console.log('test addToCollection 3', addToCollection('Coconut Oil', 'Lizzo', 2016));
console.log(collection);
console.log('test addToCollection 4', addToCollection('Rumours', 'Fleetwood Mac', 1977));
console.log(collection);
console.log('test addToCollection 5', addToCollection('Heard It In a Past Life', 'Maggie Rogers', 2019));
console.log(collection);
console.log('test addToCollection 6', addToCollection('Chris', 'Christine And the Queens', 2018));
console.log(collection);

/**
 * Displays the collection info in the input array
 * @param {[]} collectionArray Input array to display
 * @return nothing is returned, input array contents is displayed in the console
 */

function showCollection(collectionArray){
    console.log('in showCollection:', collectionArray);
    console.log('length of array:', collectionArray.length);
    for(let i=0; i<collectionArray.length; i +=1){
        console.log(`${collectionArray[i].title} by ${collectionArray[i].artist}, published in ${collectionArray[i].year}`);
    };
};

// showCollection function test

showCollection(collection);