// .map() accepts a callback and apply it to all element of Array and created a new array
const dates = ['2024-1-12','2025-3-3','2026-8-6'];
let formattedDates = dates.map(formatDate)
function formatDate(element){
      let parts = element.split("-");
      return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
console.log(formattedDates);