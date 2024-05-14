'use client';

import Image from 'next/image';
import styles from './page.module.scss';
import { v4 as uuidv4 } from 'uuid';
//import DatePicker from 'react-date-picker';
import Calendar from 'react-calendar';

import Navbar from './components/Navbar';
import AddButton from './components/AddButton';
import EntriesList from './components/EntriesList';
import { useState } from 'react';
import Summary from './components/Summary';

export default function Home() {
  const [date, setDate] = useState(Date());
  const [value, setValue] = useState();
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [addModal, setAddModal] = useState(false);

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

  const handleChange = (event) => {
    switch (event.target.name) {
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

  // const createDate = (selectedDate) => {
  //   let local = Intl.DateTimeFormat().resolvedOptions().timeZone;
  //   let newDate = new Date(selectedDate);
  //   setDate(
  //     newDate.toLocaleString('en-US', {
  //       timeZone: local,
  //     })
  //   );
  // };

  const checkDate = () => {
    console.log(date);
  };

  async function onSubmit(event) {
    event.preventDefault();
    let dateString = `${date.getDate()}`;
    console.log(dateString);
    let newEntry = {
      id: uuidv4(),
      date: dateString,
      description: description,
      category: 'Monthly Basic',
      value: parseFloat(value),
    };
    setEntryList((entryList) => [...entryList, newEntry]);
  }

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
      <AddButton toggleAddModal={toggleAddModal} />
      {addModal ? (
        <div className={styles.formWrapper}>
          <form onSubmit={onSubmit} className={styles.form}>
            <label>
              Date:
              <Calendar onChange={setDate} value={date} />
            </label>
            <label>
              Description:
              <input
                type="text"
                id="description"
                name="description"
                onChange={handleChange}
              />
            </label>
            <label>
              Category:
              <select>
                {/* value={this.state.value} onChange={this.handleChange} */}
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>
            <label>
              Value:
              <input
                type="text"
                id="value"
                name="value"
                onChange={handleChange}
              />
            </label>
            <button type="submit">submit</button>
          </form>
        </div>
      ) : (
        <></>
      )}
    </main>
  );
}
