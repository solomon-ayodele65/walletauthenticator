import { Route, Routes } from "react-router";
import Header from "./components/header";
import DemoPage from "./pages/home";


function App() {

  const routes = [
    {
      path: "/",
      element: <DemoPage />
    },
  ]
  return (
    <div className="w-100">
      <Header />
      <Routes>
        {
          routes.map(({path, element})=> (
            <Route key={path} path={path} element={element} />
          ))
        }
        <Route
          path="*"
          element={
            <div className="text-center pt-100p">
              <p className="fs-1 fw-bold">There's nothing here!</p>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
