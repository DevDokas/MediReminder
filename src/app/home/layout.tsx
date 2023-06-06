'use client';
import * as React from 'react';
import { useState } from 'react';

import { Body } from '@/components/Body';
import {
  Header,
  PhotoContainer,
  Photo,
  InfoContainer,
  Name,
  Streak
} from '@/components/Head';
import {
  Navbar,
  HomeButton,
  LeafletButton,
  CalendarButton,
  ProfileButton
} from '@/components/Navbar';

import ProfileImage from '../../../public/profile.png';
import CalendarPage from '../calendar/page';
import LeafletPage from '../leaflet/page';
import ProfilePage from '../profile/page';
import HomePage from './page';

export default function ProfileLayout({
  children
}: {
  children: React.ReactNode;
}): any {
  const [selectMain, setSelectMain] = useState<boolean>(true);
  const [enabledMain, setEnabledMain] = useState<string>('Enabled');
  const [selectLeaflet, setSelectLeaflet] = useState<boolean>(false);
  const [enabledLeaflet, setEnabledLeaflet] = useState<string>('Disabled');
  const [selectCalendar, setSelectCalendar] = useState<boolean>(false);
  const [enabledCalendar, setEnabledCalendar] = useState<string>('Disabled');
  const [selectProfile, setSelectProfile] = useState<boolean>(false);
  const [enabledProfile, setEnabledProfile] = useState<string>('Disabled');

  // TODO: Vincular front-end com backend (Nome, Streaks e foto do usuário ativo)
  return (
    <>
      <Header>
        <PhotoContainer>
          <Photo src={ProfileImage.src} />
        </PhotoContainer>
        <InfoContainer>
          <Name>Igor Nogueira Gomes de Sousa</Name>
          <Streak>X Dias</Streak>
        </InfoContainer>
      </Header>
      <Body>
        {selectMain ? <HomePage /> : null}
        {selectLeaflet ? <LeafletPage /> : null}
        {selectCalendar ? <CalendarPage /> : null}
        {selectProfile ? <ProfilePage /> : null}
      </Body>
      <Navbar>
        <HomeButton
          className={enabledMain}
          onClick={function () {
            setSelectMain(true);
            setSelectLeaflet(false);
            setSelectCalendar(false);
            setSelectProfile(false);
            setEnabledMain('Enabled');
            setEnabledLeaflet('Disabled');
            setEnabledCalendar('Disabled');
            setEnabledProfile('Disabled');
          }}
        />
        <LeafletButton
          className={enabledLeaflet}
          onClick={function () {
            setSelectMain(false);
            setSelectLeaflet(true);
            setSelectCalendar(false);
            setSelectProfile(false);
            setEnabledMain('Disabled');
            setEnabledLeaflet('Enabled');
            setEnabledCalendar('Disabled');
            setEnabledProfile('Disabled');
          }}
        />
        <CalendarButton
          className={enabledCalendar}
          onClick={function () {
            setSelectMain(false);
            setSelectLeaflet(false);
            setSelectCalendar(true);
            setSelectProfile(false);
            setEnabledMain('Disabled');
            setEnabledLeaflet('Disabled');
            setEnabledCalendar('Enabled');
            setEnabledProfile('Disabled');
          }}
        />
        <ProfileButton
          className={enabledProfile}
          onClick={function () {
            setSelectMain(false);
            setSelectLeaflet(false);
            setSelectCalendar(false);
            setSelectProfile(true);
            setEnabledMain('Disabled');
            setEnabledLeaflet('Disabled');
            setEnabledCalendar('Disabled');
            setEnabledProfile('Enabled');
          }}
        />
      </Navbar>
    </>
  );
}
