import Letter from "../common/types/Letter";

export function sliceArray(inputArray: any[], chunkSize: number) {
    return inputArray.reduce((result, item, index) => {
        const chunkIndex = Math.floor(index / chunkSize);
        result[chunkIndex] = [].concat((result[chunkIndex] || []), item);
        return result
    }, [])
}