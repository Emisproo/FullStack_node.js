let valor;
    
function calcularEstudiante()
{
    let cantidadTicket = document.getElementById("cantidad").value;
    valor = (200-((200*80)/100))*cantidadTicket;
    return valor;
                        
}
function calcularTrainee()
{
    let cantidadTicket = document.getElementById("cantidad").value;
    valor = (200-((200*50)/100))*cantidadTicket;
    return valor;
}
function calcularJunior()
{
    let cantidadTicket = document.getElementById("cantidad").value;
    valor = (200-((200*20)/100))*cantidadTicket;
    return valor;
}

function calcularCostoFinal()
{ 
    let cat = document.getElementById("categoria").value;
    switch (cat)
    {
        case 'Estudiante':  document.getElementById("costResult").innerText = calcularEstudiante();
        break;
        case 'Trainee': document.getElementById("costResult").innerText = calcularTrainee();
        break;
        case 'Junior': document.getElementById("costResult").innerText = calcularJunior();
        break;
        default: alert('opcion no válida');
        break;

    }                      
}
