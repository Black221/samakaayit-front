import { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';

interface ThemeProps {
    ios?: boolean;
    material?: boolean;
}

const useTheme = ({ ios, material } : ThemeProps) => {

    const context = useContext(ThemeContext);
    let theme = context.theme || 'ios';
    if (ios) theme = 'ios';
    if (material) theme = 'material';
    return theme;
};

export { useTheme };
