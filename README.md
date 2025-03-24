# 프로젝트 환경 세팅
- react-router-dom `npm i react-router-dom`
- styled-components `npm i styled-components` `npm i --save-dev @types/styled-components`
- react-query `npm i react@18 react-dom@18` `npm i react-query`
- apexChart `npm install apexcharts react-apexcharts`
- react-helmet `npm i react-helmet` `npm i --save-dev @types/react-helmet`
- recoil `npm i recoil`
- src/components, src/routes, src/Router.tsx, src/api.ts, src/atoms.ts 생성

# 리액트 영화 웹서비스 만들기 (노마드코더) 🔥🔥🔥🔥
- `npx create-react-app 프로젝트명`  
- 컴포넌트는 jsx를 리턴하는 함수
- 리렌더링되는 조건
  - state가 수정되면 컴포넌트가 리렌더링 된다.
  - 부모 컴포넌트가 리렌더링 되면 자식 컴포넌트도 리렌더링된다.
  - props가 변경되면 자식컴포넌트가 리렌더링 된다.
  - ContextAPI의 값이 변경되면 해당 값을 사용하는 모든 컴포넌트가 리렌더링
---
## #4 PROPS ⭐
### 4.1 Memo ✏️
✔️ **React.memo()**  
- 부모 컴포넌트의 리렌더링으로 인해  자식 컴포넌트가 불필요하게 리렌더링 되는것을 막아준다.
- `const 컴포넌트명 = React.memo((props)=>{ 컴포넌트 작성 })`
  ```jsx
  // 자식 컴포넌트
  const Child = React.memo(({ count }) => {
    console.log("Child 렌더링");
    return <div>{count}</div>;
  });
  export default Child;

  // 혹은
  function Child ({count}) {
    console.log("Child 렌더링");
    return <div>{count}</div>;
  }
  
  export default React.memo(Child)

  // 부모 컴포넌트
  export default function App () {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    return (
      <div>
        <Child count={count} />
        <button onClick={() => setCount(count + 1)}>카운트 증가</button>
        <input 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="이름 입력" 
        />
      </div>
    );
  };
  ```
---
### 4.2 Prop Types ✏️
✔️ **PropTypes**  
- props에 type을 지정.
- 컴포넌트 실행 후 에러 확인 가능
- `npm i prop-types`  
- 해당 컴포넌트에서 `컴포넌트명.propTypes = { count: PropTypes.number.isRequired }`   
- 타입이 스트링으로 이루어진 배열이어야 할땐 `PropTypes.arrayOf(PropTypes.string)`
  ```jsx
  import PropTypes from 'prop-types';

  const Component = ({ name, age }) => {
    return (
      <div>
        <h1>안녕하세요, {name}님!</h1>
        <p>당신의 나이는 {age}세입니다.</p>
      </div>
    );
  };

  Component.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  };

  export default Component;
  ```
---
## #5 CREATE REACT APP ⭐
### 5.1 Tour of CRA ✏️
✔️ **CSS MODULE**  
- 각 컴포넌트마다 `컴포넌트.module.css`를 만든다.
- CSS MODULE을 사용하면 클래스명은 고유한 값으로 자동 변환된다.
```css
/* App.module.css */
.title {
  font-size: 2rem;
  font-weight: 600;
}
```
```js
//App.js 
import styles from './App.module.css';
export default function App() {
  return (
    <h1 className={styles.title}></h1>
    // className=
  )
}
```
---
## #6 EFFECTS ⭐
### 6.4 useEffect ✏️
✔️ **useEffect cleanup()**  
- useEffect의 unmount 주기에 실행할 함수 (return 이용)
- `useEffect(()=>{ ... return()=>{ ... } }, [])`
- 컴포넌트의 생명주기
  1. mount : 컴포넌트가 처음으로 렌더링 될 시 (= DOM에 처음 삽입 될 시)
  2. update : 컴포넌트의 props나 state가 업데이트 될 시
  3. unmount : 컴포넌트가 DOM에서 제거될 시
  4. error handle : 컴포넌트에서 오류가 발생했을 시 
