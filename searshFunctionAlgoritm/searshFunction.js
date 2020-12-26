function searsh(list, item) {                           // нет условия на несуществующий item, надо придумать!!!

    let start = 0;
    let heigh = list.length - 1;
    let mid;
    let guess;

    while (start <= heigh) {

        mid = Math.floor((start + heigh) / 2);
        guess = list[mid];
        
        if (guess == item) return mid;
        if (guess > item) {
            heigh = mid - 1;            
        } else {
            start = mid + 1;
        }

    }
    
}