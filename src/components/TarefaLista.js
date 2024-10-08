import React from 'react'

function TarefaLista({ ItemsDigitados }) {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="border p-3 rounded">
            <div className="text-center mb-3">
              {ItemsDigitados.length === 0 ? (
                <div className="border p-2 rounded">
                  <span>Você ainda não digitou nenhuma tarefa</span>
                </div>
              ) : (
                ItemsDigitados.map((item, index) => (
                  <div className="border p-2 mb-3 rounded" key={index} >
                    <span>{item.tarefa}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TarefaLista
