let right = document.querySelector(".right")
let left = document.querySelector(".left")
let h1 = document.querySelector("h1")
let empty = document.querySelector(".empty")

let index = 0
function handleEmpty(e){
    e.preventDefault()
    // h1.textContent =  0
    index = 1

}
empty.addEventListener("click", handleEmpty)
    function handleMinus(e){
        h1.textContent = index
        e.preventDefault()
        if(index < 1){
            index = index
        }else{
            index--
        }
    }
right.addEventListener("click", handleMinus)
function handlePlus(e){
    e.preventDefault()
    h1.textContent = index
    index++
}
left.addEventListener("click", handlePlus)
