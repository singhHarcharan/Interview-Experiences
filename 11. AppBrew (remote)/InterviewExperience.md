# AppBrew Frontend Developer - Interview Experience

## Interview Rounds

### 1. Online Assessment
- **Date:** January 22, 2026
- **Duration:** 60 minutes

### 2. Technical Interview with Senior Developer
- **Date:** February 6, 2026
- **Duration:** 60 minutes

## Interview Details

### Introduction & Experience
- Started with an introduction
- Discussed my projects and past experience
- Follow-up questions about my Amdocs Experience (TechMate AI App)

### Technical Assessment
#### JavaScript Fundamentals
- Implemented array manipulation to fetch specific entities from an array of objects
- Demonstrated understanding of Promises and setTimeout concepts

#### React.js Implementation
- Built a counter application with state management
- Created and rendered a ChildComponent within the main App component
- Implemented an auto-focus input component
- Attempted to create a custom hook for count state (unresolved)
- Answered follow-up questions about the React component implementation

### Interview Outcome
- Received positive feedback
- Successfully demonstrated core concepts
- Identified areas for improvement in custom hooks

## Code Examples
*[Code examples are included in the file for reference]*

## Code Examples

### 1. Array Manipulation
```javascript
const orders = [
  { orderId: 101, customer: "John", amount: 250, status: "delivered" },
  { orderId: 102, customer: "Sara", amount: 450, status: "pending" },
  { orderId: 103, customer: "Mike", amount: 150, status: "cancelled" },
  { orderId: 104, customer: "Anna", amount: 600, status: "delivered" },
  { orderId: 105, customer: "Tom", amount: 300, status: "pending" },
];

function getPendingOrder(orders) {
  const result = [];
  for(let i = 0; i < orders.length; i++) {
    if(orders[i].status == "pending") {
      result.push(orders[i]);
    }
  }
  return result;
}

function getTotalPendingAmount(pendingOrder) {
  let totalAmount = 0;
  for(let i = 0; i < pendingOrder.length; i++) {
    totalAmount += pendingOrder[i].amount;
  }
  return totalAmount;
}

// Get and process pending orders
const pendingOrder = getPendingOrder(orders);
const totalPendingAmount = getTotalPendingAmount(pendingOrder);
console.log("Total Pending Amount is ", totalPendingAmount);
```

### 2. Asynchronous JavaScript
```javascript
// Using setTimeout
setTimeout(function() {
  console.log("Hi Harcharan...");
}, 2000);

// Using async/await
async function greetHarcharan() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Hi Harcharan...");
      resolve();
    }, 2000);
  });
}

// Execute async function
console.log("Start of setTimeout...");
await greetHarcharan();
console.log("Async operation completed");
```

### 3. React Counter Component
```jsx
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log("Count value is ", count);
  }, [count]);
  
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 2)}>Increment</button>
      <button onClick={() => setCount(c => c - 1)}>Decrement</button>
      <ChildComponent />
      <InputComponent />
    </>
  );
}

function ChildComponent() {
  console.log("Child component rendered");
  return <h1>Hello from Child</h1>;
}

function InputComponent() {
  return <input type="text" placeholder="Search..." autoFocus={true} />;
}

export default App;
```

#### Feeback (Feb. 9, 2026) : Got Positive reponse from recruiter and call for Second round. She told me to brush up React / Theoretical concepts as there is a scope of improvement But because I was able to solve problems given to me, so they called me for Second round.
