class TermNote {
    term;
    note;

    constructor(term, note) {
        this.term = term;
        this.note = note;
    }

    getText() {
        return this.term;
    }

    setText(value) {
        this.term = value;
    }

    getComment() {
        return this.note;
    }

    setComment(value) {
        if (value === "") {
            prompt("Vui lòng nhập comment cho text đã chọn")
        } else this.note = value;
    }
}