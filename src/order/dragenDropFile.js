
export default function drageDropFile(showFiles) {
    const dragAndDropWindow = document.getElementById("drag-and-drop-window");
    const documentElement = document.documentElement;

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dragAndDropWindow.addEventListener(eventName, stopEvents, false);
        documentElement.addEventListener(eventName, stopEvents, false);
      });

      documentElement.ondragover = (e) => {
        dragAndDropWindow.className = "dragen-drop-field";
    };

    documentElement.ondrop = (e) => {
        dragAndDropWindow.className = "hide";
    };

    dragAndDropWindow.ondrop = ({dataTransfer: {files}}) => {
        showFiles(files);
        dragAndDropWindow.className = "hide";
    };
};

function stopEvents(e) {
    e.preventDefault();
    e.stopPropagation();
}
