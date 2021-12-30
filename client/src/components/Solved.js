import React from 'react';

import SolvedLL from './SolvedLL';
import './All.css';
function Solved(){
  
 return (

<div className="container imgstyle">
     <SolvedLL name="arrays" dname="Arrays"/>
     <br/>
       <SolvedLL name="sas"dname="Searching and Sorting"/>
       <br/>
       <SolvedLL name="strings"dname="Strings"/>
       
       <br/><SolvedLL name="matrix"dname="Matrix"/><br/>
       <SolvedLL name="bt"dname="Back Tracking"/><br/>
       <SolvedLL name="greedy"dname="Greedy"/><br/>
       <SolvedLL name="dp" dname="Dynamic Programming"/><br/>
       <SolvedLL name="st"dname="Stacks and Queue"/><br/>
       <SolvedLL name="ll"dname="Linked List"/><br/>
       <SolvedLL name="gt"dname="Generic Tree"/><br/>
       <SolvedLL name="btr"dname="Binary Trees"/><br/>
       <SolvedLL name="bst"dname="Binary Search Trees"/><br/>
       <SolvedLL name="hs"dname="Heap and Statistics"/><br/>
       <SolvedLL name="graphs"dname="Graphs"/><br/>
       <SolvedLL name="bit" dname="Bit Magic"/><br/>
       <SolvedLL name="maths"dname="Maths"/><br/>
       <SolvedLL name="geo"dname="Geometry"/><br/>
       <SolvedLL name="trie"dname="Trie"/><br/>
       <SolvedLL name="misc"dname="Misc"/>

</div>



  
  );
}

export default Solved;