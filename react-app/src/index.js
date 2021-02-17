import "@/icons/index"

// 引入React
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";

// 引入App组件
import App from './App'

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);