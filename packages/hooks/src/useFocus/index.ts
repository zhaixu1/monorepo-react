import { useRef, useCallback } from 'react';

function useFocus() {
    const ref = useRef(null);

    const focusElementFn = useCallback(() => {
        ref?.current?.focus();
    }, []);
    
    return [ref, focusElementFn]
}

export default useFocus;