import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Interests from "./pages/Interests";
import Credits from "./pages/Credits";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "education",
                element: <Education />
            },
            {
                path: "skills",
                element: <Skills />
            },
            {
                path: "experience",
                element: <Experience />
            },
            {
                path: "projects",
                element: <Projects />
            },
            {
                path: "interests",
                element: <Interests />
            },
            {
                path: "credits",
                element: <Credits />
            }
        ]
    }
]);

export default function App() {
    return <RouterProvider router={router}/>
}