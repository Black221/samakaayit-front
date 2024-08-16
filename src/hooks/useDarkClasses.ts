
import { useContext } from 'react';
import { ThemeContext } from './../providers/ThemeProvider';

const useDarkClasses = () => {
  const context = useContext(ThemeContext);

    return (classNames: any) => {
        if (!context.dark) return '';
        return classNames;
    };
};

export { useDarkClasses };