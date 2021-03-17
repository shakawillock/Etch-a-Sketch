let container = document.querySelector('.container');
let changeSizeBtn = document.querySelector('.btn-change-size');

function changeColor() {
    let divs = Array.from(container.children);

    divs.forEach(div => {
        div.addEventListener('mouseover', () => {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            
            let randomColor = "rgb(" + r + "," + g + "," + b + ")";
            div.style.backgroundColor = randomColor;
        });
    }); 
}

function createSquares() {
    for (let i = 1; i <= 256; i++) {
    let div = document.createElement('div');
    div.className = 'flex-item';

    container.style.gridTemplateColumns = `repeat(16, 1fr)`;
    container.append(div);

    changeColor();
	}		
}

function changeSquareSize(grid, squares) {
	for (let i = 1; i <= grid; i++) {
		let div = document.createElement('div');
		div.className = 'flex-item';
		container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
		container.appendChild(div);
	}
}

changeSizeBtn.addEventListener('click', () => {
    container.innerHTML = '';
    
    let userInput = +prompt('Please enter how many squares you want');

    while (true) {
        if (userInput > 100 || Number.isNaN(userInput)) {
            userInput = +prompt('Please enter a number from 1 to 100');
        } else if (userInput <= 100) {
            break;
        } 
    }

    let grid = userInput * userInput;

		changeSquareSize(grid, userInput);
    changeColor();
});

createSquares()