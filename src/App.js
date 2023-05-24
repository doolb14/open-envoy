import { useCallback } from "react";
import "./App.css";
import OEText from "./components/basic/OEText";
import MatchSummary from "./components/complex/MatchSummary";

function App() {
  const data = [
    {
      id: 1,
      element: "Multiple sources",
      info: "(2)",
      match_item: "Sum total",
      currency: "$",
      amount: 123.45,
      details_available: true,
      is_approved: true,
    },
    {
      id: 2,
      element: "Post Log",
      info: null,
      match_item: "Total",
      currency: "$",
      amount: 1200.0,
      details_available: false,
    },
    {
      id: 3,
      element: "Accural",
      info: "Utilized",
      match_item: "Oct 1 NFLN Tonal",
      currency: "$",
      amount: 800.0,
      details_available: false,
    },
  ];

  const getDetailedData = useCallback(
    (item_id) => [
      { name: "Invoice", description: "Total", currency: "$", amount: 247 },
      {
        name: "Credit memo",
        description: "Total",
        currency: "$",
        amount: 123.5,
      },
      {
        name: "Credit memo",
        description: "Total",
        currency: "$",
        amount: 123.5,
      },
    ],
    []
  );

  return (
    <div className="App">
      <MatchSummary data={data} onGetDetails={getDetailedData} />
    </div>
  );
}

export default App;
