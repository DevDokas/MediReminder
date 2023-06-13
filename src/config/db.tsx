import Dexie, { type Table } from 'dexie';

export interface Profile {
  id?: number;
  name: string;
  lastName: string;
  age: string;
}

export class ProfileClassed extends Dexie {
  profile!: Table<Profile>;

  constructor() {
    super('ApplicationDB');
    this.version(1).stores({
      profile: '++id, name, lastName, age'
    });
  }
}

export const db = new ProfileClassed();
