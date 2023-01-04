let selectCollection = [];
let arrangedSelectCollection = [];
let textTitle = "";
let originInput = "";
let termNote = [];

function logSelection(event){
    let selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    textTitle = document.getElementById("textTitle").value;
    if (selection.trim() === "") {
        alert("You haven't select anything at all, select again")
    } else if (checkExist(event.target.selectionStart, event.target.selectionEnd)) {
        alert("This selection is already declared, select another one.")
    } else {
        let newSelection = new Selection(selection, event.target.selectionStart, event.target.selectionEnd);
        //nếu trong bộ sưu tập chưa có từ cùng vị trí thì mới cho vào trong
        //không dùng hàm includes trong trường hợp này được vì newSelection là object
        /*if (selectCollection.indexOf(newSelection) !== -1){
            alert("There's already a note in this position, please select another one.")
        } else*/ if (textTitle === "") {
            alert("You must enter a text title")
        } else {
            let note = prompt("Nhập vào ghi chú cho từ này");
            if (note !== null){
                //đặt selectCollection là cái trung gian
                selectCollection = arrangedSelectCollection;
                selectCollection[selectCollection.length] = newSelection;
                termNote[termNote.length] = new TermNote(selection, note);
                sessionStorage.setItem(`glossary`, JSON.stringify(termNote))
                arrangedSelectCollection = selectCollection;
                sessionStorage.setItem(textTitle, JSON.stringify(termNote));
                arrangedSelectCollection.sort((firstLocation, secondLocation) => firstLocation.selectionStart - secondLocation.selectionStart);
                sessionStorage.setItem("selectedData", JSON.stringify(arrangedSelectCollection));
                //print out the highlighted
                originInput = document.getElementById("userInputText").value;
                let firstString = originInput.substring(0, arrangedSelectCollection[0].selectionStart);
                for (let i= 0; i< arrangedSelectCollection.length-1; i++) {
                    firstString = `${firstString} <span style="background-color: yellow">${arrangedSelectCollection[i].selectionValue}</span> ${originInput.substring(arrangedSelectCollection[i].selectionEnd, arrangedSelectCollection[i+1].selectionStart)}`
                }
                firstString = `${firstString} <span style="background-color: yellow">${arrangedSelectCollection[arrangedSelectCollection.length-1].selectionValue}</span> ${originInput.substring(arrangedSelectCollection[arrangedSelectCollection.length-1].selectionEnd, originInput.length)}`
                document.getElementById("log").innerHTML = firstString;
                let currentUser = localStorage.getItem("currentLogin");
                for (let i = 0; i < localData.length; i++){
                    if (localData[i].user === currentUser){
                        let flag = false;
                        for (let j = 0; j < localData[i].data.texts.length; j++){
                            if (localData[i].data.texts[j].title === textTitle){
                                flag = true;
                                localData[i].data.texts[j].original = document.getElementById("userInputText").value;
                                localData[i].data.texts[j].selectedData = arrangedSelectCollection;
                                localData[i].data.texts[j].terms = termNote;
                                console.log(localData)
                            }
                        }
                        if(!flag){
                            localData[i].data.texts[localData[i].data.texts.length] = {"title": "", "original": "", "selectedData": "", "terms": []};
                            localData[i].data.texts[localData[i].data.texts.length-1].original = document.getElementById("userInputText").value;
                            localData[i].data.texts[localData[i].data.texts.length-1].selectedData = arrangedSelectCollection;
                            localData[i].data.texts[localData[i].data.texts.length-1].terms = termNote;
                            localData[i].data.texts[localData[i].data.texts.length-1].title = textTitle;
                            console.log(localData, "hi")
                        }
                        localStorage.setItem("localData", JSON.stringify(localData))
                        console.log(localStorage.getItem("localData"))
                    }
                }

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
   let flag = false;
   for (let i = 0; i < arrangedSelectCollection.length; i++){
       if(arrangedSelectCollection[i].selectionStart <= start && arrangedSelectCollection[i].selectionEnd > start){
           flag = true;
           break;
       } else if (arrangedSelectCollection[i].selectionStart >= start && arrangedSelectCollection[i].selectionEnd < end){
           flag = true;
           break;
       }
   }
   return flag;
}

const input = document.querySelector('textarea');
input.addEventListener('select', logSelection);