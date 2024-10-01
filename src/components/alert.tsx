import { Api } from "../Api"

export const login = async (email:string):Promise<void> =>{
    const data:any = await Api
    if (email !== data.email) {
        return alert('Email invalido')
    }
    alert(`Bem vindo ${email}!`)
}
