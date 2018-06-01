export const getAllBooks = (success) => {
    fetch("/api/books")
        .then(res => {
            console.log(res);
            return res.json()
        }).then(books => {
            success(books)
        }).catch(err => {
            console.log(err);
        });
};
