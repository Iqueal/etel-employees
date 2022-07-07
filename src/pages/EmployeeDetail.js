import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Navbar } from '../components';

const styles = {
  main: {
    maxWidth: '300px',
    margin: 'auto',
  },
  img: {
    margin: '15px 5px 5px 5px',
    width: '100px',
    height: '100px',
    borderRadius: '50px',
  },
  table: {
    border: '1px solid green',
  },
  td: {
    border: '1px solid green',
    padding: '5px 10px',
  },
};

const EmployeeDetail = () => {
  const { id } = useParams();

  const [emp, setEmp] = useState({});

  const getEmployee = async () => {
    try {
      const res = await fetch(
        `http://reactjs-directory.herokuapp.com/employees/${id}`
      );
      const data = await res.json();
      setEmp(data);
    } catch (error) {
      console.log(error);
    }
  };
  getEmployee();

  return (
    <>
      <Navbar />
      <div style={styles.main}>
        <img
          style={styles.img}
          src={`http://reactjs-directory.herokuapp.com/pics/${emp?.firstName}_${emp?.lastName}.jpg`}
          alt={emp.firstName}
        />
        <h2>
          {emp?.firstName} {emp?.lastName}
        </h2>
        <p>{emp.title}</p>
        <table style={styles.table}>
          <tbody>
            <tr style={styles.tr}>
              <td style={styles.td}>Direct Reports:</td>
              <td style={styles.td}>{emp.reports}</td>
            </tr>
            <tr style={styles.tr}>
              <td style={styles.td}>Call Office:</td>
              <td style={styles.td}>{emp.mobilePhone}</td>
            </tr>
            <tr style={styles.tr}>
              <td style={styles.td}>Call Cell:</td>
              <td style={styles.td}>{emp.officePhone}</td>
            </tr>
            <tr style={styles.tr}>
              <td style={styles.td}>SMS:</td>
              <td style={styles.td}>{emp.mobilePhone}</td>
            </tr>
            <tr style={styles.tr}>
              <td style={styles.td}>Email:</td>
              <td style={styles.td}>{emp.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeeDetail;
