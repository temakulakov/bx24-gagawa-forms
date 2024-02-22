import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {RecoilRoot} from "recoil";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {createTheme, ThemeProvider} from '@mui/material/styles';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {},

    }
});

const darkTheme = createTheme({
    palette: {
        // Настройка основного цвета
        primary: {
            main: '#FECE30', // Синий цвет в качестве примера
        },
        // Настройка фонового цвета
        background: {
            default: '#1D2621', // Тёмно-серый фон
            paper: '#1D2621', // Чуть светлее фона, для компонентов на основе бумаги
        },

        // Если вам нужен тёмный режим, установите mode: 'dark'
        mode: 'dark', // Или 'dark' в зависимости от ваших предпочтений
    },
    typography: {
        fontSize: 17,
        fontWeightRegular: 600
    }
});

root.render(
    <React.StrictMode>
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={darkTheme}>
                    <App/>
                </ThemeProvider>
                <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        </RecoilRoot>
    </React.StrictMode>
);

