import { useId, useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const listaTarefas = ["Estudar React", "Ir a academia", "Lavar o carro"];

  const imprimirTarefas = listaTarefas.map((tarefa) => {
    return <li> {tarefa} </li>;
  });

  const adicionarTarefa = (novaTarefa) => {
    listaTarefas.push(novaTarefa);
    console.log(listaTarefas);
  };

  const removeTarefa = () => {};

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionarTarefa(novaTarefa)}>
          Adicionar
        </AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>
          <Tarefa>
            <p>Nova tarefa</p>
            <RemoveButton>
              <img src={bin} alt="" width="16px" />
            </RemoveButton>
          </Tarefa>
          {imprimirTarefas}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
