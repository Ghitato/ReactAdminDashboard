import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles"

//Colour Design Tokens --> Use Command+K and Command+G to create shades of the following
//#666666 --> Grey
//#141b2d --> Primary Dark Blue
//#4cceac --> Green Accent
//#db4f4a --> Red Accent
//#6870fa  --> Blue Accent

/*
The "tokens" function is defining an object that represents the colours to be used in a user interface. 
The function takes in a mode argument, which can either be "dark" or "light". 
The mode argument is used to determine which set of colours to use in the returned object.

The ...(mode === "dark" ? { ... } : { ... }) syntax is a shorthand way of writing an if-else statement. 
It is equivalent to writing if (mode === "dark") { ... } else { ... }.

In this case, if the mode argument is "dark", the object on the left side of the colon ({ ... }) is returned. 
Otherwise, the object on the right side of the colon ({ ... }) is returned.
*/

export const tokens = (mode) => ({
    //mode will represent light mode or dark mode
    //If the mode is dark use this colours (using the ternary operator ?)
    ...(mode === "dark" 
      ? {
          grey: {
            100: "#e0e0e0",
            200: "#c2c2c2",
            300: "#a3a3a3",
            400: "#858585",
            500: "#666666",
            600: "#525252",
            700: "#3d3d3d",
            800: "#292929",
            900: "#141414",
          },
          primary: {
            100: "#d0d1d5",
            200: "#a1a4ab",
            300: "#727681",
            400: "#1F2A40",
            500: "#141b2d",
            600: "#101624",
            700: "#0c101b",
            800: "#080b12",
            900: "#040509",
          },
          greenAccent: {
            100: "#dbf5ee",
            200: "#b7ebde",
            300: "#94e2cd",
            400: "#70d8bd",
            500: "#4cceac",
            600: "#3da58a",
            700: "#2e7c67",
            800: "#1e5245",
            900: "#0f2922",
          },
          redAccent: {
            100: "#f8dcdb",
            200: "#f1b9b7",
            300: "#e99592",
            400: "#e2726e",
            500: "#db4f4a",
            600: "#af3f3b",
            700: "#832f2c",
            800: "#58201e",
            900: "#2c100f",
          },
          blueAccent: {
            100: "#e1e2fe",
            200: "#c3c6fd",
            300: "#a4a9fc",
            400: "#868dfb",
            500: "#6870fa",
            600: "#535ac8",
            700: "#3e4396",
            800: "#2a2d64",
            900: "#151632",
          },
        }
      : { //If the mode is not dark use these colours (using the ternary operator :)
        //Done by copying the above code, pressing Command+P and >Sort Lines Descending
        //Option + Command + Down Key to Select a part of the row then Command + Shift + Left Key to select on the numbers
          grey: {
            100:  "#141414",
            200: "#292929",
            300: "#3d3d3d",
            400: "#525252",
            500: "#666666",
            600: "#858585",
            700: "#a3a3a3",
            800: "#c2c2c2",
            900: "#e0e0e0",
          },
          primary: {
            100: "#040509",
            200: "#080b12",
            300: "#0c101b",
            400: "#f2f0f0", 
            500: "#141b2d",
            600: "#1F2A40",
            700: "#727681",
            800: "#a1a4ab",
            900: "#d0d1d5",
          },
          greenAccent: {
            100: "#0f2922",
            200: "#1e5245",
            300: "#2e7c67",
            400: "#3da58a",
            500: "#4cceac",
            600: "#70d8bd",
            700: "#94e2cd",
            800: "#b7ebde",
            900: "#dbf5ee",
          },
          redAccent: {
            100: "#2c100f",
            200: "#58201e",
            300: "#832f2c",
            400: "#af3f3b",
            500: "#db4f4a",
            600: "#e2726e",
            700: "#e99592",
            800: "#f1b9b7",
            900: "#f8dcdb",
          },
          blueAccent: {
            100: "#151632",
            200: "#2a2d64",
            300: "#3e4396",
            400: "#535ac8",
            500: "#6870fa",
            600: "#868dfb",
            700: "#a4a9fc",
            800: "#c3c6fd",
            900: "#e1e2fe",
          },
    }),
});

