import { useEffect, useState } from "react";


const Index = () => {

  const [data,setData] = useState([])
  console.log(data)

  const getData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      const jsonData = await res.json();

      setData(jsonData)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>hey</h2>

    {data?.map((v,i) => {
      return(
        <h1> {v?.company?.name} </h1>
      )
    })}

    </div>
  );
};

export default Index;
