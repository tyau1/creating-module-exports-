var list = [];

module.exports = {
    storeNumbers: function (number) {
        list.push(number);
        console.log(list);
    },
    sortNumbers: function () {
        return list.sort(function (a, b) {
            return a - b;
        }
        )
    }
}

//  sortArray: function() {
//    return list.sort(function(a,b) {
//    return a - b;
//  })
//  }
// };

// sort numbers

// students.sort(function (a,b){

//     if (a.name < b.name){
//       return -1;
//     }
//     if (a.name > b.name) {
//       return 1;

//     } else if (a.age < b.age){

//     return 1;
//     }

//   });