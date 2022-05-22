function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return character
}

function saveReview(review, reviewList) {
  if (reviewList.includes(review)) {
    return reviewList
  } else {
    reviewList.push(review)
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20
}

function writeBook (bookTitle, bookCharacter, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
    }
  return book
}

function editBook(book) {
  var oneQuarter = (book.pageCount) * 0.25
  return book.pageCount -= oneQuarter
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
