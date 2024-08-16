import { useState } from 'react';
import useIsomorphicEffect from './useIsomorphicEffect';


export const useAutoTheme = (theme: string, autoThemeDetection: boolean) => {

    const [themeState, setThemeState] = useState(theme);
    const isoEffect = useIsomorphicEffect()

    isoEffect(() => {
        if (!autoThemeDetection) return;
        if (theme === 'ios' || theme === 'material') {
            if (themeState !== theme) setThemeState(theme);
        } else if (
            themeState === 'parent' &&
            typeof window !== 'undefined' &&
            typeof document !== 'undefined'
        ) {
            const htmlEl = document.documentElement;
            if (htmlEl) {
                if (htmlEl.classList.contains('ios')) {
                    setThemeState('ios');
                } else if (
                    htmlEl.classList.contains('md') ||
                    htmlEl.classList.contains('material')
                ) {
                    setThemeState('material');
                }
            }
        }
    }, [theme]);
    
    return autoThemeDetection ? themeState : theme;
};
