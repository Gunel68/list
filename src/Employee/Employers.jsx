import React, { useState, useEffect } from 'react';

const Employers = () => {
  const [resultData, setResultData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://655f381e879575426b44dbe6.mockapi.io/users')
      .then(res => res.json())
      .then(data => {
        setResultData(data);
        console.log(data)
      });
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };

  const users = resultData.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type='text' placeholder='search' value={searchTerm} onChange={handleSearch}/>

      <ol> {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default Employers;

