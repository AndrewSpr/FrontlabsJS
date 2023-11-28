document.body.style.fontFamily = 'Arial';

let paragraph1 = document.getElementById('paragraph1');
paragraph1.style.color = 'orange';
paragraph1.style.backgroundColor = 'yellow';
paragraph1.style.fontSize = '16px';
paragraph1.style.padding = '5px';
paragraph1.style.textAlign = 'center';

let paragraph2 = document.getElementById('paragraph2');
paragraph2.style.color = 'blue';
paragraph2.style.backgroundColor = 'lightblue';
paragraph2.style.fontSize = '14px';
paragraph2.style.padding = '5px';
paragraph2.style.textAlign = 'right';

let paragraph3 = document.getElementById('paragraph3');
paragraph3.style.color = 'red';
paragraph3.style.backgroundColor = 'lightcoral';
paragraph3.style.fontSize = '12px';
paragraph3.style.padding = '5px';
paragraph3.style.textAlign = 'left';

let tableCells = document.querySelectorAll('#myTable td');
tableCells.forEach(cell => {
    cell.addEventListener('click', function() {
        this.classList.toggle('selected');
    });
});
