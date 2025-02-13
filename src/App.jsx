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

  // Remember to store AND update
  const [animation, setAnimation] = useState(false);
  const handleAnimation = () => {
  setAnimation(false);
  };

  const titles = [...new Set(profiles.map((profile) => profile.title))];
  const [title, setTitle] = useState("");
  
  /*useEffect(() => {
    fetch("https...")
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
});
  
  });*/
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setAnimation(true);
  };

  const [search, setSearch] = useState("");
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setAnimation(true);
  };

  const handleClear = () => {
    setTitle("");
    setSearch("");
    setAnimation(true);
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
          <div className="profile-cards">
            {filteredProfiles.map((profile) => (
              <Card
                key={profile.email}
                {...profile}
                animate={animation}
                updateAnimate={handleAnimation}
              />
            ))}
          </div>
        </Wrapper>
    </>
  );
};

export default App;