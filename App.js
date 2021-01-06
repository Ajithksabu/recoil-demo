import React from "react";
import TodoList from "./components/TodoList";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


function App() {

  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
