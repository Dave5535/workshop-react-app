import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import DataTable from "workshop-react-app\src\DataTable.js";

// setup requerd a wellcome greating 

const greatingMessage = <div>Hello everyone!</div>




// Tested if bootstrap Was working ( It do work )
const navbar = 

<nav class="navbar navbar-expand-sm bg-dark">

<div class="container-fluid">
  
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link text-white" href="#">Link 1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" href="#">Link 2</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" href="#">Link 3</a>
    </li>
  </ul>
</div>

</nav>





//ReactDOM.render(menu, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(greatingMessage);