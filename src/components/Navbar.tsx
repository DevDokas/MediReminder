import { FaHome, FaPills, FaRegCalendarCheck, FaUser } from 'react-icons/fa';

import {
  LightThemePrimary,
  EnabledButton01,
  DisabledButton01
} from '@/config/colorPallet';
import styled from 'styled-components';

export const Navbar: any = styled.nav`
  padding: 0 5vw 0 5vw;
  border: 0;
  border-radius: 1vh 1vh 0 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 7vh;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: ${LightThemePrimary};

  .Enabled {
    color: ${EnabledButton01};
    animation: selectButton 0.1s linear;

    @keyframes selectButton {
      0% {
        transform: scale(1);
        transform: translate(0, -0.5vh);
      }
      50% {
        transform: scale(1.3);
        transform: translate(0, -1vh);
      }
      100% {
        transform: scale(1.2);
      }
    }
  }
`;

export const HomeButton: any = styled(FaHome)`
  color: ${DisabledButton01};
  font-size: 4.5vh;
`;

export const LeafletButton: any = styled(FaPills)`
  color: ${DisabledButton01};
  font-size: 4.5vh;
`;

export const CalendarButton: any = styled(FaRegCalendarCheck)`
  color: ${DisabledButton01};
  font-size: 4.5vh;
`;

export const ProfileButton: any = styled(FaUser)`
  color: ${DisabledButton01};
  font-size: 4.5vh;
`;
