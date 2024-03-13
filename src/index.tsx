import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router";

export default function Index() {
  return <Router />;
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Index />);
