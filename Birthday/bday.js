const animate =document.querySelectorAll(".stick");
// let input = document.querySelector('input[type="text"]');
// let form = document.querySelector('.verify');
// let botton = document.querySelector('botton');
// let correctInput ="Odolo"

// botton.addEventListener(`click`, ()=>{
//     if (input.value === correctInput) {
//         form.style.display = "none";
//     } 
// });
window.addEventListener("scroll", checkboxes);
checkboxes();

function checkboxes() {
    const trigger = window.innerHeight/5*4;
    animate.forEach(box=>{
        const boxTop= box.getBoundingClientRect().top;
        if (boxTop<trigger) {
            box.classList.add("play");
        }else{
            box.classList.remove("play")
        }
    });
}

