import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Toaster } from "react-hot-toast";
import { toastOptions } from "./constants";

function App() {
  return (
    <>
    <Toaster
        toastOptions={toastOptions}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App
