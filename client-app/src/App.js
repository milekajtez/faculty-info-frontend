import { Provider } from 'react-redux';
import store from './redux/store';
import { Navbar } from './components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Navbar />
    </Provider>
  );
}

export default App;
