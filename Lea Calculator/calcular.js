function concatenar(ope){            

      var cad = document.getElementById("result").value;
      var car = cad.charAt(cad.length-1);  
      
      if(ope=='+'|| ope=='-'|| ope=='*' || ope=='/'){
        if(car!='+'&& car!='-'&& car!='*'&& car!='/') document.getElementById("result").value = document.getElementById("result").value + ope;        
      }
      else document.getElementById("result").value = document.getElementById("result").value + ope;       

  }

  function igual(ig){  

    var resultado = document.getElementById("result").value;    

    var cuad="";
    for(var i=resultado.length;i>=0;i--)
    {
        var car = resultado.charAt(i);        

        if(car=='^'){         
         var ban=0;
         var cont =0, cont2=0;
          for(var j=i-1;j>=0 && ban==0;j--)
          {            
            car = resultado.charAt(j);            
            if(car=='('){
              cont = cont+1;
            }
            if(car==')')
            {
              cont2 = cont2+1;
            }
            if(cont==cont2) ban=1;

            cuad = car+cuad;           
          }
        }
    }

    for(var i=0; i<resultado.length;i++){
      var car = resultado.charAt(i); 
      if(car=='v'){ 
        resultado = resultado.replace('v','Math.sqrt');
      }
      if(car=='S'){
        resultado = resultado.replace('Sin','Math.sin');
      }
      if(car=='C'){
        resultado = resultado.replace('Cos','Math.cos');
      }
      if(car=='T'){
        resultado = resultado.replace('Tan','Math.tan');
      }
      if(car=='^'){
        resultado = resultado.replace(cuad,'Math.pow(');
          cuad=cuad+',2)';
        resultado = resultado.replace('^2',cuad);
      }
    }
    
    if(ig==1) document.getElementById("result").value = eval(resultado); 
   
    return resultado;   
 }

  function graficar(escala){
        if(escala==0) escala =1;
        document.getElementById("lblrango").innerHTML = escala;

        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");                  
                          
        c.width = c.width; //limpiar canvas         

        ctx.fillStyle = "#FF0000";           
        ctx.moveTo(0,100);
        ctx.lineTo(400,100);
        ctx.stroke();
       
        ctx.moveTo(200,0);
        ctx.lineTo(200,200);
        ctx.stroke();

        ctx.translate(200,100);
        ctx.fillStyle = "#FF0000"; 

        var cadena=igual(0);// =  document.getElementById("result").value;//'Math.sin(X)'

        var res; 
        var y1=0, y2=0, x1=0, x2=0;

        ctx.font = "bold 12px sans-serif";
        //dibujar lineas horizontales (unidades)
        var cont = -5;
        for(var i=-200; i<200; i+=40)
        {
          ctx.moveTo(i,0); //inicial
          ctx.lineTo(i,7); //final
          ctx.fillText(cont*escala,i-5,20);
          ctx.stroke();
          cont=cont+1;

        }

        //dibujar lineas verticales hacia arriba(unidades)
        var cy=0;
        for(var y=0; y>-100; y-=40)
        {
          ctx.moveTo(0,y); //inicial
          ctx.lineTo(7,y); //final
          ctx.fillText(cy*escala,10,y);
          ctx.stroke();
          cy=cy+1;
        }  

        //dibujar lineas verticales hacia abajo (unidades)
        var cy2=0;
        for(var y=0; y<100; y+=40)
        {
          ctx.moveTo(0,y); //inicial
          ctx.lineTo(7,y); //final
          ctx.fillText(cy2*escala,10,y);
          ctx.stroke();
          cy2=cy2+1;
        }    

        //dibujar funcion:        
        for(var i=-200; i<200; i+=0.25){                    
            res = cadena.replace("X",i);                             
            y1 = eval(res); 

            x1=i;

            x2 = i+0.25;          
            res = cadena.replace("X",x2);         
            y2 = eval(res);  
            
            var d = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));                        
            if(d<10){            
             ctx.moveTo(x1*(40/escala), -y1*(40/escala)); //inicial
             ctx.lineTo(x2*(40/escala), -y2*(40/escala)); //final
             ctx.stroke();                        
            }                                                
        } 
        
        ctx.translate(-200,-100);
        
       }

       function reiniciar(){        
        document.getElementById("result").value ="";
        }