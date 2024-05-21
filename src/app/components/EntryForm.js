import React from 'react';
import styles from '../page.module.scss';

const EntryForm = (props) => {

    return (
      <div className={styles.formWrapper}>
        <form onSubmit={props.onSubmit} className={styles.form}>
          <label>
            Date:
          <input type='date' name="date" onChange={props.handleChange}/>
          </label>
          <label>
            Description:
            <input
              type="text"
              id="description"
              name="description"
              onChange={props.handleChange}
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
              onChange={props.handleChange}
            />
          </label>
          <button type="submit">submit</button>
        </form>
      </div>
    )


}

export default EntryForm;