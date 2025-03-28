import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

export default function ToDo({text, category, id}:IToDo) {
  const setToDos = useSetRecoilState(toDoState)
  function onClick(event:React.MouseEvent<HTMLButtonElement>) {
    const { currentTarget:{ name } } = event
    setToDos((toDos)=>{
      const targetIndex = toDos.findIndex(toDo => toDo.id === id )
      const newToDo = { text, id, category:name as Categories }
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
      { category !== Categories.DOING && <button name={Categories.DOING+''} onClick={onClick}>Doing</button> }
      { category !== Categories.TO_DO && <button name={Categories.TO_DO+''} onClick={onClick}>To Do</button> }
      { category !== Categories.DONE && <button name={Categories.DONE+''} onClick={onClick}>Done</button> }
    </li>
  )
}