import { writeFileSync, readFileSync } from 'fs';
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

        // Path to translations
        const translationsPath = './src/translations.json';
        let translations;

        try {
            translations = JSON.parse(readFileSync(translationsPath, 'utf8'));
        } catch (e) {
            console.error('Could not read translations.json');
            return;
        }

        repos.forEach(repo => {
            if (repo.description) {
                // Ensure the objects exist
                if (!translations.en.projects.repo_descriptions) translations.en.projects.repo_descriptions = {};
                if (!translations.es.projects.repo_descriptions) translations.es.projects.repo_descriptions = {};

                // Update English (always set from GitHub)
                translations.en.projects.repo_descriptions[repo.name] = repo.description;

                // Update Spanish (only if it doesn't exist yet to avoid losing manual translations)
                if (!translations.es.projects.repo_descriptions[repo.name]) {
                    translations.es.projects.repo_descriptions[repo.name] = repo.description;
                }
            }
        });

        // Write updated translations.json
        writeFileSync(translationsPath, JSON.stringify(translations, null, 4));
        console.log('Successfully updated src/translations.json');

        // Also update projectDescriptions.js for consistency
        const descriptionsJs = {};
        Object.keys(translations.en.projects.repo_descriptions).forEach(name => {
            descriptionsJs[name] = {
                en: translations.en.projects.repo_descriptions[name],
                es: translations.es.projects.repo_descriptions[name]
            };
        });

        const content = `export const projectDescriptions = ${JSON.stringify(descriptionsJs, null, 4)};`;
        writeFileSync('./src/data/projectDescriptions.js', content);
        console.log('Successfully updated src/data/projectDescriptions.js');
    });
}).on('error', (err) => {
    console.error("Error fetching from GitHub: " + err.message);
});
