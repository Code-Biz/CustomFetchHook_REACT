import React, { useEffect, useState } from "react";

// This is a custom hook named UseFetch.
// Custom hooks in React ARE JAVSCRIPT FUNCTIONS whose names start with "use" and that may call/use other hooks.
// They allow you to extract and reuse logic across multiple components.

const UseFetch = (url) => {
  // useState is a built-in React hook for managing state in functional components.
  // Here, 'data' holds the fetched data, and 'setData' is the function to update it.
  const [data, setData] = useState();

  // useEffect is a built-in React HOOK/FUNCTION for SIDE EFFECTS (like data fetching) in FUNCTIONAL COMPONENTS.
  // The empty dependency array [] means this effect runs only once after the initial render (componentDidMount).
  useEffect(() => {
    // Fetch data from the provided URL.
    fetch(url)
      .then((res) => res.json()) // Parse the response as JSON.
      .then((data) => setData(data)); // Update the state with the fetched data.
  }, [url]); // Dependency array should include 'url' to refetch if the URL changes.

  // Custom hooks can return any value. Here, we return the fetched data in an array.
  return [data];
};

export default UseFetch;
