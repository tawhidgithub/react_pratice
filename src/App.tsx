import { RouterProvider } from "react-router";
import "./App.css";
import Routes from "./routes/routes";

function App() {
  return <RouterProvider router={Routes}></RouterProvider>;
}

export default App;
