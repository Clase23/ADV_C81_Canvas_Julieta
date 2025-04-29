var mouseEvent = "empty";

canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "red"; 
width_of_line = 3;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(0,0);
        ctx.lineTo(800,600)
        ctx.stroke();
    }
}

canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e){

    }