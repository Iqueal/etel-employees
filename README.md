# Getting Started with ETEL

This project is based on ReactJs and an api created with node (deployed on heroku) with base url: http://reactjs-directory.herokuapp.com

## End Points:

- http://reactjs-directory.herokuapp.com/employees

- http://reactjs-directory.herokuapp.com/employees/2

- http://reactjs-directory.herokuapp.com/pics/Eugene_Lee.jpg

## Refrence GitHub Repo:

https://github.com/ccoenraets/directory-react-nodejs/blob/master/server.js

## Refrence Screenshots:

![image](/public/assets/directory_search.png)

![image](/public/assets/directory_details.png)

# My approach towords this project :

<ol>
<li>yarn create react-app etel-employees</li>
<li>Deleted unnecessary files and assets.</li>
<li>Cleared README.md to write my own content.</li>
<li>Initial setup git commit.</li>
<li>added some important files and folders for better organization:</li>
<li><ol type="a">
  <li>pages:</li>
  <ul>
   <li>Page for List of Employees (employeeList.js)</li> 
   <li>Page for Employee Details (employeeDetail.js)</li> 
  </ul>
  <li>components:</li> 
  <ul>
   <li> Navbar component (Navbar.jsx)</li>
   <li> Single List Item Employee (EmployeeCard.jsx)</li>
   <li> Single Detail of Employee eg) email (DetailItem.jsx)</li>
   <li> Export all files from single file (index.js)</li>
  </ul>
  </ol>
   </li>
  <li>yarn add react-router-dom@6</li>
</ol>
