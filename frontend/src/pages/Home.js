import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <section className="home-banner">
        <div className="banner-container">
          {/* Left Section */}
          <div className="banner-left">
            {/* Solar Orbit Animation */}
            <div className="orbit-container">
              <div className="orbit orbit1">
                <div className="planet planet1"></div>
              </div>
              <div className="orbit orbit2">
                <div className="planet planet2"></div>
              </div>
              <div className="orbit orbit3">
                <div className="planet planet3"></div>
              </div>
            </div>

            <div className="banner-title-card">
              <div className="banner-title-small">
                A SIMPLER APPROACH FOR{" "}
                <span className="highlight"> BLUE COLLAR JOB</span> HUNT
              </div>
            </div>

            <div className="banner-title-large">
              <h2>
                The most promising application for{" "}
                <span className="primary">Blue Collar Job Seekers</span> to find
                jobs.
              </h2>
            </div>

            <p className="banner-description">
              Find jobs that match your interests with us. ShramSaathi provides
              a platform for workers and employers to connect easily.
            </p>
          </div>

          {/* Right Section */}
          <div className="banner-right">
            {/* Blue Background Card */}
            <div className="blue-card-bg"></div>

            {/* Main Worker Image */}
            <div className="banner-image">
              <img
                src="https://blujobs.in/wp-content/uploads/2023/02/r-img2.png"
                alt="Workers"
              />
            </div>

            {/* Stats */}
            <div className="banner-stats">
              <div className="stat-card orange">
                <h3>0000</h3>
                <p>Jobs Posted</p>
              </div>
              <div className="stat-card green">
                <h3>0000</h3>
                <p>Job Seekers</p>
              </div>
              <div className="stat-card purple">
                <h3>0000</h3>
                <p>Jobs Fulfilled</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ How It Works Section */}
      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          <div className="step-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4201/4201973.png"
              alt="Choose Language"
            />
            <h3>Choose your Preferred Language</h3>
            <p>choose your language</p>
            <span className="step-number">1</span>
          </div>
          <div className="step-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1006/1006363.png"
              alt="Register"
            />
            <h3>Register with your Details</h3>
            <p>Register and you may also record details via voice</p>
            <span className="step-number">2</span>
          </div>
          <div className="step-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2989/2989993.png"
              alt="Find Jobs"
            />
            <h3>Find your Jobs Easily</h3>
            <p>Search and apply for jobs as per your skills</p>
            <span className="step-number">3</span>
          </div>
          <div className="step-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
              alt="Schedule Interview"
            />
            <h3>Schedule Interview</h3>
            <p>Message employers, schedule your interview & get hired</p>
            <span className="step-number">4</span>
          </div>
        </div>

