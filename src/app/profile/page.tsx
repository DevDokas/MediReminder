'use client';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { db } from '@/config/db';
import { useLiveQuery } from 'dexie-react-hooks';

export default function ProfilePage(): any {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  const profile = useLiveQuery(async () => db.profile.toArray());
  let profileCheck: number;
  async function checking(): Promise<any> {
    await db.profile.count().then((count) => {
      profileCheck = count;
    });
  }

  checking();

  async function attProfile(): Promise<any> {
    if (profileCheck >= 1) {
      try {
        await db.profile.update(1, { name, lastName, age });
      } catch {
        toast.error('Erro');
      }
    } else if (profileCheck === 0) {
      try {
        const id = await db.profile.add({
          name,
          lastName,
          age
        });

        setName('');
        setLastName('');
        setAge('');
        toast.done('Done');
      } catch {
        toast.error('Erro');
      }
    }
  }

  return (
    <>
      <h1>Profile</h1>
      <button> Editar </button>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <input
        type="number"
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <button onClick={attProfile}>Enviar</button>
    </>
  );
}
