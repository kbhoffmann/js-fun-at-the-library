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



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
