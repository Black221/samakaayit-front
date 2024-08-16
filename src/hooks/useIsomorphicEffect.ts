import { DependencyList, EffectCallback, useEffect, useLayoutEffect } from 'react';


export default function useIsomorphicEffect() {

    const renderEffect: (effect: EffectCallback, deps?: DependencyList | undefined) => void = 
        typeof window !== 'undefined' ? useLayoutEffect : useEffect;
    
    return renderEffect;
}