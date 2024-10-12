"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Leon's Kitchen Website",
    description: "About\n" +
        "Leon's Kitchen is an online food ordering system for restaurants. It provides a comprehensive solution for customers to browse menu items, securely place orders, and make payments, while also offering an admin panel for restaurant managers to efficiently manage menu items, orders, and user information.",
    image: "/images/projects/img.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Bus Go",
    description: "Bus Go is a mobile application built using Flutter, allowing users to conveniently book bus tickets on the go. The app provides a seamless experience for users to search for bus routes, view schedules, select seats, and make hassle-free bookings.",
    image: "/images/projects/img_1.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Amazon Clone",
    description: "Amazon clone project built using Next.js, a popular React framework. The project aims to create a functional e-commerce website similar to Amazon, with features such as product listings, shopping cart, and checkout process.",
    image: "/images/projects/img_2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Object Tracking using OpenCV",
    description: "This Python script demonstrates object tracking in a video using OpenCV. It utilizes basic object detection techniques and centroid tracking to monitor and label objects moving within a video feed.",
    image: "/images/projects/img_3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Delivery Rider Game",
    description: "Delivery Rider Game is a mobile game developed using Unity. The game simulates the experience of a delivery rider navigating through city streets to deliver orders on time. Players can enjoy various levels, challenges, and rewards as they progress through the game.",
    image: "/images/projects/img_4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Mind Probe Quiz Game",
    description: "Mind Probe is a quiz game developed using React. The game features a variety of quiz questions on different topics, providing an engaging and interactive experience for players to test their knowledge and learn new facts.",
    image: "/images/projects/img_5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
