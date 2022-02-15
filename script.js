//funcion
function gen_table(){

    document.getElementById("tab").innerHTML="";

    let numero1= parseFloat(document.getElementById("capital").value);
    let numero2= parseFloat(document.getElementById("cuotas").value);
    let numero3= parseFloat(document.getElementById("intereses").value);

    if (numero1 > 0){
        for(i=1; i <= numero2; i++){
            ca= numero1 / numero2;
            d1= ca.toFixed(2);
            i2= ((numero1*numero3)/100)/numero2;
            d2= i2.toFixed(2);
            r= ca+i2;
            d3= r.toFixed(2);
            document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
                `<tr>
                    <td>${i}</td>
                    <td>${d1}</td>
                    <td>${d2}</td>
                    <td>${d3}</td>
                </tr>`  
        }

        n1= numero1.toFixed(2);
        t_i= i2*numero2;
        d4= t_i.toFixed(2);
        t_p= r*numero2;
        d5= t_p.toFixed (2);
        document.getElementById("t1").innerHTML=n1;
        document.getElementById("t2").innerHTML=d4;
        document.getElementById("t3").innerHTML=d5;

    }else{
        alert("Falta ingresar un valor");
    }
}