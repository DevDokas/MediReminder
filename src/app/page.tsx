'use client';
import React from 'react';

import { db } from '@/config/db';
import { useLiveQuery } from 'dexie-react-hooks';

export default function HomePage(): any {
  const profile = useLiveQuery(async () => db.profile.toArray());
  return (
    <main>
      <h1>Home</h1>
      <ul>
        {profile?.map((person: any): any => {
          return (
            <li key={person.id}>
              {person.name}, {person.lastName}, {person.age}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