---
## #7 PRACTICE MOVIE APP ⭐
### 7.5 React Router ✏️
✔️ **폴더구조**
- src에 routes폴더, components폴더 생성  
- routes폴더는 페이지들을 담는다.
- components는 페이지들을 구성하는 파트들을 담는다.

✔️ **react-router-dom**
  - `npm i react-router-dom`  
    ```jsx
    import { BrowserRouter as Router, Switch as Routes , Route, Link } from "react-router-dom";
    import Home from './routes/Home'
    import Detail from './routes/Detail'

    export default function App() {
      return(
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/movie" element={<Detail/>} />
          </Routes>
        </Router>
      )
    }
    ```
- BrowserRouter는 일반 도메인 ex\) https://naver.com/  
- HashRouter는 #이 붙은 도메인 ex\) https://naver.com/#/  
- 자세한건 '리액트 마스터클래스 #5.0에서 설명'
---
### 7.6 Parameters ✏️
✔️ **Route에 파라미터 설정**
- `<Route path="/movie/:id" element={<Detail/>} />`
  - url/movie/66334 → Detail Route가 렌더링된다.
---
### 7.7 Publishing ✏️
✔️ **github로 프로젝트 배포**
- `npm i gh-pages`  
- `npm run build`  
- package.json → `"homepage":"https://wholesome-gee.github.io/project-name"`
- package.json → scripts → `"deploy":"gh-pages -d build"`
- package.json → scripts → `"predeploy":"npm run build"`
---
# 리액트 마스터클래스 (노마드코더) 🔥🔥🔥🔥
## #2 STYLED COMPONENTS ⭐
### 2.0 Why Styled Components ✏️
✔️ **스타일 컴포넌트 샘플**  
```jsx
const Box = styled.div`width:100, height:100, background-color:teal`;
...
<Box></Box>
```
- 스타일 컴포넌트도 고유한 클래스명을 생성한다. (ex) class="sc-jSgvazq"
---
### 2.1 Our First Styled Component ✏️
✔️ **스타일 컴포넌트 세팅**
- `npm i styled-components`
- `import styled from 'styled-components';`
```js
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`
const Box = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`
const Contents = styled.span`
  color: white;
`

export default function App() {
  return (
    <Container>
      <Box>
        <Contents>Hello</Contents>
      </Box>
      <BoxTwo/>
    </Container>
  )
}
```
---
### 2.2 Adapting and Extending ✏️
✔️ **스타일 컴포넌트 props 사용하기**
- props를 활용하여 같은 styled-component이지만 다른 스타일링을 줄 수 있다.
- props를 사용할땐 `${(props)=> props.xxx}`

✔️ **스타일 컴포넌트의 상속**
- 소괄호( )를 사용하여 스타일 컴포넌트간의 상속이 가능하다.
  ```js
  import styled from 'styled-components'

  // 스타일 컴포넌트 props 사용하기
  const Box = styled.div`
    background-color: ${(props)=>props.bgColor};
    width: 100px;
    height: 100px;
  `
  
  // 스타일 컴포넌트의 상속
  const Circle = styled(Box)`
    border-radius:50%
  `

  export default function App() {
    return (
      <div>
        <Box bgColor='teal'/>
        <Box bgColor='tomato'/>
        <Circle bgColor='orange'/>
      </div>
    )
  }
  ```
---
### 2.3 'As' and Attrs ✏️
✔️ **스타일 컴포넌트 as 속성**
- as 속성으로 styled-component의 html 태그를 변경할 수 있다.
- ``const Text = styled.p` ... ` ``
- `<Text as='a'/>`
  ```jsx
  import styled from 'styled-components'

  const Text = styled.p`
    color: red;
  `

  export default function App() {
    return (
      <Text as='a' href='https://naver.com'>
        Naver
      </Text>
    )
  }
  ```
