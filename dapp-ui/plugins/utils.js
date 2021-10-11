//import LibraryABI from './libraryABI'

let account = null
let libraryContract
let libraryContractAddress = 'TD7g2t959bRjm5DFsAHYTwFrhrNLXU3gJ9' // Paste Contract address here
let bookRentContract = null
let tronwebObj =null


export const accountAddress = () => {
  return account
}

export async function getTronWeb(){
  // Obtain the tronLink object injected by tronLink 
  if (window.tronLink) {
    await handleTronLink();
 } else {
   window.addEventListener('tronLink#initialized', handleTronLink, {
     once: true,
   });
 
   // If the event is not dispatched by the end of the timeout,
   // the user probably doesn't have TronLink installed.
   setTimeout(handleTronLink, 3000); // 3 seconds
}

}
async function handleTronLink() {
  var tronLink = window.tronLink;
  if (tronLink) {
    console.log('tronLink successfully detected!');
    // after obtained the tronlink object, request to connect with tronLink
    var res =  await tronLink.request({method: 'tron_requestAccounts'})
    
    tronwebObj = tronLink.tronWeb;
    
  } else {
    console.log('Please install TronLink-Extension!');
    }
 }  

export async function setLibraryContract() {
  // TODO: abtain contract Object

  bookRentContract = await tronwebObj.contract().at(libraryContractAddress);

}


export async function postBookInfo(name, description, price) {
  // TODO: call addBook func of library contract
  
  const result = await bookRentContract.addBook(name,description,price).send({
    feeLimit:100_000_000,
    callValue:0,
    shouldPollResponse:true
  });

  alert('Book Posted Successfully')

}

export async function borrowBook(spaceId, checkInDate, checkOutDate, totalPrice) {
  // TODO: call borrowBook func of library contract
 
  const result = await bookRentContract.borrowBook(spaceId,checkInDate,checkOutDate).send({
    feeLimit:100_000_000,
    callValue:totalPrice,
    shouldPollResponse:true
  });

  alert('Property Booked Successfully')
}

export async function fetchAllBooks() {
  // TODO: call bookId func of library contract to abtain total books number
  // iterate till book Id
  // push each object to books array
  const books = [];

  const bookId  = await bookRentContract.bookId().call();
  //iterate from 0 till bookId
  for (let i = 0; i < bookId; i++){
    const book = await bookRentContract.books(i).call()
    if(book.name!="") // filter the deleted books
    {
      books.push(
        {id: i,name: book.name,description: book.description,price: tronwebObj.fromSun(book.price)}
      )
    }
    
  }
  return books

}
