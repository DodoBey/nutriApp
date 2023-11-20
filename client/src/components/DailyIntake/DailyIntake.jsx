import { useRef } from "react";

const DailyIntake = () => {
  const searchRef = useRef("");
  // const api = {
  //   mainUrl: "https://api.edamam.com/api/food-database/v2/parser?ingr=",
  //   id: "7b389745",
  //   key: "9ce7819e554a95d61e2b57cb2f9b8014",
  // };

  // const fetchData = useCallback(
  //   async (searchItem) => {
  //     await fetch(
  //       `${api.mainUrl}${searchItem}&app_id=${api.id}&app_key=${api.key}`
  //     ).then((response) => {
  //       if (response.status !== 200) {
  //         console.log("Something wrong");
  //       }

  //       response.json().then((data) => {
  //         console.log(data);
  //       });
  //     });
  //   },
  //   [api.id, api.key, api.mainUrl]
  // );

  const keyPres = (e) => {
    if (e.key === "Enter") {
      console.log(searchRef.current.value);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="foodSearch">Search</label>
        <input
          ref={searchRef}
          id="foodSearch"
          type="text"
          onKeyDown={keyPres}
        />
        <div>Measurement</div>
      </div>
      <div>
        <div>
          <div>Breakfast</div>
          <div>Lunch</div>
          <div>Dinner</div>
          <div>Snack</div>
        </div>
        <div>Daily Total Intake</div>
      </div>
    </div>
  );
};

export default DailyIntake;
