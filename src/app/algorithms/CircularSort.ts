//Write a method, isCircleSorted(int[] A) (Java, JavaScript), or Array#circularly_sorted? (Ruby) 
//that determines if A is circularly sorted.
// An Array is circularly sorted if the elements are sorted in ascending order, 
//but displaced, or rotated, by any number of steps.
export class CircularSort {
    isCircularSort(array) {
        let sortedArray = array.slice();
        for(let i = 0; i < array.length ; i++) {
            let pop = array.pop();
            array.unshift(pop);
            if(array.join('')==sortedArray.sort((a,b)=>a-b).join('')) {
                return true;
            }
        }
        return false;
    }
}