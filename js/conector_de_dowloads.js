let aplicativos = [];
const endPointDaAPIApp = 'js/dowloadsapp.json';
getBuscaraplicativos();

async function getBuscaraplicativos() {
    const resapp = await fetch(endPointDaAPIApp);
    aplicativos = await resapp.json();
    exibirAplicativos(aplicativos);
}