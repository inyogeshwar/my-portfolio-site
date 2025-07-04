/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/developer-desk-portfolio.jpg";

const imageAltText = "Developer desk with coding projects and AI development setup";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "PinVault Pro Extension 📌",
    description:
      "A powerful browser extension for managing and organizing your pins, bookmarks, and saved content with advanced features and intuitive UI.",
    url: "https://github.com/inyogeshwar/pinvault-pro-extension",
  },
  {
    title: "YouTube Channel - Tech Tutorials 🎥",
    description:
      "Educational content covering programming tutorials, development tips, and technology insights for aspiring developers.",
    url: "https://youtu.be/ie2gPVA_SHc",
  },
  {
    title: "AI Tools & Browser Extensions 🚀",
    description:
      "Collection of innovative AI-powered tools and browser extensions that enhance productivity and user experience for developers and general users.",
    url: "https://github.com/inyogeshwar",
  },
  {
    title: "Mobile App Development",
    description:
      "Android applications built with modern technologies, focusing on user-friendly interfaces and performance optimization.",
    url: "https://github.com/inyogeshwar",
  },
  {
    title: "Open Source Contributions",
    description:
      "Active contributor to various open source projects, with Mozilla approval recognition for quality contributions to the developer community.",
    url: "https://github.com/inyogeshwar",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, skills, and achievements in web development and programming.",
    url: "https://inyogeshwar.github.io/yogeshwar-portfolio/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
