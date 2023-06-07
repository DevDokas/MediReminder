import { useEffect, useState } from 'react';

import axios from 'axios';

export default function LeafletPage(): any {
  const [searchMedicine, setSearchMedicine] = useState<string>();
  const [resultMedicine, setResultMedicine] = useState<any>({});

  function FetchAPI(): void {
    axios
      .get(`https://bula.vercel.app/pesquisar?nome=${searchMedicine}`)
      .then((res) => {
        setResultMedicine(res.data.content);
        console.log(resultMedicine[0].nomeProduto);
      })
      .catch((res) => {
        console.log(res);
      });
  }

  return (
    <>
      <div>
        <h1>{searchMedicine || 'Leaflet'}</h1>
        <input
          type="text"
          onChange={(e) => {
            setSearchMedicine(e.target.value);
          }}
        />
        <button onClick={FetchAPI}>Buscar</button>
      </div>
    </>
  );
}
