import axios from "axios";

async function PostCrud (url) {
await axios.post(url)
.then(response => {
  console.log('Mensagem enviada com sucesso para o Telegram');
})
.catch(error => {
  console.error('Erro ao enviar mensagem para o Telegram', error);
});
}

async function GetCrud (url) {
  await axios.get(url)
  .then(response => {
    console.log('Dados Coletado'); 
  })
  .catch(error => {
    console.error('Erro ao coletar dados', error);
  });
  }

export {

    PostCrud,
    GetCrud
}