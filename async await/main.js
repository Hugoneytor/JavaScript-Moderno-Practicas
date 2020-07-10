
//async await
async function obtenerClientes(){
    //creat promesa
    const clientes = new Promise((res,rej)=>{
        setTimeout(()=>{
            res(`Clientes descargados`);
        },2000);
    });

    //error o no
    const error = true;

    if(!error){
        const respuesta = await clientes;
        return respuesta;
    }else{
        await Promise.reject(`Hubo un error`);
    }

}

obtenerClientes()
.then(res=>console.log(res))
.catch(rej=>console.log(rej));