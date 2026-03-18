// Configuration for the portfolio
const config = {
    // List of repository names (case-sensitive as returned by GitHub API) to show in the projects grid
    // The order here will be the default order of appearance
    curatedRepos: [
        'Portfolio',
        'CV-interactivo',
        'Particle-Filter',
        'crazyflie_slam',
        'EKF-Implementation',
        'Virtual-Gym-TIVA-C',
        'Raspberry-Intercom-Project',
        'Project-HomeIO',
        'NodeRed-Project',
        'Minisumo-Project',
        'Computer-Vision-Course',
        'Imminent-Crash',
        'FPGA-Race-Game',
        'Turtlebot-ROS-Project',
        'percepcion_ar'
    ],

    // Sorting configuration for the repositories
    repoSorting: {
        field: 'curated', // Use 'curated' to follow the order in curatedRepos, or 'stars', 'updated', etc.
        direction: 'desc'
    }
};

export default config;
