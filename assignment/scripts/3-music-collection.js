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
    // in the following conditional, when I had (searchInput === undefined || searchInput === {}), it wouldn't push the collection if the input was {}. why not?
    if(searchInput === undefined || Object.entries(searchInput).length === 0){
        resultsArray.push(collection);
        console.log('empty obj or no input results:', resultsArray);
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
console.log('no input test:', search());
console.log('empty object input test', search({}));

/**
 * Creates and return a new array containing the albums that match all of the input object properties
 * @param {object} matchInput Input object with properties to search for
 * @return Returns new array containing albums that match all input properties, returns empty array if no input or if input object is empty.
 */

function searchTwo(matchInput){
    console.log('in searchTwo:', matchInput);
    const perfectMatch = [];
    if(matchInput === undefined || Object.entries(matchInput).length === 0){
        perfectMatch.push(collection);
        console.log('empty obj or no input results:', perfectMatch);
        return perfectMatch;
    } // end if input is empty
    for(let i=0; i<collection.length; i += 1){
        // order conditional from most to least complex so the truest condition is acted on.
        if(collection[i].artist === matchInput.artist && collection[i].title === matchInput.title && collection[i].year === matchInput.year){
            perfectMatch.push(collection[i]);
            console.log('artist, title, year match');
            break;
        } // end A, T, Y match
        else if(collection[i].artist === matchInput.artist && collection[i].title === matchInput.title){
            perfectMatch.push(collection[i]);
            console.log('artist, title match');
            break;
        } // end A, T match
        else if(collection[i].artist === matchInput.artist && collection[i].year === matchInput.year){
            perfectMatch.push(collection[i]);
            console.log('artist, year match');
            break;
        } // end A, Y match
        else if(collection[i].title === matchInput.title && collection[i].year === matchInput.year){
            perfectMatch.push(collection[i]);
            console.log('year, title match');
            break;
        } // end Y, T match
        else if(collection[i].artist === matchInput.artist){
            perfectMatch.push(collection[i]);
            console.log('artist matches');
        } // end A match
        else if(collection[i].title === matchInput.title){
            perfectMatch.push(collection[i]);
            console.log('title matches');
        } // end T match
        else if(collection[i].year === matchInput.year){
            perfectMatch.push(collection[i]);
            console.log('year matches');
        } // end Y match
    }
    console.log('perfect match results:', perfectMatch);
    return perfectMatch;
}

// searchTwo function test

console.log('artist, title, year match', searchTwo({artist: 'Stromae', title: 'Cheese', year: 2010}));
console.log('title and year match', searchTwo({title: 'Rumours', year: 1977}));
console.log('artist, title match', searchTwo({artist: 'Christine And the Queens', title: 'Chris'}));
console.log('matches title', searchTwo({title: 'Coconut Oil'}));
console.log('matches year:', searchTwo({year: 2019}));
console.log('matches artist:', searchTwo({artist: 'Stromae'}));
console.log('matches artist:', searchTwo({artist: 'Maggie Rogers'}));
console.log('empty object test:', searchTwo({}));
console.log('no input test:', searchTwo());

// tracks updates to functions

// addToCollectionUpdate

/**
 * Create a new album object with the input param as properties that is pushed into the collection [] and returns the new object
 * @param {string} title Input title of album
 * @param {string} artist Input album artist
 * @param {number} yearPublished Input year of album release
 * @param {[]} tracks Input array of album track object(s) with track name and duration
 * @return new album object
 */

 function addToCollectionUpdate(title, artist, yearPublished, tracksArray){
    console.log('in addToCollection:', title, artist, yearPublished);
    const album = {
        title: title,
        artist: artist,
        year: yearPublished,
        tracks: tracksArray
    };
    console.log('new object:', album);
    collection.push(album);
    return album;
};

// addToCollectionUpdate test

console.log('adding album with tracks', addToCollectionUpdate('Sainthood', 'Tegan and Sara', 2009, [{trackname: 'On Directing', duration: '2:46'}, {trackname: 'Arrow', duration: '3:07'}, {trackname: 'Sentimental Tune', duration: '3:23'}]));
console.log(collection);
console.log('adding album with tracks', addToCollectionUpdate('Hamilton: An American Musical', 'Lin-Manuel Miranda', 2015, [{trackname: 'Alexander Hamilton', duration: '3:57'}, {trackname: 'My Shot', duration: '5:33'}, {trackname: 'Wait For It', duration: '3:14'}]));
console.log(collection);

// searchUpdate

/**
 * Searches collection for albums that match the input object properties, including track name
 * @param {object} searchInput Input search properties as an object
 * @return Returns a new array containing albums in collection that match the input object properties, returns empty array if no matches, returns entire collection if input is empty.
 */

// album object properties: 
// {artist, title, year}

function searchUpdate(searchInput){
    console.log('in search:', searchInput);
    const resultsArray = [];
    // in the following conditional, when I had (searchInput === undefined || searchInput === {}), it wouldn't push the collection if the input was {}. why not?
    if(searchInput === undefined || Object.entries(searchInput).length === 0){
        resultsArray.push(collection);
        console.log('empty obj or no input results:', resultsArray);
        return resultsArray;
    } // end if input is empty
    for(let i = 0; i<collection.length; i += 1){
        if(searchInput.artist === collection[i].artist){
            resultsArray.push(collection[i]);
            console.log('artist match')
        } // end checking if input artist has a match
        if(searchInput.title === collection[i].title){
            resultsArray.push(collection[i]);
            console.log('title match');
        } // end checking if input title has a match
        if(searchInput.year === collection[i].year){
            resultsArray.push(collection[i]);
            console.log('year match');
        } // end checking if input year has a match
        if(searchInput.trackname === collection[i].tracks.trackname){
            resultsArray.push(collection[i]);
            console.log('trackname match');
        }
    }
    console.log('search results:', resultsArray);
    return resultsArray;
}

// searchUpdate test

console.log('search by On Directing:', searchUpdate({trackname: 'On Directing'}));
