document.addEventListener('DOMContentLoaded', function() {
    const zoomControl = document.getElementById('zoomControl');

    // Atualiza o estado do checkbox conforme o zoom inicial
    zoomControl.checked = document.body.style.zoom === '1.0';

    zoomControl.addEventListener('change', function() {
        if (this.checked) {
            document.body.style.zoom = '0.34';
        } else {
            document.body.style.zoom = '1.0';
        }
    });
	var x = document.getElementById('TKTake');
	primeiroTKF.addEventListener('change', function() {
        if (this.checked) {		
			x.style.display = 'block';
		} else {
				x.style.display = 'none';
			}
	
	});
	var y = document.getElementById('TKHora');
	segundoTKF.addEventListener('change', function() {
        if (this.checked) {		
			y.style.display = 'block';
		} else {
			y.style.display = 'none';
		}
		});
		var z = document.getElementById('TKBins');
	terceiroTKF.addEventListener('change', function() {
        if (this.checked) {		
			z.style.display = 'block';
		} else {
			z.style.display = 'none';
		}
	});		
});

document.getElementById("floating-btn").addEventListener("click", function() {
  let iframe = document.getElementById("MC00010102");
  iframe.contentWindow.postMessage("botaoClicado", "*");
});


/*
document.querySelectorAll("iframe").forEach(function(iframe) {
    iframe.addEventListener("click", function() {
        var destino = iframe.getAttribute("data-url"); // Obtém a URL de destino
        if (destino) {
            window.open(destino, "_blank"); // Abre a página ao clicar no gráfico
        }
    });
});
*/

/*
window.onload = function() {
    alert("Página carregada com sucesso!");
};
*/

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
	document.getElementById("demo").innerHTML = "Dados incompletos";
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
function zerar() {
	document.getElementById('numb').value='';
}

function desmarcar() {
  document.getElementById("AGencia").checked = false;
  document.getElementById("MAssiva").checked = false;
}


/*Fim Take Action*/

/* CALCULA E BINS */
// Função para consultar a API
        async function consultarApi() {
            const binInput = document.getElementById('binInput').value;
            const resultDiv = document.getElementById('resultAPI');
            resultDiv.innerHTML = ''; // Limpar resultados anteriores
			document.getElementById("botaoCopy").style.display = 'block';

            // Filtra e extrai apenas números de 6 dígitos da string de entrada
            const bins = binInput.match(/\d{6}/g);  // Extrai todos os números de 6 dígitos da entrada

            if (!bins || bins.length === 0) {
                resultDiv.innerHTML = '<span class="error">Por favor, insira BINs válidos de 6 dígitos.</span>';
                return;
            }

            // Carrega a chave da API
            const apiKey = await carregarConfig();

            if (!apiKey) {
                resultDiv.innerHTML = '<span class="error">Erro ao carregar a chave da API.</span>';
                return;
            }

            // Processa cada BIN com delay
            for (const bin of bins) {
                // Espera 300ms antes de fazer a próxima consulta
                await new Promise(resolve => setTimeout(resolve, 300));

                const xhr = new XMLHttpRequest();
                xhr.withCredentials = true;

                xhr.addEventListener('readystatechange', function () {
                    if (this.readyState === this.DONE) {
                        try {
                            const response = JSON.parse(this.responseText);

                            if (response.message) {
                                resultDiv.innerHTML += `<span class="error">Erro no BIN ${bin}: ${response.message}</span><br>`;
                            } else {
                                // Formatar os dados retornados
                                const output = `
BIN: ${response.bin || 'INDISPONÍVEL'}
Marca: ${response.brand || 'INDISPONÍVEL'}
Tipo: ${response.type || 'INDISPONÍVEL'}
Categoria: ${response.category || 'INDISPONÍVEL'}
Banco: ${response.issuer || 'INDISPONÍVEL'}
País: ${response.country || 'INDISPONÍVEL'}
<br>`;

                                resultDiv.innerHTML += output;

                                // Verificar se o Banco requer boletim
                                const alertBanco = ['CAIXA ECONOMICA', 'BANCO DO BRASIL', 'CAIXA'];
                                if (alertBanco.includes(response.issuer)) {
                                    const alertMessage = `Necessário boletim para o ${response.issuer}.`;
                                    // resultDiv.innerHTML += `<div class="alert">${alertMessage}</div><br>`;
                                    alert(alertMessage);
                                }
                            }
                        } catch (e) {
                            resultDiv.innerHTML += `<span class="error">Erro ao processar a resposta da API para o BIN ${bin}.</span><br>`;
                        }
                    }
                });

                xhr.open('GET', `https://bin-info.p.rapidapi.com/bin.php?bin=${bin}`);
                xhr.setRequestHeader('x-rapidapi-key', apiKey); // Usando a chave da API carregada
                xhr.setRequestHeader('x-rapidapi-host', 'bin-info.p.rapidapi.com');
                xhr.send(data);
            }
        }

        // Função para copiar o resultado da pesquisa
        function copiarResultado() {
            const resultDiv = document.getElementById('resultado') + document.getElementById('resultAPI');
            const textToCopy = resultDiv.innerText || resultDiv.textContent;

            if (textToCopy) {
                navigator.clipboard.writeText(textToCopy)
                    .then(() => { 
                        alert("Dados copiados com sucesso!");
                    })
                    .catch(err => {
                        alert("Erro ao copiar o resultado Bins: " + err);
                    });
            } else {
                alert("Não há Bins para copiar.");
            }
			
        }
