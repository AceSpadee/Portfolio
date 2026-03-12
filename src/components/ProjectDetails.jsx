function ProjectDetails({ projectDetails }) {
  const { overview, goal, challenges, learned } = projectDetails;

  return (
    <div className="project-details">
      <div className="project-details-section">
        <h4>Overview</h4>
        <p>{overview}</p>
      </div>

      <div className="project-details-section">
        <h4>Goal</h4>
        <p>{goal}</p>
      </div>

      <div className="project-details-section">
        <h4>Technical Challenges</h4>
        <ul>
          {challenges.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="project-details-section">
        <h4>What I Learned</h4>
        <ul>
          {learned.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectDetails;