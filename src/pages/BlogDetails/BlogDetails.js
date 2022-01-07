import React from "react";
import "./BlogDetails.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FeaturedSingle from "../../assets/featuredsingle.png";
import Vector2 from "../../assets/Vector2.png";
import Vector1 from "../../assets/Vector(1).png";
import Two from "../../assets/two.png";

const BlogDetails = () => {
  return (
    <div>
      <div className="BlogDetails">
        <Header />
        <div className="BlogDetailsBody">
          <div className="BlogDetailsWelcome">
            <img src={Two} alt="Two" />
            <div>
              <h2>How to make more money with OneCard</h2>
              <p>Tue 18, Oct 202 | 10:45am</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
            consequat congue malesuada at faucibus risus sed. Elit neque
            ultrices congue lacus, accumsan. Vitae tellus, massa orci elit vitae
            quam. Mauris mi duis ultrices aliquet volutpat. Tristique purus
            hendrerit accumsan ridiculus turpis augue.
            <br /> <br /> In laoreet morbi elit, enim, facilisis. Faucibus duis
            mi vel et arcu netus malesuada. Pretium vitae diam nunc blandit
            elementum, sapien, in. Nullam eget scelerisque cursus adipiscing
            libero, in ut. Amet cras ac vitae diam. Adipiscing id aliquam elit
            ac lectus fames praesent amet. Massa ultrices mattis ultricies
            facilisis felis nulla iaculis facilisis dignissim. Netus dignissim
            eget feugiat nec turpis nisl neque. Rhoncus ullamcorper nec elit
            viverra magna mauris gravida massa nunc. Pharetra neque, adipiscing
            aliquet et. <br /> <br />
            Duis nibh integer vestibulum enim accumsan scelerisque mauris.
            Egestas morbi netus nulla id vestibulum egestas diam. Semper
            sagittis, dolor diam in proin. Mollis senectus volutpat, dui et
            sodales tincidunt. Sed velit mauris nisl eu urna, vel arcu, ac
            vitae. Consequat ac ipsum velit morbi egestas dolor elementum id
            consectetur. Ut egestas blandit orci, consectetur. Tortor, diam
            rhoncus pellentesque risus nisl id diam id. Fringilla diam tempor
            sapien, sit senectus. Sit platea sed erat bibendum. <br /> <br />
            Sit commodo a, pretium venenatis ultrices fringilla. Dapibus odio
            odio fermentum viverra. Id fusce dui cum dapibus metus, pharetra
            amet, consequat enim. Id et id hac eu tellus sit vivamus eget neque.
            Arcu, dignissim mauris sit nam vulputate. Magna vel vitae malesuada
            viverra morbi arcu malesuad.
          </p>
          <div className="Like">
            <h4>
              Like{" "}
              <span>
                <img src={Vector2} alt="Vector2" />
              </span>
            </h4>
            <h4>
              Share{" "}
              <span>
                <img src={Vector1} alt="Vector1" />
              </span>
            </h4>
          </div>
          <h2>Featured Article</h2>
          <div className="FeaturedCon">
            <div className="FeaturedSingle">
              <img src={FeaturedSingle} alt="Featured" />
              <h2>How to make more money with OneCard</h2>
            </div>
            <div className="FeaturedSingle">
              <img src={FeaturedSingle} alt="Featured" />
              <h2>How to make more money with OneCard</h2>
            </div>
            <div className="FeaturedSingle">
              <img src={FeaturedSingle} alt="Featured" />
              <h2>How to make more money with OneCard</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
