import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import TarefaEntrada from './TarefaEntrada'
import TarefaLista from './TarefaLista'

function App() {
  const [ItemsDigitados, setItemsDigitados] = useState([])

  const adicionarTarefa = (tarefa) => {
    if (tarefa) {
      setItemsDigitados((prevItems) => [{ tarefa }, ...prevItems])
    }
  }

  return (
    <div className="container">
      <TarefaEntrada onAdicionarTarefa={adicionarTarefa} />
      <TarefaLista ItemsDigitados={ItemsDigitados} />
    </div>
  )
}

export default App
