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
      "A fast-paced rooftop endless runner inspired by the Chrome dinosaur game, featuring obstacle dodging, neon city visuals, and responsive browser-based gameplay.",
    tech: ["JavaScript", "React", "Canvas", "CSS"],
    highlights: [
      "Fast-paced endless runner gameplay",
      "Neon rooftop setting and custom visuals",
      "Responsive browser experience",
      "Public playable project",
    ],
    liveLink: "https://ambient-loader.onrender.com",
    githubLink: "https://github.com/AceSpadee/ambient-loader",
    projectDetails: {
      overview:
        "Rooftop Cat is a fast-paced endless runner inspired by the Chrome dinosaur game, reimagined with a neon rooftop setting and a more stylized browser-based presentation.",
      goal:
        "The goal was to build a simple but polished arcade-style game that felt quick, responsive, and visually distinct while staying easy to pick up and play in the browser.",
      challenges: [
        "Balancing obstacle timing so the gameplay felt challenging without becoming frustrating",
        "Creating a visual style that made the rooftop setting feel clear and consistent",
        "Keeping movement, collisions, and pacing responsive in a browser environment",
      ],
      learned: [
        "How to structure a browser-based gameplay loop for repeatable arcade-style play",
        "How timing, spacing, and visual clarity affect the feel of a game",
        "How small gameplay and animation changes can noticeably improve the overall experience",
      ],
    },
  },
  {
    title: "Music App",
    status: "Live Preview • Private Code",
    image: musicAppThumb,
    alt: "Screenshot of the music app interface",
    description:
      "A modern music app focused on playlist management, playback controls, and polished UI interactions designed to feel smooth and responsive.",
    tech: ["React", "JavaScript", "CSS", "Node.js", "MongoDB"],
    highlights: [
      "Playlist creation and song organization",
      "Drag-and-drop reordering",
      "Interactive playback controls",
      "Frontend preview available",
    ],
    liveLink: "https://music-player-s59b.onrender.com",
    projectDetails: {
      overview:
        "This music app was built to create a smoother, more interactive listening experience with playlist management, playback features, and a polished frontend interface.",
      goal:
        "The goal was to build a music application that felt modern and responsive while supporting more advanced playlist behavior than a basic media or CRUD interface.",
      challenges: [
        "Handling drag-and-drop interactions in a way that felt smooth and intuitive",
        "Managing dropdown menu behavior without flicker or awkward state changes",
        "Keeping playback controls, playlist logic, and UI state organized as the app grew",
      ],
      learned: [
        "How to break larger interface systems into smaller reusable React components",
        "How to manage more complex UI state across interactive features",
        "How refined interface behavior can make a project feel significantly more polished",
      ],
    },
  },
  {
    title: "Location Tracking App",
    status: "Private Project",
    image: locationAppThumb,
    alt: "Screenshot of the location tracking application map",
    description:
      "A full-stack location tracking app that lets authenticated users save locations, view them on an interactive map, and track movement sessions over time.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Leaflet"],
    highlights: [
      "Authenticated user accounts",
      "Interactive map with saved markers",
      "Movement session tracking",
      "Path history visualization",
    ],
    projectDetails: {
      overview:
        "This application was built to let authenticated users save locations, view them visually on a map, and track movement history through an interactive full-stack interface.",
      goal:
        "The goal was to combine mapping, authentication, and stored path data into a practical full-stack project centered around location-based functionality.",
      challenges: [
        "Structuring location and movement data clearly in the backend",
        "Displaying saved markers and movement paths in a way that stayed readable on the map",
        "Balancing live tracking behavior with storage and performance considerations",
      ],
      learned: [
        "How to connect geolocation-based frontend behavior to backend storage",
        "How to organize full-stack data around user activity and movement history",
        "How map rendering and movement tracking introduce performance and structure challenges",
      ],
    },
  },
  {
    title: "Cloud Storage App",
    status: "Private Project",
    image: cloudStorageThumb,
    alt: "Screenshot of the cloud storage app dashboard",
    description:
      "A self-hosted cloud storage platform built for file uploads, organization, and scalable file handling through a custom web interface.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    highlights: [
      "Custom file management interface",
      "Backend upload handling",
      "Scalable storage planning",
      "Self-hosted architecture",
    ],
    projectDetails: {
      overview:
        "This project is a self-hosted cloud storage platform designed to manage uploads, organize files, and support a custom file-handling workflow through the web.",
      goal:
        "The goal was to explore building a storage-focused platform with a custom frontend and backend architecture instead of relying entirely on third-party services.",
      challenges: [
        "Planning for larger file uploads and long-term storage performance",
        "Designing a clean interface for browsing, organizing, and managing files",
        "Thinking through how the storage architecture should scale over time",
      ],
      learned: [
        "How storage-heavy applications require different planning than standard CRUD apps",
        "How backend file workflows directly affect frontend design decisions",
        "How self-hosted systems introduce performance, architecture, and scalability tradeoffs",
      ],
    },
  },
];

export default projects;