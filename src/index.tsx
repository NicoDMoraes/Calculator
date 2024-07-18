import { render } from 'solid-js/web';
// import { Calculator } from './components/calculator';
import { CalculatorFrame } from './components/calculator';
import './index.css';


render(() => <CalculatorFrame />, document.getElementById('root') as HTMLElement);