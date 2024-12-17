```javascript
import { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let isMounted = true; // Flag to track component mount status
    console.log('Mounted!');

    return () => {
      isMounted = false; // Set flag to false before unmount
      console.log('Unmounted!');
    };
  }, []);

  useEffect(() => {
    if (isMounted) {
        // Perform side effects only if component is still mounted
      console.log(`Count updated: ${count}`);
    }
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```