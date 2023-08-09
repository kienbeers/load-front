import { Button } from "antd";
import { Link } from "react-router-dom";
import ButtonRunAndStop from "./ButtonRunAndStop";

const Home = () => {
  return (
    <>
      <div className="mb-4">
        <Button className="ms-2">
          <Link
            style={{ display: "block", textDecoration: "none", width: "100px" }}
            to={"/"}
          >
            Home
          </Link>
        </Button>
        <Button className="ms-2">
          <Link
            style={{ display: "block", textDecoration: "none", width: "100px" }}
            to={"/frame1"}
          >
            Frame 1
          </Link>
        </Button>
        <Button className="ms-2">
          <Link
            style={{ display: "block", textDecoration: "none", width: "100px" }}
            to={"/frame2"}
          >
            Frame 2
          </Link>
        </Button>

        {/* <ButtonRunAndStop /> */}
      </div>
    </>
  );
};
export default Home;
