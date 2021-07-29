## Creating a Decentralized Library DApp

### setting up DApp

1. paste your contract address to variable `libraryContractAddress` on line 5 in [utils.js](./dapp-ui/plugins/utils.js).

-> insert this statements inside `mounted()` method in `index.vue`

```js
    // init contract object
    await setLibraryContract();
    // fetch all books
    const books = await fetchAllBooks();
    this.posts = books;
```


2. set contract Object inside 'setLibraryContract()' method in [utils.js]

```js
bookRentContract = await window.tronWeb.contract().at(libraryContractAddress);
```

3. `postBook` - copy below code inside `postAd` in `bookForm.vue`

```js
// convert price from TRX to SUN
postBookInfo(this.title,this.description,tronWeb.toSun(this.price));

```

-> copy below code inside `postBookInfo` in `utils.js`

```js
  const result = await bookRentContract.addBook(name,description,price).send({
    feeLimit:100_000_000,
    callValue:0,
    shouldPollResponse:true
  });

```

4. `borrowBook` - copy below code inside `book()` in `detailsModal.vue`

```js
      // get Start date
      const startDay = this.getDayOfYear(this.startDate)
      // get End date
      const endDay = this.getDayOfYear(this.endDate)
      // price calculation
      const totalPrice =tronWeb.toSun(this.bookData.price) * (endDay - startDay)
      // call borrowBook function of contract 
      borrowBook(this.bookData.id, startDay, endDay, totalPrice)
```

-> copy below code inside `borrowBook` in `utils.js`

```js
  const result = await bookRentContract.borrowBook(spaceId,checkInDate,checkOutDate).send({
    feeLimit:100_000_000,
    callValue:totalPrice,
    shouldPollResponse:true
  });
```

5. fetch all properties

-> insert inside `fetchAllBooks()` method in `utils.js`

```js
  const bookId  = await bookRentContract.bookId().call();
  //iterate from 0 till bookId
  for (let i = 0; i < bookId; i++){
    const book = await bookRentContract.books(i).call()
    if(book.name!="") // filter the deleted books
    {
      books.push(
        {id: i,name: book.name,description: book.description,price: tronWeb.fromSun(book.price)}
      )
    }
    
  }
  return books
```


----------
