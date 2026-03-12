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
/*import { useEffect, useState } from "react";
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
    }*/
// 4. Build Your Own useLocalStorage Hook
/*import { useState } from "react";
function useLocalStorage(key, initialValue) {
    const[value, setValue] = useState(() =>{
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
    });
    const setStoredValue = newValue => {
        setValue(newValue);
        localStorage.setItem(key,JSON, stringify(newValue));
    };
    return [ value, setStoredValue];
} */
// 5.Optimize Re-renders 9(child component rerenders unnecessarily)
/*const child = React.memo(({ count }) => {
    console.log("Child Rendered");
    return <h2>{count}</h2>
});*/

const { useCallback, Suspense, Component } = require("react");

// 6. Build a Model Without Library
/*function Modal({ isOpen, onClose, children }){
    if(!isOpen) return null;
    return (
        <div className="overlay">
            <div className="modal">
            {children}
            <button onClick = {onClose}> Close</button>
        </div>
        </div>
    );
}*/
// 7. Implement Form Validation Without Library
/*function Form(){
    const [email, setEmail] = useState("");
    const [error, setError] = UseState("");
    function validate(){
        if(!email.includes("@")){
            setError("Invalid Email");
        }
        else{
            setError("");
        }
    }
    return (
        <>
        input value = {email} onChange={e => setEmail(e.target.value)}/>
        <button onClick= {validate}>submit</button>
        {error && <p>{error}</p>}
        </>
    );
}*/
// 8. Build a Simple Global State(Without Redux)
/*import { createContext, useContext, useState}
from "react";
const AppContext= createContext();
function AppProvider({ children }){
    const [user, setUser] = useState(null);
    return (
        <AppContext.Provider value = {{ user, setUser}}>
            {children}
        </AppContext.Provider>
    );
}
function useAppContext(){
    return useContext(AppContext);
}*/
// 9. Build a Timer With Cleanup
/*import{ useEffect, useState  from "react";
    function Timer(){
        const [count, setCount] = useState(0);
        useEffect(() => {
            const id = setInterval(() =>{
                setCount(prev => prev +1);},1000);
                return () => clearInterval(id);
            },[]);
        return <h1>{count}</h1>;
    }*/
// 10. Build a Controlled vs Uncontrolled Input Example
/*<input value = {value} onChange={e => setValue(e.target.value)}/>
const ref = useRef();
<input ref = {ref }/>*/
//  1.Prevent Unnecessary Re-enders with React.memo
/*const Child = React.memo(({ name }) => {
    console.log("Child Rendered");
    return <h2>{name}</h2>
});
function App(){
    const[count,setCount] = React.useState(0);
    return (
        <div>
            <child name = "Maneesha" />
            <button onClick ={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}*/
// 2. Optimize Functions with useCallback
/*const handleClick = useCallback(() =>{
    console.log("Clicked");
},[]);
const Child = React.memo(({ onClick }) => {
    console.log("Child Render");
    return <button onClick= {onClick} > Click</button>;
});*/
//  Expensive Calculation Optimization(useMemo)
/*const ExpensiveCalculation = (num) =>{
    console.log("Calculating...");
    for(let i = 0;i < 1000000000; i++){}
    return num * 2;
};
//Solution:
const result = useMemo(() =>
ExpensiveCalculation(number), [number]);*/
// 4. Virtualizing Large Lists
/*import { FixedSizeList } from "react-window";
function List({ items }){
    return (
        <FixedSizeList
        height={400}
        width={300}
        itemSize = {35}
        itemCount = {items.length}>
            {({ index,style }) => (
                <div style = {style} > {items[index]}</div>
            )}
        </FixedSizeList>
    );
}*/
// 5. Debouncing Search Inputs
/*const debouncedSearch = useMemo(
    () => debounce(searchFunction, 500),
    []
);*/
// 6.Lazy Loading Components
/*const Dashboard = React.lazy(() => import(" ./ Dashboard"));
<Suspense fallback= {<div>Loading...</div>}>
<Dashboard/>
</Suspense>*/
// 7. Code Splitting
/*const Settings = React.lazy(() => import("./ Settings"));*/
// 8. Avoid Inline Objects
/*const style ={ color: "red"};
<Component style= {style} />*/
// 9. Avoid State Updates in Loops
/*setCount(10);*/
// 10. Use Key Correctly in  Lists
/*items.map(items =>(
    <div key = {items.id}>{items.name}</div>
));*/
// React performance optimization techniques:
// 1. Optimize Large Tables
// => problem: Rendering 1000+ rows makes the dashboard slow.Solution ->Virtualization
/*import{ FixedSizeList } from "react-window";
function LeadList({ leads }){
    return(
        <FixedSizeList
            height={400}
            width={300}
            itemSize={35}
            itemCount={leads.length}
        >
            {({ index, style }) => (
                <div style={style}>
                    {leads[index].name}
                </div>
            )}
        </FixedSizeList>
    );
}*/
// 2. Memoize Table Rows
/*const LeadRow = React.memo(({ lead }) => {
    return (
        <tr>
            <td>{lead.name}</td>
            <td>{lead.email}</td>
            <td>{lead.status}</td>  
        </tr>   
    );
});*/
// 3.Debounce Search in Dashboard
/*const debouncedSearch = useDebounce(searchFunction, 500);*/
// 4. Lazy Load Dashboard Pages
const Analytics = React.lazy(() => import("./Analytics"));