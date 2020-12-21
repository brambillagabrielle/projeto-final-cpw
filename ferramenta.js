function binario()
{
    var v7 = document.getElementById("valor7");
    var v6 = document.getElementById("valor6");
    var v5 = document.getElementById("valor5");
    var v4 = document.getElementById("valor4");
    var v3 = document.getElementById("valor3");
    var v2 = document.getElementById("valor2");
    var v1 = document.getElementById("valor1");
    var v0 = document.getElementById("valor0");
    var decimal = 0;
    var vetor = new Array(v0,v1,v2,v3,v4,v5,v6,v7);
    var vals = new Array(8);
    vals = [0,0,0,0,0,0,0,0];
    for (var i = vetor.length - 1; i >= 0; i--)
    {
        if (vetor[i].checked == true)
        {
            vetor[i] = 1;
            vals[i] = Math.pow(2, i);
        }
        else 
            vetor[i] = 0;
    }
    vals.reverse();
    var calc = " ";
    for (var i = 0; i < vals.length; i++)
    {
        if (i == vals.length - 1)
            calc += vals[i] + " = ";
        else
            calc += vals[i] + " + ";
        
        decimal = decimal + vals[i];
    }
    document.getElementById("calc").innerHTML = calc + "<br>Decimal: " + decimal;
}