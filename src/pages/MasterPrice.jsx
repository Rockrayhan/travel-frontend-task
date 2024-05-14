import React, { useState, useEffect } from "react";

const MasterPrice = () => {
  const [flightOffers, setFlightOffers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/fakedata.txt"); // fetch the text data
        const jsonData = await response.json(); // convert the data into json
        const { flightOffer } = jsonData;
        setFlightOffers(flightOffer);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(flightOffers);

  return (
    <div>
      <h1 className="text-3xl"> Master Price </h1>

      <div className="flex justify-center my-4">
        <button className="border-2 border-blue-800 px-3">Round Trip</button>
        <button className="bg-blue-800 px-4 text-white"> One Way </button>
        <button className="border-2 border-blue-800 px-3"> Multi City </button>
      </div>

      {/* form */}
      <div>
        <form className="flight-search-form">
          <hr />
          <div className="my-3">
            <input type="text" placeholder="LHR" />
            <input type="text" placeholder="CDG" />
            <input type="date" />
            <input className="w-16" type="text" placeholder="Day-" />
            <input className="w-16" type="text" placeholder="Day+" />
            <input type="text" placeholder="Any time" />
            <span> + </span>
            <input type="text" name="ADT" />

            <select name="person">
              <option> 1 </option>
              <option> 2 </option>
              <option> 3 </option>
              <option> 4 </option>
            </select>

            <span> + </span>
          </div>
          <hr />
          <div className="flex justify-between my-2">
            <span>
              <input name="extra_options" type="checkbox" /> Extra Options
            </span>

            <span>
              Environment

              <input type="radio" name="environment" value="1" /> <label> Dummy </label>
              <input type="radio" name="environment" value="0" /> <label> PDT </label>
            </span>

            <button className="bg-blue-800 rounded-md text-white px-6 py-2">
              Search
            </button>
          </div>
          <hr />
        </form>
      </div>

      {/* Flight data */}
      <div className="relative overflow-x-auto my-4">
        <table className="w-full text-sm text-left ">
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
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
          </thead>
          <tbody>
            {flightOffers.map((data, index) => (
              <tr
                key={index}
                className=" text-white border-b dark:bg-gray-800 dark:border-gray-700"
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
                <td className="px-6 py-4">
                  {data.price} <br />
                  <button className="bg-green-600 p-3"> select </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MasterPrice;
