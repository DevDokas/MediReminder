import { LightThemePrimary } from '@/config/colorPallet';
import styled from 'styled-components';

export const LeafletContainer = styled.div`
  background-color: #000;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3vh;
`;

export const SearchForm = styled.form``;

export const SearchBar = styled.input`
  border: none;
  border-radius: 3vh 0 0 3vh;
  padding: 0 3vh 0 3vh;
  height: 5vh;
  width: 70vw;

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  border: none;
  border-radius: 0 3vh 3vh 0;
  outline: 0;
  height: 5vh;
  width: 5vh;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ResultItem = styled.div``;

export const ResultName = styled.p``;