✔️ **스타일 컴포넌트 attrs**
- attrs로 styled-component에 속성을 추가할 수 있다.
- `const Input = styled.input.attrs({required:true})`
  ```jsx
  import styled from 'styled-components'

  const Input = styled.input.attrs({required:true})`
    width:100px;
  `

  export default function App() {
    return (
      <>
        <Input/>  
      </>
    )
  }
  ```
---
### 2.4~2.5 Animations and Pseudo Selectors  ✏️
✔️ **스타일 컴포넌트로 Animation 구현하기**
- `import styled, { keyframes } from 'styled-components'`
- styled-components 보다 윗 줄에 animation 작성
    ```js
    import styled, { keyframes } from 'styled-components'

    const animation1 = keyframes`
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    `
    const Square = styled.div`
      background-color: tomato;
      width: 100px;
      height: 100px;
      animation: ${animation1} 1s ease-in-out infinite;
    `

    export default function App() {
      return <Square/>
    }
    ```
✔️ **스타일 컴포넌트로 Pseudo Selectors(가상요소 선택자) 사용하기**
- '&'를 이용해서 Pseudo Selectors 사용가능
  ```jsx
  import styled from 'styled-components'
  
  const Text = styled.p`
    color: blue;
  `
  const Box = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid black;

    span {
      color: red;
      &:hover {
        color: blue;
      }
    }

    ${Text} {
      color: red;
    }
  `

  export default function App() {
    return (
      <>
        <Box>
          <span>span</span>
          <Text>text</Text>
          <Text as='p'>text</Text>
        </Box>
      </>
    )
  }
  ```
---
### 2.7 Themes ✏️
✔️ **다크모드, 라이트모드 설정하기**
- main.jsx → `import {ThemeProvider} from 'styled-components'  
- theme 정의 `const darkTheme = { textColor: "#eee", bgColor: "#333" }`
- `<ThemeProvider theme={darkTheme}>`으로 `<App/>` 감싸기
- `<App/>` 혹은 theme을 사용할 컴포넌트에서 theme을 적용시킨다.
  ```jsx
  // main.jsx
  import { ThemeProvider } from 'styled-components'

  const darkTheme = {
    textColor:"#eee",
    bgColor:"#333",
  }

  const lightTheme = {
    textColor:"#333",
    bgColor:"#eee",
  }

  createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  )

  // App.jsx
  import styled from 'styled-components'

  const Title = styled.h1`
    background-color: ${(props)=>props.theme.bgColor};
    color: ${(props)=>props.theme.textColor};
  `

  export default function App() {
    return (
      <Header>
        <Title> hello </Title>
      </Header>
    )
  }
  ```
---
## #3 TYPESCRIPT ⭐
### 3.1 Definitely Typed ✏️
✔️ **타입스크립트 세팅**
- TypeScript는 코드를 실행 '전'에 오류 확인이 가능하다.
- 새로운 프로젝트를 시작할 경우
  - `npx create-react-app 프로젝트명 --template typescript`
  - 그냥 `npm init vite`에서 Typescript 선택해도 될듯
- 진행중인 프로젝트에 설치할 경우 
  - `npm i --save typescript @types/node @types/react @types/react-dom @types/jest`
- 외부 라이브러리 설치 시
  - `npm i 라이브러리`
  - `npm i --save-dev @types/라이브러리`
- 진행중인 프로젝트를 vite로 만들었을 경우
  - `npm i --save typescript @types/node @types/react @types/react-dom @types/jest`
  - `rpx tsc --init`
  - tsconfig.json의 "compilerOptions" 내부에 `"jsx":"react-jsx"` 추가
  - `npm i --save-dev @types/styled-components`
  - 모든 파일 확장자를 tsx로 변경
  - main.tsx에서 `createRoot(document.getElementById('root')).render(` 이부분을
    `createRoot(document.getElementById('root')!).render(` 이렇게 교체 (!만 추가)
