let musicians = ["Kolade", "Ola", "Feyi", "Kunmi"];

let muse = musicians.length;


function getMusician(muse) {
        if(muse <= 0) {
            console.log('not a group');
        }

        else if(muse === 1) {
            console.log('solo');
        }

        else if(muse === 2) {
            console.log('duet');
        }

        else if(muse === 3) {
            console.log("trio");
        } 

        else if(muse === 4) {
            console.log("quartet");
        }

        else if(muse >= 4) {
            console.log("this is a large group");
        }

        else {
            console.log("Not correct");
        }
}


// If you want to pass an Array into the function, use this:

function getMusician(musicians) {

    let muse = musicians.length;

        if(muse <= 0) {
            console.log('not a group');
        }

        else if(muse === 1) {
            console.log('solo');
        }

        else if(muse === 2) {
            console.log('duet');
        }

        else if(muse === 3) {
            console.log("trio");
        } 

        else if(muse === 4) {
            console.log("quartet");
        }

        else if(muse >= 4) {
            console.log("this is a large group");
        }

        else {
            console.log("Not correct");
        }
}
