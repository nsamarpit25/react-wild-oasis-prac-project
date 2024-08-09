import Select from "./Select";
import { useSearchParams } from "react-router-dom";

function SortBy({ options }) {
  const [searchParams, setSeaarchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSeaarchParams(searchParams);
  }

  return (
    <Select
      option={options}
      type={"white"}
      value={sortBy}
      onChange={handleChange}
    ></Select>
  );
}

export default SortBy;
