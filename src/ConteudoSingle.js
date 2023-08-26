function ConteudoSingle(props) {
    return (
        <div className="conteudo-single">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}
export default ConteudoSingle;