
interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  author: string;
}

const videos: Video[] = [
  {
    id: "1",
    title: "What To Gain Concentration",
    thumbnail: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    duration: "5:30",
    author: "Virton"
  },
  {
    id: "2",
    title: "How To Drive Safely",
    thumbnail: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d",
    duration: "4:15",
    author: "Virton"
  },
  {
    id: "3",
    title: "How to Live Without Pride",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    duration: "6:45",
    author: "Virton"
  },
  {
    id: "4",
    title: "How To Make Your Children Better",
    thumbnail: "https://images.unsplash.com/photo-1516627145497-ae6968895b74",
    duration: "7:20",
    author: "Virton"
  }
];

export function Videos() {
  return (
    <div className="min-h-screen w-full bg-white p-20">
      <div className="container mx-auto py-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                <p className="text-gray-600 text-sm">{video.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}