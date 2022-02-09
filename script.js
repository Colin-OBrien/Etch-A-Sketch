
function createGrid(size=16) {
    const container = document.querySelector('#grid-container'); //defining our container div and selecting it
    for (y=0; y < size; y++) { //looping through the specified size and creating a div of class column
        let column = document.createElement('div');
        column.className = 'column'

        for (x=1; x<=size; x++) { //within the column div we are looping through and adding a div of gridsquare
            let cell = document.createElement('div');
            cell.className = 'gridSquare';
            //cell.innerText = (y*size) + x; - removed the text and used mins on height and width in css
            column.appendChild(cell); //adding our square to the column, this will iterate until size is met
        };
        container.appendChild(column); //adding our column full of squares to the container
    };

};


createGrid(16);



