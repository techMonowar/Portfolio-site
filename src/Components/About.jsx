/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-black.gif";

const imageAltText = "black gif motion background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Founder & CEO of Enbiit",
  "Professional Trainer",
  "MERN Stack Developer",
  "Focus group testing",
  "Mobile user interfaces",
  "Graphic design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Monowar Hussain is a dynamic and multifaceted individual, driven by his passion for technology, entrepreneurship, and empowering others through education. As the founder of Enbiit, a leading software development, and digital marketing startup, Monowar has demonstrated his commitment to creating innovative solutions and driving business growth in the digital realm.Currently pursuing his B.Tech in Computer Science from Barak Valley Engineering College as part of the 2020-24 batch, Monowar's academic journey has been marked by excellence and leadership. During his college years, he served as the President of BVEC Code Club for two terms, showcasing his natural ability to inspire and lead a team of tech enthusiasts.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
