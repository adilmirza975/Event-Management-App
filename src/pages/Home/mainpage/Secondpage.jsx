

const events = [
  {
    title: "Entomology International Congress of Vancouver",
    date: "Fri, 15 Sep 2023",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=3774&auto=format&fit=crop",
  },
  {
    title: "Success Free Career & Meditation Classes",
    date: "Fri, 10 Nov 2023",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Career Fair: Exclusive Hiring Event–New",
    date: "Thu, 26 Oct 2023",
    image: "https://images.unsplash.com/photo-1699180931872-909a40976580?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Symposiums Chemotherapy Foundation Symposiums",
    date: "Mon, 02 Dec 2024",
    image: "https://images.unsplash.com/photo-1660795940125-6d16180752d4?q=80&w=3731&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Vancouver International Congress of Entomology",
    date: "Fri, 27 Oct 2023",
    image: "https://plus.unsplash.com/premium_photo-1683141498413-cdfc0feccdb3?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Modern Marketing Expo in for the Business Owner",
    date: "Fri, 15 Sep 2023",
    image: "https://plus.unsplash.com/premium_photo-1722945664195-a6fd149bc472?q=80&w=3467&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const EventCard = ({ title, date, image }) => (
  <div style={{padding:'2vw'}} className="bg-white h-[110] rounded-2xl shadow-md  w-full ">
    <img src={image} alt={title} className="w-full h-70 object-cover rounded-t-[30px]" />
    <div className="p-4">
      <h3 style={{paddingBottom:'1vw'}} className="text-md font-semibold mb-2 text-gray-800">{title}</h3>
      <p style={{padding:'0.5vw'}} className="text-sm text-gray-500 mb-4">{date}</p>
      <p style={{padding:'0.5vw'}} className="text-sm text-gray-500 ">
        Organized By: 
        <span className="text-pink-600 font-semibold"> Organiser ka naam</span>
      </p>
      <button style={{marginTop:'2vw'}} className="px-4 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-100 transition text-sm font-medium">
        BUY NOW
      </button>
    </div>
  </div>
);


const FeaturedEvents = () => (
  <div
    style={{ padding: "5vw 0", paddingBottom:'10vw' }}
    className="featured min-h-screen  bg-gradient-to-br from-purple-100 to-purple-100 py-12 px-16"
  >
    <div className="w-full mx-auto text-center">
      <p className="text-pink-600 font-semibold text-sm mb-2">Upcoming Event</p>
      <h2
        style={{ paddingBottom: "4vw" }}
        className="text-3xl font-bold text-gray-800 mb-10 "
      >
        Featured Events
      </h2>
      <div
        style={{ padding: "0 5vw" }}
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-32"
      >
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  </div>
);

export default FeaturedEvents;
