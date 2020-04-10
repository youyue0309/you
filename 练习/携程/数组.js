var arr = [2, 3, 5, 7, 8];
function isSum(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            for (var k = j + 1; k < array.length; k++) {
                if (array[i] == array[k] + array[j] || array[j] == array[i] + array[k] || array[k] == array[i] + array[j])
                    return true;
            }
        }
    }
    return false;
}
console.log(isSum(arr));
