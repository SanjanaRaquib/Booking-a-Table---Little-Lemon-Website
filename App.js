import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import BookingForm from './BookingForm';
import Logo from './logo.jpg'; 

const initialState = {
  availableTimes: [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Handle state update logic here
      return { ...state, availableTimes: action.payload };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    fetchAPI(today)
      .then((data) => {
        dispatch({ type: 'UPDATE_TIMES', payload: data });
      })
      .catch((error) => console.error(error));
  }, []);

  const updateTimes = (selectedDate) => {
    fetchAPI(selectedDate)
      .then((data) => {
        dispatch({ type: 'UPDATE_TIMES', payload: data });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <img src={Logo} alt="Little Lemon Restaurant Logo" /> {/* Display your logo */}
      <h1>Little Lemon Restaurant</h1>
      <BookingForm availableTimes={state.availableTimes} updateTimes={updateTimes} />
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;


