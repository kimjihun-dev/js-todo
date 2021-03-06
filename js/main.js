const inputText = document.querySelector('.input-text')
const addBtn = document.querySelector('.add-button')
const list = document.querySelector('.list')

const likeButtons = document.querySelectorAll('.like');

likeButtons.forEach((like)=>{
    like.addEventListener("click", ()=>{
        console.log("click!")
    })
})


function addItem(){

    // 공백일 경우 false
    if (inputText.value.trim() === "") {
        return;
    } 

    // like 
    const like = document.createElement("span");
    const likeIcon = document.createElement("i");
   
    like.classList.add("like");
    likeIcon.classList.add("material-icons");
    likeIcon.innerText = "favorite_border"
    like.appendChild(likeIcon)
   
       // item
    const item = document.createElement("span");
    item.classList.add("item")
    item.innerText = inputText.value
   
       // manage
    const manage = document.createElement("span");
    const checkIcon = document.createElement("i");
    const clearIcon = document.createElement("i");
   
    checkIcon.classList.add("material-icons", "check")
    clearIcon.classList.add("material-icons", "clear")
   
    checkIcon.innerText = "check"
    clearIcon.innerText = "clear"
   
    manage.classList.add("manage")
    manage.appendChild(checkIcon)
    manage.appendChild(clearIcon)
   
    const li = document.createElement("li")
   
    //event 
    like.addEventListener("click", (e)=> {
        const target = e.target;
        // like 버튼 클릭 삼항연산자
        const text = target.innerText === "favorite" ? "favorite_border " : "favorite";
        target.innerText = text;
    })
    // check
    checkIcon.addEventListener("click", (e)=> {
        const target = e.target.parentNode.parentNode;
        target.classList.add("done")
    })
    // clear
    clearIcon.addEventListener("click", (e)=> {
        const target = e.target.parentNode.parentNode;
        list.removeChild(target)
    })
   
    li.appendChild(like)
    li.appendChild(item)
    li.appendChild(manage)
    list.appendChild(li)

    inputText.value = ""
    inputText.focus()
}

inputText.addEventListener("keypress", e => {
    if (e.keyCode === 13){
        addItem()
    }
})


addBtn.addEventListener("click", addItem)

