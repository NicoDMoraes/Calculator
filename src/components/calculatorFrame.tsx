import Buttons from './buttons';
import './calculatorFrame.css';

export function CalculatorFrame() {
    return (
        <div class="calculator-frame">
            <div class="calculator-frame-content-top">
                <div class="calculator-frame-content-top-left">
                    calc
                </div>
                <div class="calculator-frame-content-top-right">
                    <div class="frame-selector">
                        <div>theme</div>
                        <button class="frame-selector-button">1</button>
                        <button class="frame-selector-button">2</button>
                        <button class="frame-selector-button">3</button>
                    </div>
                </div>
            </div>
            <div class="calculator-frame-content-middle">
                <div class="calculator-frame-content-middle-display">0</div>
            </div>
            <div class="calculator-frame-content-bottom">
                <Buttons />
            </div>
        </div>);
}

