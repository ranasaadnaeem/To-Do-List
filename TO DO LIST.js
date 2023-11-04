
let form=document.querySelector('form');
let ul=document.getElementById('ul');

// GETTING DATA FROM LOCAL STORAGE

let data = localStorage.getItem('todos');
ul.innerHTML= data;

        
// ADDING NEW TASK 
form.addEventListener('submit', function(e){
    e.preventDefault();

let input=document.getElementById('input');

    if(input.value==""){alert('Kindly Enter A ToDo')}
    else{
        let li=document.createElement('li');
li.innerHTML='<p>'+ input.value+ '</p> <button>X</button>';
ul.append(li);

input.value="";

store_data();}

// console.log(input);

});


// COMPLETED TASK

let lis=document.querySelectorAll('li');
console.log(lis);

let length=lis.length;

for(let i=0; i<length ; i++){
    let li=lis[i];
    let p=li.children[0];
    p.addEventListener('click', function(){
        this.classList.toggle('completed');
        store_data();
    })

    let button=li.children[1];
    button.addEventListener('click', function(){
        lis[i].remove();
        store_data();
    })
}

function store_data(){
    localStorage.setItem('todos', ul.innerHTML);
}
