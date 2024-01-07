import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import RQSuperHeroesPage from "./components/RQSuperHeroesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "./App.css";
import HomePage from "./components/HomePage";
import GetDataOnButtonClick from "./components/GetDataOnClick";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rq"> Super Heroes</Link>
            </li>
            <li>
              <Link to="/click-fetch">onClick Fetch - Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rq" element={<RQSuperHeroesPage />} />
          <Route path="/click-fetch" element={<GetDataOnButtonClick />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
