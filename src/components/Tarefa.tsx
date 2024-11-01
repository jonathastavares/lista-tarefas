import { Tarefa as TarefaType } from "@/types";

interface Props {
    tarefa: TarefaType
    deletarTarefa: (id: number) => void
}

const Tarefa = ({tarefa, deletarTarefa}: Props) => {

    // HTML do componente Tarefa ( o card de cada tarefa )
    return (
        <button className="w-56 aspect-square flex justify-center items-center border-2 rounded-xl p-12" onClick={() => deletarTarefa(tarefa.id)}>
            <h1 className="font-bold text-lg">{tarefa.name}</h1>
        </button>
    )
}

export default Tarefa;