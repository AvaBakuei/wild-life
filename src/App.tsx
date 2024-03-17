import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/index.tsx";

function App() {
  return (
    <div className="flex flex-col">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
