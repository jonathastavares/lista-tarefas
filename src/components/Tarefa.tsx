import { Tarefa as TarefaType } from "@/types";
import { Dispatch, SetStateAction } from "react";

interface Props {
    tarefa: TarefaType
    deletarTarefa: (id: number, setTarefas: Dispatch<SetStateAction<TarefaType[]>>) => void
    setTarefas: Dispatch<SetStateAction<TarefaType[]>>
}

const Tarefa = ({tarefa, deletarTarefa, setTarefas}: Props) => {

    // HTML do componente Tarefa ( o card de cada tarefa )
    return (
        <button className="w-56 aspect-square flex justify-center items-center border-2 rounded-xl p-12" onClick={() => deletarTarefa(tarefa.id, setTarefas)}>
            <h1 className="font-bold text-lg">{tarefa.name}</h1>
        </button>
    )
}

export default Tarefa;