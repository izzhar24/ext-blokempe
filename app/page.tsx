import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-4 sm:p-10 bg-white ">
      <div className="container mx-auto items-center flex flex-wrap sm:mt-48 mt-12">
        <div className="flex flex-col w-full md:w-2/5 justify-center text-center md:text-left z-20 sm:z-0 mt-[4.1rem] ">
          <h1 className="font-semibold text-5xl text-slate-600">
            PH8-EXT BLOKEMPE
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-500">
            Bersama membangun bersama lingkungan yang aman dan nyaman untuk
            semua masyarakat sekitar dengan mengusung konsep{" "}
            <span className="font-bold">
              KEBERMANFAATAN DAN KESEJAHTERAAN BERSAMA
            </span>
          </p>
        </div>
        <div className="w-full md:w-3/5 text-center">
          <Image
            className="absolute top-0 b-auto right-0 sm:pt-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 object-cover"
            src="/ill_header_3.png"
            width={500}
            height={500}
            alt="..."
          />
        </div>
      </div>
      <Team />
    </main>
  );
}


/// Page Sections
interface ListPengurus {
  name: string;
  role: string;
}
const listPengurus: ListPengurus[] = [
  {
    name: "Agus Firman",
    role: "Ketua Pengurus",
  },
  {
    name: "Endi",
    role: "Penasehat",
  },
  {
    name: "Hariyanto",
    role: "Humas",
  },
  {
    name: "Anas",
    role: "Sekretaris",
  },
  {
    name: "Alfian",
    role: "Bendahara",
  },
];

const Team = () => (
  <section className="pt-20 sm:pb-24 pb-2">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center text-center mb-8 text-slate-600">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-semibold">Para Pengurus</h2>
          <p className="text-lg leading-relaxed m-4 text-gray-600">
            Mandiri dengan kualitas dan integritas yang indah, kami hadir dengan
            tagline &quot;Kebermanfaatan Sementara Sempurna&quot;
          </p>
        </div>
      </div>
      <hr className="my-6 border-gray-300" />
      <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(0,1fr))] grid-cols-1 justify-center justify-self-center mx-auto w-full">
        {listPengurus.map((item, index) => (
          <div className="grid sm:mb-0 content-center mb-12 px-4"  key={index}>
            <div className="px-6 py-4">
              <img
                alt="..."
                src={`https://ui-avatars.com/api/?name=${item.name}&background=0D8ABC&color=fff&size=128`}
                className="shadow-lg rounded-full max-w-full mx-auto"
                width={120}
                height={120}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">{item.name}</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
      <div className="px-6">
        <img
          alt="..."
          src={require('../assets/img/team-2-800x800.jpg')}
          className="shadow-lg rounded-full max-w-full mx-auto"
          style={{ maxWidth: "120px" }}
        />
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">
            Romina Hadid
              </h5>
          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
            Marketing Specialist
              </p>
          <div className="mt-6">
            <button
              className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <i className="fab fa-google"></i>
            </button>
            <button
              className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <i className="fab fa-facebook-f"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
      <div className="px-6">
        <img
          alt="..."
          src={require('../assets/img/team-3-800x800.jpg')}
          className="shadow-lg rounded-full max-w-full mx-auto"
          style={{ maxWidth: "120px" }}
        />
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">
            Alexa Smith
              </h5>
          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
            UI/UX Designer
              </p>
          <div className="mt-6">
            <button
              className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <i className="fab fa-google"></i>
            </button>
            <button
              className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <i className="fab fa-twitter"></i>
            </button>
            <button
              className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <i className="fab fa-instagram"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
      <div className="px-6">
        <img
          alt="..."
          src={require('../assets/img/team-4-470x470.png')}
          className="shadow-lg rounded-full max-w-full mx-auto"
          style={{ maxWidth: "120px" }}
        />
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">
            Jenna Kardi
              </h5>
          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
            Founder and CEO
              </p>
          <div className="mt-6">
            <button
              className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <i className="fab fa-dribbble"></i>
            </button>
            <button
              className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <i className="fab fa-google"></i>
            </button>
            <button
              className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <i className="fab fa-twitter"></i>
            </button>
            <button
              className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <i className="fab fa-instagram"></i>
            </button>
          </div>
        </div>
      </div>
    </div> */}
      </div>
    </div>
  </section>
);

// const Featured = () => (
//   <section className="relative py-20">
//     <div
//       className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
//       style={{ height: "80px" }}
//     >
//       <svg
//         className="absolute bottom-0 overflow-hidden"
//         xmlns="http://www.w3.org/2000/svg"
//         preserveAspectRatio="none"
//         version="1.1"
//         viewBox="0 0 2560 100"
//         x="0"
//         y="0"
//       >
//         <polygon
//           className="text-white fill-current"
//           points="2560 0 2560 100 0 100"
//         ></polygon>
//       </svg>
//     </div>

//     <div className="container mx-auto px-4">
//       <div className="items-center flex flex-wrap">
//         <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
//           <img
//             alt="..."
//             className="max-w-full rounded-lg shadow-lg"
//             src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
//           />
//         </div>
//         <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
//           <div className="md:pr-12">
//             <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
//               <i className="fas fa-rocket text-xl"></i>
//             </div>
//             <h3 className="text-3xl font-semibold">A growing company</h3>
//             <p className="mt-4 text-lg leading-relaxed text-gray-600">
//               The extension comes with three pre-built pages to help you get
//               started faster. You can change the text and images and you're good
//               to go.
//             </p>
//             <ul className="list-none mt-6">
//               <li className="py-2">
//                 <div className="flex items-center">
//                   <div>
//                     <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
//                       <i className="fas fa-fingerprint"></i>
//                     </span>
//                   </div>
//                   <div>
//                     <h4 className="text-gray-600">
//                       Carefully crafted components
//                     </h4>
//                   </div>
//                 </div>
//               </li>
//               <li className="py-2">
//                 <div className="flex items-center">
//                   <div>
//                     <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
//                       <i className="fab fa-html5"></i>
//                     </span>
//                   </div>
//                   <div>
//                     <h4 className="text-gray-600">Amazing page examples</h4>
//                   </div>
//                 </div>
//               </li>
//               <li className="py-2">
//                 <div className="flex items-center">
//                   <div>
//                     <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
//                       <i className="far fa-paper-plane"></i>
//                     </span>
//                   </div>
//                   <div>
//                     <h4 className="text-gray-600">Dynamic components</h4>
//                   </div>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );
