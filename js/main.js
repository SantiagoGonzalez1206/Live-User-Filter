export const getAllInfo = async()=>{
    console.log("Esperando .......");
    const url = `https://6674179975872d0e0a950e53.mockapi.io/user`;
    const options = {
        method: 'GET',
        headers
    };
    let res = await fetch(url, options);
    let data = res.json();
    return data;
}