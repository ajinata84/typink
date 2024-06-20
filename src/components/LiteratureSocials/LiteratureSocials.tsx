import { useState } from 'react';

export default function LiteratureSocials() {
  const books = [
    {
      title: "A Dance With Shadows",
      genre: "Fantasy, Mystery",
      author: "Mellow",
      chapter: "1.422",
    },
    {
      title: "KKN Sedesa Pada Lari",
      genre: "Fantasy, Mystery",
      author: "Mellow",
      chapter: "1.422",
    },
    {
      title: "Belajar Menghitung",
      genre: "Fantasy, Education",
      author: "Mellow",
      chapter: "1.422",
    },
  ];

  const [reviews, setReviews] = useState([
    { id: 1, author: "Guntur35", content: "Vahn was an atypical youth. Due to a rare mutation, his blood had the potential to target and attack ailments within the human body. Touted as a universal cure, people had elevated his status above the norm and given him the classification 'Panacea'. In the media, he was hailed as a great hero who..." }
  ]);

  const [reviewInput, setReviewInput] = useState('');

  const handleReviewSubmit = () => {
    const newReview = {
      id: reviews.length + 1,
      author: "NewUser", // This could be dynamically set if you have user authentication
      content: reviewInput
    };
    setReviews([...reviews, newReview]);
    setReviewInput('');
  };

  return (
    <>
      <h2 className="text-lg font-bold text-gray-800 mb-4">Editor's Choice</h2>
      <div className="flex overflow-x-auto gap-4 justify-center">
        {books.map((book, index) => (
          <div key={index} className="md-3 flex items-center h-[140px] my-3">
            <img
              className="w-[100px] h-full object-cover roun"
              alt="Book Cover"
              src="https://images.unsplash.com/photo-1714039509743-6f7825bc0cd9?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="p-2">
              <div className="text-sm font-semibold text-gray-700">
                {book.title}
              </div>
              <div className="flex items-center">
                <div className="flex items-center">
                  <svg
                    className="w-3 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-3 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-3 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-3 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-3 h-4 text-gray-300 me-1 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <p className="ms-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                    4.95
                  </p>
                </div>
              </div>
              <div className="text-xs text-gray-800">{book.genre}</div>
              <div className="mb-1">
                <div className="text-xs text-gray-800">
                  <p>Author : {book.author}</p>
                </div>
                <div className="text-xs text-gray-800">
                  <p>Chapter : {book.chapter}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-lg font-bold text-gray-800 mb-2">Reviews</h2>
      <div className="flex justify-center items-center my-4">
      <img className="w-10 h-10 rounded-full mr-4" src="https://via.placeholder.com/150" alt="Profile" />
        <div className="flex items-center border-b border-gray-300 w-full mx-4">
          <input
            type="text"
            placeholder="Add a review..."
            value={reviewInput}
            onChange={(e) => setReviewInput(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          />
        </div>
      </div>
      <div className="flex mt-2 justify-end">
        <button className="text-gray-800 hover:text-blue-700 px-3 py-1 text-sm" onClick={handleReviewSubmit}>
          Submit
        </button>
      </div>
      <div className="h-full w-full p-3 flex-col justify-between">
        {reviews.map((review) => (
          <div key={review.id} className="mt-4 bg-white shadow-md rounded-lg p-4 flex items-start">
            <img className="w-10 h-10 rounded-full mr-4" src="https://via.placeholder.com/150" alt="Profile" />
            <div>
              <p className="text-xs text-clip font-semibold text-gray-800 mt-2">{review.author}, 5 hr. ago</p>
              <div className="my-7">
                <p className="text-sm text-gray-700">{review.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
