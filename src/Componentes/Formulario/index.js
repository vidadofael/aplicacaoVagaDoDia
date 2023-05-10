import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const VagaPretendida = [
    "Comerciante",
    "Motorista",
    "Vendedor",
    "Trabalhador doméstico",
    "Autônomo",
    "Operador de máquinas",
    "Ajudante de obras",
    "Operador de telemarketing",
    "Recepcionista",
    "Costureira",
    "Professor",
    "Pedreiro",
    "Eletricista",
    "Assistente administrativo",
    "Atendente de loja",
    "Auxiliar de limpeza",
    "Cozinheiro",
    "Garçom",
    "Técnico de enfermagem",
    "Vigilante",
    "Técnico em informática",
    "Mecânico",
    "Auxiliar de produção",
    "Carpinteiro",
    "Encanador",
    "Porteiro",
    "Estoquista",
    "Recepcionista de consultório médico ou dentário",
    "Cuidador de idosos",
    "Auxiliar de escritório",
  ];

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [curriculo, setCurriculo] = useState("");
  const [vaga, setVaga] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log('Form foi submetido =>', nome, email, cidade, estado, curriculo, vaga);
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h1>Preencha todos os campos para registrar seu Currículo</h1>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Email"
          placeholder="Digite seu email"
          valor={email}
          aoAlterado={(valor) => setEmail(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cidade"
          placeholder="Digite sua Cidade"
          valor={cidade}
          aoAlterado={(valor) => setCidade(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Estado(UF)"
          placeholder="Ex.: SP"
          valor={estado}
          aoAlterado={(valor) => setEstado(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Link Dive do Google que contenha o Currículo"
          placeholder=" Ex.: http://www.drive.google.com/file..."
          valor={curriculo}
          aoAlterado={(valor) => setCurriculo(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Vaga Pretendida"
          itens={VagaPretendida}
          valor={vaga}
          aoAlterado={(valor) => setVaga(valor)}
        />
        <Botao>Cadastrar</Botao>
      </form>
    </section>
  );
};

export default Formulario;
