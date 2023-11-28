// 1) 
class Student {
  constructor(lastName, firstName, grades) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.grades = grades;
  }
}

// 2)
class ListOfStudents {
  constructor(students) {
    this.students = students;
  }

  getTableList() {
    let table = '<table border="1">\n';
    table += '<tr><th>Last Name</th><th>First Name</th><th>Grades</th></tr>\n';

    for (const student of this.students) {
      table += `<tr><td>${student.lastName}</td><td>${student.firstName}</td><td>${student.grades.join(', ')}</td></tr>\n`;
    }

    table += '</table>';
    return table;
  }
}

// 3)
class StylesTable extends ListOfStudents {
  getStyles() {
    return 'table { width: 100%; border-collapse: collapse; } th, td { padding: 10px; border: 1px solid #ddd; text-align: left; }';
  }

  getTableList() {
    const basicTable = super.getTableList();
    return `<style>${this.getStyles()}</style>\n${basicTable}`;
  }

  getAvg(student) {
    const average = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
    return ` (Average: ${average.toFixed(2)})`;
  }

  getTotalAvg() {
    const totalAvg = this.students.reduce((sum, student) => sum + student.grades.reduce((total, grade) => total + grade, 0), 0) / this.students.length;
    return `Total Average: ${totalAvg.toFixed(2)}`;
  }
}

const studentsArray = [
  new Student('Smith', 'John', [90, 85, 88]),
  new Student('Doe', 'Jane', [92, 88, 94]),
  new Student('Johnson', 'Robert', [85, 90, 87])
];

const basicList = new ListOfStudents(studentsArray);
const stylesTable = new StylesTable(studentsArray);

document.getElementById('basicList').innerHTML = basicList.getTableList();
document.getElementById('styledTable').innerHTML = stylesTable.getTableList() + '<br>' + stylesTable.getTotalAvg();
