let buttonAdd = document.getElementById("add");
let buttonReduce = document.getElementById("reduce");
let divWrapper = document.getElementById("currentNumber");
let count = 0;

function incrementFunc () {
    if (count >= 9) {
        add.disabled = true;
    }
    
    if(count >= 0){
        divWrapper.style.color = 'white';
    }
    count++;
    divWrapper.innerHTML = count;
}

function decrementFunc () {
    if (count <= 1) {
        reduce.disabled = true;
    }

    if(count <= 0){
        divWrapper.style.color = 'red';
    }
    count--;
    divWrapper.innerHTML = count;
}

buttonAdd.addEventListener('click', incrementFunc);
buttonReduce.addEventListener('click', decrementFunc);
