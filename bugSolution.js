```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: The dependency array is empty, so this runs only once on mount.
    // If you need to run this repeatedly based on some other value, 
    // you should include that value in the dependency array. 
    // For example: [, someOtherValue]
    console.log('Mounted');
  }, []);

  return <div>Count: {count}</div>;
}
```