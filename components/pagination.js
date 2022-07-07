export default function Pagination(){
    return(
        <nav className="blog-pagination" aria-label="Pagination">
        <a className="btn btn-outline-primary" href="#">Older</a>
        <a className="btn btn-outline-secondary disabled">Newer</a>
      </nav>
    )
}