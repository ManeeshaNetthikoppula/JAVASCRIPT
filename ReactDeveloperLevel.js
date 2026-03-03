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
/*import { useEffect, useRef } from "react";
function usePrevious(value){
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    }, [ value]);
    return ref.current;
}*/
// 3. Infinite Scroll Component
import { useEffect, useState } from "react";
function InfiniteScroll(){
    cont [DataTransferItemList, setItems] = useState([]);
    const[ page, setPage]= useState(1);
    useEffect(() =>{
        fetch('https: //jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}')
        .then(res => res.json())
        .then(data => setItems(prev => [...prev, ...data]));}, [page]);
        useEffect(() => {
            function handleScroll(){
                if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
                    setPage(prev => prev + 1);
                }
            }
            window.addEventListener("scroll", handleScroll);
            return()=>
                window.removeEventListener("scroll", handleScroll);
        }, []);
        return (
            <div>
                {items.map(items => <p key={items.id}>{items.title}</p>)}
            </div>
        )
    }
