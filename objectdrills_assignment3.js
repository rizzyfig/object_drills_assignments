
// Assignemnt #3: Traversing (remind redo this later with jQuery)

// Print out this in the console

// Name      | Biology | Physics | Chem | Languages | History
// ------------------------------------------------------------------
// Billy Boy     | 56    | 90      | 89   |  -        | -


var students = { 
    name: 'Billy Boy',
    mark: 60,
    courses: {
      Biology: 56,
      Chemistry: 89,
      Physics: 90
    }
};
  
//   },
//   { 
//    name: 'Billy Jean',
//    mark: 60,
//    courses: {
//      Languages: 80,
//      History: 89,
//      Physics: 90
//    }
    
//   },
//   { 
//    name: 'James Smart',
//    mark: 60,
//    courses: {
//      Biology: 78,
//      Chemistry: 54,
//      Physics: 76
//    }
//   }
// ];


var table ={};
for (var name in students){
 var table = students[name] + " | " + students.courses.Biology + " | " + students.courses.Physics
 + " | " + students.courses.Chemistry;
  alert(table);
}
 
// for (var courses in students){
//   alert(students[courses]);
// }

// for (var mark in students){
//   alert(students[mark]);
// }


// console.log('Billy Boy => Physics: ', getMarks(students, 'Billy Boy', 'Physics'));
// console.log('Billy Boy => Biology: ', getMarks(students, 'Billy Boy', 'Biology'));
// console.log('James Smart => Physics: ', getMarks(students, 'James Smart', 'Physics'));

