import React, { useState, useEffect } from 'react'
import { FaPlus, FaTrash, FaSave } from 'react-icons/fa'
import Swal from 'sweetalert2'
import { Switch } from '@/components/ui/switch'
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"

const TodoListValidado = () => {
    const [tarefas, setTarefas] = useState([])
    const [novaTarefa, setNovaTarefa] = useState('')
    const [carregandoExportacao, setCarregandoExportacao] = useState(false)
    const [ativo, setAtivo] = useState(false)

    useEffect(() => {
        const salvas = localStorage.getItem('minhasTarefas')
        if (salvas) {
            setTarefas(JSON.parse(salvas))
        }
    }, [])

    const alternarEstado = () => {
        setAtivo(!ativo)
    }

    const cadastrarNovaTarefa = () => {
        if (novaTarefa.trim() === '') {
            Swal.fire({
                icon: 'warning',
                title: 'Tarefa não cadastrada!',
                text: 'Cadastre uma nova tarefa.',
                confirmButtonColor: '#6495ed',
            })
            return
        }

        const novaLista = [...tarefas, novaTarefa]
        setTarefas(novaLista)
        localStorage.setItem('minhasTarefas', JSON.stringify(novaLista))
        setNovaTarefa('')

        Swal.fire({
            icon: 'success',
            title: 'Sucesso!',
            text: 'Tarefa adicionada com sucesso.',
            timer: 2500,
            showConfirmButton: false,
        })
    }

    const removerTarefas = () => {
        Swal.fire({
            title: 'Tem certeza?',
            text: 'Isso vai remover todas as tarefas!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#e63946',
            cancelButtonColor: '#6495ed',
            confirmButtonText: 'Sim, apagar tudo!',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                setTarefas([])
                localStorage.removeItem('minhasTarefas')
                Swal.fire({
                    title: 'Removido!',
                    text: 'Todas as tarefas foram apagadas.',
                    icon: 'success',
                    confirmButtonColor: '#6495ed'
                })
            }
        })
    }

    const exportarComoTxt = () => {
        if (tarefas.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Nenhuma tarefa para exportar',
                showConfirmButton: false,
            })
            return
        }

        const conteudo = tarefas.map(t => `• ${t}`).join('\n')
        const blob = new Blob([conteudo], { type: 'text/plain;charset=utf-8' })
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = 'minhas-tarefas.txt'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const onDragEnd = (result) => {
        if (!result.destination) return
        const novaOrdem = Array.from(tarefas)
        const [removido] = novaOrdem.splice(result.source.index, 1)
        novaOrdem.splice(result.destination.index, 0, removido)
        setTarefas(novaOrdem)
        localStorage.setItem('minhasTarefas', JSON.stringify(novaOrdem))
    }

    const removeUmaTarefa = (indexParaRemover) => {
        const novaLista = tarefas.filter((_, i) => i !== indexParaRemover)
        setTarefas(novaLista)
        localStorage.setItem('minhasTarefas', JSON.stringify(novaLista))
    }

    return (
        <div className='main2'>
            <h1>Lista de tarefas</h1>

            <div className="flex items-center space-x-3 mt-6 alteraTema">
                <Switch checked={ativo} onCheckedChange={setAtivo} />
                <span className="text-sm">
                    {ativo ? '🌙 Noite' : '☀️ Dia'}
                </span>
            </div>

            <div>
                <input
                    type="text"
                    value={novaTarefa}
                    placeholder='Digite uma nova tarefa...'
                    onChange={(e) => setNovaTarefa(e.target.value)}
                />
                <br />

                <button onClick={cadastrarNovaTarefa} className='btn'>
                    <FaPlus /> Cadastrar
                </button>

                <button onClick={removerTarefas} className='btn-zerar btn-all' disabled={tarefas.length === 0}>
                    <FaTrash /> Limpar
                </button>
            </div>

            <br /><br />

            <button onClick={exportarComoTxt} className='exportaDados'>
                <FaSave /> Exportar
            </button>

            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="lista-tarefas">
                    {(provided) => (
                        <ul
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="mt-4 space-y-2"
                        >
                            {tarefas.map((tarefa, index) => (
                                <Draggable key={index} draggableId={`tarefa-${index}`} index={index}>
                                    {(provided) => (
                                        <li
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className="flex justify-between items-center p-3 bg-gray-100 rounded shadow"
                                        >
                                            <span>{tarefa}</span>
                                            <button 
                                                onClick={() => removeUmaTarefa(index)}
                                                className="btn-removerone text-red-500"
                                            >
                                                <FaTrash />
                                            </button>
                                            
                                        </li>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>

            <footer>
                © {new Date().getFullYear()} Desenvolvido por Leandro Ramos Cardoso.
            </footer>

        </div>
    )
}

export default TodoListValidado
