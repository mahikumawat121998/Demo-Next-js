import '../styles/globals.css'
import ProductState from './context/ProductState'

function MyApp({ Component, pageProps }) {


  return(

    <>
  <ProductState>

  <Component {...pageProps} />
  
  </ProductState>
  </>
    )

}
// helloos

export default MyApp
