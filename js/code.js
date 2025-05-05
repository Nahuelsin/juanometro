function myGlobal(){
  let slider = document.getElementById("juanometro");
  let output = document.getElementById("demo");
  output.innerHTML = slider.value;
  
}

slider.oninput = function() {
  output.innerHTML = this.value;
}


function adjustRange(){
      var screen_Width = window.innerWidth;

      if (screen_Width <= 768) {
        var range = document.getElementById("juanometro").value;
        console.log(range)
        range.style.range(newMin, newMax);
      }

}

