let recargas = [];
const endPointDaAPI = 'recargas.json';
getBuscarRecargas();

async function getBuscarRecargas() {
    const res = await fetch(endPointDaAPI);
    recargas = await res.json();
    exibirasRecargas(recargas);
}