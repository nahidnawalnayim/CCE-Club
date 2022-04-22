import {useState,useEffect} from "react";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp( { Component, pageProps } ) {
  const [ showing, setShowing ] = useState( false );

  useEffect( () => {
    setShowing( true );
  }, [] );

  if ( !showing ) {
    return null;
  }

  if ( typeof window === "undefined" ) {
    return <></>;
  } else {
    return (
      <ThemeProvider attribute="class">
        <Layout>
          <Component { ...pageProps } />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default MyApp;
