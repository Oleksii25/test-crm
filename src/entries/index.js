import React, {Suspense} from "react";
import {createRoot} from 'react-dom/client';
import Page from "../components/Page/Page";

const root = createRoot(document.getElementById('root'));

root.render(
  <Suspense>
    <Page /> 
  </Suspense>
)