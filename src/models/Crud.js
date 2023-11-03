import axios from "axios";


function PostCrud (url) {

axios.post(url)
.then(response => {
  console.log('Mensagem enviada com sucesso para o Telegram');
})
.catch(error => {
  console.error('Erro ao enviar mensagem para o Telegram', error);
});
}

export {

    PostCrud
}