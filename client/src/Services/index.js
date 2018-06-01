export const getAllBooks = (success) => {
    fetch("/api/books", {
        method: 'get',
        dataType: 'jsonp',
        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
        }
    }).then(res => {
            console.log(res);
            return res.json()
        }).then(books => {
            success(books)
        }).catch(err => {
            console.log(err);
        });
};
