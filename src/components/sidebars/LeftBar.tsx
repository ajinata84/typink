import React from 'react';

const categories = [
  "Adventure",
  "Bildungsroman",
  "Children's",
  "Coming-of-Age",
  "Contemporary Fiction",
  "Crime",
  "Cyberpunk",
  "Dark",
  "Dystopian",
  "Epistolary",
  "Epic",
  "Fantasy",
  "Gaslamp",
  "Gothic",
  "Graphic Novel",
  "Hard Science Fiction",
  "Historical Fiction",
  "Historical",
  "Horror",
  "Humorous",
  "Magical Realism",
  "Middle Grade",
  "Mystery",
  "Paranormal",
  "Philosophical",
  "Poetry",
  "Post-Apocalyptic",
  "Psychological",
  "Romance",
  "Satire",
  "Science Fiction",
  "Short Story",
  "Space Opera",
  "Steampunk",
  "Supernatural",
  "Sword & Sorcery",
  "Suspense",
  "Technothriller",
  "Thriller",
  "Uplifting",
  "Young Adult"
];

export default function LeftBar() {
  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Categories</h2>
      <ul className="space-y-3">
        {categories.map((category, index) => (
          <li key={index} className="text-sm text-gray-700 hover:underline">
            <a href="{/${category.toLowerCase().replace(/ /g, '-')}}">
            {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
