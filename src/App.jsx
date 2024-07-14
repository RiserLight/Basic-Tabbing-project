import Tab from "./components/tab";
import TabDescription from "./components/tab-description";
import { useState } from "react";
import './App.css';
const App = () => {
  const [tabData, setTabData] = useState([
    { title: "tab 1", description: "Tab description 1" },
    { title: "tab 2", description: "Tab description 2" },
    { title: "tab 3", description: "Tab description 3" },
  ]);

  const [currTab, setCurrTab] = useState(3);
  const { description } = tabData[currTab - 1];

  const onTabSelected = (tabIndex) => {
    setCurrTab(tabIndex + 1);
  };

  return (
    <div className="tabs">
      <div className="tab-headings">
        {tabData.map((tab, index) => (
          <Tab
            tab={tab}
            tabIndex={index}
            currTab={currTab - 1}
            key={tab.title}
            onTabSelected={onTabSelected}
          />
        ))}
      </div>
      <TabDescription>
        <div>{description}</div>
      </TabDescription>
    </div>
  );
};

export default App;
