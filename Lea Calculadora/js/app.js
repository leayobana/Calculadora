var calculadora = {
	addNum: function(num){
		var pantalla=$("#display").html();
		if (pantalla==null || pantalla=="0") {
			$("#display").html(num);
		}else{
			if(pantalla.length<8)
				$("#display").html(pantalla+num);
		}
	},

	clear: function(){
		$("#display").html("0");
	},

	addPoint: function(){
		var pantalla=$("#display").html();
		if (pantalla.indexOf(".")== -1) {
			$("#display").html(pantalla+".");
		}
	},

	addSign: function(){
		var pantalla=$("#display").html();
		if (pantalla!="0") {
			if (pantalla.indexOf("-") == -1) {
			$("#display").html("-"+pantalla);
			}else{
			$("#display").html(pantalla.substring(1,pantalla.length));
			}
		}
	},

	numDigitos:function(){
		var pantalla=$("#display").html();

		if (pantalla.length>8) {
			console.log("bloquear display");
			$("display").html(pantalla.substring (0,8));
		}
	},

	operacion: function(){
		$("#display").html("0");
	},

	sumar: function(num1, num2){
		var result=eval(num1)+eval(num2);
		console.log(result);
		$("#display").html(result);
	},
	restar: function(num1,num2){
		var result=eval(num1)-eval(num2);
		console.log(result);
		$("#display").html(result);
	},
	multiplicar: function(num1,num2){
		var result=eval(num1)*eval(num2);
		console.log(result);
		$("#display").html(result);
	},
	dividir: function(num1,num2){
		var result=eval(num1) / eval(num2);
		console.log(result);
		$("#display").html(result);
	},
	raizfun: function(num){
		var resul=Math.sqrt(num);
		var size=resul.toString().length;
		if(size>8){
			$('#display').html(resul.toFixed(2));
		}else{
			$('#display').html(resul);
		}
	},

	init: function(){
		$(".tecla").click(function(){
			var alt=$(this).attr('alt');
			if (alt!="punto" && alt!="signo" && alt!="raiz" && alt!="dividido" && alt!="por" && alt!="menos" && alt!="igual" && alt!="mas") {
				calculadora.addNum(alt);
				calculadora.numDigitos();
			}
		});

		$('#on').click(function(){
			calculadora.clear();
		});
		$('#punto').click(function(){
			calculadora.addPoint();
		});
		$('#sign').click(function(){
			calculadora.addSign();
		});
		var n1;
		var op="";

		$('#mas').click(function(){
			n1=$('#display').html();
			calculadora.operacion();
			op="suma";
		});
		$('#menos').click(function(){
			n1=$('#display').html();
			calculadora.operacion();
			op="resta";
		});
		$('#por').click(function(){
			n1=$('#display').html();
			calculadora.operacion();
			op="multiplicacion";
		});
		$('#dividido').click(function(){
			n1=$('#display').html();
			calculadora.operacion();
			op="division";
		});
		$('#raiz').click(function(){
			n1=$('#display').html();
			var valor=$('#display').html();
			if(valor!="0"){
				if(valor.indexOf("RAIZ") == -1){
					$('#display').html(valor);
				}else{
					$('#display').html(valor.substring(5,valor.length-1));
				}
			}
			op="raiz";
		});

		$('#igual').click(function(){
			var n2=$('#display').html();
			console.log(n1+" "+n2);
			if (op=="suma") {
				calculadora.sumar(n1,n2);
			}
			if (op=="resta") {
				calculadora.restar(n1,n2);
			}
			if (op=="multiplicacion") {
				calculadora.multiplicar(n1,n2);
			}
			if (op=="division") {
				calculadora.dividir(n1,n2);
			}
			if (op=="raiz") {
				calculadora.raizfun(n1);
			}
		});
	
	}
};
calculadora.init();