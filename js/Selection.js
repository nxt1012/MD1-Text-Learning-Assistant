class Selection {
    selectionValue;
    selectionStart;
    selectionEnd;

    constructor(selectionValue = "", selectionStart = 0, selectionEnd = 0) {
        this.selectionValue = selectionValue;
        this.selectionStart = selectionStart;
        this.selectionEnd = selectionEnd;
    }

    getSelectionValue() {
        return this.selectionValue;
    }

    setSelectionValue(value) {
        this.selectionValue = value;
    }

    getSelectionStart() {
        return this.selectionStart;
    }

    setSelectionStart(value) {
        this.selectionStart = value;
    }

    getSelectionEnd() {
        return this.selectionEnd;
    }

    setSelectionEnd(value) {
        this.selectionEnd = value;
    }
}