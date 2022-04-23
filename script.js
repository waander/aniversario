nome = window.prompt('Qual seu nome?')
dataNasc = window.prompt('Qual a data do seu nascimento?' , 'DD/MM/AAAA')

function calculaIdade(dataNasc){ 

    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var anoNascParts = dataNasc.split('/');
    var diaNasc =anoNascParts[0];
    var mesNasc =anoNascParts[1];
    var anoNasc =anoNascParts[2];
    var idade = anoAtual - anoNasc;
    var mesAtual = dataAtual.getMonth() + 1; 

    //Se mês atual for menor que o nascimento, não fez aniversário ainda;  

    if(mesAtual < mesNasc){
    idade--; 
    } else {

    //Se estiver no mês do nascimento, verificar o dia;

    if(mesAtual == mesNasc){ 
    if(new Date().getDate() < diaNasc ){ 
        
    //Se a data atual for menor que o dia de nascimento, ainda não fez aniversário

    idade--; 
    }
    }
    } 
    return idade; 
   }

   console.log(calculaIdade(dataNasc));

    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var anoNascParts = dataNasc.split('/');
    var diaNasc =anoNascParts[0];
    var mesNasc =anoNascParts[1];
    var anoNasc =anoNascParts[2];
    var idade = anoAtual - anoNasc;
    var mesAtual = dataAtual.getMonth() + 1; 

   var idadeF = (calculaIdade(dataNasc))

   document.write('<header>Olá, ' + nome + ' você tem ' + (calculaIdade(dataNasc)) + ' anos.</header>');


   document.write('<img src="imagens/bolo.png" alt="" srcset="">')
   // -------------------------------------------------------------------------------------------------------------------------
   var proxAniv = (diaNasc + '/' + mesNasc + '/'+ (Number (anoNasc) + Number (idadeF) + 1 ));

// Precisamos quebrar a string para retornar cada parte
var proxAnivParts = proxAniv.split('/');

var diaProxAniv = proxAnivParts[0];
var mesProxAniv = proxAnivParts[1];
var anoProxAniv = proxAnivParts[2];

// Agora podemos inicializar o objeto Date, lembrando que o mês começa em 0, então fazemos -1.
proxAnivF = new Date(anoProxAniv, mesProxAniv - 1, diaProxAniv);

const diff = Math.abs(dataAtual.getTime() - proxAnivF.getTime());

const days = Math.floor(diff / (1000 * 60 * 60 * 24));

document.write(' <div class=fDays> Faltam ' + days + ' dias para o seu aniversário. </div>');



const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let count_down = new Date(mesProxAniv + '/' + diaProxAniv + '/' + anoProxAniv).getTime();
let x = setInterval(() => countDown(), second);

function countDown() {
  let now = new Date(Date.now()).getTime();
  let diff = count_down - now;

  document.getElementById('days').innerText = Math.floor(diff / day);
  document.getElementById('hours').innerText = Math.floor(diff % day / hour);
  document.getElementById('minutes').innerText = Math.floor(diff % hour / minute);
  document.getElementById('seconds').innerText = Math.floor(diff % minute / second);
}