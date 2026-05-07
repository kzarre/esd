var students = [];

function addStudent() {

    var name = document.getElementById("name").value;

    var age = Number(
        document.getElementById("age").value
    );

    var course = document.getElementById("course").value;

    var student = {
        name: name,
        age: age,
        course: course
    };

    students.push(student);

    displayStudents();

}

function displayStudents() {

    var table =
        document.getElementById("studentTable");

    table.innerHTML = "";

    students.forEach(function(student) {

        table.innerHTML += `
            <tr>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.course}</td>
            </tr>
        `;

    });

}