import Image from 'next/image'
import styles from './page.module.css'
import {Registration} from './Registration';
import {B} from './B'
import {RegistrationListDisplay} from './RegistrationListDisplay'

export default function App() {
  return (
    <>
    <Registration/>
    <RegistrationListDisplay/>
    <B/>
    </>
    
  )
}
