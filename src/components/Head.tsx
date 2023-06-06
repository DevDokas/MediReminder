import { LightThemePrimary, DarkFont } from '@/config/colorPallet';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  position: fixed;
  align-items: center;
  top: 0;
  border: 0;
  border-radius: 0 0 1vh 1vh;
  padding: 0 5vw 0 5vw;
  height: 12vh;
  width: 100%;
  gap: 3vw;
  background-color: ${LightThemePrimary};
`;

export const PhotoContainer = styled.div`
  border: 0;
  border-radius: 50%;
  height: 10vh;
  width: 10vh;
  position: relative;
  overflow: hidden;
`;

export const Photo = styled.img`
  height: 10vh;
`;

export const InfoContainer = styled.div`
  color: ${DarkFont};
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

export const Name = styled.p`
  font-size: 2vh;
  font-weight: 600;
`;

export const Streak = styled.span``;
