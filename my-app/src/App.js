import NavBar from "./Components/NavBar/NavBar";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Etusivu from "./Components/pages/Etusivu";
import Ruokalista from "./Components/pages/Ruokalista";
import Tilaa from "./Components/pages/Tilaa";
import Yhteystiedot from "./Components/pages/Yhteystiedot";
import Tietoa from "./Components/pages/Tietoa";
import Tilauksentiedot from "./Components/pages/Tilauksentiedot";
import { OrderContext } from "./Components/OrderContext";
import { useState, useMemo } from "react";

function App() {
  const [price, setPrice] = useState(0);
  const [itemName, setItemName] = useState(null);
  const [quant, setQuant] = useState(0);

  return (
    <>
      <NavBar></NavBar>
      <OrderContext.Provider
        value={{ price, setPrice, itemName, setItemName, quant, setQuant }}
      >
        <Routes>
          <Route path="/tilauksentiedot" element={<Tilauksentiedot />} />
          <Route path="/" element={<Etusivu />} />
          <Route path="/ruokalista" element={<Ruokalista />} />
          <Route path="/tilaa" element={<Tilaa />} />
          <Route path="/yhteystiedot" element={<Yhteystiedot />} />
          <Route path="/tietoa" element={<Tietoa />} />
        </Routes>
      </OrderContext.Provider>
    </>
  );
}

export default App;
/*
<NavBar onClick />
        <Routes>
          <Route path="/etusivu" element={<Etusivu />} />
          <Route path="/ruokalista" element={<Ruokalista />} />
          <Route path="/tilaa" element={<Tilaa />} />
          <Route path="/yhteystiedot" element={<Yhteystiedot />} />
          <Route path="/tietoa" element={<Tietoa />} />
        </Routes>
      </div>
*/
