import React from "react";
import "./overview.css";
import contact from '../../assets/images/contact.gif';

export default function OverView() {
  return (
    <section className="overviewsection">
      <div className="overviewrow1">
        <h2 className="overviewheading">
          <span className="overviewspan">Company</span> Overview
        </h2>
      </div>

      <div className="overviewrow2">
        <p className="overviewrowpara">
          we have a dedicated and talented team of web developers. As a team, we
          are fully committed to helping you transform your vision into scalable
          and efficient solutions. We are known for envisioning the holistic and
          innovative turnkey services for our clients. Suffice to say, Orion is
          your one-stop-shop for all your web and technology needs.we have a
          dedicated and talented team of web developers. As a team, we are fully
          committed to helping you transform your vision into scalable and
          efficient solutions. We are known for envisioning the holistic and
          innovative turnkey services for our clients. Suffice to say, Orion is
          your one-stop-shop for all your web and technology needs.
        </p>

        <div className="overviewrow2innerdiv">
          <div className="overviewrow2column1" data-aos="fade-up">
            <p className="overviewcolumnpara">
              we have a dedicated and talented team of web developers. As a
              team, we are fully committed to helping you transform your vision
              into scalable and efficient solutions. We are known for
              envisioning the holistic and innovative turnkey services for our
              clients. Suffice to say, Orion is your one-stop-shop for all your
              web and technology needs.
            </p>

            <p className="overviewcolumnpara">
              The current business ecosystem requires agile and responsive IT
              systems. As a reputed Devops company in Canada, Orion helps
              businesses to optimise their IT operations.
            </p>

            <p className="overviewcolumnpara">
              The current business ecosystem requires agile and responsive IT
              systems. As a reputed Devops company in Canada, Orion helps
              businesses to optimise their IT operations.
            </p>

            <p className="overviewcolumnpara">
              Orion is a prominent name when it comes to delivering high quality
              and future-ready web services. Our clients swear by standards and
              efficiency of our services. Which is why we have earned a stellar
              reputation as a Devops company in Ontario.
            </p>

            <button className="opcolumnbtn">Learn More <i class="fa-solid fa-angle-right"></i></button>

          </div>

          <div className="overviewrow2column1" data-aos="fade-up">
            <img className="overviewcolumnimage" src={contact} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
