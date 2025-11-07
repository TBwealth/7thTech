import { BrowserRouter } from "react-router-dom";
import CustomRoutes from './routes';
import { ConfigProvider } from 'antd';
import './App.css'

function App() {

  return (
    <BrowserRouter>
       <ConfigProvider theme={{components: {
              Button: { colorPrimary: "#7930F4" },
              Tabs: { colorPrimary: "#7930F4" },
            }}}>
        <CustomRoutes />
        </ConfigProvider>
      </BrowserRouter>
  )
}

export default App
