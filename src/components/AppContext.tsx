import {createContext, ReactNode} from "react";

// Definindo a interface
interface IAppContent {
    user: string;
    isLoggedIn:boolean;
}

// Criando o contexto com um valor padrão
export const AppContext = createContext<IAppContent | undefined>(undefined);

// Componente Provider
export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const user = 'Thiago';
    const isLoggedIn = false

    return (
        <AppContext.Provider value={{ user, isLoggedIn }}>
            {children}
        </AppContext.Provider>
    );
};
