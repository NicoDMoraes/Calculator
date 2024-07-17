import { render } from 'solid-js/web';
// import { Calculator } from './components/calculator';
import { CalculatorFrame } from './components/calculatorFrame';
import './index.css';


render(() => <CalculatorFrame />, document.getElementById('root') as HTMLElement);