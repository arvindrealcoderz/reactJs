'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { appStore } from '@/store'
import { Provider } from 'react-redux'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={appStore} >
          {children}
        </Provider>
        
        </body>
    </html>
  )
}
