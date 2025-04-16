import './style.css';

import { Header } from './components/Header.js';
import { Body } from './components/Body.js';
import { About } from './components/About.js';
import { Clients } from './components/Clients.js';
import { Footer } from './components/Footer.js';

document.body.appendChild(Header());
document.body.appendChild(Body());
document.body.appendChild(About());
document.body.appendChild(Clients());
document.body.appendChild(Footer());
