import { useState, useEffect } from "react";
import axios from "axios";

export const FetchData = () => {
  const api = "https://mockdata.sivadira.com/api/mock/animals";
  const [data, setData] = useState([]);
  const [isLoad, setLoad] = useState(true);

  useEffect(() => {
    try {
      axios.get(api).then((response) => {
        setData(response.data.data);
      });
    } catch (error) {
      console.log(error);
    }
    setLoad(false);
  }, [api]);

  const renderNestedData = (item, level, mLeft) => {
    const headingNumber = `${level ? level : ""}`;
    return (
      <div key={level} style={{ marginLeft: mLeft }}>
        <h2>
          {headingNumber}. {item.name}
        </h2>
        {item.children &&
          item.children.map((child, index) =>
            renderNestedData(child, `${headingNumber}.${index + 1}`, mLeft + 5)
          )}
      </div>
    );
  };

  if (isLoad) {
    return <div>Loading</div>;
  }
  return (
    <div className="px-10 lg:px-[135px] py-10">
      <h1>Nested Data</h1>
      {data && (
        <div>
          {Array.from(data).map((item, index) =>
            renderNestedData(item, index + 1, 0)
          )}
        </div>
      )}
    </div>
  );
};
