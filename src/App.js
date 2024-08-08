import './App.css';
import './Global.css';
import { ToastBox } from './ContextAPI/Components/toast';
import MyRoutes from './routing/routes';

function App() {
  return (
    <>
      <ToastBox />
      <MyRoutes />
    </>
  );
}

export default App;
