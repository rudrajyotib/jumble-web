
export function sliceArray(inputArray: any[], chunkSize: number) {
    return inputArray.reduce((result, item, index) => {
        const chunkIndex = Math.floor(index / chunkSize);
        result[chunkIndex] = [].concat((result[chunkIndex] || []), item);
        return result
    }, [])
}


export function optimumRowSize(totalCells: number, cellPerRow: number): number {

    if (totalCells % cellPerRow === 0) {
        return cellPerRow;
    }

    if (totalCells / cellPerRow === 0) {
        return cellPerRow
    }

    while (cellPerRow > 0) {
        if ((totalCells % cellPerRow === 0) || (totalCells % cellPerRow > (cellPerRow / 2))) {
            return cellPerRow
        }
        --cellPerRow
    }

    return 1;
}