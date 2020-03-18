module.exports = function countCats(matrix) {
  let amountOfCats = 0;
  matrix.forEach(array => {
    array.forEach(isCat => {
      isCat === "^^" ? amountOfCats++ : 0;
    });
  });
  return amountOfCats;
};