import { PostCrud } from "../models/Crud";


export default function AoEnviarForm(dados) {
    const nome = dados.nome || "";
    const sobrenome = dados.sobrenome || "";
    const telefone = dados.telefone || "";
    const cabelo = dados.cabelo ? "cortar o cabelo, " : "";
    const barba = dados.barba ? "fazer a barba, " : "";
    const desenhar = dados.desenhar ? "modelar a barba, " : "";
    const data = dados.data ? new Date(dados.data) : "";
    const hora = dados.hora || "";

    const dataFormatada = data ? `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}` : "";
  
    const mensagem = `Cliente: ${nome} ${sobrenome},\n\n Telefone: ${telefone},\n\n Serviço: ${cabelo}${barba}${desenhar}\n\n Agendamento: ${dataFormatada}\n às ${hora}.`;
    const mensagemFormatada = mensagem.replace(/\s/g, '%20');
    console.log(mensagemFormatada);
    let token = '6404469401:AAFiWfbdcQ3aypuognmviTMQ58CXsUccatU'
    let chatId = '928984269' // id da pessoa
    
    const urlApiTelegram = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${mensagemFormatada}`;

    PostCrud(urlApiTelegram)


  }