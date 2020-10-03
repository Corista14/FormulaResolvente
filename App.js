function calculate() {
    var a = parseFloat(document.querySelector("#aValueInput").value);
    var b = parseFloat(document.querySelector("#bValueInput").value);
    var c = parseFloat(document.querySelector("#cValueInput").value);
    var solution = document.querySelector("#solution");
    var x1,x2;
    let binómio_discriminante = b*b - 4*a*c;
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        solution.style.fontSize = "24px";
        solution.style.color = "#c55454";
        solution.innerHTML = 'Insere corretamente os valores de a, b e c.';
    }

    if(binómio_discriminante > 0) {
        x1 = (-b + Math.sqrt(binómio_discriminante)) / (2*a); //Soma o 'b' negativo com a raiz quadrada do binómio
        x2 = (-b - Math.sqrt(binómio_discriminante)) / (2*a); //Subtrai o 'b' negativo com a raiz quadrada do binómio

        getSolutionStyle(solution, "50px", "#fff")

        //Altera o resultado
        solution.innerHTML = `{${x1.toFixed(2).toString()}; ${x2.toFixed(2).toString()}}`
    
    } else if (binómio_discriminante < 0) {

        getSolutionStyle(solution, "18px", "#c55454")
        solution.innerHTML = 'Como o binómio discriminante deu um valor negativo a equação torna-se impossível, pois não se podem calcular raízes negativas.'
    
    } else if (binómio_discriminante == 0) {
        x1 = x2 = -b / (2 * a)

        getSolutionStyle(solution, "50px", "#fff")

        solution.innerHTML = `{${x1.toFixed(2).toString()}}`
    }
}

function getSolutionStyle(sol1, fontSize, fontColor) {
    solution = sol1
    solution.style.fontSize = `${fontSize}`
    solution.style.color = `${fontColor}`
}
