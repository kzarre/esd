interface Student {
    name: string;
    age: number;
    course: string;
}

let students: Student[] = [];

function addStudent(): void {

    let name = (document.getElementById("name") as HTMLInputElement).value;

    let age = Number(
        (document.getElementById("age") as HTMLInputElement).value
    );

    let course = (document.getElementById("course") as HTMLInputElement).value;

    let student: Student = {
        name: name,
        age: age,
        course: course
    };

    students.push(student);

    displayStudents();

}

function displayStudents(): void {

    let table =
        document.getElementById("studentTable") as HTMLElement;

    table.innerHTML = "";

    students.forEach((student) => {

        table.innerHTML += `
            <tr>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.course}</td>
            </tr>
        `;

    });

}