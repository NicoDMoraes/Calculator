
import './calculator.css';
import { createSignal } from 'solid-js';
import './buttons.css';


export function CalculatorFrame() {
    const [display, setDisplay] = createSignal(0);
    const Display: number = display();
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
                <div class="calculator-frame-content-middle-display">{Display}</div>
            </div>
            <div class="calculator-frame-content-bottom">
                <div class="buttons">
                    <div class="small">
                        <div class="row 1">
                            <button onClick={() => setDisplay(display() + 7)} class="button number">7</button>
                            <button onClick={() => setDisplay(display() + 8)} class="button number">8</button>
                            <button onClick={() => setDisplay(display() + 9)} class="button number">9</button>
                            <button class="button del">DEL</button>
                        </div>
                        <div class="row 2">
                            <button onClick={() => setDisplay(display() + 5)} class="button number">5</button>
                            <button onClick={() => setDisplay(display() + 4)} class="button number">4</button>
                            <button onClick={() => setDisplay(display() + 6)} class="button number">6</button>
                            <button class="button add">+</button>
                        </div>
                        <div class="row 3">
                            <button onClick={() => setDisplay(display() + 1)} class="button number">1</button>
                            <button onClick={() => setDisplay(display() + 2)} class="button number">2</button>
                            <button onClick={() => setDisplay(display() + 3)} class="button number">3</button>
                            <button class="button sub">-</button>
                        </div>
                        <div class="row 4">
                            <button class="button ponctuation">.</button>
                            <button onClick={() => setDisplay(display() + 0)} class="button number">0</button>
                            <button class="button div">/</button>
                            <button class="button mul">x</button>
                        </div>
                    </div>
                    <div class="big">
                        <button class="big-button reset">RESET</button>
                        <button class="big-button equals">=</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


