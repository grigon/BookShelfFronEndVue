import * as axios from 'axios';

const getBooks = async function() {
    try {
        const response = await axios.get(`https://localhost:5001/api/books`);

        let data = parseList(response);

        const books = data.map(b => {
            b.title = `${b.title}`;
  /*          b.fullName = `${b.authorFirstName} ${b.authorLastName}`;*/
            return b;
        });
        return books;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const dataService = {
    getBooks,
};