# React 19 useEffect Cleanup Issue

This repository demonstrates a potential issue with the `useEffect` cleanup function in React 19 where it might not be called on component unmount under specific circumstances.  The example showcases a simple counter component.  The solution involves ensuring proper cleanup and understanding the lifecycle methods.

## Setup:

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install`.
4. Run `npm start` to start the development server.

## Bug Description:

The bug lies in the unexpected behavior of the useEffect cleanup function.  While generally reliable, certain scenarios can lead to it not being executed upon component unmount.   This usually happens in scenarios involving concurrent rendering updates or unexpected component lifecycle disruption.

## Solution:

The solution section provides a refined component that addresses the potential issue.