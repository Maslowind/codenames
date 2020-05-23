const fs = require('fs');

let json_word = require("./input_data.json")
export function getWords() {
  return json_word.words;
};
export function getNumbers() {
  return json_word.numbers;
};
