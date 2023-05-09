import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const VagaPretendida = [
        'Comerciante',
        'Motorista',
        'Vendedor',
        'Trabalhador doméstico',
        'Autônomo',
        'Operador de máquinas',
        'Ajudante de obras',
        'Operador de telemarketing',
        'Recepcionista',
        'Costureira', 
        'Professor',
        'Pedreiro',
        'Eletricista',
        'Assistente administrativo',
        'Atendente de loja',
        'Auxiliar de limpeza',
        'Cozinheiro',
        'Garçom',
        'Técnico de enfermagem',
        'Vigilante',
        'Técnico em informática',
        'Mecânico',
        'Auxiliar de produção',
        'Carpinteiro',
        'Encanador',
        'Porteiro',
        'Estoquista',
        'Recepcionista de consultório médico ou dentário',
        'Cuidador de idosos',
        'Auxiliar de escritório'
    ]

    return (
        <section className="formulario">
            <form>
                <h1>Preencha todos os campos para registrar seu Currículo</h1>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Email" placeholder="Digite seu email" />
                <CampoTexto label="Cidade" placeholder="Digite sua Cidade" />
                <CampoTexto label="Estado(UF)" placeholder="Ex.: SP" />
                <CampoTexto label="Link do Drive que leva ao seu Currículo" placeholder=" Ex.: http://www.drive.google.com/file..." />
                <ListaSuspensa label="Vaga Pretendida" itens={VagaPretendida}/>
                <Botao>
                    Cadastrar
                </Botao>
            </form>
        </section>
    )
}

export default Formulario