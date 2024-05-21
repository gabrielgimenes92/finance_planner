'use client';

import Image from 'next/image';
import styles from './page.module.scss';
import { v4 as uuidv4 } from 'uuid';

import Navbar from './components/Navbar';
import AddButton from './components/AddButton';
import EntriesList from './components/EntriesList';
import { useEffect, useState } from 'react';
import Summary from './components/Summary';
import { parseUTCDate } from './utils/dateUtils';
import { dummyEntries } from './dummy/dummyData';
import EntryForm from './components/EntryForm';

export default function Home() {
  const [date, setDate] = useState(Date());
  const [value, setValue] = useState();
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [addModal, setAddModal] = useState(false);
  const [entryList, setEntryList] = useState(dummyEntries);
  const [summary, setSummary] = useState({
    income: 0,
    expense: 0,
    total: 0,
  });
  
  useEffect(() => {
    console.log('updated');
    updateSummary();
  }, [entryList]);

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'date':
        let newDate = parseUTCDate(event.target.value)
        setDate(newDate)
        break
      case 'category':
        break;
      case 'value':
        setValue(event.target.value);
        break;
      case 'description':
        setDescription(event.target.value);
        break;
    }
  };

  const toggleAddModal = () => {
    console.log(addModal);
    setAddModal(!addModal);
  };

  async function onSubmit(event) {
    event.preventDefault();
    let dateString = `${date.getDate()}`;
    let newEntry = {
      id: uuidv4(),
      date: dateString,
      description: description,
      category: 'Monthly Basic',
      value: parseFloat(value),
    };
    setEntryList((entryList) => [...entryList, newEntry]);
    updateSummary();
  }

  const updateSummary = () => {
    let incomeTemp = 0;
    let expenseTemp = 0;
    entryList.forEach((element) => {
      if (element.value < 0) {
        expenseTemp += element.value;
      } else {
        incomeTemp += element.value;
      }
    });
    setSummary({
      income: incomeTemp,
      expense: expenseTemp,
      total: incomeTemp + expenseTemp,
    });
  };

  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.mainContent}>
        <div className={styles.selectedMonth}>
          <h1> &lt; Month &gt;</h1>
        </div>
        <Summary summary={summary} updateSummary={updateSummary} />
        <EntriesList entryList={entryList} />
      </div>
      <AddButton toggleAddModal={toggleAddModal} />
      {addModal ? (
       <EntryForm onSubmit={onSubmit} handleChange={handleChange} toggleAddModal={toggleAddModal}/>
      ) : (
        <></>
      )}
    </main>
  );
}