//material ui (mui) theme settings
export const themeSettings = (mode) =>{
  const colours = tokens(mode)
  /* 
  The line declares a colours constant, which is set to the value returned by the tokens function with mode passed as an argument. 
  This tokens function appears to be used to define colour themes for the application, depending on whether mode is "dark" or "light".
  */

  /* 
  Returns an object with a palette property, which itself has several properties. 
  The mode property is set to the value of the mode argument passed to the themeSettings function.
  */

  /* 
  creating an object called "palette" which has a property called "mode" that is equal to the value of the "mode" parameter. 
  The rest of the object is created by using the spread operator (...) to spread the properties of the 
  object returned by the function call to "mode()".
  */

  return{
    palette:{
      mode: mode,
      ...mode(mode === "dark"
      ?{
        primary: {
          main: colours.primary[100],
        },
        secondary: {
          main: colours.greenAccent[500],
        },
        neutral: {
          dark: colours.grey[700],
          main: colours.grey[500],
          light: colours.grey[300]
        },
        background: {
          default: colours.primary[500],
        }
      } : {
        primary: {
          main: colours.primary[500],
        },
        secondary: {
          main: colours.greenAccent[500],
        },
        neutral: {
          dark: colours.grey[700],
          main: colours.grey[500],
          light: colours.grey[300]
        },
        background: {
          default: "#fcfcfc",
        }
      }
      )
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12, //Default font size for material ui
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      }
    }
  }
}
/* 
This code is setting the font family for the typography of a React component to "Source Sans Pro" and "sans-serif". 
The join(",") method is used to join the two strings in the font family array with a comma. 
This is done so that the font family can be passed as a single string value to the fontFamily property. 
This property specifies the font family for the text in the component.

For example, if this code was part of the themeSettings function defined above, the font family for the 
component would be set to "Source Sans Pro, sans-serif". This means that if the browser does not support the "Source Sans Pro" font, 
it will fall back to using the "sans-serif" font as the alternative.
*/

//React Context for the colour mode
export const ColourModeContext = createContext({
  toggleColourMode:() => {}
})
/*
Creates a new context object with createContext from the react package. 
The createContext function is a way to share values like props between components without 
the need to pass them through every level of the component tree. 
In this case, the context object is created with a default value of an object with a toggleColourMode function that does nothing
*/

/*
The useMode function is a custom hook that manages the colour mode of the application. 
It uses the useState hook to create a state variable called mode that is initially set to "dark". 
This hook also uses the useMemo hook to memoize the values returned from the createTheme function and the colourMode object. 
The useMemo hook is a way to optimize the performance of a component by only re-computing 
the memorized value when one of the dependencies has changed.
*/

export const useMode = () => {
  const [mode, setMode] = useState("dark")

  const colourMode = useMemo(
    () => ({
     toggleColourMode: () =>
      setMode((prev) => (prev === "light" ? "dark" : "light "))
  }), []
  )

  /*
  The createTheme function is called with the themeSettings function, which takes the current mode value as an argument. 
  The themeSettings function returns an object with the colour values for the different parts of the theme, 
  depending on whether the mode is "dark" or "light"
  */

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  /*
  The first argument to useMemo is a function that returns the value you want to memoize. 
  In this case, it is the function createTheme(themeSettings(mode)). 
  This function creates a theme object based on the current mode and returns it.
  
  The second argument to useMemo is an array of dependencies. In this case, it is just the mode variable. 
  This means that the value returned by the function passed as the first argument will only be recalculated if the mode variable changes.

  useMemo(() => function(value to memorize), [dependancy])
  */

  return[theme, colourMode]
}

/*
createContext is a function in the react package that is used to create a context object. 
This context object allows you to pass data through the component tree without having to 
manually pass props down through multiple levels of components.

useState is a hook in React that allows you to add state to functional components. 
It returns an array with two elements, the current state value and a function that allows you to update the state. 
It's called inside a functional component to add state to it.

useMemo is a hook in React that allows you to memoize values. It will only recompute the 
memoized value when one of the dependencies has changed. This can be useful to optimize the performance of your application. 
It's called inside a functional component and takes a function as an argument that 
will be executed and the result of which will be memoized. It also takes an array of dependencies as an optional second argument. 
If the values in this array change, the memoized value will be recomputed.
*/

/*
createTheme is a function from the @mui/material package in React that allows you to create a theme object. 
A theme object is a collection of values that define the look and feel of your application. 
You can use the createTheme function to specify the colour palette, typography, and other design details for your application.

The createTheme function takes an object as an argument that contains configuration 
options for your theme. For example, you might specify a primary colour, a secondary colour, 
and a type scale for your theme. You can then use this theme object to apply your design choices throughout
your application using the ThemeProvider component.

ex.
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

You can then use this theme object with the ThemeProvider component to apply your design choices throughout your application:
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      Your application code goes here
      </ThemeProvider>
      );
*/