document.addEventListener('DOMContentLoaded', function() {
    const zoomControl = document.getElementById('zoomControl');
	
    // Atualiza o estado do checkbox conforme o zoom inicial
    zoomControl.checked = document.body.style.zoom === '1.0';

    zoomControl.addEventListener('change', function() {
        if (this.checked) {
            document.body.style.zoom = '1.0';
        } else {
            document.body.style.zoom = '0.34';
        }
    });
	
});

/*Download */
/*
 
 document.addEventListener("DOMContentLoaded", function() {
    // Adicionando o link da biblioteca Font Awesome
    var link = document.createElement('link');
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Criando o banner
    var banner = document.createElement("div");
    banner.style.position = "fixed";
    banner.style.bottom = "20px";
    banner.style.left = "20px";
    banner.style.width = "800px"
    banner.style.padding = "20px";
	banner.style.fontSize = "64px";
    banner.style.backgroundColor = "#808080";
    banner.style.boxShadow = "0 -2px 4px rgba(0, 0, 0, 0.1)";
    banner.style.zIndex = "9999";
    banner.style.display = "flex";
    banner.style.flexDirection = "column";
    banner.style.alignItems = "center";
	banner.style.borderRadius = "30px"; // Bordas arredondadas para um visual mais quadrado
    banner.style.margin = "20px"; //

    // Mensagem do banner
    var mensagem = document.createElement("div");
    mensagem.innerHTML = '<p><i class="fas fa-exclamation-triangle" style="color: yellow; margin-right: 10px;"></i>Este Dashboard4Skills esta desatualizado.</p><p>Update, deverá ser feito até 01/ABRIL/2025, já consta com:</p><p><li>Ajuste de cores</li><li>Ajustes de layout</li><li>Adequação de links</li></p> <p>REMOVA o(s) arquivo(s) antigo(s) e mantenha APENAS este novo.</p>';

    // Botão de download
    var button = document.createElement("button");
    button.innerHTML = '<i class="fas fa-download" style="margin-right: 10px;"></i>Dashboard4Skills.zip';
 */  /* button.style.padding = "20px 20px";
    button.style.fontSize = "64px"; 
    button.style.backgroundColor = "Green"; */
    //button.style.color = "#000000";
    /*button.style.border = "none";
    button.style.borderRadius = "25px";
	button.style.marginRight = "50px"; 
    button.style.cursor = "pointer"; */
	/*

    button.onclick = function() {
        var link = document.createElement("a");
        link.href = "https://apologialinux.github.io/Dashboard4Skills.zip";
        link.download = "Dashboard4Skills";
        link.click();
    };

    // Adicionando a mensagem e o botão ao banner
    banner.appendChild(mensagem);
    banner.appendChild(button);

    // Adicionando o banner ao corpo do documento
    document.body.appendChild(banner);
});
*/
/* Fim Download */
// CALCULADORA
	function calcularDiferenca() {
    let dataInicial = document.getElementById("dataInicial").value;
    let horaInicial = document.getElementById("horaInicial").value;
    let dataFinal = document.getElementById("dataFinal").value;
    let horaFinal = document.getElementById("horaFinal").value;
    
	
    
    let inicio = new Date(`${dataInicial}T${horaInicial}`);
    let fim = new Date(`${dataFinal}T${horaFinal}`);
		let anoI = inicio.getFullYear();
    	let DayI = inicio.getDate();
		let MesI = inicio.getMonth() + 1;
		let DayF = fim.getDate();
		let MesF = fim.getMonth() + 1;
		let anoF = fim.getFullYear();
		
    if (isNaN(inicio) || isNaN(fim)) {
        //document.getElementById("resultado").innerText = "Dados incompletos!";
		//alert("Dados incompletos!");
		document.getElementById("resultado").innerHTML = "Dados incompletos!";
        return;
    }
    
    let diferencaMs = fim - inicio;
    if (diferencaMs < 0) {
        //document.getElementById("resultado").innerText = "A data final deve ser maior que a data inicial.";
		//alert("A data final deve ser maior que a data inicial.");
		document.getElementById("resultado").innerHTML = "A data final deve ser maior que a data inicial.";
        return;
    }
    
    let totalMinutos = Math.floor(diferencaMs / (1000 * 60));
    let horas = Math.floor(totalMinutos / 60);
    let minutos = totalMinutos % 60;
		if ( horas < 10 ) {
		horas = ('0' + horas).slice(-2);
	} else {
		horas = horas + '';
	}
	if ( minutos < 10) { // or min = min < 10 ? '0' + min : min; 
		minutos = ('0' + minutos).slice(-2);
	} else {
		minutos = minutos + '';
	}
    
    let resultado = `${horas}:${minutos}`;

	if ( DayI < 10) { // or min = min < 10 ? '0' + min : min; 
		DayI = ('0' + DayI).slice(-2);
	} else {
		DayI = DayI + '';
	}
	if ( MesI < 10) { // or min = min < 10 ? '0' + min : min; 
		MesI = ('0' + MesI).slice(-2);
	}
	if ( DayF < 10) { // or min = min < 10 ? '0' + min : min; 
		DayF = ('0' + DayF).slice(-2);
	} else {
		DayF = DayF + '';
	}
	if ( MesF < 10) { // or min = min < 10 ? '0' + min : min; 
		MesF = ('0' + MesF).slice(-2);
	}
	if (dataInicial == dataFinal) {
	document.getElementById("resultado").innerText = "Início: " + horaInicial + "\nFim: " + horaFinal + "\nTotal: " + resultado;
		document.getElementById("botaoCopy2").style.display = 'block';
	} else {
	document.getElementById("resultado").innerText = "Início: " + DayI + "/" + MesI + "/" + anoI + " às " + horaInicial + "\nFim: " + DayF + "/" + MesF + "/" + anoF + " às " + horaFinal + "\nTotal: " + resultado;
		document.getElementById("botaoCopy2").style.display = 'block';

	}
}
function copiarResultado2() {
    let resultado = document.getElementById("resultado").innerText;
    navigator.clipboard.writeText(resultado).then(() => {
        //document.getElementById("resultado").innerText = "Copiado!";
		document.getElementById("botaoCopy2").style.display = 'none';
		alert("Resultado copiado com sucesso!");
	    
    });

}
function definirDataAtual() {
    let hoje = new Date().toISOString().split('T')[0];
    document.getElementById("dataInicial").value = hoje;
    document.getElementById("dataFinal").value = hoje;
    //document.getElementById("botaoCopy2").style.display = 'none';
}

	// FIM CALCULADORA


