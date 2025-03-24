import { useForm } from "react-hook-form";

interface IForm {
  errors:{
    email: { message:string; }
    firstName : { message:string; }
    lastName : { message:string; }
    userName : { message:string; }
    password1 : { message:string; }
    password2 : { message:string; }
  },
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password1: string;
  password2: string;
  extraError?: string;
}

export default function HowToUseReactHookForm() {
  const { register,watch,handleSubmit,formState:{errors},setError,setValue } = useForm<IForm>({
    defaultValues:{email:'@naver.com'}
  });
  console.log('watch',watch());
  function onValid(data:IForm){
    if(data.password1 !== data.password2) {
      setError('password1',{message:"패스워드가 일치하지 않습니다."},{shouldFocus:true })
    }
    setValue('userName','')
    console.log(data);
    
    // setError('extraError', {message:'Server offline.'})
  }
  
  return (
    <div>
      <form 
        onSubmit={handleSubmit(onValid)} 
        style={{display:"flex", flexDirection:'column'}}
      >
        <input 
          {...register('email', {
            required: '(필수) 이메일을 입력하세요.',
            pattern: { 
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: '네이버 이메일을 입력하세요.'
            },
          })} 
          placeholder="Email" 
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register('firstName', {
            required: '(필수) First Name을 입력하세요.', 
            validate: {
              noNico : (value)=> value.includes('nico') ? "nico가 들어갈수 없습니다." : true,
              noNice : (value)=> value.includes('nice') ? "nice가 들어갈수 없습니다." : true,
            }
          })}
          placeholder="First Name" 
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register('lastName', {
              required: '(필수) Last Name을 입력하세요.', 
          })}
          placeholder="Last Name" 
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register('userName', {
            required: '(필수) User Name을 입력하세요.',
            minLength: {
              value: 5,
              message: '5글자 이상 입력하세요.'
            }
          })}
          placeholder="User Name" 
        />
        <span>{errors?.userName?.message}</span>
        <input
          {...register('password1', {
            required: '(필수) Password1을 입력하세요.',
          })}
          placeholder="Password1" 
        />
        <span>{errors?.password1?.message}</span>
        <input
          {...register('password2', {
            required: '(필수) Password2를 입력하세요.',
          })}
          placeholder="Password2" 
        />
        <span>{errors?.password2?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  )
}