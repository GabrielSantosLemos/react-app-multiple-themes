import Main from '../components/main'
import Footer from '../components/footer'
import Header from '../components/header'

const App = ({ children }) => (
    <>
        <Header />
        <Main>
            {children}
        </Main>
        <Footer />
    </>
)

export default App