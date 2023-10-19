import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../../components/layout.module.css"; //import css module
import styled from "styled-components"; //import styled components
import { useState } from "react";

// define inline styles
const inlineStyle = {
  color: "red",
  fontSize: "30px",
};

// define a styled component
const StyledDiv = styled.div`
  color: blue;
  font-size: 60px;
`;

export default function FirstPost() {
  const [theme, setTheme] = useState("light"); //create state for theme
  const dynamicStyle =
    theme === "dark"
      ? { color: "white", backgroundColor: "black" }
      : { color: "black", backgroundColor: "white" };
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1 style={inlineStyle}>This is for inline styles</h1>

      <h1 className={styles.myClass}>This is for CSS module styles</h1>

      <StyledDiv>This is a StyledDiv</StyledDiv>

      <h1 style={dynamicStyle}>This is a dynamically styled header</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Switch Theme
      </button>

      {/* Cascading effect */}
      <p className={`${styles.myClass} ${styles.overrideStyle}`}>
        Demo Cascading of CSS (Text should be orange and 18px)
      </p>

      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
