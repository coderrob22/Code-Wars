// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

consonantCount = str => str.match(/[b-d f-h j-n p-t v-z]/gi || []).length