---
### 3.2 Typing the Props ✏️
✔️ **Interface로 Component의 props를 type 하는 방법**
- interface는 object 내부의 type을 설명해주는것
  ```tsx
  interface IComponent {
    text: string;
  }
  export default function Component({text}:IComponent) {
    return ( 
      <div>{text}</div>
    )
  }
  ```
✔️ **styled-component의 props를 type 하는 방법 (꺽쇠 사용)**
```tsx
interface HelloProps {
  color:string
}
const Hello = styled.h1<HelloProps>`
  color:${props=>props.color}
`
```
---
### 3.3 Optional Props ✏️
✔️ **type의 옵셔널 설정**
- 옵셔널 설정은 ? 로 한다.
  ```tsx
  interface HelloProps {
    color?:string;
    // color : string | undefined 와 같다.
  }
  ```
✔️ **??를 활용한 props의 기본값 설정**
```tsx
// App.tsx
export default function App () {
  return <Component />
}
// Component.tsx
interface IComponent {
  color?: string;
}
interface IText {
  color: string;
}
const Text = styled.p<IText>`
  color: ${(props)=>props.color};
`
export default function Component () {
  return <Text color={color ?? 'black'}> Hello </Text>
}
```
✔️ **argument를 활용한 props의 기본값설정**
```tsx
// App.tsx
export default function App () {
  return <Component />
}
// Component.tsx
interface IComponent {
  color?: string;
}
interface IText {
  color: string;
}
const Text = styled.p<IText>`
  color: ${(props)=>props.color};
`
export default function Component ({color='red'}:IComponent) {
  return <Text color={color}> Hello </Text>
}
```
--- 
### 3.4 State ✏️
✔️ **state를 type하는 방법**
- 타입스크립트는 state의 초기값을 보고 type을 자동으로 지정한다.
- 초기값을 설정안하면 undefined type
- 만약, 초기값과 다른 type을 state에 저장해야하는 경우  
  `const [value, setValue] = useState<number|string>(1)`
---
### 3.5 Form (event) ✏️
✔️ **이벤트리스너의 event에 type하는 방법**
- `function onChange(event:React.FormEvent<HTMLInputElement>) { ... }`
  - input에 이벤트리스너를 걸었으면 HTMLInputElement   
  - form에 이벤트리스너를 걸었으면 HTMLFormElement
---
### 3.6 Themes ✏️
✔️ **Themes(다크모드, 라이트모드)를 typeScript로 설정하는방법**
- styled.d.ts 파일 생성
  ```tsx
  import 'styled-components';
  declare module 'styled-components' {
    export interface DefaultTheme {
      textColor: string;
      bgColor: string;
      btnColor: string;
      ...
    }
  }
  ```
- theme.ts 파일 생성
  ```tsx
  import { DefaultTheme } from "styled-components";
  export const lightTheme:DefaultTheme = {
    textColor: "#333",
    bgColor: "#eee",
    btnColor: "tomato"
    ...
  }
  export const darkTheme:DefaultTheme = {
    textColor: "#eee",
    bgColor: "#333",
    btnColor: "teal"
    ...
  }
  ```
- main.tsx에서 `<ThemeProvider theme={lightTheme}>`으로 `<App>` 감싸기
  ```tsx
  import { ThemeProvider } from 'styled-components'
  import { darkTheme, lightTheme } from './theme'

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ThemeProvider theme={lightTheme}>
        <App />
      </ThemeProvider>
    </StrictMode>,
  )
  ```
