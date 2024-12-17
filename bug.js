```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once after the first render
    console.log('Mounted!');
    // Cleanup function (runs before unmount and on every update)
    return () => {
      console.log('Unmounted!');
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```