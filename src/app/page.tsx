"use client";
import Tarefa from '@/components/Tarefa';
import { Tarefa as TarefaType } from '@/types';
import { useEffect, useState } from 'react';
import { deletarTarefa, inserirTarefa, sincronizarTarefa } from './functions';

export default function Home() {
  const tarefasExistentes = localStorage.getItem("tarefas")
  const [tarefas, setTarefas] = useState<TarefaType[]>(tarefasExistentes ? JSON.parse(tarefasExistentes) : [])
  const [tarefaAtual, setTarefaAtual] = useState<TarefaType>()

  // Sincroniza com o localStorage
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
  }, [tarefas])

  // HTML da pagina principal
  return (
    <div className="w-screen h-screen">
      <main className="w-full h-full flex flex-col gap-4 items-center justify-center">
        <h1 className="font-bold">Lista de Tarefas</h1>
        <input type="text" value={tarefaAtual?.name || ""} className="border-2 rounded-xl w-[40vw]" onChange={(valor) => sincronizarTarefa(valor, setTarefaAtual, tarefas)}/>
        <button className="border-2 rounded-xl bg-green-300 px-4 py-2 hover:bg-green-500" onClick={() => inserirTarefa(tarefaAtual, setTarefas, setTarefaAtual, tarefas)}>Inserir Tarefa</button>

        <div className="flex gap-4">
        {tarefas && tarefas.map((tarefa) => <Tarefa key={tarefa.name} tarefa={tarefa} deletarTarefa={deletarTarefa} setTarefas={setTarefas}/>)}
        </div>
      </main>
    </div>
  );
}
