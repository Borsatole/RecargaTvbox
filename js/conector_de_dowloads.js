let aplicativos = [];
const endPointDaAPIApp = 'js/aplicativos_para_baixar.json';
getBuscaraplicativos();

async function getBuscaraplicativos() {
    const resapp = await fetch(endPointDaAPIApp);
    aplicativos = await resapp.json();
    exibirAplicativos(aplicativos);
}