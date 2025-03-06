import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./redux-store/appStore";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from "./components/Login";
import Browse from "./components/Browse";


function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "login",
          element: <Login />
        },
        {
          path: 'browse',
          element: <Browse />
        }
      ]
    },

  ])

  return (
    <Provider store={appStore}>
      <div className="w-[100vw] h-[100vh]">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
