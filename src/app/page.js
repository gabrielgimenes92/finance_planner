'use client';

import Image from 'next/image';
import styles from './page.module.scss';

import Navbar from './components/Navbar';
import AddButton from './components/AddButton';
import EntriesList from './components/EntriesList';
import { useState } from 'react';
import Summary from './components/Summary';

export default function Home() {
  const [entryList, setEntryList] = useState([
    {
      id: 1,
      date: 23,
      description: 'Item 1',
      category: 'Groceries',
      value: -200.0,
    },
    {
      id: 2,
      date: 21,
      description: 'Item 2',
      category: 'Monthly Basic',
      value: -300.0,
    },
    {
      id: 3,
      date: 10,
      description: 'Item 3',
      category: 'Monthly Basic',
      value: -100.0,
    },
    {
      id: 4,
      date: 6,
      description: 'Salary',
      category: 'Salary',
      value: 1000.0,
    },
    {
      id: 5,
      date: 6,
      description: 'Salary',
      category: 'Salary',
      value: 1000.0,
    },
  ]);

  const addEntry = null;

  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.mainContent}>
        <div className={styles.selectedMonth}>
          <h1> &lt; Month &gt;</h1>
        </div>
        <Summary entryList={entryList} />
        <EntriesList entryList={entryList} />
      </div>
      <AddButton />
    </main>
  );
}
