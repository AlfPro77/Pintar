var mouseEvent="empty";
var last_position_off_x, last_position_off_y;

canvas=document.getElementById("MyCanvas");
color="red";
width_off_line=1;
ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mouse_down);
function my_mouse_down(e){
 color=document.getElementById("color").value ;
 width_off_line=document.getElementById("width_off_line").value ;
 mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove", my_mouse_move);
function my_mouse_move(e){
    current_position_off_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_off_mouse_y=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth=width_off_line;

        console.log("Last position of x and y coordinates = "); console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_off_x,last_position_off_y);

        console.log("Current position of x and y coordinates = "); console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_off_mouse_x,current_position_off_mouse_y);
        ctx.stroke();
    }
 last_position_off_x=current_position_off_mouse_x;
 last_position_off_y=current_position_off_mouse_y;


}
   canvas.addEventListener("mouseup",my_mouse_up);

   function my_mouse_up(e){
    mouseEvent="mouseUP";
   }
   canvas.addEventListener("mouseleave",my_mouse_leave);
   function my_mouse_leave(e){
    mouseEvent="mouseleave"
   }
   function clearArea(){
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
   }