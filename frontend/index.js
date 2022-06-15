async function getStudents() {
    const response = await fetch("http://127.0.0.1:3000/students")
    return await response.json()
}

console.log(await getStudents());