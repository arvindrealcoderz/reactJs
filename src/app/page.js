import Image from 'next/image'
import styles from './page.module.css'
import {Registration} from './Registration';
import {B} from './B';
import DisplayUsers from './DisplayUsers';

export default function App() {
  return (
    <>
    <Registration/>
    <DisplayUsers/>
    <B/>
    </>
    
  )
}