/* FIM CALCULA E BINS */

	
		function sendMail() {
			var link = "mailto:Daniel Ramos Santos EXT <T06035@bergs.br>; Denis Pereira EXT <Denis_Pereira_EXT@banrisul.com.br>; Higor Anhaia EXT <Higor_Anhaia_EXT@banrisul.com.br>; Hiuri Anhaia EXT <T07512@bergs.br>; Jonathan Rocha EXT <T06361@bergs.br>; Lucas Berneira EXT <T06665@bergs.br>; Luis Silva EXT <T03252@bergs.br>; Pedro Oliveira EXT <T06385@bergs.br>; Renan Tavares EXT <T07264@bergs.br>; Rubens Godoi EXT <T07672@bergs.br>; Sergio Filho EXT <T06505@bergs.br>; Wagner Souza Silva EXT <t06215@bergs.br>; Rodrigo Teixeira EXT <T07230@bergs.br>"
             + "?cc=Cesar Olaves EXT <cesar_olaves_ext@banrisul.com.br>"
             + "&subject=" + encodeURIComponent("Passagem de Turno Payware – Turno Noite – XXXX/02/2024")
             + "&body=" + encodeURIComponent("Bom dia a todos! \n\nPDM:\nNada a relatar\n\nPENDÊNCIAS e ORIENTAÇÕES:\nNada a relatar\n\nOcorreram os seguintes INCIDENTES e ALERTAS:\n\nIncidentes PAYWARE\nNada a relatar\n\nIncidentes VERO\nNada a relatar\n\nAlertas PAYWARE\nNada a relatar\n\nAlertas VERO\nNada a relatar \n\n\n\At.te: \nLuís Fernando Adão\nTécnico de Monitoração N2B - Ilha Service\nA Serviço do BANRISUL\n(51) 3215 2345 \nE-mail: logisticati_monitoracao@banrisul.com.br")
			;

			window.location.href = link;
			}

			function REF() { 
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
				document.getElementById('pxu02').src += '';
				document.getElementById('bmq02').src += '';				
			}
		   
		    function PP1() {
			var tag2=document.getElementById("clicado50");
			tag2.style.background="#6495ED";
			tag2.style.color="white";
			/* window.location.href='#cerquilha'; */
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
		
			} else {
				x.style.display = 'none';
				document.getElementById('P01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
						
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

			} else {
				y.style.display = 'none';
				document.getElementById('P02').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				
					}
			}
			
			function Divis() {
			var z = document.getElementById('todasPayware');
			if (z.style.display === 'none') {
			z.style.display = 'block';
			document.getElementById('todasPayware').style.display='block'; <!--  Gráfico -->
			document.getElementById("clicado50").style.background="#6495ED";
			document.getElementById('divbutton2').style.display='block';
			} else {
				z.style.display = 'none';
				document.getElementById('todasPayware').style.display='none'; <!--  Gráfico -->
				document.getElementById("clicado50").style.background="black";
				document.getElementById('divbutton2').style.display='none';
					}

			}
			function DivisB() {
			var z = document.getElementById('todasB');
			if (z.style.display === 'none') {
			z.style.display = 'block';
			document.getElementById('todasB').style.display='block'; <!--  Gráfico -->
			document.getElementById("clicado40").style.background="#6495ED";
			} else {
				z.style.display = 'none';
				document.getElementById('todasB').style.display='none'; <!--  Gráfico -->
				document.getElementById("clicado40").style.background="black";


					}

			}
			
			function DivisA() {
			var z = document.getElementById('todasA');
			if (z.style.display === 'none') {
			z.style.display = 'block';
			document.getElementById('todasA').style.display='block'; <!--  Gráfico -->
			document.getElementById("clicado41").style.background="#6495ED";
			} else {
				z.style.display = 'none';
				document.getElementById('todasA').style.display='none'; <!--  Gráfico -->
				document.getElementById("clicado41").style.background="black";

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
			
			} else {
				z.style.display = 'none';
				document.getElementById('P03').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				
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
			
			} else {
				z.style.display = 'none';
				document.getElementById('autband01').style.display='none'; <!--  Gráfico -->
				document.getElementById('autband3').style.display='none';
				document.getElementById('autband03').style.display='none';
				tag.style.background="black";
				
				
					}
			}
			
			function BinsF() {
			if (document.getElementById('bins01').style.display === 'block') {
				document.getElementById('bins01').style.display = 'none';
				document.getElementById("BinsB").style.background="black";
			} else {
				document.getElementById('bins01').style.display='block';
				document.getElementById("BinsB").style.background="#6495ED";

					}
			}
		
			function Loading() {	
			FP1();FP2();FP3();Fbanri1();Fverdec1();Fbanricard1();Fcabal1();Fvrbene1();Fcabalv1();Fpluxee1();Falelo1();Fticket1();Fgreencard1();Fsenff1();Fautband1();Fbok1();Fbph1();Fpix1();
			Backg();Aackg();
			Ftcp1();Fconduct1();Fpayw1();Ftotal1();Fpxu1();Fbmq1();
			document.getElementById("clicado40").style.background="black";
			document.getElementById("clicado41").style.background="black";
			document.getElementById("clicado50").style.background="black";
			document.getElementById("myBtn").style.background="black";
			document.getElementById("BinsB").style.background="black";
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
			
			} else {
				x.style.display = 'none';
				document.getElementById('banri01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				tag.style.color="white";
				
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
			
			} else {
				x.style.display = 'none';
				document.getElementById('verdec01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				
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
			
			} else {
				x.style.display = 'none';
				document.getElementById('banricard01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
			
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
		
			} else {
				x.style.display = 'none';
				document.getElementById('cabal01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
			
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
			
			} else {
				x.style.display = 'none';
				document.getElementById('bok01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				
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

			} else {
				x.style.display = 'none';
				document.getElementById('bph01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				
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
			
			} else {
				x.style.display = 'none';
				document.getElementById('pix01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				
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
			} else {
				x.style.display = 'none';
				document.getElementById('vrbene01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				
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
			
			} else {
				x.style.display = 'none';
				document.getElementById('cabalv01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				
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
			
			} else {
				x.style.display = 'none';
				document.getElementById('pluxee01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				
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
			
			} else {
				x.style.display = 'none';
				document.getElementById('alelo01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				
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
			
			} else {
				x.style.display = 'none';
				document.getElementById('ticket01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				
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
			
			} else {
				x.style.display = 'none';
				document.getElementById('greencard01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				
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
			
			} else {
				x.style.display = 'none';
				document.getElementById('senff01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				
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
			
			} else {
				x.style.display = 'none';
				document.getElementById('tcp01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				
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
			
			} else {
				x.style.display = 'none';
				document.getElementById('conduct01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				
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
			
			} else {
				x.style.display = 'none';
				document.getElementById('payw01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
			
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
			
			} else {
				x.style.display = 'none';
				document.getElementById('total01').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
				
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
			
			 function Backg() { <!--  Background Escala B -->
			if (grafic3.style.backgroundColor === "black") {
				grafic3.style.transition = "background-color 3s";
				grafic3.style.backgroundColor = "ivory";
				grafic.style.transition = "background-color 4s";
				grafic.style.backgroundColor = "ivory";
				div5.style.transition = "background-color 5s";
				div5.style.backgroundColor = "ivory";
				div6.style.transition = "background-color 6s";
				div6.style.backgroundColor = "ivory";
			} else {
				grafic3.style.transition = "background-color 1s";
				grafic3.style.backgroundColor = "black";
				grafic.style.transition = "background-color 1s";
				grafic.style.backgroundColor = "black";
				div5.style.transition = "background-color 1s";
				div5.style.backgroundColor = "black";
				div6.style.transition = "background-color 1s";
				div6.style.backgroundColor = "black";
					}
			}
			
			function Tabela() {
			var x = document.getElementById('list');
			var tag=document.getElementById("clicado26");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			tag.style.background="#808080";
			tag.style.color="white";
		
			} else {
				x.style.display = 'none';
				tag.style.background="black";
				
					}
			}
			
			function REFA() {
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
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OB000101').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('OB000101').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA2() {
			var x = document.getElementById('OM0001');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OM000101').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('OM000101').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA2MBA() {
			var x = document.getElementById('MBA0001');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('MBA000101').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('MBA000101').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA2BanriF() {
			var x = document.getElementById('BanriF0001');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('BanriF000101').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('BanriF000101').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA3() {
			var x = document.getElementById('HB0001');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('HB000101').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('HB000101').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA4() {
			var x = document.getElementById('MCard0001');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('MCard000101').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('MCard000101').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA5() {
			var x = document.getElementById('MC1001');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('MC100101').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('MC100101').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA6() {
			var x = document.getElementById('OB1001');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OB100101').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('OB100101').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA7() {
			var x = document.getElementById('OM1001');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OM100101').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('OM100101').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA8() {
			var x = document.getElementById('HB1001');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('HB100101').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('HB100101').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA9() {
			var x = document.getElementById('LT0063');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('LT006301').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('LT006301').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA10() {
			var x = document.getElementById('OB1004');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OB100401').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('OB100401').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA10M() {
			var x = document.getElementById('OM1004');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OM100401').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('OM100401').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA11() {
			var x = document.getElementById('HB1004');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('HB100401').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('HB100401').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA12() {
			var x = document.getElementById('MCard1004');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('MCard100401').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('MCard100401').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA13() {
			var x = document.getElementById('MC1014');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('MC101401').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('MC101401').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA14() {
			var x = document.getElementById('OM1014');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OM101401').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('OM101401').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA15() {
			var x = document.getElementById('MC4050');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('MC405001').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('MC405001').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA16() {
			var x = document.getElementById('OB4050');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OB405001').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('OB405001').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA17() {
			var x = document.getElementById('MC2501');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('MC250101').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('MC250101').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA18() {
			var x = document.getElementById('OB2501');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OB250101').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('OB250101').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			
			function EscA19() {
			var x = document.getElementById('OM2501');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OM250101').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('OM250101').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA20() {
			var x = document.getElementById('HB2501');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('HB250101').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('HB250101').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA21() {
			var x = document.getElementById('MC2503');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('MC250301').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('MC250301').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA22() {
			var x = document.getElementById('OB2503');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OB250301').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('OB250301').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA23() {
			var x = document.getElementById('OM2503');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OM250301').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('OM250301').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA24() {
			var x = document.getElementById('HB2503');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('HB250301').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('HB250301').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA25() {
			var x = document.getElementById('MC2014');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('MC201401').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('MC201401').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA26() {
			var x = document.getElementById('OB2014');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OB201401').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('OB201401').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA27() {
			var x = document.getElementById('MC2015');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('MC201501').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('MC201501').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA28() {
			var x = document.getElementById('OB2015');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OB201501').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('OB201501').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA29() {
			var x = document.getElementById('MC4122');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('MC412201').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('MC412201').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
			}
			function EscA30() { <!--  Backgound Escala A -->
			var x = document.getElementById('OM4122');
			var tag=document.getElementById("clicado41");
			if (x.style.display === 'none') {
			x.style.display = 'block';
			document.getElementById('OM412201').style.display='block'; <!--  Gráfico -->
			tag.style.background="#6495ED";
			tag.style.color="white";
			} else {
				x.style.display = 'none';
				document.getElementById('OM412201').style.display='none'; <!--  Gráfico -->
				tag.style.background="black";
					}
						}
			 function Aackg() {
			if (grafic4.style.backgroundColor === "black") {
				grafic4.style.transition = "background-color 3s";
				grafic4.style.backgroundColor = "azure";
				grafic5.style.transition = "background-color 4s";
				grafic5.style.backgroundColor = "azure";
				div8.style.transition = "background-color 5s";
				div8.style.backgroundColor = "azure";
				div9.style.transition = "background-color 6s";
				div9.style.backgroundColor = "azure";
				div10.style.transition = "background-color 6s";
				div10.style.backgroundColor = "azure";
			} else {
				grafic4.style.transition = "background-color 1s";
				grafic4.style.backgroundColor = "black";
				grafic5.style.transition = "background-color 1s";
				grafic5.style.backgroundColor = "black";
				div8.style.transition = "background-color 1s";
				div8.style.backgroundColor = "black";
				div9.style.transition = "background-color 1s";
				div9.style.backgroundColor = "black";
				div10.style.transition = "background-color 1s";
				div10.style.backgroundColor = "black";
					}
			}
			