/*Take Action */
function myFunction() {

	const d = new Date();
	let Dhor = d.getHours();
	let Dmin = d.getMinutes();
	let Day = d.getDate();
	let Mes = d.getMonth() + 1;
	 
  // Get the value of the input field with id="numb"
  <!-- let y = document.getElementById("numb2").value; -->
  let x = document.getElementById("numb").value;
  let N = document.getElementById("name").value;
  x = x.replace(/\s/g, '');
  // If x is Not a Number or less than one or greater than 10
	let text;
	let w
	let SelecionaAG = document.getElementById("AGencia").checked;
	let SelecionaMA = document.getElementById("MAssiva").checked;
  
	if ( Dhor < 10 ) {
		Dhor = ('0' + Dhor).slice(-2);
	} else {
		Dhor = Dhor + '';
	}
	if ( Dmin < 10) { // or min = min < 10 ? '0' + min : min; 
		Dmin = ('0' + Dmin).slice(-2);
	} else {
		Dmin = Dmin + '';
	}
	if ( Day < 10) { // or min = min < 10 ? '0' + min : min; 
		Day = ('0' + Day).slice(-2);
	} else {
		Day = Day + '';
	}
	
	if ( Mes < 10) { // or min = min < 10 ? '0' + min : min; 
		Mes = ('0' + Mes).slice(-2);
	} 
	
	if ( SelecionaAG === true ) {
		w = " [AG] - ";
	} else if ( SelecionaMA === true ) {
		w = " [MASSIVA] - ";
	} else {
		w = " - ";
		
	}	
	
	if ( x.length == 7 && ( N != "" ) ) {
    text = "Incidente " + x + w + N;
	document.getElementById("demo").innerHTML = Day + "/" + Mes + "/" + d.getFullYear() + " " + Dhor + ":" + Dmin +  " - " +  text;
	document.getElementById("botao2").style.display = 'block';
  } else {
	document.getElementById("demo").innerHTML = "Dados incompletos!";
	document.getElementById("botao2").style.display = 'none';
	 
  }
	
  
}

function corbotao(){
	document.getElementById("myBtn").style.background="black";
	document.getElementById("myBtn").style.color="white";
}
function myCopy() {
      const result = document.getElementById('demo');
      navigator.clipboard.writeText(result.innerText);
	  demo.innerHTML = 'COPIADO: ' + document.getElementById('numb').value; 
	  document.getElementById('numb').value='';
	  desmarcar();
	  document.getElementById("botao2").style.display = 'none';
}


function myCopy2() {
      const result = document.getElementById('outputData');
      navigator.clipboard.writeText(result.value);
	  document.getElementById("botao03").style.display = 'none';
	  alert("Resultado copiado com sucesso!");
}

function zerar() {
	document.getElementById('numb').value='';
}

function desmarcar() {
  document.getElementById("AGencia").checked = false;
  document.getElementById("MAssiva").checked = false;
}


