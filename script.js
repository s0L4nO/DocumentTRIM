const textarea = document.querySelectorAll('textarea');
const inputTextarea = document.getElementById('inputText');
const outputTextArea = document.getElementById('outputText');
const pasteTextButton = document.getElementById('pasteTextButton');
const copyTextButton = document.getElementById('copyTextButton');
const clearTextButton = document.getElementById('clearTextButton');
const isCopyText = document.getElementById('isCopy');

//// MAIN FUNCTION
//// REMOVE UNNECESSARY LINE BREAK
function trimDocument(){
    isCopyText.textContent = '';
    outputTextArea.textContent = '実行中';
    const inputText = String(inputTextarea.value);
    const newText = inputText.replaceAll('.\n', '➈').replaceAll('\n', ' ').replaceAll('➈', '.\n');
    outputTextArea.textContent = newText;
    textarea.forEach((e) => e.style.height = inputTextarea.scrollHeight + 'px');
}
inputTextarea.addEventListener('input', trimDocument);

//// BUTTON FUNCTION
//paste
pasteTextButton.addEventListener('click', () => {
    navigator.clipboard.readText().then((clipText) => {
        inputTextarea.value += ' ' + clipText;
        trimDocument();
    });
});

//copy
copyTextButton.addEventListener('click', () => {
    navigator.clipboard.writeText(outputTextArea.textContent).then(() => {
        isCopyText.textContent = 'Copied';
    });
});

//clear
clearTextButton.addEventListener('click', () => {
    isCopyText.textContent = '';
    inputTextarea.value = '';
    outputTextArea.textContent = '';
    textarea.forEach((e) => e.style.height = '100px');
});
