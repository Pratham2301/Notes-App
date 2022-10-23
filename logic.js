console.log("starting To-Do app....");

const title = document.getElementById('input-title');
const text = document.getElementById('input-text');
const addBtn = document.getElementById('add-btn');
const displaynotes = document.getElementById('showNotes');


showAllNotes();


// console.log(title);
// console.log(text);
// console.log(addBtn);

//////////////////////////////////////////////////////////////////////////////////////////////

function addNoteonClick() {

    console.log("click working");
    console.log(title.value + "--" + text.value);

    if (title.value == "") {
        alert("Please add title");
        return;
    }

    if (text.value == "") {
        alert("Cant add empty note");
        return;
    }

    const noteObj = {
        Title: title.value,
        Text: text.value
    }

    let prevNotes = localStorage.getItem('notes');

    let notesArray = []

    if(prevNotes.length!=0)
    {
        notesArray = JSON.parse(prevNotes);
    }

    notesArray.push(noteObj);

    let notesString = JSON.stringify(notesArray);

    localStorage.setItem('notes', notesString);

    showAllNotes();

}

function showAllNotes() {

    let prevNotes = localStorage.getItem('notes');

    console.log("local storage Length : - ", prevNotes.length);

    if(prevNotes.length==0)
    {
        displaynotes.style.display = "none";
        return;
    }

    console.log("local storage : - ", prevNotes);

    let noteArray = [];

    noteArray = JSON.parse(prevNotes);

    console.log("local storage : - ", prevNotes);

    let str = "";
    for (let i = 0; i < noteArray.length; i++) {
        // console.log(noteArray[i].Title);
        // console.log(noteArray[i].Text);

        str += `<div id="note1">
                    <div id="show-title">${noteArray[i].Title}</div>
                    <div id="show-text">${noteArray[i].Text}</div>
                    <button id="delete-btn-${i}">Delete</button>
                </div>
        `;
    }

    if (noteArray.length > 0) {
        displaynotes.style.display = "flex";
    }

    displaynotes.innerHTML = str;
}


///////////////////////////////////////////////////////////////////////////////////////



addBtn.addEventListener('click', addNoteonClick);



