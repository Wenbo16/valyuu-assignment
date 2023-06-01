import Buy from "pages/Buy";
import { ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";

function App() {
  return (
    <div className="font-sans">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#3232FB"
          }
        }}
      >
        <StyleProvider hashPriority="high">
          <Buy />
        </StyleProvider>
      </ConfigProvider>
    </div>
  );
}

export default App;
