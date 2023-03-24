const library = [
    {
        title: 'The Road Ahead',
        autor: 'Bill Gates',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },
    {
        title: 'Built to Last',
        autor: 'Jim Collins',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },    {
        title: 'Road Less Stupid',
        autor: 'Keith Cunningham',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },
];



const [book1, book2, book3] = library;

book1.status.read = true;
book2.status.read = true;
book3.status.read = true;


const { title: firstBook } = library[0]
const { title: secondBook } = library[1]
const { title: thirdBook } = library[2]

console.log(secondBook);

const libJSON = JSON.stringify(library);

console.log(libJSON);





















