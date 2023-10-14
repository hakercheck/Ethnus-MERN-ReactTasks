import React from 'react';

function App() {
  const tasks = [
    {
      name: 'React Task 1',
      repoLink: 'https://github.com/hakercheck/Ethnus-MERN-React1',
      deployLink: 'https://hakercheck.github.io/Ethnus-MERN-React1/',
    },
    {
      name: 'React Task 2',
      repoLink: 'https://github.com/hakercheck/Ethnus-MERN-React2',
      deployLink: 'https://hakercheck.github.io/Ethnus-MERN-React2/',
    },
    {
      name: 'React Task 3',
      repoLink: 'https://github.com/hakercheck/Ethnus-MERN-React3',
      deployLink: 'https://hakercheck.github.io/Ethnus-MERN-React3/',
    },
    {
      name: 'React Task 4',
      repoLink: 'https://github.com/hakercheck/Ethnus-MERN-React4',
      deployLink: 'https://hakercheck.github.io/Ethnus-MERN-React4/',
    },
    {
      name: 'React Task 5',
      repoLink: 'https://github.com/hakercheck/Ethnus-MERN-React5',
      deployLink: 'https://hakercheck.github.io/Ethnus-MERN-React5/',
    },
    {
      name: 'React Task 6',
      repoLink: 'https://github.com/hakercheck/Ethnus-MERN-React6',
      deployLink: 'https://hakercheck.github.io/Ethnus-MERN-React6/',
    },
  ];

  return (
    <div className="App">
      <table border="2" style={{ margin: '0 auto' }}>
        <caption>
          <big>
            <b>Index</b>
          </big>
        </caption>
        <tr>
          <th>Task Number</th>
          <th>Repository Link</th>
          <th>Deployment Link</th>
        </tr>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td>{task.name}</td>
            <td>
              <a href={task.repoLink} target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </td>
            <td>
              <a href={task.deployLink} target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
