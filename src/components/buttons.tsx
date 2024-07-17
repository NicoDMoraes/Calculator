import './buttons.css';

export function Buttons() {
    return (<div>
        <div class="buttons">
            <div class="small">
                <button class="button-number">1</button>
                <button class="button-number">2</button>
                <button class="button-number">3</button>
                <button class="button-number">4</button>
                <button class="button-number">5</button>
                <button class="button-number">6</button>
                <button class="button-number">7</button>
                <button class="button-number">8</button>
                <button class="button-number">9</button>
                <button class="button-ponctuation">.</button>
                <button class="button-number">0</button>
                <button class="button-add">+</button>
                <button class="button-sub">-</button>
                <button class="button-mul">x</button>
                <button class="button-div">/</button>
                <button class="button-del">del</button>
            </div>
            <div class="big">
                <button class="button-equals">=</button>
                <button class="button-reset">reset</button>
            </div>
        </div>
    </div>);
}
