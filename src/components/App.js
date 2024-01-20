import React, { Suspense, lazy, useState } from "react";

const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));

const PAGES = {
  ABOUT: "about",
  CONTACT: "contact",
};

export const App = () => {
  const [page, setPage] = useState(PAGES.ABOUT);

  const isAboutPage = page === PAGES.ABOUT;
  const isContactPage = page === PAGES.CONTACT;

  console.log({ page });

  return (
    <div>
      <h1>React app</h1>
      <nav>
        <ul>
          <li>
            <button onClick={() => setPage(PAGES.ABOUT)}>about</button>
          </li>
          <li>
            <button onClick={() => setPage(PAGES.CONTACT)}>contact</button>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<div>loading</div>}>
        <div>{isAboutPage && <About />}</div>
        <div>{isContactPage && <Contact />}</div>
      </Suspense>
    </div>
  );
};
