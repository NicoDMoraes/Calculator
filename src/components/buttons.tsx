import './buttons.css';

export default function () {
    return (<div>
        <div class="buttons">
            <div class="small">
                <div class="row 1">
                    <button class="button number">7</button>
                    <button class="button number">8</button>
                    <button class="button number">9</button>
                    <button class="button del">DEL</button>
                </div>
                <div class="row 2">
                    <button class="button number">5</button>
                    <button class="button number">4</button>
                    <button class="button number">6</button>
                    <button class="button add">+</button>
                </div>
                <div class="row 3">
                    <button class="button number">1</button>
                    <button class="button number">2</button>
                    <button class="button number">3</button>
                    <button class="button sub">-</button>
                </div>
                <div class="row 4">
                    <button class="button ponctuation">.</button>
                    <button class="button number">0</button>
                    <button class="button div">/</button>
                    <button class="button mul">x</button>
                </div>
            </div>
            <div class="big">
                <button class="big-button reset">RESET</button>
                <button class="big-button equals">=</button>
            </div>
        </div>
    </div>);
}
