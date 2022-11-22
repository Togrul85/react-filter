import React from 'react'


function Users() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);

  const handleClick = React.useCallback(() => {
      setIsLoading(true);
      fetch("https://SECRET.mockapi.io").then((response) => response.json()
      )
      .then((data) => {
          setUsers(data);

      }).catch(() => {
          console.log("error");

      }).finally(() => {
          setIsLoading(false);
      })

      setClicked(true);

  }, []);

  const FilteredData = React.useMemo(() => {
      let test = [];
      if (users) {
          test = users;
      }   
      return test;

  }, [users, clicked]);


  return (
      <div>
          <button onClick={handleClick}>Daxil ol</button>
          {isLoading ? 
          
          (<h5>Loading</h5>) :
             
          (FilteredData.map(({ name,  age,id }) => (
                  <h5 key={id}>  id :{id} name:{name} age: {age}</h5>
              ))
              )}
      </div>
  );
}

export default Users;

