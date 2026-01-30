import { writeFileSync } from 'fs';
import https from 'https';

const username = 'FerXxk';
const url = `https://api.github.com/users/${username}/repos?sort=updated&per_page=30`;

const options = {
    headers: {
        'User-Agent': 'Node.js'
    }
};

console.log('Fetching repositories for', username, '...');

https.get(url, options, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
        const repos = JSON.parse(data);
        const descriptions = {};

        repos.forEach(repo => {
            // Only include repos with descriptions
            if (repo.description) {
                descriptions[repo.name] = {
                    en: repo.description,
                    es: "" // Placeholder for manual or AI translation
                };
            }
        });

        const content = `export const projectDescriptions = ${JSON.stringify(descriptions, null, 4)};`;

        writeFileSync('./src/data/projectDescriptions.js', content);
        console.log('Successfully saved descriptions to src/data/projectDescriptions.js');
    });
}).on('error', (err) => {
    console.error("Error fetching from GitHub: " + err.message);
});
