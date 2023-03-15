import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import "./DataTableCss.css"

const studentList = [
  { id: 1, firstName: "David", lastName: "Svantesson", age: 19, contery: "Sweden",city:"karlskrona" },
  { id: 2, firstName: "Test", lastName: "Test", age: '?', contery: "Testcontery",city:"Testcity" },
  { id: 3, firstName: "Bob", lastName: "Smith", age: 30, contery: "unknown",city:"not discovered" }
];

const ShowStudentDetails = ({ student }) => {
    return (
        <div className="student-details">
           
            <th >Student information</th>
            <div className='item-details'>
            <div style={{ fontWeight: 'bold' }}>{student.contery} {student.city}</div>

            <div>Id: {student.id}</div>
  <div>Name: {student.firstName} {student.lastName}</div>
  <div>Age: {student.age}</div>
         </div>
      
        </div>
      );
    };

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

const TableAction = ({ onClick }) => {
  return (
    <button type="button" className="btn btn-info" onClick={onClick}>
      Details
    </button>
  );
};

const TableRow = ({ student, onDetailsClick, onHideClick }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDetailsClick = () => {
    setShowDetails(true);
    onDetailsClick(student.id);
  };

  const handleHideClick = () => {
    setShowDetails(false);
    onHideClick(student.id);
  };

  return (
    <tr key={student.id}>
      <td>{student.id}</td>
      <td>{student.firstName}</td>
      <td>{student.lastName}</td>
      <td>{student.age}</td>
      <td>
        {showDetails ? (
          <div>
            <TableAction onClick={handleHideClick} label="Hide" />
          </div>
        ) : (
          <TableAction onClick={handleDetailsClick} label="Details" />
        )}
      </td>
    </tr>
  );
};

const DataTable = () => {
  const [detailsStudentId, setDetailsStudentId] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  
  const handleDetailsClick = (id) => {
    setDetailsStudentId(id);
  };

  const handleHideClick = (id) => {
    if (detailsStudentId === id) {
      setDetailsStudentId(null);
    }
  };

  return (
    <div className="container mt-3 border">
      <table className="table table-striped border">
        <TableHeader />
        <tbody>
          {studentList.map((student) => (
            <TableRow
              key={student.id}
              student={student}
              onDetailsClick={handleDetailsClick}
              onHideClick={handleHideClick}
              showDetails={showDetails}
            />
          ))}
        </tbody>
      </table>
      <div className="student-details">
        {detailsStudentId && (
        <ShowStudentDetails student={studentList.find((s) => s.id === detailsStudentId)} />
       )}
      </div>
    </div>
  );
};
export default DataTable;