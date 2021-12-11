import React from "react";
import "./Blog.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Geeky from "../../assets/geeky.png";
import FeaturedSingle from "../../assets/featuredsingle.png";
import One from "../../assets/One.png";
import Three from "../../assets/three.png";
import { NavLink } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <div className="BlogWelcome">
        <Header />
        <div className="BlogWelcomeBody">
          <p>Recently Posted</p>
          <h2>How to make more money with OneCard</h2>
          <button>Read Article</button>
          <img src={Geeky} alt="Geeky" />
        </div>
      </div>
      <div className="Featured">
        <div className="ColorRectangle4">
          <div className="ColorRectangle5"></div>
        </div>
        <div className="ColorRectangle6"></div>
      </div>
      <div className="FeaturedBody">
        <h2>Featured Article</h2>
        <div className="FeaturedCon">
          <div className="FeaturedSingle">
            <img src={FeaturedSingle} alt="Featured" />
            <h2>How to make more money with One1Card</h2>
          </div>
          <div className="FeaturedSingle">
            <img src={FeaturedSingle} alt="Featured" />
            <h2>How to make more money with One1Card</h2>
          </div>
          <div className="FeaturedSingle">
            <img src={FeaturedSingle} alt="Featured" />
            <h2>How to make more money with One1Card</h2>
          </div>
        </div>
      </div>
      <div className="Filter">
        <div className="FilterBody">
          <h2>Filter by Category</h2>
          <div className="FilterCategory">
            <p>All</p>
            <p>Category</p>
            <p>Category</p>
            <p>Category</p>
            <p>Category</p>
            <p>Category</p>
            <p>Category</p>
          </div>
          <div className="FilterCon">
            <div className="FilterSingle">
              <img src={FeaturedSingle} alt="FeaturedSingle" />
              <h2>How to make more money with One1Card</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A,
                vitae posuere tristique at scelerisque bibendum vitae. Ut augue
                condimentum arcu eu erat mollis rutrum. Vitae tempus nullam
                facilisi eget vehicula consectetur enim amet. Mauris bibendum
                sit cursus morbi. <br /> <br /> Nisi ut pulvinar nec diam vitae
                nunc varius volutpat condimentum. Lacus, volutpat leo nisi, enim
                netus mi. Tellus diam morbi pretium gravida odio tellus, in
                vitae fringilla. Cursus mauris, sagittis, consectetur cras
                egestas odio ullamcorper. Egestas lacus, in neque nunc,
                dignissim a nunc egestas. Turpis in tortor dolor vel.
              </p>
              <div>
                <p>Tue 18, Oct 202 | 10:45am</p>
                <NavLink to="/blogdetails">
                  <NavLink to="/blogdetails">
                    <button>Read More</button>
                  </NavLink>
                </NavLink>
              </div>
            </div>
            <div className="FilterSingle">
              <img src={One} alt="One" />
              <h2>How to make more money with One1Card</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A,
                vitae posuere tristique at scelerisque bibendum vitae. Ut augue
                condimentum arcu eu erat mollis rutrum. Vitae tempus nullam
                facilisi eget vehicula consectetur enim amet. Mauris bibendum
                sit cursus morbi. <br /> <br /> Nisi ut pulvinar nec diam vitae
                nunc varius volutpat condimentum. Lacus, volutpat leo nisi, enim
                netus mi. Tellus diam morbi pretium gravida odio tellus, in
                vitae fringilla. Cursus mauris, sagittis, consectetur cras
                egestas odio ullamcorper. Egestas lacus, in neque nunc,
                dignissim a nunc egestas. Turpis in tortor dolor vel.
              </p>
              <div>
                <p>Tue 18, Oct 202 | 10:45am</p>
                <NavLink to="/blogdetails">
                  <button>Read More</button>
                </NavLink>
              </div>
            </div>
            <div className="FilterSingle">
              <img src={Three} alt="Three" />
              <h2>How to make more money with One1Card</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A,
                vitae posuere tristique at scelerisque bibendum vitae. Ut augue
                condimentum arcu eu erat mollis rutrum. Vitae tempus nullam
                facilisi eget vehicula consectetur enim amet. Mauris bibendum
                sit cursus morbi. <br /> <br /> Nisi ut pulvinar nec diam vitae
                nunc varius volutpat condimentum. Lacus, volutpat leo nisi, enim
                netus mi. Tellus diam morbi pretium gravida odio tellus, in
                vitae fringilla. Cursus mauris, sagittis, consectetur cras
                egestas odio ullamcorper. Egestas lacus, in neque nunc,
                dignissim a nunc egestas. Turpis in tortor dolor vel.
              </p>
              <div>
                <p>Tue 18, Oct 202 | 10:45am</p>
                <NavLink to="/blogdetails">
                  <button>Read More</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="FilterCon">
            <div className="FilterSingle">
              <img src={FeaturedSingle} alt="FeaturedSingle" />
              <h2>How to make more money with One1Card</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A,
                vitae posuere tristique at scelerisque bibendum vitae. Ut augue
                condimentum arcu eu erat mollis rutrum. Vitae tempus nullam
                facilisi eget vehicula consectetur enim amet. Mauris bibendum
                sit cursus morbi. <br /> <br /> Nisi ut pulvinar nec diam vitae
                nunc varius volutpat condimentum. Lacus, volutpat leo nisi, enim
                netus mi. Tellus diam morbi pretium gravida odio tellus, in
                vitae fringilla. Cursus mauris, sagittis, consectetur cras
                egestas odio ullamcorper. Egestas lacus, in neque nunc,
                dignissim a nunc egestas. Turpis in tortor dolor vel.
              </p>
              <div>
                <p>Tue 18, Oct 202 | 10:45am</p>
                <NavLink to="/blogdetails">
                  <button>Read More</button>
                </NavLink>
              </div>
            </div>
            <div className="FilterSingle">
              <img src={One} alt="One" />
              <h2>How to make more money with One1Card</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A,
                vitae posuere tristique at scelerisque bibendum vitae. Ut augue
                condimentum arcu eu erat mollis rutrum. Vitae tempus nullam
                facilisi eget vehicula consectetur enim amet. Mauris bibendum
                sit cursus morbi. <br /> <br /> Nisi ut pulvinar nec diam vitae
                nunc varius volutpat condimentum. Lacus, volutpat leo nisi, enim
                netus mi. Tellus diam morbi pretium gravida odio tellus, in
                vitae fringilla. Cursus mauris, sagittis, consectetur cras
                egestas odio ullamcorper. Egestas lacus, in neque nunc,
                dignissim a nunc egestas. Turpis in tortor dolor vel.
              </p>
              <div>
                <p>Tue 18, Oct 202 | 10:45am</p>
                <NavLink to="/blogdetails">
                  <button>Read More</button>
                </NavLink>
              </div>
            </div>
            <div className="FilterSingle">
              <img src={Three} alt="Three" />
              <h2>How to make more money with One1Card</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A,
                vitae posuere tristique at scelerisque bibendum vitae. Ut augue
                condimentum arcu eu erat mollis rutrum. Vitae tempus nullam
                facilisi eget vehicula consectetur enim amet. Mauris bibendum
                sit cursus morbi. <br /> <br /> Nisi ut pulvinar nec diam vitae
                nunc varius volutpat condimentum. Lacus, volutpat leo nisi, enim
                netus mi. Tellus diam morbi pretium gravida odio tellus, in
                vitae fringilla. Cursus mauris, sagittis, consectetur cras
                egestas odio ullamcorper. Egestas lacus, in neque nunc,
                dignissim a nunc egestas. Turpis in tortor dolor vel.
              </p>
              <div>
                <p>Tue 18, Oct 202 | 10:45am</p>
                <NavLink to="/blogdetails">
                  <button>Read More</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
