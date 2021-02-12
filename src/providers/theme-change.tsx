import React, {ReactNode, useContext} from 'react';
import {Theme, themeChanger} from '../styles/themes/theme-change';


const change = themeChanger();
let currentTheme: Theme = 'dark'
change(currentTheme);

interface ThemeChangeContext {
    current: Theme,
    change: ReturnType<typeof themeChanger>
}

const ThemeChange = React.createContext<ThemeChangeContext>({
    current: currentTheme,
    change
});



export default function ThemeChangeProvider(props: { children: ReactNode }): JSX.Element {
    return <ThemeChange.Provider
        value={{
            current: currentTheme,
            change: (theme: Theme) => {
                currentTheme = theme;
                return change(theme);
            }
        }}
    >
        {props.children}
    </ThemeChange.Provider>
}

export function useThemeChanger(): ThemeChangeContext {
    return useContext(ThemeChange);
}
