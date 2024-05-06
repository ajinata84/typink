export default function RightBar() {
  const books = [
    { title: "A Dance With Shadows", genre: "Fantasy, Mystery", rating: 9.8 },
    { title: "A Moment Shared", genre: "Slice Of Life", rating: 9.7 },
  ];

  return (
    <>
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Top Recent Titles
        </h2>
        {books.map((book, index) => (
          <div key={index} className="mb-3 flex items-center">
            <div className=" w-16 h-full">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1714039509743-6f7825bc0cd9?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ></img>
            </div>
            <div>
              <div className="text-md font-semibold text-gray-700 p-2">
                {book.title}
              </div>
              <div className="text-sm text-gray-500 p-2">{book.genre}</div>
              <div className="flex items-center mt-1">
                <span className="text-yellow-500 font-bold p-2">{book.rating}</span>
                <span className="text-xs text-gray-400 ml-1 p-2">/ 10</span>
              </div>
            </div>
          </div>
        ))}

        <div></div>
      </div>
    </>
  );
}
