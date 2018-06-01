export const getAllBooks = (success) => {
    fetch("/api/books")
        .then(res => {
            setTimeout(() => null, 0);
            console.log(res);
            return res.json()
        }).then(books => {
            success(books)
        }).catch(err => {
            console.log(err);
        });
};
