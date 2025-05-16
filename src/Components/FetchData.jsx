import React from "react";
import UseFetch from "./UseFetch";
import "./FetchData.css";

const FetchData = () => {
  const [data] = UseFetch("https://api.npoint.io/9045c260b1565daa9e15");
  console.log(data);

  return (
    <>
      <ul className="list_data_main">
        {data &&
          data.map((d) => (
            <>
              <li className="list_data">
                <h3>{d.name}</h3>
                <img src={d.image} width={"20%"} height={"20%"} />
                <p>
                  <strong>Importance: </strong>
                  {d.importance}
                </p>
                <p>
                  <strong>Benefits: </strong>
                  {d.benefits}
                </p>
                <p>
                  <strong>Bests time to intake: </strong>
                  {d.best_time_to_intake}
                </p>
              </li>
            </>
          ))}
      </ul>
    </>
  );
};

export default FetchData;
