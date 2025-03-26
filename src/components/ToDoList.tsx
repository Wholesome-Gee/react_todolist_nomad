import { useRecoilState, useRecoilValue } from "recoil"
import { Categories, categoryState,  toDoSelector, } from "../atoms"
import CreateToDo from "./CreateToDo"
import ToDo from "./ToDo"

export default function ToDoList(){
  const toDos = useRecoilValue(toDoSelector)
  const [category, setCategory] = useRecoilState(categoryState)
  const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any)
  }
  console.log(Categories.DONE, '@@');
  
  
  return (
    <>
      <h1>To Dos</h1>
      <hr/>
      <form>
        <select value={category} onInput={onInput}>
          <option value={Categories.TO_DO}>To Do</option>
          <option value={Categories.DOING}>Doing</option>
          <option value={Categories.DONE}>Done</option>
        </select>
      </form>
      <CreateToDo/>
      {
        toDos?.map(toDo=> <ToDo key={toDo.id} id={toDo.id} text={toDo.text} category={toDo.category}/>)
      }
    </>
  )
}