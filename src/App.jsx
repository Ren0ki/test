import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import image_jenny from "./assets/jenny.png";
import image_alina from "./assets/alina.png";
import image_renee from "./assets/renee.png";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import ProfileForm from "./components/ProfileForm";


const App = () => {

  /*
      useEffect(() => {
      fetch("https...")
      .then((res) => res.json())
      .then((data) => {
      console.log(data.titles)
    });
  });

  */

  const profiles = [

    {
      img: image_alina,
      name: "Gummy Buddy ",
      title: "Medical",
      email: "gbudd@email.com",
    },
    {
      img: image_jenny,
      name: "Jen Fucious ",
      title: "Communications",
      email: "jfuci@email.com",
    },
    {
      img: image_renee,
      name: "Jelly Chan",
      title: "Computation",
      email: "jchan@email.com",
    },
  ];

  const titles = [...new Set(profiles.map((profile) => profile.title))];
  const [title, setTitle] = useState("");

  /*
    useEffect(() => {
    fetch(`https...?title=${title}&name=${search}&page=${page}&limit=10`)
    .then((res) => res.json())
    .then((data) => {
    setProfiles(data.profiles);
    setCount(data.count);
    setPage(data.page);
    })
    }, [title, search, page]);

  */
 
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setPage(1);
  };


  const [search, setSearch] = useState("");
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setPage(1);
  };

  const handleClear = () => {
    setTitle("");
    setSearch("");
    setPage(1);
  };

  const filteredProfiles = profiles.filter(
    (profile) =>
     (title === "" || profile.title === title) &&
      profile.name.toLowerCase().includes(search.toLowerCase())
  );

  const buttonStyle = {
    border: "1px solid #ccc",
  };

  return (
    <>
      
      <header> 
        <Navbar /> 
      </header>

      <Wrapper> 
        <Banner /> 
      </Wrapper>

      <Wrapper> 
        <About /> 
      </Wrapper>

      <Wrapper> 
        <ProfileForm /> 
      </Wrapper>

      <Wrapper>

        <div className="filter-wrapper">
         
          <div className="filter--select">
            <label htmlFor="title-select">Select a field:  </label>
              
              <select 
                id="title-select" 
                onChange={handleTitleChange} 
                value={title}
              >
                  <option value="">All</option>
                  {titles.map((title) => (
                    <option key={title} value={title}>
                      {title}
                    </option>
                  ))}
              </select>
          </div>
          
          <div className="filter--search">
              <label htmlFor="search">Search by name:  </label>
              <input
                type="text"
                id="search"
                onChange={handleSearchChange}
                value={search}
              />
          </div>
            
          <button onClick={handleClear} style={buttonStyle}>
          <span className="sr-only">Reset</span>
          <FontAwesomeIcon icon={faXmark} />
          </button>

        </div>
          
        <h3> <br /> Current Collaborators: </h3>
        <h3> - - - - - - - - - - - - - -</h3>
        
        <div className="profile-cards">
          {filteredProfiles.map((profile) => (
            <Card
              key={profile.email}
              {...profile}
            /> 

        /*
          //***NOTE: This section will be added AFTER the next "</div>"

          {
            count === 0 && <p> No profiles found! </p>
          }
          
          {count > 10
            
            <div className="pagination">
              
              <button onClick {() => setPage(page - 1)} disabled={page === 1}> Previous </button>
                <span className = "sr-only"> Previous </span>
              </button>
              
              <span> {page}/{Math.ceiling(count/10)} </span>
              
              <button onClick {() => setPage(page + 1)} disabled={page >= Math.ceil(count/10)}> Next 
                <span className="sr-only"> Next </span>
              </button> 
              
            </div>
          }
          */        
    ))}
  </div>
</Wrapper>
</>
);
};

export default App;