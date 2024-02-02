import { useEffect, useState } from "react";

export default function Json() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  console.log(data)

  return (
    <div>

    </div>
  );
}
