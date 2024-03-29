import React from "react";
import Navbar from "../../components/Navbar";
import Feedback from "../../components/Feedback";
import BookCollections from "./bookCollections";
import Footer from "../../components/Footer";

const Books = () => {
  return (
   <div className="bg-gray-300">
     <div className="bg-gray-300 border h-screen mx-20">
      <Navbar />
      <div>
        <div className="bg-gradient-to-r from-blue-400 to-green-400 mt-10">
          <img className="w-2/4" src="https://static.wixstatic.com/media/7ae45f_9e9f8d7b4609415995e67cab5d3e4f1e~mv2.jpg/v1/fill/w_712,h_362,al_t,q_80,usm_0.66_1.00_0.01,enc_auto/7ae45f_9e9f8d7b4609415995e67cab5d3e4f1e~mv2.jpg" />
        </div>
        <div className="w-3/5 bg-white absolute top-40 right-0 z-10 pb-20 pt-10 pl-20 pr-16 ">
          <h1 className="text-5xl font-semibold mt-20 mb-10">Ala Nnam </h1>
          <p className="leading-8" >
            The first children's book of Nwanyiocha, available in five
            languages: A story of three siblings travelling to their father's
            land and discovering life in Isuofia and its culture. The story is
            based on the true experience of her family.
          </p>
          <p className="pt-10 text-xl text-pink-700">Click on the faces to order your copy!</p>
        </div>
      </div>
      <BookCollections/>
      <Feedback/>
      <Footer/>
    </div>
   </div>
  );
};

export default Books;
