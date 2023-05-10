import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Vaga from './Componentes/Vaga';


function App() {

  const vagas = [
    {
      nome: 'Costureira',
      corFundoUm: '#57C278',
      corFundoDois: '#D9F7E9'
    },
    {
      nome: 'Motorista',
      corFundoUm: '#82CFFA',
      corFundoDois: '#E8F8FF'
    },
    {
      nome: 'Vendedor',
      corFundoUm: '#A6D157',
      corFundoDois: '#F0F8E2'
    },
    {
      nome: 'Trabalhador doméstico',
      corFundoUm: '#E06B69',
      corFundoDois: '#FDE7E8'
    },
    {
      nome: 'Autônomo',
      corFundoUm: '#DB6EBF',
      corFundoDois: '#FAE9F5'
    }
  ]



  const [candidatos, setCandidato] = useState([])

  const aoNovoCandidatoCadastrado = (candidato) => {
    console.log(candidato)
  }


  return (
    <div className="App">
      <Banner />
      <Formulario vagaPretendida={vagas.map(vagas => vagas.nome)} aoCandidatoCadastrado={candidato => aoNovoCandidatoCadastrado(candidato)} />
      {vagas.map(vaga => <Vaga key={vaga.nome} nome={vaga.nome} corFundoUm={vaga.corFundoUm} corFundoDois={vaga.corFundoDois}/>)}
    </div>
  );
}

export default App;