import {students} from "./data/data.js";
import './css/bai-1.css';

export default function App() {
  return (
      <table>
          <h1>Student List</h1>
          <tr>
              <td>company</td>
              <td>contact</td>
              <td>country</td>
          </tr>
          {
              students.map(student => (
                  <tr>
                      <td>{student.company}</td>
                      <td>{student.contact}</td>
                      <td>{student.country}</td>
                  </tr>
              ))
          }
      </table>
  );
}

