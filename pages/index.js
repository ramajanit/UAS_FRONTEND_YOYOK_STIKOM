//@ts-nocheck
import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import Jumbotron from '../components/jumbotron'
import Article from '../components/article'
import Pagination from '../components/pagination'
import Sidebar from '../components/sidebar'
import Layout from '../components/layout'
import Menu from '../data-dummy/menu.json'
import Post from '../data-dummy/post.json'

export default function Home() {
  return (
    <>
  <Layout LayoutProps={Menu}>
    <Jumbotron />

  <div className="row g-5">
      <div className="col-md-8">
        <h3 className="pb-4 mb-4 fst-italic border-bottom">
          From the Firehose
        </h3>
        {
          Post.map(p => (
            <Article key={p.id}post ={p}/>
          ))
        }
        
        <Pagination />

      </div>
      <Sidebar />
    </div>
  </Layout>
  </>
  )
  }
// export async function getStaticProps(){
//     const req = await fetch('http://localhost:3000/api/hello')
//     const res = await req.json()
//     return {
//       props : {
//         menu : res,
//         post : Post
//       }
//     }
//   }
  
