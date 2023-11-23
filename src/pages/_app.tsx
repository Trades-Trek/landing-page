import '@/styles/globals.css';
import '@/styles/index.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import {

  QueryClient,
  QueryClientProvider,
} from 'react-query'
import NextNProgress from 'nextjs-progressbar';



const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (

    <QueryClientProvider client={queryClient}>
        <NextNProgress color='#7f00ff' />
        <Toaster/>    

          <Component {...pageProps} />
    </QueryClientProvider>
  )
}
