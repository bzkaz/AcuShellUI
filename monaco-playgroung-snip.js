let editor = monaco.editor.create(document.getElementById("container"), {
	value: "function hello() {\n\talert('Hello world!');\n}",
	language: "javascript"
});

let history = new Array();
history.push("foo");
history.push("two");
history.push("three");

var historyPos = history.length;

function previousEntry() {
    if (historyPos > 0) {
        historyPos -= 1;
        editor.setValue('');
        editor.setValue(history[historyPos]);
    }
}

function nextEntry() {
    if (historyPos < history.length - 1) {
        historyPos += 1;
        editor.setValue('');
        editor.setValue(history[historyPos]);
    }
}

editor.addCommand(monaco.KeyCode.UpArrow, function() {
	previousEntry();
});

editor.addCommand(monaco.KeyCode.DownArrow, function() {
	nextEntry();
});