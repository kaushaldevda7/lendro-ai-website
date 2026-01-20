const fs = require('fs');
const path = require('path');

// Read the generated blog articles data
const articlesData = fs.readFileSync(path.join(__dirname, 'blog-articles-data.js'), 'utf8');

// Read the current blog page
const blogPagePath = path.join(__dirname, '..', 'frontend', 'src', 'app', 'blog', 'page.tsx');
let blogPage = fs.readFileSync(blogPagePath, 'utf8');

// Find and replace the blogArticles array
const arrayStartPattern = /const blogArticles = \[/;
const arrayEndPattern = /\];\n\nconst breadcrumbItems/;

// Find start position
const startMatch = blogPage.match(arrayStartPattern);
if (!startMatch) {
  console.error('Could not find blogArticles array start');
  process.exit(1);
}

// Find the position where the array ends (before breadcrumbItems)
const endMatch = blogPage.match(arrayEndPattern);
if (!endMatch) {
  console.error('Could not find blogArticles array end');
  process.exit(1);
}

const startIndex = blogPage.indexOf('const blogArticles = [');
const endIndex = blogPage.indexOf('];\n\nconst breadcrumbItems') + 2; // Include the ];

// Replace the array
const before = blogPage.substring(0, startIndex);
const after = blogPage.substring(endIndex);

const newContent = before + articlesData + after;

// Write the updated file
fs.writeFileSync(blogPagePath, newContent);

console.log('Blog page updated successfully!');
console.log(`Total characters: ${newContent.length}`);
