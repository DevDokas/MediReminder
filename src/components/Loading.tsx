import { LightThemePrimary, DarkFont } from '@/config/colorPallet';
import styled from 'styled-components';

export const Loading = styled.div`
  width: 10vh;
  height: 10vh;
  border-radius: 50%;
  background: conic-gradient(#0000 10%, #637079);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  animation: s3 1s infinite linear;

  @keyframes s3 {
    to {
      transform: rotate(1turn);
    }
  }
`;
