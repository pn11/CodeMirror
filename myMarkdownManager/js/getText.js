//cf:http://codemirror.net/doc/manual.html

function getText() {
    var output = document.getElementById('output');
    
    window.editor_markdown.save();
    
    //    output.textContent = window.editor_markdown.getTextArea().value;
    output.textContent = window.editor_markdown.getValue();
    //    output.textContent = window.editor_markdown.getCode();
}

window.addEventListener( 'load', init, false );
