// console.log(123);


function toggleAnswer(id) {
    console.log(id)
    // const answer = document.querySelector(`#${id}`); // "#answer1"

    const answer = document.getElementById(id);
    console.log(answer)
    if (answer.style.display === "none" || !answer.style.display) {
        answer.style.display = "block"
    } else {
        answer.style.display = "none"
    }

} 