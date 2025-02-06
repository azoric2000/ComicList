 
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ComicsPage from "./pages/ComicsPage";
import MainLayout from "./layouts/MainLayout";
import AddPage from "./pages/AddPage.jsx";
import EditPage from "./pages/EditPage.jsx";
import "./css/main.css";

function App() {
  // Add New Comic Book Day (ncbd) to JSON endpoint
  const addNcbd = async (newNcbd) => {
    const res = await fetch("http://localhost:3369/comics", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newNcbd),
    });
    return;
  };

  // update existing NCBD JSON object by ID
  const updateNcbdSubmit = async (updateNCBD) => {
    const res = await fetch(`http://localhost:3369/comics/${updateNCBD.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateNCBD),
    });
    return;
  };

  // Delete NCBD JSON object by ID
  const deleteNcbdSubmit = async (id) => {
    console.log("delete", id);
    const res = await fetch(`http://localhost:3369/comics/${id}`, {
      method: "DELETE",
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/allcomics" element={<ComicsPage />} />
        <Route path="/allcomics" element={<ComicsPage />} />
        <Route path="/addpage" element={<AddPage addNcbdSubmit={addNcbd} isEdit={false}/>} />
        <Route
          path="/edit/:id"
          element={<EditPage deleteNcbdSubmit={deleteNcbdSubmit} updateNcbdSubmit={updateNcbdSubmit} isEdit={true} />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