- styled-component에서 theme 사용 (#5.1 보면 createGlobalStyle을 활용해 body에도 적용)
  ```tsx
  const Container = styled.div`
    background-color: ${props=>props.theme.bgColor};
  `
  const Button = styled.button`
    background-color: ${props=>props.theme.btnColor};
    color: ${props=>props.theme.textColor};
  `
  ```
- Recoil을 사용할 시 `ThemeProvider`를 App.tsx내부에서 사용하게된다. (github react_masterclass repository App.tsx 참조)
---
## #4 ⭐
---
## #5 CRYPTO TRACKER ⭐
### 5.0 Setup ✏️
✔️ **React-Query**
- 해당 강의를 원활하게 듣기 위해 `npm i react-router-dom@5.3.4` 설치  
✔️ **react-router-dom 구버전으로 routing 하는 방법**
- src → routes폴더 생성
  - src/routes/Coins.tsx
  - src/routes/Coin.tsx
- src → Router.tsx 파일 생성
  ```tsx
  //Router.tsx
  import { BrowserRouter as Router, Switch as Routes, Route } from 'react-router-dom';
  import Coin from './routes/Coin';
  import Coins from './routes/Coins';

  export default function Router() {
    return (
      <Router>
        <Routes>
          <Route path='/:coinId'>
            <Coin/>
          </Route>
          <Route path='/'>
            <Coins/>
          </Route>
        </Routes>
      </Router>
    )
  }
  ```
- App.tsx → `<Router>` 호출
  ```tsx
  import Router from "./Router"

  export default function App() {
    return (
      <Router/>
    )
  }
  ```
✔️ **useParams로 받아온 Route Parameter에 type하는 방법**
```tsx
interface RouteParams { 
  id:string;
}
export default Component () {
  const {id} = useParams<RouteParams>()
  return <div>{id}</div>
}
```
---
### 5.1 Global Styles ✏️
✔️ **styled-component로 글로벌CSS (reset 등) 설정하는 방법**
- App.tsx에서 `const GlobalStyles = createGlobalStyles`` `
- 백틱 내부에 reset css 작성
- return 에 fragment 태그를 이용하여 Router와 같이 GlobalStyles 컴포넌트 작성
  ```tsx
  return (
    <>
      <Router/>
      <GlobalStyles/>
    </>
  )
  const GlobalStyle = createGlobalStyle`
    ...reset css
  `
  ```

✔️ **다시보는 theme 설정**
- src/styled.d.ts 로 ts에게 styled-component 모듈의 인터페이스를 추가 정의해줌 (기존 styled-component에 덮어쓰기개념)
  ```tsx  
  import 'styled-components';

  declare module 'styled-components' {
    export interface DefaultTheme {
      textColor: string;
      bgColor: string;
      pointColor: string;
    }
  }
  ``` 
- src/theme.ts에 theme 정의
  ```tsx
  import { DefaultTheme } from "styled-components";

  export const lightTheme:DefaultTheme = {
    textColor: "#2f3640",
    bgColor: "#f5f6fa",
    pointColor: "#005599"
  }

  export const darkTheme:DefaultTheme = {
    textColor: "#f5f6fa",
    bgColor: "#2f3640",
    pointColor: "#44bd32"
  }
  ```
- createGlobalStyles에 정의 
  ```tsx
  import { createGlobalStyle } from "styled-components"
  import Router from "./Router"

  export default function App() {
    return (
      <>
        <GlobalStyle />
        <Router/>
      </>
    )
  }

  const GlobalStyle = createGlobalStyle`
    ...
    body {
      ine-height: 1;
      font-family: "Source Sans 3", sans-serif;
      background-color: ${props=>props.theme.bgColor};
      color: ${props=>props.theme.textColor};
    }
  `
  ```
---
### 5.5 Coin Data ✏️
✔️ **Link태그로 state를 전달하는 방법**
```tsx
<Link to={{
  pathname: '/other-component',
  state: { name: "Gee" }
}}>
```
```tsx
// other-component
interface ILocation { name: string; }
const location = useLocation<ILocation>()
console.log(location.state); // { name: "Gee" }
```
---
### 5.6 Data Types ✏️
✔️ **fetch한 데이터를 type하는 방법**
- console에 받아온 데이터를 출력한다. ex) console.log(response)
- console에서 response를 우클릭 후 '전역변수로 저장'을 클릭하면 temp1 에 response가 새롭게 저장된다.
- Object.keys(temp1).join() 으로 key들을 배열로 만들어준 후, join()을 사용해 하나의 문자열로 만들어준다.
- 문자열을 복사하여 Interface안에 붙혀넣기 하고 ''와 , 를 제거하여 key 형태로 만든다 ex) id:;
- Object.values(temp1).map(value => typeof value).join() 으로 values들의 타입을 배열로 만들고, join()을 사용해 하나의 문자열로 만들어준다.
  - typeof value 를 하면 배열데이터도 object로 나오게 된다. 이 부분은 한번 더 체크를 해줘야 할것!
