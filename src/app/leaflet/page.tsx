'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaSistrix } from 'react-icons/fa';

import { Loading } from '@/components/Loading';
import {
  LeafletContainer,
  SearchContainer,
  SearchForm,
  SearchBar,
  SearchButton,
  ResultContainer,
  ResultItem,
  ResultName
} from '@/styles/leafletStyle';
import axios from 'axios';

export default function LeafletPage(): any {
  const [searchMedicine, setSearchMedicine] = useState<string>();
  const [resultMedicine, setResultMedicine] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  function FetchAPI(e: any): void {
    e.preventDefault();
    setLoading(true);
    axios
      .get(`https://bula.vercel.app/pesquisar?nome=${searchMedicine}`)
      .then((res) => {
        setResultMedicine(res.data.content);
        setLoading(false);
        console.log(resultMedicine[0].nomeProduto);
      })
      .catch((res) => {
        console.log(res);
        setLoading(false);
      });
  }

  return (
    <LeafletContainer>
      <SearchContainer>
        <SearchForm onSubmit={FetchAPI}>
          <SearchBar
            type="text"
            onChange={(e) => {
              setSearchMedicine(e.target.value);
            }}
          />
          <SearchButton type="submit">
            <FaSistrix />
          </SearchButton>
        </SearchForm>
      </SearchContainer>
      <ResultContainer>
        {loading ? (
          <Loading />
        ) : (
          resultMedicine.map((res: any) => {
            return (
              <ResultItem key={res.numeroRegistro}>
                <ResultName>{res.nomeProduto}</ResultName>
                <Link
                  href={`https://bula.vercel.app/pdf?id=${res.idBulaProfissionalProtegido}`}
                  target="_blank"
                >
                  Ler a bula
                </Link>
              </ResultItem>
            );
          })
        )}
      </ResultContainer>
    </LeafletContainer>
  );
}
