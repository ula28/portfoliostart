import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { FeaturedWork } from './layout/sections/featuredworks/FeaturedWork';
import {VisualExp } from './layout/sections/visualexploration/VisualEx';
import {PersonalProject} from './layout/sections/personalproject/PersonalProject';
import {Contact} from './layout/sections/contact/Contact';
import {Footer} from './layout/footer/Footer';

function App() {
	return (
		<div className="App">
			<Header />
			<Main />
			<FeaturedWork />
			<VisualExp />
			<PersonalProject/>
			<Contact/>
			<Footer/>
		</div>
	);
}

export default App;

