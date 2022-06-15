async function getStudents() {
    const response = await fetch("http://127.0.0.1:3000/students")
    return await response.json()
}

async function init() {
    const students = await getStudents();
    document.body.innerHTML = getStudentlistHTML(students);
}

function getStudentlistHTML(students) {
    console.log(students);
    const studentlistHTMLs = students.map(studentComponent)
    console.log(studentlistHTMLs);
    return studentlistHTMLs.join("");
}

function studentComponent(student) {
    return `
    <div class="student">
        <p>${student.name}</p>
        <p>${student.status}</p>
    </div>
    `
}

init();