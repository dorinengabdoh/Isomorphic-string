'use strict'

// select elements from the DOM
const firstString = document.getElementById('string1')
const secondString = document.getElementById('string2')
const submitBtn = document.getElementById('submit')
const result = document.getElementById('result')

const isomorphic = () => {
  // get the strings from the DOM
  const string1 = firstString.value
  const string2 = secondString.value

  // check if the strings are of the same length
  if (string1.length !== string2.length) {
    result.textContent = 'Please enter words of the same length'
    return result
  }
  // check if there is a one-to-one mapping possible for every character of string1 to every character of string
  const map = {} // keep track of the mapping of characters from string1 to string2
  const mapped = {} // keep track of the characters from string2 that have already been mapped
  for (let i = 0; i < string1.length; i++) {
    const char1 = string1[i]
    const char2 = string2[i]
    if (!map[char1]) {
      map[char1] = char2
      if (mapped[char2]) {
        result.textContent = 'The words are not isomorphic'
        return result
      }
      mapped[char2] = true
    } else if (map[char1] !== char2) {
      result.textContent = 'The words are not isomorphic'
      return result
    }
  }
  result.textContent = 'The words are isomorphic'
}

submitBtn.addEventListener('click', isomorphic)