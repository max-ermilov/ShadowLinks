document.addEventListener('DOMContentLoaded', function () {
  const textareas = document.querySelectorAll('.codemirror-editor');
  textareas.forEach(function (textarea) {
    CodeMirror.fromTextArea(textarea, {
      mode: "javascript",
      lineNumbers: true,
      matchBrackets: true,
      indentUnit: 4,
      theme: 'default'
    });
  });
});
