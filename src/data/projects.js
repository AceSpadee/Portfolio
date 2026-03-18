import rooftopCatThumb from "../assets/rooftopcat-thumb.png";
import musicAppThumb from "../assets/musicapp-thumb.png";
import locationAppThumb from "../assets/locationapp-thumb.png";
import cloudStorageThumb from "../assets/cloudstorage-thumb.png";

import rooftopcatshot2 from "../assets/rooftopcatshot2.png";
import rooftopcatshot3 from "../assets/rooftopcatshot3.png";
import musicappshot2 from "../assets/musicappshot2.png";
import musicappshot3 from "../assets/musicappshot3.png";

const projects = [
  {
    title: "Rooftop Cat",
    slug: "rooftop-cat",
    status: "Public Project",
    image: rooftopCatThumb,
    images: [
      {
        src: rooftopCatThumb,
        alt: "Screenshot of Rooftop Cat game",
      },
      {
        src: rooftopcatshot2,
        alt: "Screenshot of Rooftop Cat game",
      },
      {
        src: rooftopcatshot3,
        alt: "Screenshot of Rooftop Cat game",
      },
    ],
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
        "Rooftop Cat is a fast-paced endless runner inspired by the Chrome dinosaur game, but reimagined with a neon rooftop style and a little more personality in how it looks and feels.",
      goal:
        "I built this to make a simple arcade-style game that felt quick, responsive, and fun to play in the browser while still having its own visual identity.",
      challenges: [
        "Balancing obstacle timing so the gameplay felt challenging without becoming frustrating",
        "Creating a rooftop visual style that stayed clear and readable during fast gameplay",
        "Keeping movement, collisions, and pacing responsive in a browser environment",
      ],
      learned: [
        "I got a much better feel for how browser-based game loops need to be structured to stay smooth and repeatable",
        "Timing, spacing, and visual clarity ended up mattering a lot more than I expected for making the game feel good to play",
        "Even small changes to gameplay and animation made a noticeable difference in the overall experience",
      ],
    },
  },
  {
    title: "Music App",
    slug: "music-app",
    status: "Live Preview • Private Code",
    image: musicAppThumb,
    images: [
      {
        src: musicAppThumb,
        alt: "Screenshot of the music app interface",
      },
      {
        src: musicappshot2,
        alt: "Screenshot of the music app playlist",
      },
      {
        src: musicappshot3,
        alt: "Screenshot of the music app themes",
      },
    ],
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
        "This music app started as a way to build a smoother, more interactive listening experience, with a big focus on playlists, playback, and UI behavior that felt polished.",
      goal:
        "I wanted to create a music app that felt more modern and enjoyable to use than a basic player, especially in the way playlists, controls, and interactions worked together.",
      challenges: [
        "Handling drag-and-drop interactions in a way that felt smooth and intuitive",
        "Managing dropdown menu behavior without flicker, jumping, or awkward closing",
        "Keeping playback controls, playlist logic, and UI state organized as the app grew",
      ],
      learned: [
        "I got more comfortable breaking larger interfaces into smaller reusable React components",
        "Interactive UI needs much more careful state management once behavior starts getting more complex",
        "Small interface details made a bigger difference than expected in how polished the app felt",
      ],
    },
  },
  {
    title: "Location Tracking App",
    slug: "location-tracking-app",
    status: "Private Project",
    image: locationAppThumb,
    images: [
      {
        src: locationAppThumb,
        alt: "Screenshot of the location tracking application map",
      },
    ],
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
        "This project was built around saving locations, showing them on a map, and tracking movement over time through a full-stack app with a more interactive feel.",
      goal:
        "I wanted to combine authentication, mapping, and movement tracking into one project that felt practical to use while also pushing me to work through more complex full-stack functionality.",
      challenges: [
        "Structuring saved locations, movement sessions, and user data clearly in the backend",
        "Balancing real-time movement tracking with storage efficiency and map performance",
        "Displaying markers and session-based paths in a way that stayed readable and organized",
      ],
      learned: [
        "I learned a lot about connecting geolocation features on the frontend to backend data storage in a practical way",
        "This project gave me more experience organizing user activity, saved locations, and movement history in one system",
        "Map-based features and live tracking introduced performance and structure challenges earlier than I expected",
      ],
    },
  },
  {
    title: "Cloud Storage App",
    slug: "cloud-storage-app",
    status: "Private Project",
    image: cloudStorageThumb,
    images: [
      {
        src: cloudStorageThumb,
        alt: "Screenshot of the cloud storage app dashboard",
      },
    ],
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
        "This project is a self-hosted cloud storage platform focused on file uploads, organization, and building a custom file workflow through the web instead of relying completely on outside services.",
      goal:
        "I built this because I wanted to explore how a storage-focused app would work with my own frontend and backend setup, especially when thinking about file handling, scalability, and self-hosted architecture.",
      challenges: [
        "Planning how file uploads and storage should be structured for larger files and long-term scalability",
        "Deciding what data belonged in the database versus the file system itself",
        "Designing a file management interface that stayed clear and usable as storage needs grew",
      ],
      learned: [
        "I learned that file-based apps need a different kind of planning than more typical database-driven projects",
        "It gave me a better understanding of how backend file handling decisions shape the frontend experience",
        "Working through a self-hosted setup brought in bigger questions around storage, scalability, and performance",
      ],
    },
  },
];

export default projects;