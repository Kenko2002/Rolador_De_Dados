
/* rolarDado('d4')*/
function rolarDado(dado) {
  let output=document.getElementById("output");
  let input_modificador = document.getElementById("modificador"); 
  let input_qnt_dados = document.getElementById("num_dados"); 
  dado=parseInt(dado);

  if(input_modificador.value==""){input_modificador.value=0;}
  if(input_qnt_dados.value==""){input_qnt_dados.value=1;}
  
  let numeroAleatorio=0;
  let i=0;
  while(i<parseInt(input_qnt_dados.value)){
    numeroAleatorio += Math.floor(Math.random() * dado) + 1 ;
    i++;
  }
  numeroAleatorio+=parseInt(input_modificador.value);
  output.innerHTML="O Resultado da sua rolagem de "+input_qnt_dados.value+" dados de "+dado+" faces com modificador de "+input_modificador.value+ " é: "+numeroAleatorio;
}



  
