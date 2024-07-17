import Buttons from './buttons';
import './calculatorFrame.css';

export function CalculatorFrame() {
    return (
        <div class="calculator-frame">
            <div class="calculator-frame-content">
                <div class="calculator-frame-content-top">
                    <div class="calculator-frame-content-top-left">
                        calc
                    </div>
                </div>
                <div class="calculator-frame-content-middle">
                    <div class="calculator-frame-content-middle-display">0</div>
                </div>
                <div class="calculator-frame-content-bottom">
                    <Buttons />
                </div>
            </div>
        </div>);
}

