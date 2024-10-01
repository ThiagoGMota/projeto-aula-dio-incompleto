const conta = {
    email: 'thiago@thiago.com',
    password:'12345678',
    name:'Thiago G. Mota',
    balance:2495.98,
    id:'1'
}
export const Api = new Promise((resolve)=>{
    setTimeout(() => {
        resolve(conta)
    }, 3000);
})