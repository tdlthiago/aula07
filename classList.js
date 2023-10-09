/*function minhaFuncao(){
    document.getElementById('minhaDiv').classList.add('classe1','classe2','classe3')
}
function removerEfeito(){
    document.getElementById('minhaDiv').classList.remove('classe1','classe2','classe3')
}


function FundoAzul(){
 
// document.getElementById('ex1').classList.add('classe4')

let elemente = document.getElementById('ex1')
elemente.style.backgroundColor="rgb(80,199,199)"
}



function FundoTransparente(){
   // document.getElementById('ex1').classList.add('classe5')
   document.getElementById('ex1').style.backgroundColor="transparent"
}


function FonteVermelha(){
    //document.getElementById('ex1').classList.add('class6')
}


function FonteNormal(){
   // document.getElementById('ex1').classList.add('class7')
}
*/

function verificarCampo(){
    let select = document.querySelector('select').value
    if(select == 'desabilitado'){
        document.querySelector('input').disabled=true
        let msg = document.getElementById("mensagem")
        msg.innerText = "DESABILITADO"
        msg.style.backgroundColor = "red"
        msg.style.color= "white"
    }else{
         document.querySelector('input').disabled= false
        let msg = document.getElementById("mensagem")
        msg.innerText =""
    }

}