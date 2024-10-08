import React, { useState } from 'react'

function TarefaEntrada({ onAdicionarTarefa }) {
  const [tarefa, setTarefa] = useState("")

  const apertaBotao = () => {
    if (tarefa.length < 1) { return }
    onAdicionarTarefa(tarefa)
    setTarefa("")
  }

  const apertaEnter = (evento) => {
    if (evento.key === "Enter") {
      apertaBotao()
    }
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="mb-3">
            <input
              onKeyDown={apertaEnter}
              value={tarefa}
              onChange={(evento) => setTarefa(evento.target.value)}
              type="text"
              className="form-control"
              placeholder="Digite a descrição de uma tarefa"
            />
          </div>
          <button
            onClick={apertaBotao}
            className="btn btn-primary w-100"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  )
}

export default TarefaEntrada
