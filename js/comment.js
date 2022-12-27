let selectCollection = [];
let arrangedSelectCollection = [];
let textTitle = "";
let indexOccupied = false;
let originInput = "";
let termNote = [];
function logSelection(event){
    let selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    if (selection.trim() === "") {
        alert("You haven't select anything at all, select again")
    } else if (checkExist(event.target.selectionStart) || checkExist(event.target.selectionEnd)) {
        alert("This selection is already declared, select another ones.")
    } else {
        selectCollection[selectCollection.length] = new Selection(selection, event.target.selectionStart, event.target.selectionEnd)
        textTitle = document.getElementById("textTitle").value;
        if (textTitle === "") {
            alert("You must enter a text title")
        } else {
            localStorage.setItem(textTitle, JSON.stringify(selectCollection));
            arrangedSelectCollection = selectCollection;
            arrangedSelectCollection.sort((firstLocation, secondLocation) => firstLocation.selectionStart - secondLocation.selectionStart);
            let note = prompt("Nhập vào ghi chú cho từ này");
            if (note !== null){
                termNote[termNote.length] = new TermNote(selection, note);
                localStorage.setItem(`termIn${textTitle}`, JSON.stringify(termNote))
                localStorage.setItem(`glossary`, JSON.stringify(termNote))
                originInput = document.getElementById("userInputText").value;
                let firstString = originInput.substring(0, arrangedSelectCollection[0].selectionStart);
                for (let i= 0; i< arrangedSelectCollection.length-1; i++) {
                    firstString = `${firstString} <span style="background-color: yellow">${arrangedSelectCollection[i].selectionValue}</span> ${originInput.substring(arrangedSelectCollection[i].selectionEnd, arrangedSelectCollection[i+1].selectionStart)}`
                } firstString = `${firstString} <span style="background-color: yellow">${arrangedSelectCollection[arrangedSelectCollection.length-1].selectionValue}</span> ${originInput.substring(arrangedSelectCollection[arrangedSelectCollection.length-1].selectionEnd, originInput.length)}`
                document.getElementById("log").innerHTML = firstString;
            }
        }
    }

}

function checkExist(index) {
    console.log(index)
    for (let i= 0; i< arrangedSelectCollection.length; i++) {
        if (arrangedSelectCollection[i].selectionStart < index && arrangedSelectCollection[i].selectionEnd > index){
            indexOccupied = true;
            break;
        } else console.log(index)
    }
    return indexOccupied;
}


const input = document.querySelector('textarea');
input.addEventListener('select', logSelection);