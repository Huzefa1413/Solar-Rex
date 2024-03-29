import { CombineComponents } from "./CombineContext";
import { ThemeProvider } from "./Components/apexchartDarkLightMode";
import { AuthProvider } from "./Components/auth";
import { UserDataProvider } from "./Components/userData";
import { PathnameProvider } from "./Components/PathnameContext";
import { ConfirmProvider } from "./Components/confirm";
import { ToastProvider } from "./Components/toast";


const providers = [
    AuthProvider,
    UserDataProvider,
    ThemeProvider,
    PathnameProvider,
    ConfirmProvider,
    ToastProvider
]

export const AppContextProvider = CombineComponents(...providers)