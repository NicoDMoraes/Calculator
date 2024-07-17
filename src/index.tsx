import { render } from 'solid-js/web';
// import { Calculator } from './components/calculator';
import { Buttons } from './components/buttons.tsx';
import './index.css';


render(() => <Buttons />, document.getElementById('root') as HTMLElement);