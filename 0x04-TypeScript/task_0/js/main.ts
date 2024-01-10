interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Andrews",
  age: 21,
  location: "San Francisco",
};

const student2: Student = {
  firstName: "James",
  lastName: "Peters",
  age: 23,
  location: "Chicago",
};

const studentList: Student[] = [student1, student2];

function renderTable(studentArray: Student[]) {
  const table = document.createElement('table');
  const headerRow = table.insertRow();

  const FirstNameHeader = document.createElement('th');
  FirstNameHeader.textContent ='First Name';
  headerRow.appendChild(FirstNameHeader);

  const locationHeader = document.createElement('th');
  locationHeader.textContent ='Location';
  headerRow.appendChild(locationHeader);

  studentArray.forEach((student) => {
    const row = table.insertRow();

    const firstNameCell = row.insertCell();
    firstNameCell.textContent = student.firstName;

    const locationCell = row.insertCell();
    locationCell.textContent = student.location;
  });
  document.body.appendChild(table);
}
renderTable(studentList);