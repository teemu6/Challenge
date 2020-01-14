import React from 'react';
import './App.css';
import { UserInput } from './UserInput';
import { Snackbar } from '@material-ui/core';
import InputList from './InputList';
import InputForm from './InputForm';

const App: React.FC = () => {
  const [inputs, setInput] = React.useState<UserInput[]>(() => {
    const inputsLocalStorage = localStorage.getItem('userInputs') || '';
    if (inputsLocalStorage === '') return []
    else return JSON.parse(inputsLocalStorage);
  });
  const [toastMessage, setToastMessage] = React.useState<string>("");
  const [openToast, setOpenToast] = React.useState<boolean>(false);

  React.useEffect(() => {
    localStorage.setItem('userInputs', JSON.stringify(inputs));
  }, [inputs]);

  const submitHandler = (userInput: UserInput) => {
    let tempinputs: UserInput[] = [];
    tempinputs = [...inputs];
    tempinputs.push(userInput);
    setInput(tempinputs);
    setToastMessage("Entry added succesfully");
    setOpenToast(true);
  }

  const deleteHandler = (index: number) => {
    let tempinputs: UserInput[] = [];
    tempinputs = [...inputs];
    tempinputs.splice(index, 1);
    setInput(tempinputs);
    setToastMessage("Entry deleted succesfully");
    setOpenToast(true);
  };

  return (
    <div className="App">
      <InputForm onSubmit={submitHandler} />
      <InputList inputs={inputs} deleteInput={deleteHandler} />
      <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={openToast}
      autoHideDuration={3000}
      onClose={() => setOpenToast(false)}
      message={toastMessage}/>
    </div>
  );
}

export default App;
