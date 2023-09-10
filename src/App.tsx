import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { FeaturedWork } from './layout/sections/featuredworks/FeaturedWork';
import {VisualExp } from './layout/sections/visualexploration/VisualEx';
import {PersonalProject} from './layout/sections/personalproject/PersonalProject';
import {Skills} from './layout/sections/skills/Skills';
import {Contact} from './layout/sections/contact/Contact';
import {Footer} from './layout/footer/Footer';
import {Works} from './layout/sections/works/Works' ;
import {Testimony} from './layout/sections/testimony/Testimony'

function App() {
	return (
		<div className="App">
			<Header />
			 <Main />
			<FeaturedWork />
			<VisualExp />
			<PersonalProject/>
			 {/* <Skills/> 
			 <Works/>
			 <Testimony/>  */}
			<Contact/>
			<Footer/> 
		</div>
	);
}

export default App;

