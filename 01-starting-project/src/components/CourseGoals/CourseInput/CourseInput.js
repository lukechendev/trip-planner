import React, { useState } from 'react';

// import styled from 'styled-components';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

// with styledComponents #1
// const FormControl = styled.div`
//   margin: 0.5rem 0;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid #ccc;
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

// &.invalid input {
//   background: #ffd7d7;
//   border-color: red;
// }

// &.invalid label {
//   color: red;
// }
// `;

// with styledComponents #2
// const FormControl = styled.div`
//   margin: 0.5rem 0;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props => (props.invalid ? 'red' : 'black')};
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
//   background: ${props => (props.invalid ? '#ffd7d7' : 'transparent')};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }
// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    console.log(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  // inline style, e.g
  // <p style={{color: !isToggled ? "white" : "red"}}>Style me!</p>

  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
  //       <label>Course Goal</label>
  //       <input type="text" onChange={goalInputChangeHandler} />
  //     </div>
  //     <Button type="submit">Add Goal</Button>
  //   </form >
  // );

  // with styledComponents #1
  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <FormControl className={!isValid && 'invalid'}>
  //       <label>Course Goal</label>
  //       <input type="text" onChange={goalInputChangeHandler} />
  //     </FormControl>
  //     <Button type="submit">Add Goal</Button>
  //   </form >
  // );

  // with styledComponents #2
  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <FormControl invalid={!isValid}>
  //       <label>Course Goal</label>
  //       <input type="text" onChange={goalInputChangeHandler} />
  //     </FormControl>
  //     <Button type="submit">Add Goal</Button>
  //   </form >
  // );

  // with css module
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form >
  );
};

export default CourseInput;
