// You should implement your task here.

module.exports = function towelSort(matrix) {
    let res = [];

    for (let key in matrix) {
        if (key % 2 !== 0) {
            res.push(matrix[key].reverse());
        }
        if (key % 2 === 0) {
            res.push(matrix[key]);
        }
    }
    return res.flat();
};

console.log(
    module.exports([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])
);
