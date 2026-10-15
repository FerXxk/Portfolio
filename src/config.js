// Configuration for the portfolio
const config = {
    // List of repository names (case-sensitive as returned by GitHub API) to hide from the projects grid
    excludedRepos: [
        'FerXxk',
        'PCB_Design',
        'percepcion_ar',
        'Portfolio',
    ],

    // Display order of the projects grid (featured projects live in FeaturedProject.jsx).
    // Repos not listed here are appended at the end, most recently updated first.
    repoOrder: [
        'Auto-Parking-RL',
        'Particle-Filter',
        'EKF-Implementation',
        'crazyflie_slam',
        'Raspberry-Intercom-Project',
        'Computer-Vision-Course',
        'automotive-control-systems',
        'Project-HomeIO',
        'Turtlebot-ROS-Project',
        'Virtual-Gym-TIVA-C',
        'NodeRed-Project',
        'Imminent-Crash',
        'FPGA-Race-Game',
    ],
};

export default config;
