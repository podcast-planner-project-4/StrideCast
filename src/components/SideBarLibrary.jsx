import { Link } from "react-router-dom";

const SideBarLibrary = () => {
  return (
    <div className="sideBarLibraryContainer">
      <Link to="/">
        <div className="sideBarHome">
          <i className="fa-solid fa-house faHome"></i>
          <p>Home</p>
        </div>
      </Link>
      <Link to="/">
        <div className="sideBarSearch">
          <i className="fa-solid fa-magnifying-glass faSearchSideBar"></i>
          <p>Search</p>
        </div>
      </Link>
    </div>
  );
};

export default SideBarLibrary;
