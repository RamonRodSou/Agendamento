import { GetCrud } from "../models/Crud";

export default function AoAgendar () {

    // const url = 'http://localhost:3000/profissional'

    const url = 'https://apiflaskvendas.up.railway.app//pessoas'

    const agendar = GetCrud(url)

    agendar.forEach(element => {
        console.log(element.nome)
    });


} 