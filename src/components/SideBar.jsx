const SideBar = ({
  walkDuration,
  handleWalkDurationChange,
  handleSelectedGenreChange,
  selectedGenre,
  playlistNameInput,
  handlePlaylistNameInputChange,
  handleSubmit,
}) => {
  const handleKeyDown = (event) => {
    const keyCode = event.which || event.keyCode;
    // Allow digits and backspace
    if ((keyCode < 48 || keyCode > 57) && keyCode !== 8) {
      event.preventDefault(); // Prevent non-digit input
    }
  };
  // Can We simplify this code using the input

  return (
    <>
      <div className="sidebar wrapper">
        <h1>Podcast Planner</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit! Blah blah
          blah blah blah.
        </p>
        <div>
          <form className="sidebarNav" onSubmit={handleSubmit}>
            <label htmlFor="walkTime">How long is your walk?</label>
            <input
              type="number"
              min="1"
              id="walkTime"
              value={walkDuration}
              onChange={handleWalkDurationChange}
              required
              pattern="\d+"
              onKeyDown={handleKeyDown}
              placeholder="Enter time in minutes"
            ></input>
            <label htmlFor="selectedGenre">Select your genre:</label>
            <select
              value={selectedGenre}
              id="selectedGenre"
              onChange={handleSelectedGenreChange}
              required
            >
              {/* there must be more dry way to achieve getting all the option values. do we call the genre API, set parameters, and map the results? */}
              <option value="" disabled defaultValue className="defaultGenre">
                Choose a genre
              </option>
              <option value="144">Personal Finance</option>
              <option value="93">Business</option>
              <option value="151">Locally Focused</option>
              <option value="77">Sports</option>
              <option value="125">History</option>
              <option value="122">Society & Culture</option>
              <option value="127">Technology</option>
              <option value="132">Kids & Family</option>
              <option value="168">Fiction</option>
              <option value="88">Health & Fitness</option>
              <option value="134">Music</option>
              <option value="99">News</option>
              <option value="133">Comedy</option>
              <option value="100">Arts</option>
              <option value="69">Religion & Spirituality</option>
              <option value="117">Government</option>
              <option value="68">TV & Film</option>
              <option value="82">Leisure</option>
              <option value="111">Education</option>
              <option value="107">Science</option>
              <option value="135">True Crime</option>
            </select>

            <label htmlFor="playlistName">Name your playlist:</label>
            <input
              type="text"
              id="playlistName"
              value={playlistNameInput}
              onChange={handlePlaylistNameInputChange}
              required
            />
            <button type="submit"><i className="fa-solid fa-magnifying-glass faSearch"></i>Search</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SideBar;
