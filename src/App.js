import { Route, Routes } from "react-router-dom";
import NewHome from "./newHome";
import Room from "./Room";
function App() {
  return (
    <div className="App">
<Routes>
  <Route path="/" element={<NewHome></NewHome>}/>
  <Route path="/room/:roomID" element={<Room></Room>}></Route>
  {/* room id is there because there can be multiple room */}
</Routes>
    </div>
  );
}

export default App;
