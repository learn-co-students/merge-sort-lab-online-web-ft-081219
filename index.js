function findMinAndRemoveSorted(array){
    return array.shift()
}

function merge(arrayOne, arrayTwo){
    let sorted = []

    while (arrayOne.length > 0 && arrayTwo.length > 0) {
        if (arrayOne[0] < arrayTwo[0]) {
            sorted.push(findMinAndRemoveSorted(arrayOne))
        } else {
            sorted.push(findMinAndRemoveSorted(arrayTwo))
        }
    }

    return sorted.concat(arrayOne).concat(arrayTwo)
}

function mergeSort(array){
    const l = array.length

    if (l < 2) {
        return array
    } else {
        return merge(mergeSort(array.slice(0, l / 2)), mergeSort(array.slice(l / 2, l)))
    }
}