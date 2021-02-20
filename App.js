import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Home from './src/views/home/index';
import TaskPage from './src/views/taskPage/index';
import LateTask from './src/views/lateTask/index';
import QrScan from './src/views/qrScan/index';


const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    TaskPage,
    LateTask,
    QrScan
  })
)

export default function App() {
  return (
      <Routes/>
  );
}

