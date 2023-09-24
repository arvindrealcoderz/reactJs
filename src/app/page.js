'use client';
import Image from 'next/image'
import { UserAction } from './action/UserAction';
export default function App() {

  const submitt=()=>{
    UserAction();
  }

  return (
    <>
    <h1>Welcome to first application</h1>
    <div>
        <button onClick={submitt}>Get User List</button>
        <button >Get Posts</button>
        <button>Get Photos </button>
    </div>

    </>
  )
}
