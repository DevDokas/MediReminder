'use client';
import Link from 'next/link';
import * as React from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FolderIcon from '@mui/icons-material/Folder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestoreIcon from '@mui/icons-material/Restore';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

export default function ProfileLayout({
  children
}: {
  children: React.ReactNode;
}): any {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string): any => {
    setValue(newValue);
  };

  return (
    <>
      <header>hey</header>
      {children}
      <BottomNavigation
        sx={{ position: 'fixed', bottom: 0, width: '100%' }}
        value={value}
        onChange={handleChange}
      >
        <Link href="/home">
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<RestoreIcon />}
          />
        </Link>
        <Link href="/home/leaflet">
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
          />
        </Link>
        <Link href="/home/calendar">
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon />}
          />
        </Link>
        <Link href="/home/profile">
          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<FolderIcon />}
          />
        </Link>
      </BottomNavigation>
    </>
  );
}
