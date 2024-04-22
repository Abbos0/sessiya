let  Text = document.querySelector(".text")
const Bold = () =>{
    Text.style.fontWeight = "900"
}


const Italic = () =>{
    Text.style.fontStyle = "italic"
}


const Underline = () =>{
    Text.style.textDecoration = "underline"
}


let size = 16
const Plus = () =>{
    size++;
    Text.style.fontSize = `${size}px`
}


const Minus = () =>{
    size--;
    Text.style.fontSize = `${size}px`
}


const Reset = () =>{
    Text.style.fontWeight = "100"
    Text.style.fontStyle = "normal"
    Text.style.textDecoration = "none"
    Text.style.fontSize = `${16}px`
    // Text.style.fontSize = `${size}px`
}