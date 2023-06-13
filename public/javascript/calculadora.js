//Cree e invoque la función flecha funcionPredeterminada.
///Dentro de la función funcionPredeterminada obtenga la referencia al elemento HTML con el id formulario.

let funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', (evento)=>{
        evento.preventDefault();
        let valorPorHora = document.getElementById('valorPorHora').value;
        let interfazHoras = document.getElementById('interfazHoras').value;
        let htmlHoras = document.getElementById('htmlHoras').value;
        let cssHoras = document.getElementById('cssHoras').value;
        let logicaHoras = document.getElementById('logicaHoras').value;
        let apiExternaHoras = document.getElementById('apiExterna').value;
        let funcionalidadHoras = document.getElementById('funcionalidadExtra').value; 
        let pruebasHoras = document.getElementById('prubasErrores').value; 

        let resultado = (valorPorHora * interfazHoras) + (valorPorHora * htmlHoras) + (valorPorHora * cssHoras) + (valorPorHora * logicaHoras) + (valorPorHora * apiExternaHoras) + (valorPorHora * funcionalidadHoras) + (valorPorHora * pruebasHoras);
        document.getElementById('valorTotal').value = resultado;
    })
}

funcionPredeterminada();