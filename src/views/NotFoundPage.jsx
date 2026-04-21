import Link from 'next/link'; 

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4">
      <div className="max-w-md text-center">
       
        <h1 className="text-9xl font-bold  mb-4 animate-bounce">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Oops! It seems like you've wandered into uncharted territory. 
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          className="inline-block bg-black text-white font-medium py-3 px-6 
                    hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          Return to Home
        </Link>
      </div>

      <div className="mt-12">
      <svg 
        className="w-32 h-32 text-gray-400 animate-pulse"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        >
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
        />
        </svg>
      </div>
    </div>
  );
};

export default NotFound;