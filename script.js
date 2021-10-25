function calc(){
  var ent1 = document.getElementById('blc1')
  var ent2 = document.getElementById('blc2')
  var res =document.getElementById('resul')
  var n1 = Number(ent1.value,)
  var n2 = Number(ent2.value)

  var m =((n1 * n2)/ 0.47)/1000
  var beg = ((n1 * n2)/ 0.43)/1000
  var avanc = ((n1 * n2)/ 0.50)/1000
  
  res.innerHTML = `<strong>${beg.toFixed(2)}</strong> litros (Iniciantes)
  <strong>${m.toFixed(2)}</strong> litros (Intermediario)<strong>   
  ${avanc.toFixed(2)}</strong> litros (Avançado)`
}



