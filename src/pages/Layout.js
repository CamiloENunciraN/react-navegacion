import { Outlet, Link, useNavigate} from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <button onClick={()=>{
              alert("śirv?");
              navigate('/contact');
            }} >test</button>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </>
  )
};

export default Layout;