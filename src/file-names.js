const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length === 0) return [];
  if (names.length === [...new Set(names)].length) return names; //если нет дубликатов

  // если есть повторения
  function getSort() {
    let object = {};
    for (let i = 0; i < names.length; i++) {
      object[i] = names[i]; // запомнить индекси, как поля объекта
    }
    object = Object.entries(object); // сделать матрицу;
    object = object.sort(
        (a, b) => { // Сортировка многомерных массивов
          if (a[1] < b[1]) {
            return -1;
          } else if (a[1] > b[1]) {
            return  1;
          } else {
            return 0;
          }
        });

    let start = object[0][1]; // первое значение
    let count = 1;
    for (let i = 0; i < object.length - 1; i++) { //аоследний ж
      if (start === object[i + 1][1]) { // если start равен первому элементу и следующим
        object[`${i + 1}`][1] = object[`${i + 1}`][1] + `(${count})`;
        // start = object[i][1];
        ++count;
      } else {
        start = object[i + 1][1]; // если на итерации i нет старго start, перезаписать на Следующий
        // count = 0; // обнулить count
      }
    } //AND CIRCLE

    // ЗАМЕНА ЭЛЕМЕНТОВ ВО СХОДЯЩЕМ МАССИВЕ
    for (let i = 0; i < names.length; i++) {
      names.splice(object[i][0], 1, object[i][1]);
    }
  } // end getSort()

  getSort();

  while (!(names.length === [...new Set(names)].length)) {
    getSort();
  }


  return names;
}

module.exports = {
  renameFiles
};

// npm run test ./test/file-names.test.js