import ConteudoSingle from "./ConteudoSingle";

function Conteudo() {
    return (
        <div className="conteudo">
            <div className="center">
                <ConteudoSingle
                title="teste"
                text="aqui é meu conteúdo de exemplo para o side
                da danki code no youtube. espero que você goste!"
                />

                <ConteudoSingle
                title="titulo"
                text="aqui é meu conteúdo de exemplo para o side
                da danki code no youtube. espero que você goste!"
                />

                <ConteudoSingle
                title="usando"
                text="aqui é meu conteúdo de exemplo para o side
                da danki code no youtube. espero que você goste!"
                />

                <ConteudoSingle
                title="props"
                text="aqui é meu conteúdo de exemplo para o side
                da danki code no youtube. espero que você goste!"
                />
            </div>
        </div>
    )
}

export default Conteudo;