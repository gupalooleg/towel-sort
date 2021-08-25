module.exports = function towelSort(matrix) {
    return matrix
        ? matrix.reduce((previousValue, currentValue, index) => {
              index % 2
                  ? previousValue.push(...currentValue.reverse())
                  : previousValue.push(...currentValue);
              return previousValue;
          }, [])
        : [];
};
