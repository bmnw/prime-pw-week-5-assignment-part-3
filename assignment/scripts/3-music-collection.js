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
console.log('test addToCollection 2', addToCollection('Racine Carree', 'Stromae', 2013));
console.log(collection);
console.log('test addToCollection 3', addToCollection('Coconut Oil', 'Lizzo', 2016));
console.log(collection);
console.log('test addToCollection 4', addToCollection('Rumours', 'Fleetwood Mac', 1977));
console.log(collection);
console.log('test addToCollection 5', addToCollection('Heard It In a Past Life', 'Maggie Rogers', 2019));
console.log(collection);
console.log('test addToCollection 6', addToCollection('Chris', 'Christine And the Queens', 2019));
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

/**
 * Create array to hold albums by input artist and return that array
 * @param {string} artistInput Input artist name
 * @return Array containing albums by input artist, empty array if no matches
 */

function findByArtist(artistInput){
    console.log('in findByArtist:', artistInput);
    const albumsByArtist = [];
    for(let i=0; i<collection.length; i +=1){
        if(artistInput === collection[i].artist){
            albumsByArtist.push(collection[i]);
        };
    };
    return albumsByArtist;
};

// findByArtist function test

console.log('test findbyArtist:', findByArtist('Stromae'));
console.log('test findbyArtist:', findByArtist('Fleetwood Mac'));
console.log('test findbyArtist:', findByArtist('Beyonce'));
console.log('test findbyArtist:', findByArtist('Tegan and Sara'));
console.log('test findbyArtist:', findByArtist('Maggie Rogers'));
console.log('test findbyArtist:', findByArtist('Kings of Leon'));


// Stretch goals

/**
 * Searches collection for albums that match the input object properties
 * @param {object} searchInput Input search properties as an object
 * @return Returns a new array containing albums in collection that match the input object properties, returns empty array if no matches, returns entire collection if input is empty.
 */

// album object properties: 
// {artist, title, year}

function search(searchInput){
    console.log('in search:', searchInput);
    const resultsArray = [];
    if(searchInput === undefined){
        resultsArray.push(collection);
        console.log('empty input results:', resultsArray);
        return resultsArray;
    } // end if input is empty
    for(let i = 0; i<collection.length; i += 1){
        if(searchInput.artist === collection[i].artist){
            resultsArray.push(collection[i]);
        } // end checking if input artist has a match
        if(searchInput.title === collection[i].title){
            resultsArray.push(collection[i]);
        } // end checking if input title has a match
        if(searchInput.year === collection[i].year){
            resultsArray.push(collection[i]);
        } // end checking if input year has a match
    }
    console.log('search results:', resultsArray);
    return resultsArray;
}

// search function test

search({artist: 'Stromae'});
search({artist: 'Stromae', year: 2019});
search({artist: 'Lizzo', title: 'Heard It In a Past Life', year: 1977});
search();