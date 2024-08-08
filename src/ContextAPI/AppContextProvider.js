import { CombineComponents } from './CombineContext';
import { AuthProvider } from './Components/auth';
import { ToastProvider } from './Components/toast';

const providers = [AuthProvider, ToastProvider];

export const AppContextProvider = CombineComponents(...providers);
