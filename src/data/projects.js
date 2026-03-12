import rooftopCatThumb from "../assets/rooftopcat-thumb.png";
import musicAppThumb from "../assets/musicapp-thumb.png";
import locationAppThumb from "../assets/locationapp-thumb.png";
import cloudStorageThumb from "../assets/cloudstorage-thumb.png";

const projects = [
  {
    title: "Rooftop Cat",
    status: "Public Project",
    image: rooftopCatThumb,
    alt: "Screenshot of Rooftop Cat game",
    description:
      "A fast-paced endless runner inspired by the Chrome dinosaur game, set across neon city rooftops with arcade-style gameplay and obstacle dodging.",
    tech: ["JavaScript", "React", "Canvas", "CSS"],
    highlights: [
      "Endless runner gameplay with obstacle dodging",
      "Custom rooftop theme and visual styling",
      "Responsive browser-based experience",
      "Public playable project",
    ],
    liveLink: "https://ambient-loader.onrender.com",
    githubLink: "https://github.com/AceSpadee/ambient-loader",
    caseStudy: {
      overview:
        "Rooftop Cat is an arcade-style endless runner built around fast reaction gameplay, a custom city rooftop theme, and a lightweight browser-based experience.",
      goal:
        "The goal was to create a fun, visually distinctive endless runner with a simple gameplay loop that still felt polished and responsive.",
      challenges: [
        "Balancing obstacle timing so the game felt fair but challenging",
        "Creating a consistent rooftop visual theme that fit the gameplay",
        "Keeping movement and collisions responsive in the browser",
      ],
      learned: [
        "How to structure game logic for repeatable browser gameplay loops",
        "How to improve feel through pacing, spacing, and visual clarity",
        "How small animation and obstacle decisions affect game quality",
      ],
    },
  },
  {
    title: "Music App",
    status: "Live Preview • Private Code",
    image: musicAppThumb,
    alt: "Screenshot of the music app interface",
    description:
      "A modern music application focused on playlist management, playback interaction, and polished UI behavior.",
    tech: ["React", "JavaScript", "CSS", "Node.js", "MongoDB"],
    highlights: [
      "Playlist creation and song organization",
      "Drag-and-drop reordering",
      "Playback controls and interactive UI",
      "Frontend preview available",
    ],
    liveLink: "https://music-player-s59b.onrender.com",
    caseStudy: {
      overview:
        "This project focuses on creating a polished music experience with playlist management, responsive controls, and a more interactive interface than a basic CRUD app.",
      goal:
        "The goal was to build a music application that felt clean, modern, and smooth to interact with while supporting more advanced playlist behavior.",
      challenges: [
        "Handling drag-and-drop playlist interactions cleanly",
        "Managing dropdown menu behavior without flicker or awkward closing",
        "Keeping playback controls, playlist logic, and UI state organized",
      ],
      learned: [
        "How to break large UI systems into reusable React components",
        "How to manage more complex interface state cleanly",
        "How strong UI behavior can make a project feel much more polished",
      ],
    },
  },
  {
    title: "Location Tracking App",
    status: "Private Case Study",
    image: locationAppThumb,
    alt: "Screenshot of the location tracking application map",
    description:
      "A MERN stack application that allows authenticated users to save locations, view them on a map, and track movement sessions.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Leaflet"],
    highlights: [
      "Protected user authentication",
      "Interactive map with saved markers",
      "Movement session tracking",
      "Path visualization features",
    ],
    caseStudy: {
      overview:
        "This application was built to let authenticated users save locations, view them visually on a map, and track movement history over time.",
      goal:
        "The goal was to combine mapping, authentication, and stored path data into a full-stack project with practical location-based functionality.",
      challenges: [
        "Structuring location and movement data clearly in the backend",
        "Displaying markers and movement paths in a readable way on the map",
        "Balancing live tracking behavior with storage and performance concerns",
      ],
      learned: [
        "How to connect geolocation-based frontend behavior to backend storage",
        "How to organize full-stack data around user activity",
        "How map rendering and movement tracking introduce performance considerations",
      ],
    },
  },
  {
    title: "Cloud Storage App",
    status: "Private Case Study",
    image: cloudStorageThumb,
    alt: "Screenshot of the cloud storage app dashboard",
    description:
      "A self-hosted cloud storage platform designed for uploads, organization, and scalable file handling.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    highlights: [
      "Custom file management interface",
      "Backend upload handling",
      "Scalable large-file planning",
      "Self-hosted architecture",
    ],
    caseStudy: {
      overview:
        "This project is a self-hosted storage platform designed to manage uploads, organize files, and support a custom file handling workflow through the web.",
      goal:
        "The goal was to explore building a storage-focused platform with a custom frontend and backend architecture instead of relying entirely on third-party services.",
      challenges: [
        "Planning for larger file uploads and storage performance",
        "Designing a clean interface for file interaction and organization",
        "Thinking through how storage architecture should scale over time",
      ],
      learned: [
        "How storage-heavy applications require different planning than standard CRUD apps",
        "How backend file workflows affect frontend design decisions",
        "How self-hosted systems introduce architecture and performance tradeoffs",
      ],
    },
  },
];

export default projects;