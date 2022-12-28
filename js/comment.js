let selectCollection = [];
let arrangedSelectCollection = [];
let textTitle = "";
let originInput = "";
let termNote = [];
function logSelection(event){
    let selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    if (selection.trim() === "") {
        alert("You haven't select anything at all, select again")
    } else if (checkExist(event.target.selectionStart, event.target.selectionEnd)) {
        alert("This selection is already declared, select another ones.")
    } else {
        let newSelection = new Selection(selection, event.target.selectionStart, event.target.selectionEnd);
        //nếu trong bộ sưu tập chưa có từ cùng vị trí thì mới cho vào trong
        if (!selectCollection.includes(newSelection)){
            selectCollection[selectCollection.length] = newSelection;
        }
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
/*
cắm cờ flag = false
check vị trí start của selection
nếu start nằm trong khoảng start-end của bất kỳ giá trị nào đã có => flag = true
nếu start nhỏ hơn giá trị start của bất kỳ giá trị nào đó (xét tiếp) else if
end của selection lớn hơn giá trị end của giá trị đó => flag = true (chứa rồi)

 */
function checkExist(start, end) {
    console.log(start, " ", end)
   let flag = false;
   for (let i = 0; i < arrangedSelectCollection.length; i++){
       if(arrangedSelectCollection[i].selectionStart <= start && arrangedSelectCollection[i].selectionEnd > start){
           console.log("đè")
           flag = true;
           break;
       } else if (arrangedSelectCollection[i].selectionStart >= start && arrangedSelectCollection[i].selectionEnd < end){
           console.log("chứa")
           flag = true;
           break;
       }
   }
   console.log(flag)
   return flag;
}


const input = document.querySelector('textarea');
input.addEventListener('select', logSelection);