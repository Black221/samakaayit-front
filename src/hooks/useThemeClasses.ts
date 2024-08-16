import { useContext } from 'react';
import { cls } from '../shared/cls.js';
import { ThemeContext } from '../providers/ThemeProvider.js';

interface IPropClasses {
    classesObj: Obj;
    theme: string;
    state?: string;
    addBaseClassName?: string;
}

interface Obj {
    [key: string]: any | Obj;
}

const propClasses = ({classesObj, theme, state}: IPropClasses) => {
    if (typeof classesObj === 'string') return classesObj;
    const arr = [classesObj.common, classesObj[theme]];
    if (state && classesObj[state]) {
        if (typeof classesObj[state] === 'string') arr.push(classesObj[state]);
        else {
        arr.push(classesObj[state].common, classesObj[state][theme]);
        }
    }
    return arr;
};
const themeClasses = ({classesObj, theme, addBaseClassName}: IPropClasses) => {
    const c: Obj = {};
    const themeSubKeys = ['common', 'ios', 'material'];
    Object.keys(classesObj).forEach((key: string) => {
        const addBaseClass = key === 'base' ? addBaseClassName : '';
        const hasStates =
        typeof classesObj[key] !== 'string' &&
        Object.keys(classesObj[key]).filter(
            (state) => !themeSubKeys.includes(state)
        ).length > 0;
        if (!hasStates) {
        c[key] = cls(propClasses({classesObj :classesObj[key], theme}), addBaseClass);
        return;
        }
        c[key] = {};
        const defaultStateClasses = propClasses({classesObj:classesObj[key], theme});
        c[key].default = cls(defaultStateClasses, addBaseClass);
        Object.keys(classesObj[key])
        .filter((state) => !themeSubKeys.includes(state))
        .forEach((state) => {
            c[key][state] = cls(
            defaultStateClasses,
            propClasses({classesObj :classesObj[key], theme, state}),
            addBaseClass
            );
        });
    });
    return c;
};

const useThemeClasses = ({ ios, material }: {
    ios?: boolean;
    material?: boolean;
} = { }) => {
    const context = useContext(ThemeContext);
    let theme = context.theme || 'ios';
    if (ios) theme = 'ios';
    if (material) theme = 'material';
    return (classesObj: Obj, addBaseClassName: string) =>
        themeClasses({classesObj, theme, addBaseClassName});
};

export { useThemeClasses };