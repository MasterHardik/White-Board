document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    var ctx = canvas.getContext('2d');
    var drawing = false;
  
    // Getting changed value of color and size
    function getUpdate() {
      var color_name = document.getElementById('C').value;
      var size = document.getElementById('S').value;
      return {
        color_name,
        size
      };
    }
  
    function startDraw() {
      drawing = true;
    }
  
    function stopDraw() {
      drawing = false;
      ctx.beginPath();
    }
  
    function Draw(e) {
        if (!drawing) return;
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const { color_name, size } = getUpdate();
  ctx.strokeStyle = color_name;
  ctx.lineWidth = size;
  ctx.lineCap = "round";
  ctx.lineTo(x, y);
  ctx.moveTo(x, y);
  ctx.stroke();
      }
      
  // eraser = () => {
  //   color_name = "#ffffff";
  //       ctx.strokeStyle = color_name; 
  //     }
  
    
    var colorInput = document.getElementById('C');
    var sizeInput = document.getElementById('S');
    
    colorInput.addEventListener('change', function() {
        var update = getUpdate();
        ctx.strokeStyle = update.color_name;
    });
    
    sizeInput.addEventListener('change', function() {
        var update = getUpdate();
        ctx.lineWidth = update.size;
      });
      
      canvas.addEventListener("mousedown", startDraw);
      canvas.addEventListener("mouseup", stopDraw);
      canvas.addEventListener("mousemove", Draw);
});


function clearAll() {
    window.location.reload(true);
}

const btn = document.getElementById("btn");
let theme = true;
boardTheme = () => {
  if (theme) {
    canvas.style.backgroundColor = "#1f1f1f";
    btn.style.backgroundColor = "white";
    btn.style.color = "#1f1f1f";
    theme = !theme;
  } else {
    canvas.style.backgroundColor = "white";
    btn.style.backgroundColor = "#1f1f1f";
    btn.style.color = "white";
    theme = !theme;
  }
}
 
// var canvas = document.getElementById("canvas");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

//-->> above JavaScript code is not working in your version of HTML,
//  it is possible that you are trying to access the canvas element 
// before it is available in the DOM.To ensure that the code runs after
//  the HTML document is fully loaded, you can wrap it inside the DOMContentLoaded event listener

//-->>By wrapping the code inside the DOMContentLoaded event listener, 
// it ensures that the JavaScript code executes only after the HTML document
//  has finished loading.This way, the canvas element should be available in
//  the DOM, and the width and height can be set accordingly.

