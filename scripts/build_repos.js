// Snapshot of the GitHub repos shown in the portfolio, taken at build time so the
// site never depends on the unauthenticated GitHub API rate limit (60 req/h per visitor IP).
// If the fetch fails, the committed src/data/repos.json is kept as is.
import { writeFileSync } from 'fs';

const username = 'FerXxk';
const output = new URL('../src/data/repos.json', import.meta.url);

const headers = { 'User-Agent': 'portfolio-build', Accept: 'application/vnd.github+json' };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, { headers });
    if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);

    const repos = (await res.json())
        .filter(repo => !repo.fork)
        .map(({ id, name, description, html_url, stargazers_count, topics, default_branch, language, created_at, pushed_at }) =>
            ({ id, name, description, html_url, stargazers_count, topics, default_branch, language, created_at, pushed_at }));

    writeFileSync(output, JSON.stringify(repos, null, 4) + '\n');
    console.log(`Saved ${repos.length} repos to src/data/repos.json`);
} catch (err) {
    console.warn(`Could not refresh repos (${err.message}); keeping the committed src/data/repos.json`);
}
