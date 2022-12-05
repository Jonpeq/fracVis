//Indicadores

  var paragraf = document.createElement("p");
  document.body.appendChild(paragraf);
  paragraf.innerHTML = "Construindo Frações";
  paragraf.style.fontSize = "30px";
  paragraf.style.width = "600px";
  paragraf.style.marginLeft = "100px";

//Inputs

  var div = document.createElement('div');
  document.body.appendChild(div);
  div.setAttribute("id", "fracao");
  div.style.width = "300px";
  div.style.marginLeft = "100px";
  div.style.backgroundColor = "#ffffff";
  
  var numer = document.createElement("INPUT");
  numer.setAttribute("type", "number");
  numer.setAttribute("value", "1");
  numer.setAttribute("id", "myNumerador");
  numer.setAttribute("onchange", "editar()");
  div.appendChild(numer);
  numer.style.width = "100px";
  numer.style.fontSize = "30px";
  numer.style.margin = "25px";
  numer.style.border = "none";
  numer.style.display = "block";
  numer.style.marginLeft = "auto";
  numer.style.marginRight = "auto";
  
  var bar = document.createElement("canvas");
  bar.setAttribute("id", "barra");
  bar.setAttribute("width", "250");
  bar.setAttribute("height", "30");
  div.appendChild(bar);
  var b = document.getElementById("barra");
  var barra = b.getContext("2d");
  barra.moveTo(0, 0);
  barra.lineTo(200, 0);
  barra.stroke();
  bar.style.marginLeft = "auto";
  bar.style.marginRight = "auto";
  
  var denom = document.createElement("INPUT");
  denom.setAttribute("type", "number");
  denom.setAttribute("value", "2");
  denom.setAttribute("id", "myDenominador");
  denom.setAttribute("onchange", "editar()");
  div.appendChild(denom);
  denom.style.width = "100px";
  denom.style.fontSize = "30px";
  denom.style.display = "block";
  denom.style.marginLeft = "auto";
  denom.style.marginRight = "auto";
  denom.style.border = "none";




// Vis Dinamico Reta

function editarReta(){

  if(document.getElementById("visReta")){
    const element = document.getElementById("visReta");
    element.remove();
  }
  
  var valorNum = document.getElementById("myNumerador").value;
  var num = parseInt(valorNum);
  var valorDen = document.getElementById("myDenominador").value;
  var den = parseInt(valorDen);
  
  var razao = Math.floor((num-1)/den);
  console.log(razao);
  
  var cReta = document.createElement("canvas");
  cReta.setAttribute("id", "visReta");
  cReta.setAttribute("width", "800");
  cReta.setAttribute("height", "150");
  document.body.appendChild(cReta);
  var retas = cReta.getContext("2d");
  
  // Denominador - Tamanho da fração
  
  for (let i = 0; i < den*(razao+1); i++) {
    retas.beginPath();
    retas.fillRect(100+i*((600/(razao+1))/den), 50, ((600/(razao+1))/den)-3, 20);
    retas.fillStyle = "#cccccc"
  }
  
  // Numerador - Quantidade de frações
  
  for (let i = 0; i < num; i++) {
    retas.beginPath();
    retas.fillStyle = "#0088bb";
    retas.fillRect(100+i*((600/(razao+1))/den), 50, ((600/(razao+1))/den)-3, 20);  
  }
  
  // Idicação das Unidades
  
  for (let i = 0; i < (razao+2); i++) {
    retas.beginPath();
    retas.fillRect(100+i*(600/(razao+1)), 37, 1, 46);
    retas.fillStyle = "#555555";
  }
}

// Vis Dinamico Pizza

function editarPizza(){

  if(document.getElementById("visPizza")){
    const element = document.getElementById("visPizza");
    element.remove();
  }
  
  var valorNum = document.getElementById("myNumerador").value;
  var num = parseInt(valorNum);
  var valorDen = document.getElementById("myDenominador").value;
  var den = parseInt(valorDen);
  
  var razao = Math.floor((num-1)/den);
  
  var c = document.createElement("canvas");
  c.setAttribute("id", "visPizza");
  c.setAttribute("width", "1200");
  c.setAttribute("height", "200");
  document.body.appendChild(c);
  
  var unid = 2*Math.PI;
  var eX = 200;
  var eY = 100;
  var rai = 50;
  
  for (let i = 0; i < (razao+1); i++) {
  
    // Denominador - Tamanho da fração
    
    for (let j = 0; j < den; j++) {

      var inArc = j*(unid/den);
      var fimArc = (1+j)*(unid/den);
    
      var ctx = c.getContext("2d");
    
      ctx.fillStyle = '#cccccc';
      ctx.strokeStyle = "#ffffff";
    
      ctx.beginPath();
    
      ctx.lineWidth = 2;
    
      ctx.arc(eX, eY, rai, inArc, fimArc);
    
      ctx.lineTo(eX, eY);
      ctx.lineTo(eX+50*Math.cos(inArc), eY+50*Math.sin(inArc));
    
      ctx.fill();
      ctx.stroke();
    }    
    
    // Numerador - Quantidade de frações razao < 1
    
    if (razao < 1){
      for (let k = 0; k < num ; k++) {

        var inArc = k*(unid/den);
        var fimArc = (1+k)*(unid/den);
    
        var ctx = c.getContext("2d");
    
        ctx.fillStyle = '#FFAA00';
        ctx.strokeStyle = "#ffffff";
    
        ctx.beginPath();
    
        ctx.lineWidth = 2;
    
        ctx.arc(eX, eY, rai, inArc, fimArc);
    
        ctx.lineTo(eX, eY);
        ctx.lineTo(eX+50*Math.cos(inArc), eY+50*Math.sin(inArc));
    
        ctx.fill();
        ctx.stroke();
      }
    } else if (i < razao){
    
    // Numerador - Quantidade de frações razao > 1
    
      for (let k = 0; k < den; k++) {

        var inArc = k*(unid/den);
        var fimArc = (1+k)*(unid/den);
    
        var ctx = c.getContext("2d");
    
        ctx.fillStyle = '#FFAA00';
        ctx.strokeStyle = "#ffffff";
    
        ctx.beginPath();
    
        ctx.lineWidth = 2;
    
        ctx.arc(eX, eY, rai, inArc, fimArc);
    
        ctx.lineTo(eX, eY);
        ctx.lineTo(eX+50*Math.cos(inArc), eY+50*Math.sin(inArc));
    
        ctx.fill();
        ctx.stroke();  
      }
    }
    if ( razao >= 1 && razao-i == 0) {
    eX = eX - 120;
    var resto = num%den;
    if (resto == 0) { resto = den; }
      for (let k = 0; k < (resto) ; k++) {

        var inArc = k*(unid/den);
        var fimArc = (1+k)*(unid/den);
    
        var ctx = c.getContext("2d");
    
        ctx.fillStyle = '#FFAA00';
        ctx.strokeStyle = "#ffffff";
    
        ctx.beginPath();
    
        ctx.lineWidth = 2;
    
        ctx.arc(eX+120, eY, rai, inArc, fimArc);
    
        ctx.lineTo(eX+120, eY);
        ctx.lineTo(eX+120+50*Math.cos(inArc), eY+50*Math.sin(inArc));
    
        ctx.fill();
        ctx.stroke();
      }
    }
    eX = eX+120;
  }
}

// chamada das funções

function editar(){
   editarReta();
   editarPizza();
}