<section className="job-profiles">
  <h2 className="profiles-heading">
    Following are the prominent blue collar job profiles our application covers-
  </h2>
  <div className="profiles-container">
    {[
      {
        title: "Warehouse workers",
        iconUrl: "https://th.bing.com/th/id/OIP.fx7PF2idnJstUEbuNXMwaAHaE8?w=290&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        desc: "Shipping, loading, unloading, and placing entities are the main tasks accomplished by a warehouse employee.",
      },
      {
        title: "Delivery boy",
        iconUrl: "https://th.bing.com/th/id/OIP.JmWeRGRiH9cNUhpjVUgNngHaEJ?w=284&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        desc: "A delivery boy is responsible for delivering packages, food, or other items to customers in a timely and efficient manner. They must have good communication and organizational skills, as well as a reliable mode of transportation.",
      },
      {
        title: "Plumbers",
        iconUrl: "https://th.bing.com/th/id/OIP.nQp_bFmd82OfhV2nTJO1igHaEK?w=330&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        desc: "The tasks fulfilled by a plumber include- installing pipes and repairing broken pipes and leakages. Handling appliances such as washing machines, sinks, bathtubs, appliances, and dishwashers are other chores done/supervised by a plumber.",
      },
      {
        title: "Air conditioner technician",
        iconUrl: "https://www.bing.com/th/id/OIP.vktl6BD_8tNta37YSP3DvwHaE7?w=185&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        desc: "Repairing dysfunctional ACs, filling or checking gas, repairing broken ACs, and servicing are the main tasks accomplished by an Air conditioner machinist.",
      },
      {
        title: "Manufacturing worker",
        iconUrl: "https://th.bing.com/th/id/OIP.EuydXA8S48mt_GQQNLA-WQHaFb?w=230&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        desc: "Loading raw materials, supplying finished goods, keeping a tab of manufacturing phases, and arranging products are the main skills needed for a manufacturing worker.",
      },
      {
        title: "Housekeeping profile",
        iconUrl: "https://th.bing.com/th/id/OIP.7diYOW9i_MvczxHFzMxfmwHaEa?w=290&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        desc: "Sweeping, mopping, drying, washing clothes, maintaining the given facility/house & managing micro chores are main errands under a housekeeper’s supervision.",
      },
      {
        title: "Pest control worker",
        iconUrl: "https://th.bing.com/th/id/OIP.TyUHGWILRdkAu9J4Z1MuowHaE8?w=277&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        desc: "Inspecting places, identifying bugs & insects, spraying insecticides & chemicals, and cleaning the buildings are the main actions under the responsibility of a pest control worker.",
      },
      {
        title: "Site technician",
        iconUrl: "https://th.bing.com/th/id/OIP.EfackFD-amF-RdWO6YHrywHaE7?w=279&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        desc: "Providing technical support, troubleshooting, testing, repairing and managing technical equipment are primary tasks of a site technician.",
      },
      {
        title: "Gardener",
        iconUrl: "https://th.bing.com/th/id/OIP.B_6TyzMHeGaWlf-0bvhESQHaL4?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        desc: "The actions under supervision of a farm worker include- managing farms, extracting ripened products, tilling the land, sowing, applying fertilizers & pesticides on the field, and harvesting. Managing gardens, watering, tilling, trimming plants, ornamentation, and working trees are tasks of a landscaper.",
      },
      {
        title: "Office boy",
        iconUrl: "https://th.bing.com/th/id/OIP.gA-CjiRspgTXeTewvN93kAHaD6?w=330&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        desc: "Managing and cleaning office workspace, depositing, collecting cheques, files, serving beverages & food to the office team, managing micro tasks of staffers and visitors are important duties of an office boy.",
      },
      {
        title: "Carpenter",
        iconUrl: "https://th.bing.com/th/id/OIP.jjJy26kjWUyDadoHUHw2GwHaDt?w=322&h=175&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        desc: "Carpenter needs precise skills in shaping, repairing, executing fixtures, cutting, and installing wood materials.",
      },
      {
        title: "Truck driver",
        iconUrl: "https://th.bing.com/th/id/OIP.pYphI9qXsCAxexWQDN1uggHaE7?w=251&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        desc: "Driving on long routes, supplying goods and services, and delivering materials to required locations safely and on time.",
      },
      {
        title: "Construction workforce",
        iconUrl: "https://th.bing.com/th/id/OIP.3vyo_o7Htp09j0Pq7aKgVAHaE8?w=291&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        desc: "The tasks of a construction labourer comprise loading and unpacking raw materials, mixing, sprinkling, and dissipating substances such as cement, dressing, and mortar.",
      },
    ].map((job, idx) => (
      <div key={idx} className="profile-card">
        <div className="card-icon">
          <img src={job.iconUrl} alt={job.title} />
        </div>
        <div className="card-content">
          <h3>{job.title}</h3>
          <p>{job.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>
<footer className="site-footer">
  <div className="footer-container">
    <div className="footer-left">
      <h3>ShramSaathi</h3>
      <p>Connecting blue-collar workers with the right opportunities.</p>
    </div>
    <div className="footer-right">
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; 2025 ShramSaathi. All rights reserved.</p>
  </div>
</footer>

        
      </section>
    </>
  );
  
}

export default Home;

