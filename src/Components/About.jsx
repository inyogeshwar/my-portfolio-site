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
import image from "../images/tech-coding-background.jpg";

const imageAltText = "Abstract tech background with AI and coding elements";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a 16-year-old developer from Bhagalpur, Bihar, India, passionate about creating AI tools, browser extensions, and mobile apps. I got Mozilla approval at a young age and love contributing to open source projects.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Python",
  "Java",
  "Android Development",
  "JavaScript",
  "AI Tools",
  "Browser Extensions",
  "Open Source",
  "Azure AI",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "At just 16 years old, I've already achieved Mozilla approval and built a strong foundation in software development. I'm passionate about creating innovative AI tools and browser extensions that solve real-world problems. My goal is to continue pushing the boundaries of technology while contributing to open source communities. I believe in learning by doing and sharing knowledge with fellow developers around the world.";

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
