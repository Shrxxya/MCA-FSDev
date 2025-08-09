function Card({facts}) {
  return (
        <div className="bg-pink-50 rounded-xl shadow-md p-4 m-4 w-64 text-center border border-pink-800">
            <div className="text-lg font-semibold text-gray-800 mb-2">{facts}</div>
            <hr className="text-black mb-2"/>
            <div className="text-sm text-gray-500">@dogFactsRock</div>
        </div>
  );
}

export default Card;


// function Card({ facts }) {
//   return (
//     <div className="bg-pink-50 rounded-xl shadow-md p-4 m-4 w-64 text-center border-2 border-pink-800 hover:shadow-lg transition-shadow duration-300">
//       <div className="text-lg font-semibold text-gray-800 mb-2">{facts}</div>
//       <hr className="text-black mb-2" />
//       <div className="text-sm text-gray-500">@dogFactsRock</div>
//     </div>
//   );
// }

// export default Card;
