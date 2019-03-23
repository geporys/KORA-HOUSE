import lumberData from "../mockData/lumber";

class LumberTable {
    constructor() {
        this.lumberTableContainer = document.getElementById("lumber-table");
        this.columns = ["Размер, мм	", "2 сорт, руб.", "ТУ нал/бнал, руб.", "ГОСТ нал/бнал, руб.", "Ед. измер"];
    }

    createTable(lumberData) {
        const tableContainer = document.createElement("table");

        const tbody = this.createTbody();
        tableContainer.appendChild(tbody);

        lumberData.forEach(({size, price1, price2, gost, unit}) => {
            const tr = document.createElement("tr");

            tr.appendChild(this.createTD(size));
            tr.appendChild(this.createTD(price1));
            tr.appendChild(this.createTD(price2));
            tr.appendChild(this.createTD(gost));
            tr.appendChild(this.createTD(unit));

            tableContainer.appendChild(tr);
        });

        this.lumberTableContainer.appendChild(tableContainer);
    }

    createTbody() {
        const tbodyContainer = document.createElement("tbody");

        this.columns.forEach((nameColumn) => {
            const column = this.createTD(nameColumn);
            tbodyContainer.appendChild(column);
        });

        return tbodyContainer;
    }

    createTD(content) { 
        const tdContainer = document.createElement("td");
        tdContainer.innerText = content;
        return tdContainer;
    }
}

const lumberTable = new LumberTable();

lumberTable.createTable(lumberData);

