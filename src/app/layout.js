'use client'
import { Provider } from 'react-redux'
import { appStore } from '@/store/store'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
<Provider store={appStore}>
      <body>{children}</body>
      </Provider>
    </html>
  )
}
