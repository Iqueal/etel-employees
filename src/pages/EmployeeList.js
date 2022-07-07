import React from 'react';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { Navbar } from '../components';
import { AppContext } from '../context';

const styles = {
  main: {
    maxWidth: '300px',
    margin: 'auto',
  },
  title: {
    color: 'gray',
  },
  flex: {
    display: 'flex',
    borderBottom: '2px solid green',
    textDecoration: 'none',
  },
  img: {
    margin: '25px',
    width: '50px',
    height: '50px',
    borderRadius: '50px',
  },
};

const EmployeeList = () => {
  const data = useContext(AppContext);

  return (
    <div>
      <Navbar />
      <section style={styles.main}>
        {data?.map((emp, i) => (
          <Link to={`/employees/${emp.id}`} key={i} style={styles.flex}>
            <div>
              <img
                style={styles.img}
                src={`https://reactjs-directory.herokuapp.com/pics/${emp?.firstName}_${emp?.lastName}.jpg`}
                alt={`${emp.firstName} ${emp.lastName}`}
              />
            </div>
            <div>
              <h3>
                {emp.firstName} {emp.lastName}
              </h3>
              <h4 style={styles.title}>{emp.title}</h4>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default EmployeeList;
