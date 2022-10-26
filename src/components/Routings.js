import React from "react";
import Fetch from "./fetch";
import Counter from "./counter";
import TodoList from "./Todolist";
import List from "./list";
import Formvalidation from "./formvalidation";

import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

function Routings(){
    return(
        <BrowserRouter>
        <Link to='/fetch'>Fetch</Link> &nbsp;&nbsp;
        <Link to='/counter'>Counter</Link> &nbsp;&nbsp;
        <Link to='/todolist'>TodoList</Link> &nbsp;&nbsp;
        <Link to='/formvalidation'>Formvalidation</Link>
        <Routes>
        <Route path='/fetch' element={<Fetch/>} />
        <Route path="/counter" element={<Counter/>} />
        <Route path='/todolist' element={<TodoList/>} />
        <Route path='/list' element={<List/>} />
        <Route path='/formvalidation' element={<Formvalidation/>} />
        </Routes>

        </BrowserRouter>
    )
}
export default Routings;