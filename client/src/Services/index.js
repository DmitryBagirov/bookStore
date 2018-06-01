export const getAllBooks = (success) => {
    fetch("/api/books")
        .then(res => {
            return res.json()
        }).then(books => {
            success(books)
        }).catch(err => {
            console.log(err);
        });
};