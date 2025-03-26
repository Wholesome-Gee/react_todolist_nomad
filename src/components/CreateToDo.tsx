import { useForm } from "react-hook-form"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { categoryState, toDoState } from "../atoms"

interface IForm {
  toDo: string;
}

export default function CreateToDo() {
  // state, value
  const {register, handleSubmit, setValue} = useForm<IForm>()
  const setToDos = useSetRecoilState(toDoState)
  const category = useRecoilValue(categoryState)

  // method
  function handleValid({toDo}:IForm){
    console.log(toDo);
    setToDos((toDos)=>[
      {id:Date.now(), text:toDo, category:category},
      ...toDos
    ])
    setValue('toDo','')
  }

  return (
    <form onSubmit={handleSubmit(handleValid)}>
        <input 
          {...register(
            'toDo',
            {
              required: { value: true, message: "할 일을 입력하세요."},
              minLength: { value: 5, message: "5글자 이상 입력하세요."},
              maxLength: { value: 25, message: "25글자 이상 입력할 수 없습니다."}
            },
          )} 
          placeholder="할 일을 입력하세요."></input>
          {/* <span>{errors.toDo?.message}</span> */}
        <button>제출</button>
      </form>
  )
}

