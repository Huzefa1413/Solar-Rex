import { CombineComponents } from './CombineContext';
import { AuthProvider } from './Components/auth';
// import { UserDataProvider } from './Components/userData';
import { ToastProvider } from './Components/toast';

const providers = [
  AuthProvider,
  // UserDataProvider,
  ToastProvider,
];

export const AppContextProvider = CombineComponents(...providers);