---
### 5.8 Nested Routes part Two ✏️
✔️ **useRouteMatch(url)**
- user가 현재 url에 위치했는지 파악 후 일치여부, 경로 등을 리턴한다.
```tsx
const match = useRouteMatch('/')
// 유저가 '/'에 있을때, match를 출력하면 → {path: '/', url: '/', isExact: true, params: {…}}
```
✔️ **state에 따른 style-component의 style을 변화하고 싶을때**
- ex) isActive가 true/false일때 글씨 색상이 변해야한다.
  ```tsx
  const Title = styled.h1<{isActive:boolean}>`
    color: ${props=>props.isActive ? 'red' : 'blue'};
  `
  const Button = styled.button``
  export default Component () {
    const [isActive, setIsActive] = useState(false)
    function onClickButton() {
      setIsActive((isActive)=>!isActive)
    }
    return (
      <>
        <Title isActive={isActive}>Hello</Title>
        <Button onClick={onClickButton}>Change isActive</Button>
      </>
    )
  }
  ```
---
### 5.9 React-Query part One ✏️
✔️ **react-query**
- react query는 비동기 처리에 유용하고 데이터를 fetch하여 캐시에 저장한다.
- react query는 isLoading, data, error 등을 리턴한다.
- react-query를 사용하기위해선 react 버전을 18버전이하로 맞춰야함 `npm i react@18 react-dom@18`
  - `npm i react-query@latest`를 해도 되나, 본 강의에서는 전자를 선택
- `npm i react-query`
- main.tsx에 `const queryClient = new QueryClient()`추가
- main.tsx에 `<QueryClientProvider client={queryClient}`추가
  ```tsx
  //main.tsx
  import { QueryClient, QueryClientProvider } from 'react-query'

  const queryClient = new QueryClient()
  
  createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  )
  ```
- src → api.tsx 생성 후 비동기 fetch 함수 작성
  ```tsx
  export function fetchData() {
    return fetch('url').then(response=>response.json())
  }
  ```
- Component에서 useQuery를 활용하여 데이터 받아오기
  ```tsx
  import { useQuery } from "react-query"
  import { fetchData } from "../api"

  interface IData {
    id: string,
  }

  export default function Component () {
    const { isLoading, data, error } = useQuery<IData[]>(['apple','fruits'],fetchData)
    console.log(isLoading, data, error);
  }
  ```
