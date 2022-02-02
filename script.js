
function createGrid(size=16) {
    const container = document.querySelector('#grid-container');
    for (row=0; row < size; row++) {
        let row = document.createElement('div');
        row.className = 'row'

        for (x=1; x<=size; x++) {
            let cell = document.createElement('div');
            cell.className = 'gridSquare';
            cell.innerText = (row*size) + x;
            row.appendChild(cell);
        };
        container.appendChild(row);
    };

};


createGrid();



