import React from 'react';
import All from './components/All';
import LL from './components/LL';
import List from './components/List';

import Addquestions from './components/Addquestions';
import Scoreboard from './components/Scoreboard';
import Solved from './components/Solved';
import Editor from './components/Editor';

//import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
 <Link className="navbar-brand" to="/all">Programming Assist</Link>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
 <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
 <ul className="navbar-nav">
   <li className="nav-item active">
     <Link className="nav-link" to="/all">All <span className="sr-only">(current)</span></Link>
   </li>
   <li className="nav-item">
     <Link className="nav-link" to="/add">Add Question</Link>
   </li>
   <li className="nav-item">
     <Link className="nav-link" to="/list">List</Link>
   </li>
   <li className="nav-item">
     <Link className="nav-link" to="/solved">Solved</Link>
   </li>
   <li className="nav-item">
     <Link className="nav-link" to="/scoreboard">My Scoreboard</Link>
   </li>
   <li className="nav-item">
     <Link className="nav-link" to="/codeeditor">My CodeEditor</Link>
   </li>
 </ul>
</div>
</nav>
<br/>
 <div>
  
   {/* A <Switch> looks through its children <Route>s and
       renders the first one that matches the current URL. */}
   <Switch>
     <Route path="/scoreboard">
       <Scoreboard/>
     </Route>
     <Route path="/add">
       <Addquestions/>
     </Route>
     <Route path="/list">
       <List/>
     </Route>
     <Route path="/all">
       <All/>
     </Route>
     <Route path="/solved">
       <Solved/>
     </Route>
     <Route path="/codeeditor">
       <Editor/>
     </Route>
    
     <Route path="/arrays">
       <LL name="arrays" dname="Arrays"/>
     </Route>
     <Route path="/sas">
       <LL name="sas"dname="Searching and Sorting"/>
     </Route>
     <Route path="/strings">
       <LL name="strings"dname="Strings"/>
     </Route>
     <Route path="/matrix">
       <LL name="matrix"dname="Matrix"/>
     </Route>
     <Route path="/bt">
       <LL name="bt"dname="Back Tracking"/>
     </Route>
     <Route path="/greedy">
       <LL name="greedy"dname="Greedy"/>
     </Route>
     <Route path="/dp">
       <LL name="dp" dname="Dynamic Programming"/>
     </Route>
     <Route path="/st">
       <LL name="st"dname="Stacks and Queue"/>
     </Route>
     <Route path="/ll">
       <LL name="ll"dname="Linked List"/>
     </Route>
     <Route path="/gt">
       <LL name="gt"dname="Generic Tree"/>
     </Route>
     <Route path="/btr">
       <LL name="btr"dname="Binary Trees"/>
     </Route>
     <Route path="/bst">
       <LL name="bst"dname="Binary Search Trees"/>
     </Route>
     <Route path="/hs">
       <LL name="hs"dname="Heap and Statistics"/>
     </Route>
     <Route path="/graphs">
       <LL name="graphs"dname="Graphs"/>
     </Route>
     <Route path="/bit">
       <LL name="bit" dname="Bit Magic"/>
     </Route>
     <Route path="/maths">
       <LL name="maths"dname="Maths"/>
     </Route>
     <Route path="/geo">
       <LL name="geo"dname="Geometry"/>
     </Route>
     <Route path="/trie">
       <LL name="trie"dname="Trie"/>
     </Route>
     <Route path="/misc">
       <LL name="misc"dname="Misc"/>
      </Route>
       <Route path="/">
     <All/>
     </Route>

  
 
   </Switch>
 </div>
</Router>

 </div>
  );
}

export default App;
