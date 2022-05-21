function  shelfBook (book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book)
  }
}

function unshelfBook (bookName, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookName) {
      shelf.splice(i, 1)
    }
  }
  return shelf
}

function listTitles(shelf) {
  var titlesArray = []
  for (var i = 0; i < shelf.length; i++) {
     titlesArray.push(shelf[i].title)
  }
  return titlesArray.join(', ') ;
}

function searchShelf (shelf, bookTitle) {
  hasBook = false
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      hasBook = true
    }
  }
  return hasBook
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
