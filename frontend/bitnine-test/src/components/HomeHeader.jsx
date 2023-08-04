import { useState } from "react";
import { Link } from "react-router-dom";



export default function HomeHeader() {

  const [searchBar, setSearchBar] = useState(false)

  return (
    <div className="navbar sticky top-0 bg-gray-50 min-h-0 h-10 z-10">
      <div className="navbar-start">
        <select className="select min-h-0 h-8 w-48 bg-gray-200 rounded-none focus:border-blue-500 mx-14">
          <option defaultValue={"Select language"}>Select language</option>
          <option>English</option>
          <option>Korean</option>
        </select>
      </div>
      <div className="navbar-end">
        {searchBar && <input type="text" placeholder="SEARCH" className="input input-bordered min-h-0 h-8 w-60 rounded-none bg-neutral-400 placeholder-neutral-300 text-white" />}
        <button className="btn btn-square min-h-0 h-8 w-8 flex-nowrap mr-1" onClick={() => setSearchBar(prevState => !prevState)}>
          <svg xmlns="http://www.w3.org/2000/svg" className={!searchBar ? "h-6 w-6 stroke-neutral-400" : "h-8 w-8 bg-neutral-400 flex-none fill-white  stroke-neutral-300"} fill="none" viewBox={!searchBar ? "0 0 32 32" : "0 0 24 24"}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!searchBar ? "M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" : "M6 18L18 6M6 6l12 12"} /></svg>
        </button>
        <Link
          to="/contact"
          className="btn min-h-0 h-8 w-24 mx-1"
        >
          Contact
        </Link>
        <div className="join min-h-0">
          <Link to="https://github.com/bitnine-oss/agensgraph">
            <img src="https://cdn-icons-png.flaticon.com/128/733/733553.png" className="mx-1 min-h-0 h-6 hover:opacity-70"></img>
          </Link>
          <Link to="https://www.youtube.com/channel/UCBJNYamALEqrfxiOCgYyP2g/featured?view_as=subscriber">
            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" className="mx-1 min-h-0 h-6 hover:opacity-70"></img>
          </Link>
          <Link to="https://www.linkedin.com/company/bitnineglobal/">
            <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" className="mx-1 min-h-0 h-6 hover:opacity-70"></img>
          </Link>
          <Link to="https://www.facebook.com/bitninesns/">
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" className="mx-1 min-h-0 h-6 hover:opacity-70"></img>
          </Link>
          <Link to="https://blog.naver.com/bitnine9">
            <img src="https://cdn-icons-png.flaticon.com/128/11423/11423248.png" className="mx-1 min-h-0 h-6 hover:opacity-70"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

