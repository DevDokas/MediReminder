'use client';
import { useEffect, useState } from 'react';

import './globals.css';

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
import { type Profile, db } from '@/config/db';
import { useLiveQuery } from 'dexie-react-hooks';

import ProfileImage from '../../public/profile.png';
import CalendarPage from '../app/calendar/page';
import LeafletPage from '../app/leaflet/page';
import ProfilePage from '../app/profile/page';
import HomePage from './page';

export const metadata = {
  title: 'MediReminder',
  description:
    ' Your ultimate medication management app designed to help you effortlessly remember and stay on track with your prescribed medications.'
};

export default function RootLayout({
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
  const profile = useLiveQuery(async () => db.profile.toArray());

  const userName = profile
    ?.filter((res) => {
      return res.id === 1;
    })
    .map((res) => {
      return res.name;
    });

  const userLastName = profile
    ?.filter((res) => {
      return res.id === 1;
    })
    .map((res) => {
      return res.lastName;
    });

  const userAge = profile
    ?.filter((res) => {
      return res.id === 1;
    })
    .map((res) => {
      return res.age;
    });

  console.log(profile);
  console.log(userName);

  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>MediReminder</title>
        <meta
          name="description"
          content="Your ultimate medication management app designed to help you effortlessly remember and stay on track with your prescribed medications."
        />
      </head>
      <body>
        <Header>
          <PhotoContainer>
            <Photo src={ProfileImage.src} />
          </PhotoContainer>
          <InfoContainer>
            <Name>
              {userName} {userLastName}, <span>{userAge} anos</span>
            </Name>
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
      </body>
    </html>
  );
}