---
### 5.10 React Query part Two ✏️
✔️ **react-query callback함수에 parameter설정하기**  
- react-query의 callback함수를 api.tsx에 정의할 때,  
callback함수에 parameter를 설정할 수도 있다.
```tsx
// api.tsx
export function fetchCoinInfo(coinId:string) {
  return fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
          .then(response=>response.json())
}
// const { isLoading, data } = useQuery<IData>(['apple',fruits],()=>{fetchCoinInfo(coinId)}) 를 통해 parameter를 전달할 수 있다.
```
---
### 5.13~5.14 Price Chart ✏️
✔️ **APEXCHARTS.JS로 차트 쉽게 구현하기**  
- `npm install apexcharts react-apexcharts`  
- `import ApexCharts from 'react-apexcharts'`  
- 자세한건 apexcharts.js 공식문서 참조
  ```tsx
  <ApexCharts 
    type="line" 
    series={[
      {
        name: 'Price',
        data: data?.slice(7,21).map((item)=>parseFloat(item.close))??[]
      }
    ]}
    options={{
      theme:{
        mode: 'dark'
      },
      chart: {
        width: '100%',
        height: '500px',
        background:'transparent',
        toolbar: {
          show: false,
        }, 
      },
      grid: {
        show: false
      },
      yaxis: {
        show: false
      },
      xaxis: {
        categories: data?.map(item=>{
          const date = new Date(item.time_close*1000);
          const year = date.getFullYear()
          const month = (date.getMonth()+1).toString().padStart(2,'0')
          const day = date.getDate().toString().padStart(2,'0')
          return `${year}-${month}-${day}`
        }),
        axisBorder: { 
          show: false 
        },
        axisTicks: { 
          show: false 
        },
        labels: {
          show: false
        }
      },
      stroke: {
        curve: "smooth",
        width: 5
      },
      fill: {
        type: "gradient",
        gradient: {
          gradientToColors:['#0be881'], stops:[0,100]
        }
      },
      colors: ['#0fbcf9'],
      tooltip: {
        y: {
          formatter: (value)=>`$${value.toFixed(2)}`
        }
      }
    }}
  />
  ```
---
### 5.16 Final Touches ✏️
✔️ **useQuery()의 3가지 옵션**
- ['apple', 'fruits']
- fetch함수 from api.tsx
- { refetchInterval: 5000 }
  - 5000ms마다 refetch

✔️ **React-Helmet**  
- react에서 html의 header부분에 들어간 tag들을 조작할 수 있다.
- header의 title부분 변경해보기
  - `npm i react-helmet`
  - `npm i --save-dev @types/react-helmet`
  - `<Helmet><title> React title </title></Helmet>`

## #6 STATE MANAGEMENT ⭐
### 6.0~6.2 Dark Mode ✏️
✔️ **상태관리란?**   
- 상태관리는 연쇄적으로 전달되는 props를 막기위한것.  
- state를 상태관리에 등록하여 모든 컴포넌트에서 참조가능하도록 한다.  

✔️ **RECOIL**
- Recoil은 상태관리 라이브러리  
- Recoil은 atom이라는 저장공간을 생성(Recoil에서 여러 atom들을 생성함)  
- atom은 특정 컴포넌트에 종속되지 않고,여러 컴포넌트에서 참조할 수 있다.

✔️ **RECOIL 사용법**
- `npm i recoil`
- main.tsx에서 `<App/>`을 `<RecoilRoot>`로 감싼다.
- src → atom.tsx 생성
  ```tsx
  // atom.tsx
  import { atom } from "recoil";

  export const isDarkAtom = atom({
    key:"isDark",
    default: false
  })
  // 아톰은 두가지를 요구함 1.key:'고유키'  2. default:'기본값'
  ```
4. 컴포넌트에서 atom을 불러 사용한다.
    ```tsx
    const isDark = useRecoilValue(isDarkAtom)
    ```
---
### 6.3 Introduction to Recoil Part.2 ✏️
✔️ **ATOM의 default 값을 변경하는 방법**
- atom을 get하는 방법 = `useRecoilValue(atom)`
- atom을 set하는 방법 = `useSetRecoilState(atom)`
    ```tsx
    const setIsDark = useSetRecoilState(isDark)
    function onClickBtn() { setIsDark((prev)=>!prev)  }
    ```
---
### 6.6 Forms
✔️ **React Hook Form**
- react-hook-form은 form관리 (state, eventHandler)를 쉽게 해준다.
- `npm i react-hook-form`
- `const { register,watch } = useForm();`
  - register : input에 고유 이름을 부여해주며, 이 안에 이벤트핸들러가 자동으로 세팅되어있다.
  - watch : input이 onChange되는지 지켜본다. 
- `console.log(watch());`
- `<input {...register("toDo")} placeholder="Write a to do"/>`