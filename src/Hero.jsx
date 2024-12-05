import image1 from './assets/images/udaipurlake.jpg';
import image2 from './assets/images/booknowbtn.png';
import image3 from './assets/images/explore1.jpg';
import image4 from './assets/images/explore2.jpg';
import image5 from './assets/images/explore3.jpeg';
import image6 from './assets/images/explore4.jpg';
import image7 from './assets/images/explore5.jpg';

import exploreimage1 from './assets/images/explore/img1.jpg';
import exploreimage2 from './assets/images/explore/img2.jpg';

// import exploreimage3 from './assets/images/explore/img3.jpg';
// import exploreimage4 from './assets/images/explore/img4.jpg';

import exploreimage5 from './assets/images/explore/img5.jpg';
import exploreimage6 from './assets/images/explore/img6.jpg';
import exploreimage7 from './assets/images/explore/img7.jpg';

// import exploreimage8 from './assets/images/explore/img8.jpg';

import exploreimage9 from './assets/images/explore/img9.jpg';
import blackwhite1 from './assets/images/explore/img10.jpg';
import blackwhite2 from './assets/images/explore/img11.jpg';
import blackwhite3 from './assets/images/explore/img12.jpg';



const Hero = () => {
  const containers = [
    {
      id: 1,
      title: "Comprehensive Travel Resources",
      description: "Personalized Itineraries, and Insider Tips to Make Every Journey Extraordinary!",
      image: image6,
      width: "363px",
      height: "250px",
      top: "1207px",
      left: "33px",
      gap: "0px",
      borderRadius: "22px 0px 0px 0px",
      opacity: "0",

      arrowPosition: { top: "193.44px", left: "23px" },
    },
    {
      id: 2,
      title: "Let’s Explore Together",
      description: "Dive into Curated Travel Experiences and Tools!",
      width: "293px",
      height: "309px",
      top: "1207px",
      left: "442px",
      gap: "0px",
      borderRadius: "22px 0px 0px 0px",
      opacity: "0",
      image: image4,
      // arrowPosition: { top: "193.44px", left: "23px" },
    },
    {
      id: 3,
      title: "Navigate Your Next Expert Guides",
      description: "Long heading is what you see here in this feature section.",
      image: image3,
      width: "303px",
      height: "537px",
      top: "1207px",
      left: "790px",
      gap: "0px",
      borderRadius: "22px 0px 0px 0px",
      opacity: "0",
      arrowPosition: { top: "480px", left: "247px" },

    },
    {
      id: 4,
      image: image5,
      width: "263px",
      height: "257px",
      top: "1207px",
      left: "1144px",
      gap: "0px",
      borderRadius: "22px 0px 0px 0px",
      opacity: "0",
      arrowPosition: { top: "109px", left: "112px" },
      // title: "Navigate Your Next Expert Guides",
      // description: "Long heading is what you see here in this feature section.",

    },


  ];
  const ExploreContainer = [
    {
      id: 6,
      image: exploreimage2,
      width: "400px",
      height: "400px",
      top: "1207px",
      left: "1936px",
      gap: "0px",
      borderRadius: "22px 0px 0px 0px",
      opacity: "0",
      title: "DESERT STAR GAZING"

      // arrowPosition: { top: "193.44px", left: "23px" },
      // title: "Navigate Your Next Expert Guides",
      // description: "Long heading is what you see here in this feature section.",
    },
    {
      id: 7,
      image: exploreimage5,
      width: "400px",
      height: "400px",
      top: "1207px",
      left: "2332px",
      gap: "0px",
      borderRadius: "22px 0px 0px 0px",
      opacity: "0",
      title: "DESERT SAFARI"

      // arrowPosition: { top: "193.44px", left: "23px" },
      // title: "Navigate Your Next Expert Guides",
      // description: "Long heading is what you see here in this feature section.",
    },
    {
      id: 8,
      image: exploreimage6,
      width: "400px",
      height: "400px",
      top: "1207px",
      left: "2332px",
      gap: "0px",
      borderRadius: "22px 0px 0px 0px",
      opacity: "0",
      title: "CAMEL RIDE"

      // arrowPosition: { top: "193.44px", left: "23px" },
      // title: "Navigate Your Next Expert Guides",
      // description: "Long heading is what you see here in this feature section.",
    },
    {
      id: 9,
      image: exploreimage7,
      width: "400px",
      height: "400px",
      top: "1207px",
      left: "2332px",
      gap: "0px",
      borderRadius: "22px 0px 0px 0px",
      opacity: "0",
      title: "MARKET VISIT"

      // arrowPosition: { top: "193.44px", left: "23px" },
      // title: "Navigate Your Next Expert Guides",
      // description: "Long heading is what you see here in this feature section.",
    },
    {
      id: 10,
      image: exploreimage9,
      width: "400px",
      height: "400px",
      top: "1207px",
      left: "2332px",
      gap: "0px",
      borderRadius: "22px 0px 0px 0px",
      opacity: "0",
      title: "FORT VISIT"

      // arrowPosition: { top: "193.44px", left: "23px" },
      // title: "Navigate Your Next Expert Guides",
      // description: "Long heading is what you see here in this feature section.",
    },
    {
      id: 11,
      image: exploreimage1,
      width: "400px",
      height: "400px",
      top: "1207px",
      left: "2332px",
      gap: "0px",
      borderRadius: "22px 0px 0px 0px",
      opacity: "0",
      title: "GHAT VIEW"
      // arrowPosition: { top: "193.44px", left: "23px" },
      // title: "Navigate Your Next Expert Guides",
      // description: "Long heading is what you see here in this feature section.",
    },


  ];
  const locations = [
    { id: 1, name: "JAIPUR", image: blackwhite1 },
    { id: 2, name: "UDAIPUR", image: blackwhite2 },
    { id: 3, name: "PUSHKAR", image:blackwhite3 },
  ];
  return (
    <>
      <div className="h-[815px] w-[1374px] m-auto border relative overflow-hidden rounded-[23px] mt-[57px]">
        {/* Background Image */}
        <img src={image1} alt="Udaipur Lake" className="h-full w-full object-cover" />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col space-y-6 ml-[287px] mt-[68px]">
          {/* Hero Heading */}
          <h1 className="text-white text-start text-[75px] font-poppins font-bold leading-tight">
            Explore the <br /> world with us
          </h1>

          {/* Book Now Button */}
          <img
            src={image2}
            alt="Book Now Button"
            className="w-[400px] h-[120px] cursor-pointer transition-transform transform hover:scale-105"
          />
          <div>
          </div>
          <button className="absolute  border stroke-white h-[150px] w-[150px] bg-[#d9d9d9] backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-[#082221] shadow-lg transition-transform transform hover:scale-105  z-20  ml-[-130px] translate-y-[412px] ">
            Contact
          </button>

          <div className="absolute w-80 h-96 bg-white rounded-2xl shadow-lg overflow-visible p-6 flex inset-x-[65%] inset-y-[65%] ">
            {/* Decorative Top Wave */}
            <div className="absolute top-0 left-0 w-full h-12 bg-white ">
              <svg
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#ffffff"
                  fillOpacity="1"
                  d="M0,128L48,112C96,96,192,64,288,48C384,32,480,32,576,48C672,64,768,96,864,101.3C960,107,1056,85,1152,96C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                ></path>
              </svg>
            </div>

            {/* Circular Text Section */}
            <div className="absolute -top-6 left-6 w-20 h-20 rounded-full border-2 border-black flex items-center justify-center">
              <div className="text-xs transform -rotate-12">
                <p className="tracking-widest">GO FURTHER</p>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col justify-between h-full mt-8">
              <div>
                <h2 className="text-xl font-bold">Wander Often,</h2>
                <h2 className="text-xl font-bold">Wonder Always.</h2>
              </div>
              <hr className="border-gray-300 my-4" />
              <div>
                <button
                  className="flex items-center justify-between bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
                >
                  <span>Explore More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* This is the Explore section that is starting from here */}

      <div className='font-poppins font-bold '>
        <h1 className='ml-[112px] mt-[44px]'> Every Journey is unique</h1>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {containers.map((container) => (
          <div
            key={container.id}
            className="relative overflow-hidden mt-[60px] cursor-pointer rounded-[23px] shadow-2xl hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
            style={{
              width: container.width,
              height: container.height,
            }}
          >
            {/* Image */}
            <img
              src={container.image}
              alt={container.text}
              className="w-full h-full object-cover "
            />

            {/* Text Overlay */}
            {/* Text Overlay */}
            <div className="absolute inset-x-[23px] inset-y-[26px] flex flex-col items-center justify-centerrounded-lg  max-w-[317px] p-4 font-poppins text-center"
            >
              {/* Title */}
              <p className="text-black text-lg font-medium leading-snug mb-3 px-2 ">
                {container.title}
              </p>
              {/* Description */}
              <p className="text-black text-sm font-normal leading-relaxed break-words px-2"
              style={{
                color: container.id === 1 || container.id === 3 ? '#FEFEFE' : '#082221',

                // color: container.id === 3 ? '#FEFEFE' : '#082221',
                 // Dynamically set top, right, bottom, left
              }}
              >
                {container.description}
              </p>
            </div>

            
            <div
              className="absolute right-4 w-12 h-12 rounded-full bg-[#082221] 
              flex items-center justify-center transition-transform transform hover:rotate-45 p-2 top-[205px] left-[36.56px] "
              style={{
                backgroundColor: container.id === 3 ? '#BEBEBE' : '#082221',
                
                ...container.arrowPosition, // Dynamically set top, right, bottom, left
              }}
            >
              <svg width="400px" height="400px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke={container.id === 3 ? "#082221" : "#FEFEFE"} strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>

        ))}
      </div>

      {/* From here on Event section is started */}

      <div className='mb-32'>
        <h1 className='font-poppins text-[42px] font-semibold leading-[63px] ml-[56px] text-left mt-[59px]  decoration-skip-ink'>Best Event for 2024</h1>
        <div className="relative  max-w-[1450px] max-h-[495px] gap-0 rounded-[22px] opacity-100 mx-auto overflow-hidden">
          <img
            src={image7}
            alt="Descriptive Alt Text"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex">
            <h1 className="text-stroke-2-white text-transparent font-bold text-[72px] uppercase tracking-widest pl-8" style={{
              WebkitTextFillColor: "transparent", // Will override the text color
              WebkitTextStrokeWidth: "2px",
              WebkitTextStrokeColor: "white",
              fontSize: "10vw", // Dynamically size text to occupy 75% width
              width: "75%",
              margin: "auto",
             
              
              
            }}>

              JAISALMER
            </h1>
          </div>

        </div>
        <div className="max-w-[1148px] mt-[11px] mx-auto">
          <h2 className="font-poppins text-[22px] font-normal leading-[33px] text-center">
            Dive into curated experiences, in-depth guide & personalized planning tools for every type of traveller
          </h2>
        </div>

        {/* Exploring Jaisalmer */}
        <div className="py-10">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="font-poppins text-[36px] font-bold leading-[48px] text-gray-900">
              Explore Jaisalmer with us!
            </h1>
            <p className="font-poppins text-[18px] font-normal leading-[28px] text-gray-700 mt-4 max-w-[667px] mx-auto]">
              Let's go on an adventure! Pack your bags for incredible getaways filled with luxury and fun.
            </p>
          </div>
        </div>

        <div className='flex flex-wrap gap-8 max-w-full align-center justify-center'>
          {ExploreContainer.map((explore, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 max-w-[400px] h-[400px] rounded-[22px] overflow-hidden relative hover:opacity-100 opacity-100 transition-opacity duration-300 ease-in-out"
            >
              <img
                src={explore.image}
                alt="Descriptive Alt Text"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <p
                className="absolute font-poppins bottom-0 left-[0] w-[243px] h-[50px] stroke-white border  opacity-100 transition-opacity duration-300 ease-in-out text-white text-center p-2 px-6 top-[286px] backdrop-blur-md bg-white/30 "
              >
                {explore.title}
              </p>

            </div>
          ))}
        </div>
        <button className="flex items-center mx-auto mt-12 bg-gray-800 text-white font-semibold text-sm px-4 py-2 rounded-full shadow-md relative overflow-hidden group hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50">
          Explore More
          <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full ml-2 group-hover:bg-gray-200 transition-colors">
            <svg className="w-5 h-5 text-gray-800 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </button>

        <h1 className='font-poppins mt-[52px] ml-[33px] text-[36px] font-bold leading-[48px] text-gray-900'>Stay tuned for our upcoming events !</h1>
        <div className="flex flex-wrap justify-center gap-10 p-4 mx-auto">
      {locations.map((location) => (
        <div
          key={location.id}
          className="relative  w-[400px] h-[533.6px] rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition-transform duration-300"
        >
          {/* Image */}
          <img
            src={location.image}
            alt={location.name}
            className="w-full h-full object-cover filter grayscale"
          />

          {/* Text Overlay */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[264px] h-[113px] bg-black bg-opacity-60 border-t-4 border-white flex items-center justify-center">
            <h2 className="text-white text-2xl font-bold tracking-wide uppercase" style={{
              WebkitTextFillColor: "transparent", // Will override the text color
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "white",
            }}>
              {location.name}
            </h2>
          </div>
        </div>
      ))}
    </div>
    <footer className="w-full bg-white px-6 py-8">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Section: Book Now Button */}
        <div className="flex justify-center md:justify-start">
          <button className="flex items-center bg-gray-800 text-white font-semibold text-sm px-6 py-3 rounded-full shadow-md relative overflow-hidden group hover:bg-gray-900">
            Book Now
            <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full ml-4 group-hover:bg-gray-200 transition-colors">
              <svg
                className="w-5 h-5 text-gray-800 group-hover:text-gray-600 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Middle Section: Contact Info */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold mb-4">Contact</h2>
          <p className="text-sm font-normal">Address :-</p>
          <p className="text-sm font-normal">Mail :-</p>
          <p className="text-sm font-normal">Phone No :-</p>
        </div>

        {/* Right Section: Email Input */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-bold mb-4 text-center md:text-right">
            For Queries Drop Your Mail
          </h3>
          <div className="flex items-center bg-gray-200 px-4 py-2 rounded-full shadow-md w-full max-w-[300px]">
            <input
              type="email"
              placeholder="gfh@gmail.com"
              className="bg-transparent flex-grow text-gray-800 outline-none text-sm"
            />
            <button className="bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>


      </div>
    </>
  );
};

export default Hero;
