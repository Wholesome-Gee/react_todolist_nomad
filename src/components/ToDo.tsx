import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

export default function ToDo({text, category, id}:IToDo) {
  const setToDos = useSetRecoilState(toDoState)
  function onClick(event:React.MouseEvent<HTMLButtonElement>) {
    const { currentTarget:{ name } } = event
    setToDos((toDos)=>{
      const targetIndex = toDos.findIndex(toDo => toDo.id === id )
      const newToDo = { text, id, category:name as "TO_DO"|"DOING"|"DONE" }
      console.log(toDos);
      
      return [
        ...toDos.slice(0,targetIndex),
        newToDo,
        ...toDos.slice(targetIndex+1)
      ]
    })
    
  }
  return (
    <li>
      <span>{text}</span>
      { category !== 'DOING' && <button name="DOING" onClick={onClick}>Doing</button> }
      { category !== 'TO_DO' && <button name="TO_DO" onClick={onClick}>To Do</button> }
      { category !== 'DONE' && <button name="DONE" onClick={onClick}>Done</button> }
    </li>
  )
}