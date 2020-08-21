document.getElementById("cep").addEventListener('blur' , (e)=>{
  let cep = document.getElementById("cep").value
  let search = cep.replace("-","");
  const options = {
    method:'GET',
    mode:'cors',
    cache:'default'
  }

  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
  .then(response => {
    response.json()
    .then(
      data => {
        for (const key in data) {
          if( document.querySelector('#'+key)){
            document.querySelector('#'+key).value = data[key]
          }
      
        }
      }
  )})
  .catch(e => { 
    alert("Digite um cep valido")
    document.getElementById('cep').value = ""
    document.getElementById('logradouro').value = ""
    document.getElementById('bairro').value = ""
    document.getElementById('localidade').value = ""
    document.getElementById('uf').value = ""
  })

})