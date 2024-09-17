import coffeeImage from "../assets/coffee.jpg";

function Coffee() {
  return (
    <div>
      <section className="container">
        <article className="inner-container">
          <img src={coffeeImage} alt="coffee image" className="coffee-image" />
          <article className="content">
            <h3>
              Benefists of Dricking Coffee, Can Lower the risk of Cancer to
              stroke
            </h3>
            <p className="description">
              Coffe is the most populor drink in the world and drinking coffee
              in the morning has become a routine for many people before their
              activities. Besides being considered to be able to provide energy
              intake, it turns out that the...
            </p>
            <article className="user-detail">
              <img src="" alt="" />
              <div className="user-action">
                <div className="user-data">
                  <h4>Josh Lone</h4>
                  <p>September 16th 2024</p>
                </div>
                <svg
                  className="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="35px"
                  fill="gray"
                >
                  <path d="M81-121v-721l848 361L81-121Zm114-173 441-188-441-187v111l261 76-261 77v111Zm0 0v-375 375Z" />
                </svg>
              </div>
            </article>
          </article>
        </article>
      </section>
    </div>
  );
}

export default Coffee;
