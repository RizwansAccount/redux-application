import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSnackBarMessage, snackBarMessageSelector } from './redux/SnackBarReducer'

const App = () => {
  const dispatch = useDispatch();
  const snackbarMessage = useSelector(snackBarMessageSelector);

  const fnAddMessage = () => {
    dispatch(setSnackBarMessage('some message'));
  };

  const fnApiCall = async () => {
    try {
      const response = await fetch('https://comfort-kicks-admin-be.vercel.app/api/admin/test');
      const responseJson = await response.json();
      //some synchronous operations
      if (responseJson?.status === 200) {
        console.log("API call was successful!", responseJson?.data);
      } else {
        console.log("API call failed:", responseJson.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    fnApiCall();
  },[]);

  return (
    <div>
      <span>
        {snackbarMessage}
      </span>
      <button onClick={fnAddMessage}>
        Change Message
      </button>
    </div>
  )
}

export default App