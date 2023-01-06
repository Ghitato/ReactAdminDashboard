import { ColourModeContext, useMode } from "./themeAlt"
import { CssBaseline, ThemeProvider  } from "@mui/material";
//CssBaseline is going to reset or CSS to the defaults (if they are necessary)
//ThemeProvider will provide the ability to pass in the themese into materials ui   
import { Routes, Route } from "react-router-dom"
import TopbarAlt from "./scenes/global/TopbarAlt"
import Dashboard from "./scenes/dashboard"
 
function App() {

  const [theme, colorMode] = useMode()

  return (
    <ColourModeContext.Provider value={colorMode}>
    {/*colorMode will be triggered from theme.js*/}
    {/*A way to set up our color context so we have access to it everywhere*/}
      <ThemeProvider theme={theme}>
      {/*Material provider will now have access to theme*/}
        <CssBaseline />
        <div className="app">
          <main className="content">
            <TopbarAlt />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColourModeContext.Provider>
  );
}

export default App;

/*Left off at 0:24:25*/
