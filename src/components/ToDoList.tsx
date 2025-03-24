import React from 'react';
import { useForm } from "react-hook-form";
import { atom, useRecoilState, } from "recoil";

interface IForm {
  errors: {
    toDo: { message: string; }
  },
  toDo: string;
}

interface ITodo {
  id: number;
  text: string;
  category: "TO_DO"|"DOING"|"DONE";
}

const toDoState = atom<ITodo[]>({
  key: "toDo",
  default: [],
})


export default function ToDoList(){
  const [toDos,setToDos] = useRecoilState(toDoState)
  const {register, handleSubmit, formState:{errors}, setValue} = useForm<IForm>();

  function onValid(data:IForm):void{
    setToDos((toDos)=>[{id:Date.now(), text:data.toDo, category:"TO_DO"},...toDos])
    setValue('toDo','')
  }
  console.log(typeof crypto.randomUUID());
  return (
    <>
      <h1>To Dos</h1>
      <hr/>
      <form onSubmit={handleSubmit(onValid)}>
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
          <span>{errors.toDo?.message}</span>
        <button>제출</button>
      </form>
      <ul>
        {toDos.map(toDo=>
          <li key={toDo.id}>{toDo.text}</li>
        )}
      </ul>
    </>
  )
}