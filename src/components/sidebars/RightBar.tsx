import { Button } from "../ui/button";

export default function RightBar() {
  const books = [
    { title: "A Dance With Shadows", genre: "Fantasy, Mystery" },
    { title: "A Moment Shared", genre: "Slice Of Life" },
  ];

  const recentActivities = [
    { title: "this series is so lit yoo", count: 254 },
    { title: "peak fiction", count: 10 },
    { title: "top 10 peak", count: 66 },
    { title: "recommendations for sadfasdfasfdf", count: 42 },
  ];

  return (
    <>
      <h2 className="text-lg font-bold text-gray-800 mb-4">
        Top Recent Titles
      </h2>
      {books.map((book, index) => (
        <div key={index} className="md-3 flex items-center h-[140px] my-3">
          <img
            className="w-[70%] h-full object-cover rounded-sm"
            alt=""
            src="https://images.unsplash.com/photo-1714039509743-6f7825bc0cd9?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <div className="h-full w-full p-3 flex flex-col justify-between">
            <div className="text-sm font-semibold text-gray-700">
              {book.title}
            </div>
            <div className="text-xs text-gray-800">{book.genre}</div>
            <div className="flex flex-row items-center">
              <svg
                className="w-3 h-3 text-gray-800 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="text-xs font-bold text-gray-900 dark:text-white">
                4.95
              </p>
            </div>
          </div>
        </div>
      ))}

      <h2 className="lg-2 text-lg font-bold text-gray-800 mt-8">
        Recent Activity
      </h2>
      <Button className="w-full my-4 rounded-xl p-2">Post New Topic</Button>
      <ul>
        {recentActivities.map((activity, index) => (
          <Button
            variant={"ghost"}
            key={index}
            className="flex justify-between pb-2 border-b border-gray-300 w-[248px] max-w-[248px] rounded-none text-start"
          >
            <span className="text-sm text-gray-700 w-[80%] text-ellipsis overflow-hidden">
              {activity.title}
            </span>
            <span className="text-sm text-gray-500 w-[20%] text-center">
              {activity.count}
            </span>
          </Button>
        ))}
      </ul>
    </>
  );
}
