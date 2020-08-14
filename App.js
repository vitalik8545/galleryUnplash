import React from 'react';
import {MainLayout} from "./src/MainLayout";
import {ImageState} from "./src/context/image/ImageState";
import {ScreenState} from "./src/context/screen/ScreenState";

export default function App() {
  return (
      <ScreenState>
          <ImageState>
              <MainLayout/>
          </ImageState>
      </ScreenState>
  );
}
