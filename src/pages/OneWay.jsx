import React, { useState } from "react";

const OneWay = () => {
  const [flightOffers, setFlightOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const getSearchResult = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true

    try {
      const response = await fetch("/fakedata.txt"); // Fetch the text data
      const jsonData = await response.json(); // Convert the data into JSON
      const { flightOffer } = jsonData;
      setFlightOffers(flightOffer);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    finally {
      setIsLoading(false); // Set loading state to false when fetching is done
    }
  };

  console.log(flightOffers);
  return (
    <div>
      {/* form */}
      <div>
        <form className="flight-search-form" onSubmit={getSearchResult}>
          <hr />
          <div className="my-3">
            <input type="text" placeholder="LHR" required/>
            <input type="text" placeholder="CDG"  required/>
            <input type="date" required/>

            {/* showing dates dynamically using  spread operator */}
            <select className="px-3" name="day-plus">
              <option selected disabled> Day + </option>
              {[...Array(31).keys()].map((day) => (
                <option key={day} value={day + 1}>
                  {day + 1}
                </option>
              ))}
            </select>

            <select className="px-3" name="day-minus">
              <option selected disabled> Day - </option>
              {[...Array(31).keys()].map((day) => (
                <option key={day} value={day + 1}>
                  {day + 1}
                </option>
              ))}
            </select>

            <input type="text" placeholder="Any time" />
            <span> + </span>
            <input type="text" name="ADT" placeholder="ADT" />

            <select name="person">
              <option> 1 </option>
              <option> 2 </option>
              <option> 3 </option>
              <option> 4 </option>
            </select>

            <span> + </span>
          </div>
          <hr />
          <div className="flex justify-between my-2 font-bold">
            <span>
              <input name="extra_options" type="checkbox" /> Extra Options
            </span>

            <span>
              <span>Environment</span>

              <span className="mx-4">
                <input type="radio" name="environment" value="1" />
                <label> Dummy </label>
              </span>
              <span>
                <input type="radio" name="environment" value="0" />
                <label> PDT </label>
              </span>
            </span>

            <button className="bg-blue-800 rounded-md text-white px-6 py-2">
              Search
            </button>
          </div>
          <hr />
        </form>
      </div>

      {/* SHow loading while fetching */}
      {isLoading && <p className="font-bold text-xl">Loading...</p>}


      {/* Flight data */}
      <div className="relative overflow-x-auto my-4">
        {flightOffers.length > 0 && <p className="my-5" > Data Parsed Successfully..! </p>}
        <table className="w-full text-sm text-left ">
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            {flightOffers.length > 0 && (
              <tr>
                <th scope="col" className="px-6 py-3">
                  Flight
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Air Craft
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Class
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Fare
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Route
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Departure
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Arrival
                </th>
                <th scope="col" className="px-6 py-3">
                  Duration
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            )}
          </thead>

          <tbody>
            {flightOffers.map((data, index) => (
              <tr
                key={index}
                className=" text-white border-b bg-gray-800 border-gray-700"
              >
                {/* flight */}
                <td className="px-6 py-4">
                  <div>
                    <span>{data.itineraries[0].segments[0].flightNumber}</span>
                    <span>
                      {data.itineraries[0].segments[0].marketingCarrier}
                    </span>
                  </div>
                  <div>
                    <span>{data.itineraries[0].segments[1].flightNumber}</span>
                    <span>
                      {data.itineraries[0].segments[1].marketingCarrier}
                    </span>
                  </div>
                </td>

                {/* aircraft */}
                <td className="px-6 py-4 ">
                  <div>{data.itineraries[0].segments[0].aircraft} </div>
                  <div>{data.itineraries[0].segments[1].aircraft} </div>
                </td>

                {/* class */}
                <td className="px-6 py-4 ">
                  {data.class[0].map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </td>

                {/* FARE */}
                <td className="px-6 py-4">
                  {data.fareBasis[0].map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </td>

                {/* route */}
                <td className="px-6 py-4 ">
                  <div>
                    <span>
                      {data.itineraries[0].segments[0].departure.iataCode}
                    </span>
                    -
                    <span>
                      {data.itineraries[0].segments[0].arrival.iataCode}
                    </span>
                  </div>

                  <div>
                    <span>
                      {data.itineraries[0].segments[1].departure.iataCode}
                    </span>
                    -
                    <span>
                      {data.itineraries[0].segments[1].arrival.iataCode}
                    </span>
                  </div>
                </td>

                {/* departure */}
                <td className="px-6 py-4">
                  <div>{data.itineraries[0].segments[0].departure.at}</div>
                  <div>{data.itineraries[0].segments[1].departure.at}</div>
                </td>

                {/* arrival */}
                <td className="px-6 py-4">
                  <div>{data.itineraries[0].segments[0].arrival.at}</div>
                  <div>{data.itineraries[0].segments[1].arrival.at}</div>
                </td>

                {/* duration */}
                <td className="px-6 py-4">{data.itineraries[0].duration}</td>

                {/* price */}
                <td className="px-6 py-4 center flex-col ">
                  {data.price} <br />
                  <button className="bg-blue-600 px-4 py-2 rounded-lg">
                    select
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OneWay;