/*Fim Take Action*/
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
			
    const data = {
	//CONSULTA DOS BINS
   }

    function search() {
      const inputElement = document.getElementById('searchInput');
      const result = document.getElementById('searchResult');
      const copyButton = document.getElementById('copyButton');
      let resultsFound = false;

      // Limpar resultados anteriores
      result.innerHTML = '';

      // Extrair todos os números da entrada atual
      const inputValue = inputElement.value;
      const numbers = inputValue.match(/\d+/g);

      if (numbers && numbers.length > 0) {
        numbers.forEach(number => {
          if (data[number]) {
            resultsFound = true;
            const div = document.createElement('div');
            div.classList.add('result');
            div.textContent = data[number];
            result.appendChild(div);
          }
        });
      }

      copyButton.style.display = resultsFound ? 'block' : 'none';
    }

    function copyResults() {
      const result = document.getElementById('searchResult');
      navigator.clipboard.writeText(result.innerText);
    }
	
		function sendMail() {
			var link = "mailto:Daniel Ramos Santos EXT <T06035@bergs.br>; Denis Pereira EXT <Denis_Pereira_EXT@banrisul.com.br>; Higor Anhaia EXT <Higor_Anhaia_EXT@banrisul.com.br>; Hiuri Anhaia EXT <T07512@bergs.br>; Jonathan Rocha EXT <T06361@bergs.br>; Lucas Berneira EXT <T06665@bergs.br>; Luis Silva EXT <T03252@bergs.br>; Pedro Oliveira EXT <T06385@bergs.br>; Renan Tavares EXT <T07264@bergs.br>; Rubens Godoi EXT <T07672@bergs.br>; Sergio Filho EXT <T06505@bergs.br>; Wagner Souza Silva EXT <t06215@bergs.br>; Rodrigo Teixeira EXT <T07230@bergs.br>"
             + "?cc=Cesar Olaves EXT <cesar_olaves_ext@banrisul.com.br>"
             + "&subject=" + encodeURIComponent("Passagem de Turno Payware – Turno Noite – XXXX/02/2024")
             + "&body=" + encodeURIComponent("Bom dia a todos! \n\nPDM:\nNada a relatar\n\nPENDÊNCIAS e ORIENTAÇÕES:\nNada a relatar\n\nOcorreram os seguintes INCIDENTES e ALERTAS:\n\nIncidentes PAYWARE\nNada a relatar\n\nIncidentes VERO\nNada a relatar\n\nAlertas PAYWARE\nNada a relatar\n\nAlertas VERO\nNada a relatar \n\n\n\At.te: \nLuís Fernando Adão\nTécnico de Monitoração N2B - Ilha Service\nA Serviço do BANRISUL\n(51) 3215 2345 \nE-mail: logisticati_monitoracao@banrisul.com.br")
			;

			window.location.href = link;
			}

			function REF() { 
			document.getElementById("tudoP").style.display = "block";
				document.getElementById('aut01').src += '';
				document.getElementById('band01').src += '';
				document.getElementById('master01').src += '';
				document.getElementById('visa01').src += '';
				document.getElementById('elo01').src += '';
				document.getElementById('banricom01').src += '';
				document.getElementById('verdeca01').src += '';
				document.getElementById('banric01').src += '';
				document.getElementById('caba01').src += '';
				document.getElementById('bo01').src += '';
				document.getElementById('bp01').src += '';
				document.getElementById('px01').src += '';
				document.getElementById('vrben01').src += '';
				document.getElementById('cabv01').src += '';
				document.getElementById('sodex01').src += '';
				document.getElementById('alel01').src += '';
				document.getElementById('tick01').src += '';
				document.getElementById('greencar01').src += '';
				document.getElementById('senf01').src += '';
				document.getElementById('tcp02').src += '';
				document.getElementById('conduc02').src += '';
				document.getElementById('payw02').src += '';
				document.getElementById('total02').src += '';			
			}
		   
		    function PP1() {
			var tag2=document.getElementById("clicado50");
			tag2.style.background="#6495ED";
			tag2.style.color="white";
			/* window.location.href='#cerquilha'; */
			}
			
			function buttonPYW() {
				document.getElementById('divbutton2').style.display='block';
			}
			
			function PP2() {
			var tag2=document.getElementById("clicado50");
			tag2.style.background="black";
			}
			
			function PP3() {
			document.getElementById('divbutton2').style.display='none';
			}
			
            function FP1() {
			var x = document.getElementById('P1');
			var tag=document.getElementById("clicado1");
			document.getElementById('master01').src += '';
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('P01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#DAA520";
			tag.style.color="white";
			PP1();
			} else {
				x.style.display = 'none';
				document.getElementById('P01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				PP2();			
					}
			}
			
			function FP2() {
			var y = document.getElementById('P2');
			var tag=document.getElementById("clicado2");
			document.getElementById('visa01').src += '';		

			if (y.style.display === 'none') {
			y.style.display = 'block';
			document.getElementById('P02').style.display='block'; <!--  Gráfico -->
			tag.style.background="#DAA520";
			tag.style.color="white";
			PP1();
			} else {
				y.style.display = 'none';
				document.getElementById('P02').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				PP2();
					}
			}
			
			function FP3() {
			var z = document.getElementById('P3');
			var tag=document.getElementById("clicado3");
			document.getElementById('elo01').src += '';
			if (z.style.display === 'none') {
			z.style.display = 'block';
			document.getElementById('P03').style.display='block'; <!--  Gráfico -->
			tag.style.background="#DAA520";
			tag.style.color="white";
			PP1();
			} else {
				z.style.display = 'none';
				document.getElementById('P03').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				PP2();
					}

			}
						
			function Fautband1() {
			var z = document.getElementById('autband1');
			var tag=document.getElementById("clicado4");
			document.getElementById('aut01').src += '';
			document.getElementById('band01').src += '';
			if (z.style.display === 'none') {
			z.style.display = 'block';
			document.getElementById('autband3').style.display='block';
			document.getElementById('autband03').style.display='block';
			document.getElementById('autband01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#808080";
			tag.style.color="white";
			PP1();
			} else {
				z.style.display = 'none';
				document.getElementById('autband01').style.display='none'; <!--  Gráfico -->
				document.getElementById('autband3').style.display='none';
				document.getElementById('autband03').style.display='none';
				tag.style.background="black";
				PP2();
				
					}
			}
			
			function BinsF() {
			if (document.getElementById('bins01').style.display === 'block') {
				document.getElementById('bins01').style.display = 'none';
			} else {
				document.getElementById('bins01').style.display='block';

					}
			}
			
			function BoletF() {
			if (document.getElementById('bolet01').style.display === 'block') {
				document.getElementById('bolet01').style.display = 'none';
			} else {
				document.getElementById('bolet01').style.display='block';

					}
			}
		
			 function Loading() {	
			corbotao();REF();REFB();REFA();FP1();FP2();FP3();Fbanri1();Fverdec1();Fbanricard1();Fcabal1();Fvrbene1();Fcabalv1();Fpluxee1();Falelo1();Fticket1();Fgreencard1();Fsenff1();Fautband1();Fbok1();Fbph1();Fpix1();Ftcp1();Fconduct1();Fpayw1();Ftotal1();EscB0();EscB1();EscB2();EscB3();EscB4();EscB5();EscBOB20025();EscMBA2002();EscB6();EscB7();EscB8();EscB9();EscB10();EscB11();EscB12();EscB13();EscB14();EscB15();EscB16();EscB016();EscB17();EscB18();EscA0();EscA1();EscA2();EscA2MBA();EscA2BanriF();EscA3();EscA4();EscA5();EscA6();EscA7();EscA8();EscA9();EscA10();EscA10M();EscA11();EscA12();EscA13();EscA14();EscA15();EscA16();EscA17();EscA18();EscA19();EscA20();EscA21();EscA22();EscA23();EscA24();EscA25();EscA26();EscA27();EscA28();EscA29();EscA30();
			document.getElementById("clicadoBCALC").style.background="black"; document.getElementById("clicadoBOPTake").style.background="black"; document.getElementById("clicadoBOPAPI").style.background="black"; document.getElementById("myBtn").style.background="black";
			
			}
		 
			
            function Fbanri1() {
			var x = document.getElementById('banri1');
			var tag=document.getElementById("clicado5");
			document.getElementById('banricom01').src += '';
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('banri01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			PP1();
			} else {
				x.style.display = 'none';
				document.getElementById('banri01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				tag.style.color="white";
				PP2();
					}
			}
			
            function Fverdec1() {
			var x = document.getElementById('verdec1');
			var tag=document.getElementById("clicado6");
			document.getElementById('verdeca01').src += '';
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('verdec01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#DAA520";
			tag.style.color="white";
			PP1();
			} else {
				x.style.display = 'none';
				document.getElementById('verdec01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				PP2();
					}
			}
			
            function Fbanricard1() {
			var x = document.getElementById('banricard1');
			var tag=document.getElementById("clicado7");
			document.getElementById('banric01').src += '';
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('banricard01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#DAA520";
			tag.style.color="white";
			PP1();
			} else {
				x.style.display = 'none';
				document.getElementById('banricard01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				PP2();
					}
			}
			
            function Fcabal1() {
			var x = document.getElementById('cabal1');
			var tag=document.getElementById("clicado8");
			document.getElementById('caba01').src += '';
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('cabal01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#DAA520";
			tag.style.color="white";
			PP1();
			} else {
				x.style.display = 'none';
				document.getElementById('cabal01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				PP2();
					}
			}
			
            function Fbok1() {
			var x = document.getElementById('bok1');
			var tag=document.getElementById("clicado9");
			document.getElementById('bo01').src += '';
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('bok01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#808080";
			tag.style.color="white";
			PP1();
			} else {
				x.style.display = 'none';
				document.getElementById('bok01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				PP2();
					}
			}
			
            function Fbph1() {
			var x = document.getElementById('bph1');
			var tag=document.getElementById("clicado10");
			document.getElementById('bp01').src += '';
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('bph01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#808080";
			tag.style.color="white";
			PP1();
			} else {
				x.style.display = 'none';
				document.getElementById('bph01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				PP2();
					}
			}
			
	     function Fpix1() {
			var x = document.getElementById('pix1');
			var tag=document.getElementById("clicado22");
			document.getElementById('px01').src += '';
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('pix01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#DAA520";
			tag.style.color="white";
			PP1();
			} else {
				x.style.display = 'none';
				document.getElementById('pix01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				PP2();
					}
			}
			
			function Fvrbene1() {
			var x = document.getElementById('vrbene1');
			var tag=document.getElementById("clicado11");
			document.getElementById('vrben01').src += '';
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('vrbene01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#04AA6D";
			tag.style.color="white";
			PP1();
			} else {
				x.style.display = 'none';
				document.getElementById('vrbene01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				PP2();
					}
			}
            function Fcabalv1() {
			var x = document.getElementById('cabalv1');
			var tag=document.getElementById("clicado12");
			document.getElementById('cabv01').src += '';
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('cabalv01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#04AA6D";
			tag.style.color="white";
			PP1();
			} else {
				x.style.display = 'none';
				document.getElementById('cabalv01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				PP2();
					}
			}
			            
			function Fpluxee1() {
			var x = document.getElementById('pluxee1');
			var tag=document.getElementById("clicado13");
			document.getElementById('sodex01').src += '';
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('pluxee01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#04AA6D";
			tag.style.color="white";
			PP1();
			} else {
				x.style.display = 'none';
				document.getElementById('pluxee01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				PP2();
					}
			}
			
			function Falelo1() {
			var x = document.getElementById('alelo1');
			var tag=document.getElementById("clicado14");
			document.getElementById('alel01').src += '';
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('alelo01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#04AA6D";
			tag.style.color="white";
			PP1();
			} else {
				x.style.display = 'none';
				document.getElementById('alelo01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				PP2();
					}
			}
			
			function Fticket1() {
			var x = document.getElementById('ticket1');
			var tag=document.getElementById("clicado15");
			document.getElementById('tick01').src += '';
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('ticket01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#04AA6D";
			tag.style.color="white";
			PP1();
			} else {
				x.style.display = 'none';
				document.getElementById('ticket01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				PP2();
					}
			}
			
			function Fgreencard1() {
			var x = document.getElementById('greencard1');
			var tag=document.getElementById("clicado16");
			document.getElementById('greencar01').src += '';
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('greencard01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#04AA6D";
			tag.style.color="white";
			PP1();
			} else {
				x.style.display = 'none';
				document.getElementById('greencard01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				PP2();
					}
			}	
			
			function Fsenff1() {
			var x = document.getElementById('senff1');
			var tag=document.getElementById("clicado17");
			document.getElementById('senf01').src += '';
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('senff01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#04AA6D";
			tag.style.color="white";
			PP1();
			} else {
				x.style.display = 'none';
				document.getElementById('senff01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				PP2();
					}
			}	
			
			function Ftcp1() {
			var x = document.getElementById('tcp1');
			var tag=document.getElementById("clicado18");
			document.getElementById('tcp02').src += '';
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('tcp01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#808080";
			tag.style.color="white";
			PP1();
			} else {
				x.style.display = 'none';
				document.getElementById('tcp01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				PP2();
					}
			}
			            
			function Fconduct1() {
			var x = document.getElementById('conduct1');
			var tag=document.getElementById("clicado19");
			document.getElementById('conduc02').src += '';
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('conduct01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#808080";
			tag.style.color="white";
			PP1();
			} else {
				x.style.display = 'none';
				document.getElementById('conduct01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				PP2();
					}
			}
			
			function Fpayw1() {
			var x = document.getElementById('payw1');
			var tag=document.getElementById("clicado20");
			document.getElementById('payw02').src += '';
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('payw01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#808080";
			tag.style.color="white";
			PP1();
			} else {
				x.style.display = 'none';
				document.getElementById('payw01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				PP2();
					}
			}
			
			function Ftotal1() {
			var x = document.getElementById('total1');
			var tag=document.getElementById("clicado21");
			document.getElementById('total02').src += '';
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('total01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#808080";
			tag.style.color="white";
			PP1();
			} else {
				x.style.display = 'none';
				document.getElementById('total01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				PP2();
					}
			}
			
			function Fpxu1() {
			var x = document.getElementById('pxu1');
			var tag=document.getElementById("clicado23");
			document.getElementById('pxu02').src += '';
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('pxu01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#808080";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('pxu01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			            
			function Fbmq1() {
			var x = document.getElementById('bmq1');
			var tag=document.getElementById("clicado24");
			document.getElementById('bmq02').src += '';
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('bmq01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#808080";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('bmq01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			
			 function Links() {
			var x = document.getElementById('links');
			var tag=document.getElementById("clicado25");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			tag.style.background="#808080";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				tag.style.background="black";
					}
			}
			
			function REFB() {
				document.getElementById("tudoB").style.display = "block";
				document.getElementById('APIalerta02').src += '';
				document.getElementById('tempmediopagISPB02').src += ''; 
				document.getElementById('acesso02').src += '';
				document.getElementById('pixincluchave02').src += '';
				document.getElementById('pixextrato02').src += '';
				document.getElementById('pixpag02').src += '';
				document.getElementById('pixreceb02').src += '';
				document.getElementById('pixdevol02').src += '';
				document.getElementById('criatempmedio02').src += '';
				document.getElementById('sucesserropix02').src += '';
				document.getElementById('quantconsulDICT02').src += '';
				document.getElementById('tempmedioDICT02').src += '';
				document.getElementById('pagrecusalinear02').src += '';
				document.getElementById('tempmediopag02').src += '';
				document.getElementById('recebimentoTMR02').src += '';
				document.getElementById('sucesserroRECEB02').src += '';
				document.getElementById('bmq1l02').src += '';
				document.getElementById('MCpagtituloutros02').src += '';
				document.getElementById('OMpagtitulban02').src += '';
				document.getElementById('OBpagtitulban02').src += '';
				document.getElementById('MBA200202').src += '';
				document.getElementById('pxu1l02').src += '';			
			}
			
			 function EscB0() {
			var x = document.getElementById('pixincluchave');
			var tag=document.getElementById("clicado40");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('pixincluchave01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('pixincluchave01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscB1() {
			var x = document.getElementById('pixextrato');
			var tag=document.getElementById("clicado40");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('pixextrato01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('pixextrato01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscB2() {
			var x = document.getElementById('pixpag');
			var tag=document.getElementById("clicado40");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('pixpag01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('pixpag01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscB3() {
			var x = document.getElementById('pixreceb');
			var tag=document.getElementById("clicado40");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('pixreceb01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('pixreceb01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscB4() {
			var x = document.getElementById('pixdevol');
			var tag=document.getElementById("clicado40");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('pixdevol01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('pixdevol01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscB5() {
			var x = document.getElementById('OMpagtitulban');
			var tag=document.getElementById("clicado40");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OMpagtitulban01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('OMpagtitulban01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscBOB20025() { 
			var x = document.getElementById('OBpagtitulban');
			var tag=document.getElementById("clicado40");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OBpagtitulban01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('OBpagtitulban01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			
			}
						function EscMBA2002() { 
			var x = document.getElementById('MBA2002');
			var tag=document.getElementById("clicado40");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('MBA200201').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('MBA200201').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			
			}

				
				
			function EscB6() {
			var x = document.getElementById('MCpagtituloutros');
			var tag=document.getElementById("clicado40");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('MCpagtituloutros01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('MCpagtituloutros01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscB7() {
			var x = document.getElementById('acesso');
			var tag=document.getElementById("clicado40");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('acesso01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('acesso01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			
			function EscB8() {
			var x = document.getElementById('bmq1l');
			var tag=document.getElementById("clicado40");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('bmq01l').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('bmq01l').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}

			function EscB9() {
			var x = document.getElementById('pxu1l');
			var tag=document.getElementById("clicado40");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('pxu01l').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('pxu01l').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscB10() {
			var x = document.getElementById('sucesserropix');
			var tag=document.getElementById("clicado40");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('sucesserropix01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('sucesserropix01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscB11() {
			var x = document.getElementById('criatempmedio');
			var tag=document.getElementById("clicado40");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('criatempmedio01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('criatempmedio01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscB12() {
			var x = document.getElementById('quantconsulDICT');
			var tag=document.getElementById("clicado40");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('quantconsulDICT01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('quantconsulDICT01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscB13() {
			var x = document.getElementById('pagrecusalinear');
			var tag=document.getElementById("clicado40");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('pagrecusalinear01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('pagrecusalinear01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscB14() {
			var x = document.getElementById('tempmedioDICT');
			var tag=document.getElementById("clicado40");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('tempmedioDICT01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('tempmedioDICT01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscB15() {
			var x = document.getElementById('tempmediopag');
			var tag=document.getElementById("clicado40");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('tempmediopag01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('tempmediopag01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscB16() {
			var x = document.getElementById('tempmediopagISPB');
			var tag=document.getElementById("clicado40");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('tempmediopagISPB01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('tempmediopagISPB01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscB016() {
			var x = document.getElementById('APIalerta');
			var tag=document.getElementById("clicado40");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('APIalerta01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('APIalerta01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscB17() {
			var x = document.getElementById('recebimentoTMR');
			var tag=document.getElementById("clicado40");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('recebimentoTMR01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('recebimentoTMR01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscB18() {
			var x = document.getElementById('sucesserroRECEB');
			var tag=document.getElementById("clicado40");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('sucesserroRECEB01').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('sucesserroRECEB01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			
			
			function Tabela() {
			var x = document.getElementById('list');
			var tag=document.getElementById("clicado26");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			tag.style.background="#808080";
			tag.style.color="white";
			PP1();
			} else {
				x.style.display = 'none';
				tag.style.background="black";
				PP2();
					}
			}
			
			function REFA() {
				
				document.getElementById("tudoA1").style.display = "block";
				document.getElementById("tudoA2").style.display = "block";
				document.getElementById("tudoA3").style.display = "block";
				document.getElementById("tudoA4").style.display = "block";
				document.getElementById("tudoA5").style.display = "block";
				document.getElementById("tudoA6").style.display = "block";
				document.getElementById("tudoA7").style.display = "block";
				document.getElementById("tudoA8").style.display = "block";
				document.getElementById("tudoA9").style.display = "block";
				document.getElementById("tudoA10").style.display = "block";
				document.getElementById("tudoA11").style.display = "block";
				document.getElementById("tudoA12").style.display = "block";
				document.getElementById("tudoA13").style.display = "block";
				document.getElementById("tudoA14").style.display = "block";
				document.getElementById("tudoA15").style.display = "block";
				document.getElementById("tudoA16").style.display = "block";
				document.getElementById("tudoA17").style.display = "block";
				document.getElementById("tudoA18").style.display = "block";
				document.getElementById("tudoA19").style.display = "block";
				document.getElementById("tudoA20").style.display = "block";
				document.getElementById("tudoA21").style.display = "block";
				document.getElementById("tudoA22").style.display = "block";
				document.getElementById("tudoA23").style.display = "block";
				document.getElementById("tudoA24").style.display = "block";
				document.getElementById("tudoA25").style.display = "block";
				document.getElementById("tudoA26").style.display = "block";
				document.getElementById("tudoA27").style.display = "block";
				document.getElementById("tudoA28").style.display = "block";
				document.getElementById("tudoA29").style.display = "block";
				document.getElementById("tudoA30").style.display = "block";
				document.getElementById("tudoA31").style.display = "block";
				document.getElementById("tudoA32").style.display = "block";
				document.getElementById("tudoA33").style.display = "block";
				document.getElementById("tudoA34").style.display = "block";
				
				document.getElementById('MC00010102').src += '';
				document.getElementById('OB00010102').src += '';
				document.getElementById('OM00010102').src += '';
				document.getElementById('MBA00010102').src += '';
				document.getElementById('BanriF00010102').src += '';
				document.getElementById('HB00010102').src += '';
				document.getElementById('MCard00010102').src += '';
				document.getElementById('MC10010102').src += '';
				document.getElementById('OB10010102').src += '';	
				document.getElementById('OM10010102').src += '';
				document.getElementById('HB10010102').src += '';
				document.getElementById('LT00630102').src += '';
				document.getElementById('OB10040102').src += '';
				document.getElementById('OM10040102').src += '';
				document.getElementById('HB10040102').src += '';
				document.getElementById('MCard10040102').src += '';
				document.getElementById('MC10140102').src += '';
				document.getElementById('OM10140102').src += '';
				document.getElementById('MC40500102').src += '';
				document.getElementById('OB40500102').src += '';
				document.getElementById('MC25010102').src += '';
				document.getElementById('OB25010102').src += '';
				document.getElementById('OM25010102').src += '';
				document.getElementById('HB25010102').src += '';
				document.getElementById('MC25030102').src += '';
				document.getElementById('OB25030102').src += '';
				document.getElementById('OM25030102').src += '';
				document.getElementById('HB25030102').src += '';
				document.getElementById('MC20140102').src += '';
				document.getElementById('OB20140102').src += '';	
				document.getElementById('MC20150102').src += '';
				document.getElementById('OB20150102').src += '';
				document.getElementById('MC41220102').src += ''; 
				document.getElementById('HB00010102').src += '';	
				document.getElementById('OM41220102').src += '';				
			}


			function BOPTake() {
			var x = document.getElementById('OPTake');
			var tag = document.getElementById("clicadoBOPTake");
			if (x.style.display === 'none') {
				x.style.display = 'block';
				document.getElementById('OPAPI').style.display = 'none';
				document.getElementById('BCALC').style.display = 'none';
				tag.style.background = "#04AA6D";
				tag.style.color = "white";
				document.getElementById("clicadoBOPAPI").style.background = "black";
				document.getElementById("clicadoBCALC").style.background = "black";
			} else {
				x.style.display = 'none';
				tag.style.background = "black";
				 
					}
			}
			
			function BOPAPI() {
			var x = document.getElementById('OPAPI');
			var tag = document.getElementById("clicadoBOPAPI");
			if (x.style.display === 'none') {
				x.style.display = 'block';
				document.getElementById('OPTake').style.display = 'none';
				document.getElementById('BCALC').style.display = 'none';
				tag.style.background = "#04AA6D";
				tag.style.color = "white";
				
				document.getElementById("clicadoBOPTake").style.background = "black";
				document.getElementById("clicadoBCALC").style.background = "black";
			
			} else {
				x.style.display = 'none';
				tag.style.background = "black";
				document.getElementById("botao03").style.display = 'none';
				
					}
			}
			
			function BCALC() {
			var x = document.getElementById('BCALC');
			var tag = document.getElementById("clicadoBCALC");
			if (x.style.display === 'none') {
				x.style.display = 'block';
				document.getElementById('OPTake').style.display = 'none';
				document.getElementById('OPAPI').style.display = 'none';
				tag.style.background = "#04AA6D";
				tag.style.color = "white";
				document.getElementById("clicadoBOPAPI").style.background = "black";
				document.getElementById("clicadoBOPTake").style.background = "black";
			
			} else {
				x.style.display = 'none';
				tag.style.background = "black";
				document.getElementById("resultado").innerHTML = "";
				document.getElementById("botaoCopy2").style.display = 'none';
				 
					}
			}
			
			 function EscA0() {
			var x = document.getElementById('MC0001');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('MC000101').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('MC000101').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA1() {
			var x = document.getElementById('OB0001');

			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OB000101').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('OB000101').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA2() {
			var x = document.getElementById('OM0001');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OM000101').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('OM000101').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA2MBA() {
			var x = document.getElementById('MBA0001');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('MBA000101').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('MBA000101').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA2BanriF() {
			var x = document.getElementById('BanriF0001');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('BanriF000101').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('BanriF000101').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA3() {
			var x = document.getElementById('HB0001');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('HB000101').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('HB000101').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA4() {
			var x = document.getElementById('MCard0001');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('MCard000101').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('MCard000101').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA5() {
			var x = document.getElementById('MC1001');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('MC100101').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('MC100101').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA6() {
			var x = document.getElementById('OB1001');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OB100101').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('OB100101').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA7() {
			var x = document.getElementById('OM1001');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OM100101').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('OM100101').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA8() {
			var x = document.getElementById('HB1001');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('HB100101').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('HB100101').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA9() {
			var x = document.getElementById('LT0063');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('LT006301').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('LT006301').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA10() {
			var x = document.getElementById('OB1004');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OB100401').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('OB100401').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA10M() {
			var x = document.getElementById('OM1004');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OM100401').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('OM100401').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA11() {
			var x = document.getElementById('HB1004');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('HB100401').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('HB100401').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA12() {
			var x = document.getElementById('MCard1004');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('MCard100401').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('MCard100401').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA13() {
			var x = document.getElementById('MC1014');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('MC101401').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('MC101401').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA14() {
			var x = document.getElementById('OM1014');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OM101401').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('OM101401').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA15() {
			var x = document.getElementById('MC4050');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('MC405001').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('MC405001').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA16() {
			var x = document.getElementById('OB4050');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OB405001').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('OB405001').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA17() {
			var x = document.getElementById('MC2501');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('MC250101').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('MC250101').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA18() {
			var x = document.getElementById('OB2501');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OB250101').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('OB250101').style.display='none'; <!--  Gráfico -->
					}
			}
			
			function EscA19() {
			var x = document.getElementById('OM2501');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OM250101').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('OM250101').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA20() {
			var x = document.getElementById('HB2501');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('HB250101').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('HB250101').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA21() {
			var x = document.getElementById('MC2503');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('MC250301').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('MC250301').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA22() {
			var x = document.getElementById('OB2503');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OB250301').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('OB250301').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA23() {
			var x = document.getElementById('OM2503');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OM250301').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('OM250301').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA24() {
			var x = document.getElementById('HB2503');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('HB250301').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('HB250301').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA25() {
			var x = document.getElementById('MC2014');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('MC201401').style.display='block'; <!--  Gráfico -->e";
			} else {
				x.style.display = 'none';
				document.getElementById('MC201401').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA26() {
			var x = document.getElementById('OB2014');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OB201401').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('OB201401').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA27() {
			var x = document.getElementById('MC2015');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('MC201501').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('MC201501').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA28() {
			var x = document.getElementById('OB2015');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OB201501').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('OB201501').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA29() {
			var x = document.getElementById('MC4122');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('MC412201').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('MC412201').style.display='none'; <!--  Gráfico -->
					}
			}
			function EscA30() { 
			var x = document.getElementById('OM4122');
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OM412201').style.display='block'; <!--  Gráfico -->
			} else {
				x.style.display = 'none';
				document.getElementById('OM412201').style.display='none'; <!--  Gráfico -->
					}
						}
 
			
