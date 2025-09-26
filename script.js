// Fetch GitHub repos dynamically (optional)
async function fetchGitHubRepos() {
  try {
    const response = await fetch('https://api.github.com/users/SamEVTech/repos');
    const repos = await response.json();
    const projectGrid = document.getElementById('project-grid');
    projectGrid.innerHTML = ''; // Clear static projects
    repos.slice(0, 5).forEach(repo => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || 'No description available'}</p>
        <a href="${repo.html_url}" target="_blank">View on GitHub</a>
      `;
      projectGrid.appendChild(projectCard);
    });
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
  }
}

// Uncomment to enable dynamic fetching
// fetchGitHubRepos();
