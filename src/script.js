
function start(){
let peso =  + document.getElementById('peso').value
let altura = + document.getElementById('altura').value
let imc =  (peso / (altura*altura)).toFixed(2)
const img = document.getElementById('imagem')

   // console.log(imc + " IMC")
   const imgReturned = retornarImagem(imc)
   img.src = imgReturned !== 'snorlax' ? 
      `../src/imagens/${imgReturned}.png`:
      `../src/imagens/${imgReturned}.png`


   function retornarImagem(imc) {

      
      if (parseInt(imc) < 18.5) {
         document.getElementById("res").innerHTML = `Abaixo do peso! O seu IMC é ${imc}`
         return  'magro'
      } else if (imc >= 18.5 && imc <= 25) {
         document.getElementById("res").innerHTML = `Peso ideal! O seu IMC é ${imc}`
         return 'ideal'
      } else if (imc > 25 && imc <= 30) {
         document.getElementById("res").innerHTML = `Acima do peso! O seu IMC é ${imc}`
         return 'acima'
      } else if (imc > 30 && imc <= 40) {
         document.getElementById("res").innerHTML = `Você está ficando obeso! O seu IMC é ${imc}`
         return 'obeso'
      } else {
         document.getElementById("res").innerHTML = `Você está ficando obeso! O seu IMC é ${imc}`
         return 'snorlax'
      }
      
      
   }
}



