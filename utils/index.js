
// 拆分数组为多维数组 num: 维度 arr: 拆分的数组
export function splitArr(arr = [], num = 0) {
    let index = 0;
    let newArray = [];
    while(index < arr.length) {
        newArray.push(arr.slice(index, index += arr.length/num));
    }
    return newArray;
}