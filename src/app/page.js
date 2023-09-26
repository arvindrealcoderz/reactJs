'use client';
import Image from 'next/image'
import { UserAction } from './action/UserAction';
import { postsAction } from './action/postsAction';
import DisplayUserData  from '@/component/DisplayUserData';
export default function App() {

  const getUserList=()=>{
    UserAction();
  }
  const getPosts=()=>{
    postsAction();
  }

  return (
    <>
    <h1>Welcome to first application</h1>
    <div>
        <button onClick={getUserList}>Get User List</button>
        <button onClick={getPosts}>Get Posts</button>
        <button>Get Photos </button>
    </div>
    <DisplayUserData/>

    </>
  )
}
