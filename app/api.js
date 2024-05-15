//Busca pelo repositório no github
async function apiRepos() {
    const resposta = await fetch('https://api.github.com/users/DaviFeitosa21/repos')
    const reposit = await resposta.json()
    return reposit
}

async function carregaAPI() {
    const reposit = await apiRepos()
    const container = document.getElementById('apiReposit')

    reposit.forEach(repo => {
        const repoHTML = `
            <a href="${repo.html_url}" class="item-port-a">
                <section class="item-port">
                    <h3>${repo.name}</h3>
                    <h4>${repo.description || 'sem descrição'}</h4>
                    <p>Linguagem: ${repo.language || 'não especificada'}</p>
                </section>            
            </a>
        `
        container.innerHTML += repoHTML
    })
}

window.onload = carregaAPI