import "./App.css";
// import Button from "./components/Button";
import { Button } from "antd";

import { Card } from "./components/Card";
import ComboBox from "./components/ComboBox";

import Stack from "@mui/material/Stack";
import MButton from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import BasicRating from "./components/Basicrating";
import { CaretRightOutlined } from "@ant-design/icons";
import { Divider } from "antd";

function App() {
  return (
    <>
      <div>
        <Divider></Divider>
        <Divider>Text</Divider>
        <Divider orientation="right">Right Text</Divider>
        <Divider orientation="right" orientationMargin={50}>
          Right Text with 50px orientationMargin
        </Divider>
        <CaretRightOutlined />
        <Button>내마음데로수정이어렵다</Button>

        <BasicRating />
        <Checkbox defaultChecked />

        <Stack spacing={2} direction="row">
          <MButton
            variant="text"
            onClick={() => {
              alert("눌렀냐");
            }}
          >
            온나
          </MButton>
          <MButton variant="contained">잠이</MButton>
          <MButton variant="outlined">터므</MButton>
        </Stack>
      </div>
      <ComboBox />
      <Card>TEST</Card>
      <Card primary="true">TEST</Card>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
