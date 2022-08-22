import '../styles/globals.css'
import '../styles/dashboard.css'
import '../styles/card.css'
import '../styles/sidebar.css'
import '../styles/account.css'
import '../styles/quiz.css'
import { wrapper } from '../store'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}


export default wrapper.withRedux(MyApp);
