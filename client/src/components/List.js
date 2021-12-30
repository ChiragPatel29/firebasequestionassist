import React from 'react';
import LL from './LL';
import './All.css';
function List(){
  
 return (
   <React.Fragment>
 <div class="row">
      <div class="col-2">
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <a class="nav-link active" id="v-pills-arrays-tab" data-toggle="pill" href="#v-pills-arrays" role="tab" aria-controls="v-pills-arrays" aria-selected="true">Arrays</a>
          <a class="nav-link" id="v-pills-sas-tab" data-toggle="pill" href="#v-pills-sas" role="tab" aria-controls="v-pills-sas" aria-selected="false">Searching and Sorting</a>
          <a class="nav-link" id="v-pills-strings-tab" data-toggle="pill" href="#v-pills-strings" role="tab" aria-controls="v-pills-strings" aria-selected="false">Strings</a>
          <a class="nav-link" id="v-pills-matrix-tab" data-toggle="pill" href="#v-pills-matrix" role="tab" aria-controls="v-pills-matrix" aria-selected="false">Matrix</a>
          <a class="nav-link" id="v-pills-bt-tab" data-toggle="pill" href="#v-pills-bt" role="tab" aria-controls="v-pills-bt" aria-selected="false">Back Tracking</a>
          <a class="nav-link" id="v-pills-greedy-tab" data-toggle="pill" href="#v-pills-greedy" role="tab" aria-controls="v-pills-greedy" aria-selected="false">Greedy</a>
          <a class="nav-link" id="v-pills-dp-tab" data-toggle="pill" href="#v-pills-dp" role="tab" aria-controls="v-pills-dp" aria-selected="false">Dynamic Programming</a>
          <a class="nav-link" id="v-pills-st-tab" data-toggle="pill" href="#v-pills-st" role="tab" aria-controls="v-pills-st" aria-selected="false">Stacks and Queues</a>
          <a class="nav-link" id="v-pills-ll-tab" data-toggle="pill" href="#v-pills-ll" role="tab" aria-controls="v-pills-ll" aria-selected="false">Linked List</a>
          <a class="nav-link" id="v-pills-gt-tab" data-toggle="pill" href="#v-pills-gt" role="tab" aria-controls="v-pills-gt" aria-selected="false">Generic Tree</a>
          <a class="nav-link" id="v-pills-btr-tab" data-toggle="pill" href="#v-pills-btr" role="tab" aria-controls="v-pills-btr" aria-selected="false">Binary Trees</a>
          <a class="nav-link" id="v-pills-bst-tab" data-toggle="pill" href="#v-pills-bst" role="tab" aria-controls="v-pills-bst" aria-selected="false">BST</a>
          <a class="nav-link" id="v-pills-hs-tab" data-toggle="pill" href="#v-pills-hs" role="tab" aria-controls="v-pills-hs" aria-selected="false">Statistics and Heap</a>
          <a class="nav-link" id="v-pills-graphs-tab" data-toggle="pill" href="#v-pills-graphs" role="tab" aria-controls="v-pills-graphs" aria-selected="false">Graphs</a>
          <a class="nav-link" id="v-pills-bit-tab" data-toggle="pill" href="#v-pills-bit" role="tab" aria-controls="v-pills-bit" aria-selected="false">Bit Magic</a>
          <a class="nav-link" id="v-pills-maths-tab" data-toggle="pill" href="#v-pills-maths" role="tab" aria-controls="v-pills-maths" aria-selected="false">Maths</a>
          <a class="nav-link" id="v-pills-geo-tab" data-toggle="pill" href="#v-pills-geo" role="tab" aria-controls="v-pills-geo" aria-selected="false">Geometry</a>
          <a class="nav-link" id="v-pills-trie-tab" data-toggle="pill" href="#v-pills-trie" role="tab" aria-controls="v-pills-trie" aria-selected="false">Trie</a>
          <a class="nav-link" id="v-pills-misc-tab" data-toggle="pill" href="#v-pills-misc" role="tab" aria-controls="v-pills-misc" aria-selected="false">Misc</a>
        
        
        </div>

      </div>
      <div class="col-9">
        <div class="tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade show active" id="v-pills-arrays" role="tabpanel" aria-labelledby="v-pills-arrays-tab"><LL name="arrays" dname="Arrays"/></div>
          <div class="tab-pane fade" id="v-pills-sas" role="tabpanel" aria-labelledby="v-pills-profile-sas-tab"> <LL name="sas"dname="Searching and Sorting"/></div>
          <div class="tab-pane fade" id="v-pills-strings" role="tabpanel" aria-labelledby="v-pills-strings-tab"> <LL name="strings"dname="Strings"/></div>
          <div class="tab-pane fade" id="v-pills-matrix" role="tabpanel" aria-labelledby="v-pills-matrix-tab"><LL name="matrix"dname="Matrix"/></div>
          <div class="tab-pane fade" id="v-pills-bt" role="tabpanel" aria-labelledby="v-pills-bt-tab"> <LL name="bt"dname="Back Tracking"/></div>
          <div class="tab-pane fade" id="v-pills-greedy" role="tabpanel" aria-labelledby="v-pills-greedy-tab">       <LL name="greedy"dname="Greedy"/></div>
          <div class="tab-pane fade" id="v-pills-dp" role="tabpanel" aria-labelledby="v-pills-dp-tab">  <LL name="dp" dname="Dynamic Programming"/></div>
          <div class="tab-pane fade" id="v-pills-st" role="tabpanel" aria-labelledby="v-pills-st-tab">  <LL name="st"dname="Stacks and Queue"/></div>
          <div class="tab-pane fade" id="v-pills-ll" role="tabpanel" aria-labelledby="v-pills-ll-tab">  <LL name="ll"dname="Linked List"/></div>
          <div class="tab-pane fade" id="v-pills-gt" role="tabpanel" aria-labelledby="v-pills-gt-tab">    <LL name="gt"dname="Generic Tree"/></div>
          <div class="tab-pane fade" id="v-pills-btr" role="tabpanel" aria-labelledby="v-pills-btr-tab">  <LL name="btr"dname="Binary Trees"/></div>
          <div class="tab-pane fade" id="v-pills-bst" role="tabpanel" aria-labelledby="v-pills-bst-tab"> <LL name="bst"dname="Binary Search Trees"/></div>
          <div class="tab-pane fade" id="v-pills-hs" role="tabpanel" aria-labelledby="v-pills-hs-tab"> <LL name="hs"dname="Heap and Statistics"/></div>
          <div class="tab-pane fade" id="v-pills-graphs" role="tabpanel" aria-labelledby="v-pills-graphs-tab"><LL name="graphs"dname="Graphs"/></div>
          <div class="tab-pane fade" id="v-pills-bit" role="tabpanel" aria-labelledby="v-pills-bit-tab"><LL name="bit" dname="Bit Magic"/></div>
          <div class="tab-pane fade" id="v-pills-maths" role="tabpanel" aria-labelledby="v-pills-maths-tab"><LL name="maths"dname="Maths"/></div>
          <div class="tab-pane fade" id="v-pills-geo" role="tabpanel" aria-labelledby="v-pills-geo-tab">  <LL name="geo"dname="Geometry"/></div>
          <div class="tab-pane fade" id="v-pills-trie" role="tabpanel" aria-labelledby="v-pills-trie-tab">  <LL name="trie"dname="Trie"/> </div>
          <div class="tab-pane fade" id="v-pills-misc" role="tabpanel" aria-labelledby="v-pills-misc-tab">  <LL name="misc"dname="Misc"/></div>
        
        
        </div>
      </div>
    </div>
    
    
    
    

     
     

</React.Fragment>

  
  );
}

export default List;
