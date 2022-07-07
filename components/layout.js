import Header from '../components/header'
import Footer from '../components/footer'
export default function Layout({children, LayoutProps}){
    return(
        <>
        <Header menu = {LayoutProps}/>
        <main className="container">
            {children}
        </main>
        <Footer />
        </>
    )
}