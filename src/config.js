// Configuration for the portfolio
const config = {
    // List of repository names (case-sensitive as returned by GitHub API) to hide from the projects grid
    excludedRepos: [
        'FerXxk',
        'PCB_Design',
        'percepcion_ar',
        'Portfolio',
    ],

    // Sorting configuration for the repositories
    repoSorting: {
        field: 'stars', // Options: 'stars', 'updated', 'created', 'name'
        direction: 'desc' // Options: 'asc', 'desc'
    }
};

export default config;
