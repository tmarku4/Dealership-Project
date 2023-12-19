import React from "react";


function About() {
  console.log("about page");

  return (
    <div className="about-container">
      <h2>About Our Car Dealership</h2>
      <p>
        Welcome to our car dealership! We offer a wide range of cars for you to
        explore and choose from. Whether you are looking for a new or used car,
        we've got you covered.
      </p>

      <div className="section">
        <h3>Listing a Car</h3>
        <p>
          Are you looking to sell your car? You can easily list your car with
          us. Visit our listing page and provide details about your car,
          including make, model, year, and images. Reach potential buyers and
          get your car noticed by listing it with us.
        </p>
      </div>

      <div className="section">
        <h3>Favorites</h3>
        <p>
          Found a car you love? Add it to your favorites for quick access. Click
          the "Add to Favorites" button on the car card, and you'll be able to
          view your favorite cars whenever you visit our website.
        </p>
      </div>

      <div className="section">
        <h3>Create Your Profile</h3>
        <p>
          To enhance your experience, consider creating a profile with us. By
          creating an account, you can save your favorite cars, track your
          listings, and receive personalized recommendations based on your
          preferences.
        </p>
      </div>

      <p className="explore-text">
        Explore our website and start your car-buying journey with us!
      </p>
    </div>
  );
}

export default About;
