import { ChangeEvent, Dispatch, SetStateAction } from "react"
import { Tarefa as TarefaType} from "@/types"

// Sincroniza o nome digitado no input com a tarefa atual sendo criada
  export const sincronizarTarefa = (valor: ChangeEvent<HTMLInputElement>, setTarefaAtual: Dispatch<SetStateAction<TarefaType | undefined>>, tarefas: TarefaType[]) => {
    setTarefaAtual({
      id: tarefas.length + 1,
      name: valor.target.value,
    })
  }

  // Insere uma nova tarefa
  export const inserirTarefa = (tarefaAtual: TarefaType | undefined, setTarefas: Dispatch<SetStateAction<TarefaType[]>>, setTarefaAtual: Dispatch<SetStateAction<TarefaType | undefined>>, tarefas: TarefaType[]) => {
    if (tarefaAtual) {
      setTarefas((valorAnterior) => ([
        ...valorAnterior,
        tarefaAtual
      ]))
      setTarefaAtual({
        id: tarefas.length + 1,
        name: ""
      })
    }
  }

  // Deleta uma tarefa
  export const deletarTarefa = (id: number, setTarefas: Dispatch<SetStateAction<TarefaType[]>>) => {
    setTarefas((tarefasAnteriores) => tarefasAnteriores.filter((tarefa) => tarefa.id !== id))
  }