import { useAppStore } from "./store/useAppStore";
import MainScreen from "./screens/Main";
import CategoriesScreen from "./screens/Categories";
import GameScreen from "./screens/Game";
import Layout from "./components/Layout";
import OverScreen from "./screens/Over";
import WinScreen from "./screens/Win";

function App() {
  const { screen } = useAppStore();

  return (
    <Layout>
      {screen === "main" && <MainScreen />}
      {screen === "categories" && <CategoriesScreen />}
      {screen === "game" && <GameScreen />}
      {screen === "over" && <OverScreen />}
      {screen === "win" && <WinScreen />}
    </Layout>
  );
}

export default App;
