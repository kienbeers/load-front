import { DownCircleOutlined, UpCircleOutlined } from "@ant-design/icons";
import { Input } from "antd";

const InputMinMax = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-4 text-center">
          <p style={{ fontWeight: "bold", textTransform: "uppercase" }}>
            {props.name}
          </p>
        </div>
        <div className="col-4">
          <lable>Min</lable>
          <Input
            min={props.minX}
            max={props.maxX}
            value={props.minValue}
            onChange={(event) => {
              props.setminValue(event.target.value);
            }}
            type="number"
            placeholder="Min"
            prefix={<DownCircleOutlined />}
          />
        </div>
        <div className="col-4">
          <lable className="text-danger">Max</lable>
          <Input
            min={props.minY}
            max={props.maxY}
            value={props.maxValue}
            onChange={(event) => props.setmaxValue(event.target.value)}
            type="number"
            placeholder="Max"
            prefix={<UpCircleOutlined />}
          />
        </div>
      </div>
    </>
  );
};
export default InputMinMax;
