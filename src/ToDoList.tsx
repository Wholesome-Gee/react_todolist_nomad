import { useForm } from "react-hook-form";

interface IForm {
  errors: {
    toDo: { message: string; }
  },
  toDo: string;
}
export default function ToDoList(){
  const {register, handleSubmit, formState:{errors}, setValue} = useForm<IForm>();

  function onValid(data:IForm):void{
    console.log(data);
    
    setValue('toDo','')
  }
  return (
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
  )
}