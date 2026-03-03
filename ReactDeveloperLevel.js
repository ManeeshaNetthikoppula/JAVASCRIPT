// 1. Build a Custom useDebounce Hook
/*import { useState, useEffect } from "react";
function useDebounce(value,delay){
    const[debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return() => clearTimeout(timer);
    }, [value,delay]);
    return debouncedValue;
}*/
// 2. Build a custom usePrevious Hook
import { useEffect, useRef } from "react";
function usePrevious(value){
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    }, [ value]);
    return ref.current;
}
