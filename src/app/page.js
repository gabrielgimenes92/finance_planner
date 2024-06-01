'use client';

import styles from './page.module.scss';
import { v4 as uuidv4 } from 'uuid';

import Navbar from './components/Navbar';
import AddButton from './components/AddButton';
import EntriesList from './components/EntriesList';
import { useEffect, useState } from 'react';
import Summary from './components/Summary';
import { isDateValid, parseUTCDate } from './utils/dateUtils';
import { dummyEntries } from './dummy/dummyData';
import EntryForm from './components/EntryForm';

export default function Home() {
  const currentDate = new Date();

  const [selectedMonth, setSelectedMonth] = useState(currentDate);
  const [date, setDate] = useState(currentDate);
  const [value, setValue] = useState();
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [addModal, setAddModal] = useState(false);
  const [entryList, setEntryList] = useState(dummyEntries);
  const [filteredEntryList, setFilteredEntryList] = useState(dummyEntries)
  const [summary, setSummary] = useState({
    income: 0,
    expense: 0,
    total: 0,
  });

  useEffect(() => {
    filterList();
    updateSummary();
  }, [filteredEntryList, selectedMonth]);

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'date':
        let newDate = parseUTCDate(event.target.value);
        setDate(newDate);
        break;
      case 'category':
        setCategory(event.target.value);
        console.log(category)
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
    setAddModal(!addModal);
  };

  async function onSubmit(event) {
    event.preventDefault();
    let newEntry = {
      id: uuidv4(),
      date: date,
      description: description,
      category: category,
      value: parseFloat(value),
    };
    if (isDateValid(newEntry.date)) {
      setEntryList((entryList) => [...entryList, newEntry]);
      toggleAddModal();
    }
  }

  const handleMonthChange = (event) => {
    let newMonth = 0;
    switch (event.target.getAttribute('name')) {
      case 'add':
        newMonth = selectedMonth.setDate(1);
        newMonth = selectedMonth.setMonth(selectedMonth.getMonth() + 1);
        console.log(newMonth)
        setSelectedMonth(new Date(newMonth));
        break;
      case 'subtract':
        newMonth = selectedMonth.setDate(1);
        newMonth = selectedMonth.setMonth(selectedMonth.getMonth() - 1);
        setSelectedMonth(new Date(newMonth));
        break;
    }
  };

 const updateSummary = async () => {
    let incomeTemp = 0;
    let expenseTemp = 0;
    filteredEntryList.forEach((element) => {
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

  const handleDelete = (index) => {
    let newArray = entryList.filter((item) => item.id !== index);
    setEntryList(newArray);
  };

  const filterList = () => {
    let newFilteredList = entryList.filter(function (entryList) {
      if (
        entryList.date.getMonth() == selectedMonth.getMonth() &&
        entryList.date.getFullYear() == selectedMonth.getFullYear()
      )
        return entryList.date.getMonth() == selectedMonth.getMonth();
    });
    setFilteredEntryList(newFilteredList)
  }

  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.mainContent}>
        <div className={styles.selectedMonth}>
          <h1
            name="subtract"
            className={styles.selectMonthButton}
            onClick={handleMonthChange}
          >
            &lt;
          </h1>
          <h1>
            {selectedMonth.toLocaleDateString('en-us', {
              month: 'short',
              year: 'numeric',
            })}
          </h1>
          <h1
            name="add"
            className={styles.selectMonthButton}
            onClick={handleMonthChange}
          >
            &gt;
          </h1>
        </div>
        <Summary
          summary={summary}
          updateSummary={updateSummary}
          filteredEntryList={filteredEntryList}
        />
        <EntriesList
          filteredEntryList={filteredEntryList}
          handleDelete={handleDelete}
          selectedMonth={selectedMonth}
        />
      </div>
      <AddButton toggleAddModal={toggleAddModal} />
      {addModal ? (
        <EntryForm
          onSubmit={onSubmit}
          handleChange={handleChange}
          toggleAddModal={toggleAddModal}
          currentDate={currentDate}
        />
      ) : (
        <></>
      )}
    </main>
  );
}
