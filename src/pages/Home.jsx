import React, { useState, useEffect } from "react";

const Home = () => {
  const [flightOffers, setFlightOffers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/fakedata.txt");
        const jsonData = await response.json(); // Parse response as JSON
        const { flightOffer } = jsonData; // Extract flightOffer array
        setFlightOffers(flightOffer); // Set flightOffers state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(flightOffers);
  return (
    <div className="container">
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left ">
          <thead class="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Flight
              </th>
              <th scope="col" class="px-6 py-3 ">
                Air Craft
              </th>
              <th scope="col" class="px-6 py-3 ">
                Class
              </th>
              <th scope="col" class="px-6 py-3 ">
                Fare
              </th>
              <th scope="col" class="px-6 py-3 ">
                Route
              </th>
              <th scope="col" class="px-6 py-3 ">
                Departure
              </th>
              <th scope="col" class="px-6 py-3 ">
                Arrival
              </th>

              <th scope="col" class="px-6 py-3">
                Duration
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {flightOffers.map((data, index) => (
              <tr
                key={index}
                class=" text-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                {/* flight */}
                <td class="px-6 py-4">
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
                <td class="px-6 py-4 ">
                  <div>{data.itineraries[0].segments[0].aircraft} </div>
                  <div>{data.itineraries[0].segments[1].aircraft} </div>
                </td>

                {/* class */}
                <td class="px-6 py-4 ">
                  {data.class[0].map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </td>

                {/* FARE */}
                <td class="px-6 py-4">
                  {data.fareBasis[0].map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </td>

                {/* route */}
                <td class="px-6 py-4 ">
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
                <td class="px-6 py-4">
                <div>{data.itineraries[0].segments[0].departure.at}</div>
                <div>{data.itineraries[0].segments[1].departure.at}</div>
                </td>

                {/* arrival */}
                <td class="px-6 py-4">
                <div>{data.itineraries[0].segments[0].arrival.at}</div>
                <div>{data.itineraries[0].segments[1].arrival.at}</div>
                </td>


                {/* duration */}
                <td class="px-6 py-4">{data.itineraries[0].duration}</td>

                {/* price */}
                <td class="px-6 py-4">
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

export default Home;