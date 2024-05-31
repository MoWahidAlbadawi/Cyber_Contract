document.getElementById('show-services').addEventListener('click', function() {
    document.getElementById('services-list').classList.toggle('hidden');
});
let count=0;
let countServ = document.querySelector(".count-service");
let lis= document.querySelectorAll('#services-list ul li');
lis.forEach((li) => {
    li.addEventListener('click' , function () {
        if(li.classList.contains('li')) {
            li.classList.remove('li');
            li.classList.add('clicked');
            count++;
        }
        else if (li.classList.contains('clicked')){
            li.classList.remove('clicked');
            li.classList.add('li');
            count--;
        }
        countServ.innerHTML=`${count}/9`;
    })
});
// setTimeout(function() {
//     window.open("https://facebook.com","_blank","width=400,height=400,left=510,top=100");
// },2000);