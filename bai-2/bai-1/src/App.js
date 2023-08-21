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
              students.map((student,index) => (
                  <tr>
                      <td key={index}>{student.company}</td>
                      <td key={index}>{student.contact}</td>
                      <td key={index}>{student.country}</td>
                  </tr>
              ))
          }
      </table>
  );
}

