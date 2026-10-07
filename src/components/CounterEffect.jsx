import { useEffect } from "react"

const CounterEffect = () => {
    const [count, setCount] = useState(0);

    
    useEffect(() => {
          document.title = 'Count: ${count}'
}, [count]);

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onCLick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default CounterEffect