
  function validarSenha(senha){
    if(senha.length < 4 || senha.length > 72){
      return {valido:false, texto:"senha deve ter 4 e 72 digitos."}
    }else{
      return {valido:true, texto:""}
    }
  }
  
  function validarNome(nome){
    if(nome.length < 4 || nome.length > 72){
      return {valido:false, texto:"senha deve ter 4 e 72 digitos."}
    }else{
      return {valido:true, texto:""}
    }
  }

  function validarTelefone(telefone){
    if(telefone.length == 10){
      return {valido:false, texto:"numero de telefone deve conter 10 digitos."}
    }else{
      return {valido:true, texto:""}
    }
  }

  export {
    validarTelefone,
    validarSenha,
    validarNome
  }