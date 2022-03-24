import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

// https://api.github.com/orgs/rocketseat/repos


interface Repository {
    name: string;
    description: string;
    html_url: string;
}

//<Componente propriedade={objeto com todas as informacoes}/>
export function RepositoryList() {
    //Lista, está em array. É interessante começar um estado com uma
    //variável de mesmo tipo que eu irei armazenar.
    const [repositories, setRepositories] = useState<Repository[]>([]); //! O Repository é colocado entre o useState porque o estado TAMBÉM precisa ter um tipagem.
                                                                        //! Nesse caso, além do useState ter o tipo Repository, também vai armazenar uma lista de repositórios.Por isso o <Repository/> entre useState.

    //useEffect: serve para disparar uma função quando algo (variável mudou, por exemplo, aí quero avisar uma API sobre isso) acontecer na aplicação
    //Esse hook recebe dois parâmetros: primeiro é qual função eu quero executar ({}), o segundo parâmetro é QUANDO eu quero executar a primeira função.
    //É PRECISO deixar um segundo parâmetro no useEffect, senão a função dentro desse hook vai entrar num loop, como se não tivesse nenhuma condição (nesse caso é a dependência) pra ela parar
    useEffect(() => {
        //Busca os recursos da API de forma assíncrona com fetch()
        //Em seguida (then()) atribui a response, "transformando" essas informações em um .json
        //Depois (then() novamente), atribui a data, a qual irá preencher a variável de repositórios setRepositories,
        //e, dessa forma, terá o estado "preenchido" com esse useEffect que foi criado pelo consumo da API.
        fetch('https://api.github.com/users/anecodes/repos')
            .then (response => response.json()) 
            //! Aqui, setRepositories muda o estado de 'repositories' para o conteúdo que foi armazenado em data (o response.json)
            .then(data => setRepositories(data))

    }, []);

    console.log(repositories)

    //Aqui, é preciso passar por cada índice desse array e
    //retornar o conteúdo de cada um. Se fosse apenas pra passar
    //por eles, poderia ser utilizado o .forEach, mas o .forEach
    //não retorna nada. Então, nesse caso, é preciso utilizar o
    //.map para retornar os valores do array de repositórios.
    
    //Na linha 40, .map irá retornar o componente RepositoryItem
    //completo com as propriedades de cada repositório.

    //Sobre o 'key': no primeiro componente que for "chamado" pelo
    //map, é preciso ser colocado um 'key', pois é preciso informar
    //ao React qual é a informação única entre cada repositório, pois não
    //é possível um repositório com nomes repetidos, por exemplo.
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
             
            <ul>
            {repositories.map(repository => {
                return <RepositoryItem key={repository.name} repository={repository} />
            })}
            </ul>
        </section>
    )
}