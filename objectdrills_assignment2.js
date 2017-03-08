// Assignemnt #2:
// Write a function getGrade(studentList, studentName, course)
// (use getMarks to get the marks and then grade the marks because DRY = Dont' Repeat Yourself)

//   grading system:
//     70 - 100: A
//     60 - 69: B
//     50 - 59: C
//     40 - 49: D
//     < 39: E



var students = [ 
  { 
  	name: 'Billy Boy',
  	mark: 60,
  	courses: {
  		Biology: 56,
  		Chemistry: 89,
  		Physics: 90
  	}
  },
  { 
  	name: 'Billy Jean',
  	mark: 60,
  	courses: {
  		Languages: 80,
  		History: 89,
  		Physics: 90
  	}
  },
  { 
  	name: 'James Smart',
  	mark: 60,
  	courses: {
  		Biology: 78,
  		Chemistry: 54,
  		Physics: 76
  	}
  }
];



function getGrade(studentList, studentName, course) {
  for (var i = 0; i < students.length; i++){
      if (students[i].name == studentName) {
        var grade = students[i].courses[course];
        
        if (grade >= 70){
          return("A");
        }
        
        else if (grade > 60 && grade <= 69){
          return("B");
        }
        
        else if (grade > 50 && grade <= 59){
          return("C");
        }
        
        else if (grade > 40 && grade <= 49){
          return("D");
        }
        
        else if (grade <= 39){
          return("E");
        }
      }
  }
}


console.log('Billy Boy => Physics: ', getGrade(students, 'Billy Boy', 'Physics'));
console.log('Billy Boy => Biology: ', getGrade(students, 'Billy Boy', 'Biology'));
console.log('James Smart => Physics: ', getGrade(students, 'James Smart', 'Physics'));

