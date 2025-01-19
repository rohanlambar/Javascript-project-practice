//Fisher - Yates algorithm 
const cards = ['A',2,3,4,5,6,7,8,9,10,'K','Q','J'];
function shuffle(array){
    for(let i = array.length-1;i>=0;i--){
        let random = Math.floor(Math.random() *(i+1));
        [array[i],array[random]] = [array[random],array[i]];
    }
}
shuffle(cards);
console.log(cards);