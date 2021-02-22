import React from 'react';

 function PaginationPart({handleSelectPage}) {
const handleSelectPageId = (e)=>{
	const numP = e.target.id
	handleSelectPage(numP)
}


  return (
    <nav aria-label="Page navigation example" onClick={handleSelectPageId}>
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#" id='50'>1</a></li>
    <li class="page-item"><a class="page-link" href="#" id='100'>2</a></li>
    <li class="page-item"><a class="page-link" href="#" id='150'>3</a></li>
  </ul>
</nav>
  );
}

export default PaginationPart
