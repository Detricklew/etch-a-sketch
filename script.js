function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const display = document.querySelector('.box');

const button = document.querySelector('#button');

button.addEventListener('click', function(){
    let user_num;
    do{
        user_num = prompt('input new grid size');
    }
    while(user_num < 0 || user_num > 100);

    createGrid(user_num);
    return;
})

function createGrid(){
    if (arguments[0] == null){
        createGrid(16)
        return;
    }
    else{
        while(display.firstChild){
            display.removeChild(display.lastChild);
        }

        for(let i = 0; i < arguments[0]; i++){
            const row = document.createElement('div');
            row.classList.toggle('row')

            for (let j = 0; j < arguments[0]; j++){
                const column = document.createElement('div');
                column.classList.toggle('column');
                column.addEventListener('mouseover', function(){
                    let r = getRandomInt(255);
                    let g = getRandomInt(255);
                    let b = getRandomInt(255);
                    if (column.hasAttribute('style')){
                        return;
                    }
                    else{
                        column.setAttribute('style', `background: rgb(${r}, ${g}, ${b});`);
                    }
                    
                })
                row.appendChild(column);
            }
            display.appendChild(row);
        }
        return;
    }
}

createGrid();