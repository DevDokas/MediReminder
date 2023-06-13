import { LightThemePrimary, DarkFont } from '@/config/colorPallet';
import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background-color: red;
`;

export const LoadingAnimation = styled.div`
  width: 13vh;
  height: 13vh;
  border-radius: 50%;
  background: conic-gradient(#0000 10%, #637079);
  mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  animation: s3 1s infinite linear;

  @keyframes s3 {
    to {
      transform: rotate(1turn);
    }
  }
`;
