import '@/styles/globals.css'

import {TrackingProvider} from "../Context/Tracking";


export default function App({ Component, pageProps }) {
  return (
    <>
    <TrackingProvider>
       <Component {...pageProps} />
    </TrackingProvider>
    </>
    
  )
}
