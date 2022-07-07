//@ts-nocheck
import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar'
import Layout from '../components/layout'
import Menu from '../data-dummy/menu.json'

export default function Login({props}) {
  return (
    <>
   <Layout LayoutProps={props.menu}>
    <div className="row g-5">
      <div className="col-md-8">
        <h3 className="pb-4 mb-4 fst-italic border-bottom">
          Login Page
        </h3>

      </div>
      <Sidebar />
    </div>
  </Layout>
  </>
  )
}
Login.getInitialProps = () => {
    return {
      props : {
        menu : Menu
      }
    }
  }