
const save = () => {
    input = document.getElementById("input_area")
    note = document.createElement("div")
    note.classList.add("note")
    note.innerText = input.value

    container = document.getElementById("container")
    container.appendChild(note)
}
