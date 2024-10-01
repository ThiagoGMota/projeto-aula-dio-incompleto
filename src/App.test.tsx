import { login } from "./components/alert"

describe('login',() =>{
    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'thiago@thiago.com'
    it('Deve exibir um alert com boas vindas caso email valido', async () => {
        await login(mockEmail);
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`); // Corrigido para usar mockEmail
    });
    it('nao deve exibir boas vindas sem o email', async()=>{
        await login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo!')
    })
    it('deve exibir erro se o email for invalido',async()=>{
        await login('email@invalido.com')
        expect(mockAlert).toHaveBeenCalledWith('Email invalido')
    })
})
