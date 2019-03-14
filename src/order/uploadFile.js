import drageDropFile from "./dragenDropFile";
import error from "../icons/error.svg";

class FileManager {

    constructor() {
        this.addedFiles = [];
        this.filesContainer = document.getElementsByClassName("filesContainer")[0];
        this.deleteIcon = "/Users/germanignatovich/Desktop/work/sawmill/src/icons/error.svg"; // TODO настроить webpack на иконки
        this.fileIcon = "/Users/germanignatovich/Desktop/work/sawmill/src/icons/file.svg";
    }

    showFiles(newFiles) {
        const elemFiles = newFiles.map((file) => {
            const idFile = this.addedFiles.length;

            const logoContainer = this.createLogoFile(file);
            const deleteButton = this.createDeleteButton(idFile);

            const fileContainer = document.createElement("div");

            fileContainer.appendChild(logoContainer);
            fileContainer.appendChild(deleteButton);

            fileContainer.className = "fileContainer";
            fileContainer.dataset.idFile = idFile;

            this.addedFiles = [...this.addedFiles, file];
            return fileContainer;
        });

        elemFiles.map((fileContainer) => {
            this.filesContainer.appendChild(fileContainer);
            return fileContainer
        });
    };

    createLogoFile(file) {
        const logoIcon = document.createElement("img");
        logoIcon.src = this.fileIcon;

        const logoText = document.createElement("p");
        logoText.innerText = file.name;
            
        const logoContainer = document.createElement("span");
        logoContainer.appendChild(logoIcon);
        logoContainer.appendChild(logoText);

        return logoContainer;
    };

    createDeleteButton(idFile) {
        const deleteButton = document.createElement("button");
        deleteButton.type = "button";

        const containerForIcon = document.createElement("img");
        containerForIcon.src = error;
        deleteButton.appendChild(containerForIcon);
        deleteButton.onclick = (e) => this.deleteFile(e, idFile);

        return deleteButton;
    };

    deleteFile({currentTarget}, idFile) {
        this.addedFiles[idFile] = null;

        const fileContainer = currentTarget.parentNode;
        fileContainer.remove();
    };

    handleFiles(files) {
        const arrayFiles = Array.from(files);
        this.showFiles(arrayFiles);
    };

}

const inputFiles = document.getElementById("fileElem"); 
const fileManager = new FileManager(); // TODO добавить inputFiles в класс
inputFiles.onchange = (e) => fileManager.handleFiles(e.target.files); // TODO добавить обрабутку события в класс, узнать как это сделать

drageDropFile((files) => fileManager.handleFiles(files));

