# React useEffect Infinite Loop Bug
This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by incorrectly managing dependencies.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides a corrected version.

## Bug Description
The `useEffect` hook in `bug.js` attempts to update the `count` state within the effect itself, without specifying any dependencies. This causes the effect to run repeatedly, creating an infinite loop and potentially crashing the application.