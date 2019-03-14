
export default function drageDropFile(showFiles) {
    const dragAndDropWindow = document.getElementById("dragAndDropWindow");
    const documentElement = document.documentElement;

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dragAndDropWindow.addEventListener(eventName, stopEvents, false);
        documentElement.addEventListener(eventName, stopEvents, false);
      });

      documentElement.ondragover = (e) => {
        dragAndDropWindow.className = "dragenDropField";
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
