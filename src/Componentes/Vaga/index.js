import './Vaga.css'

const Vaga = (props) => {
    return (
        <section className='vaga' style={{ backgroundColor: props.corFundoDois }}>
            <h3 style={{ borderBottomColor: props.corFundoUm}}>{props.nome}</h3>
        </section>
    )
}

export default Vaga