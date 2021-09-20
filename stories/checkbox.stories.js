export default {
  title: 'Components/Inputs/Checkbox',
};

export const Checkbox = () => {
  return `
  <div class="tk-text-color" style="width: 50%;">
    <h1>Checkbox</h1>
        <h2>Active Checkbox</h2>
        <span class="tk-checkbox" tabindex="0">
          <div class="tk-checkbox__inputContainer" tab-index="-1">
              <input class="tk-checkbox__input"
                  type="checkbox" id="checkbox-_KdZz3_g72" name="active-checkbox" tabindex="-1"
                  value="active-checkbox-1" checked>
              <span class="tk-checkbox__icon" aria-hidden></span>
          </div>
          <label class="tk-checkbox__label" for="checkbox-_KdZz3_g72" tabindex="-1">Checkbox 'checked'</label>
        </span>
        <span class="tk-checkbox tk-checkbox--mixed" tabindex="0">
            <div class="tk-checkbox__inputContainer" tab-index="-1">
                <input class="tk-checkbox__input"
                    type="checkbox" id="checkbox-W13s-EPfKu" name="active-checkbox" tabindex="-1"
                    value="active-checkbox-2" checked>
                <span class="tk-checkbox__icon" aria-hidden></span>
            </div>
            <label class="tk-checkbox__label" for="checkbox-W13s-EPfKu"
                tabindex="-1">Checkbox 'mixed'</label>
        </span>
        <span class="tk-checkbox" tabindex="0">
            <div class="tk-checkbox__inputContainer" tab-index="-1">
                <input class="tk-checkbox__input"
                    type="checkbox" id="checkbox-rWqEZbrVP1" name="active-checkbox" tabindex="-1"
                    value="active-checkbox-3">
                <span class="tk-checkbox__icon" aria-hidden></span>
            </div>
            <label class="tk-checkbox__label" for="checkbox-rWqEZbrVP1"
                tabindex="-1">Checkbox by default</label>
        </span>
        <h2>Disabled Checkbox</h2>
        <span class="tk-checkbox"
            tabindex="0">
            <div class="tk-checkbox__inputContainer" tab-index="-1">
                <input class="tk-checkbox__input"
                    type="checkbox" id="checkbox-x8ESD33S3W" name="disabled-checkbox" disabled="" tabindex="-1"
                    value="disabled-checkbox-1" checked>
                <span class="tk-checkbox__icon" aria-hidden></span>
            </div>
            <label class="tk-checkbox__label" for="checkbox-x8ESD33S3W"
                tabindex="-1">Checkbox</label>
        </span>
        <span class="tk-checkbox tk-checkbox--mixed"
            tabindex="0">
            <div class="tk-checkbox__inputContainer" tab-index="-1">
                <input class="tk-checkbox__input"
                    type="checkbox" id="checkbox-Y6ospnNQOs" name="disabled-checkbox" disabled="" tabindex="-1"
                    value="disabled-checkbox-2" checked>
                <span class="tk-checkbox__icon" aria-hidden></span>
            </div>
            <label class="tk-checkbox__label" for="checkbox-Y6ospnNQOs"
                tabindex="-1">Checkbox</label>
        </span>
        <span class="tk-checkbox"
            tabindex="0">
            <div class="tk-checkbox__inputContainer" tab-index="-1">
                <input class="tk-checkbox__input"
                    type="checkbox" id="checkbox-2rgjiQCh_S" name="disabled-checkbox" disabled="" tabindex="-1"
                    value="disabled-checkbox-3">
                <span class="tk-checkbox__icon" aria-hidden></span>
            </div>
            <label class="tk-checkbox__label" for="checkbox-2rgjiQCh_S"
                tabindex="-1">Checkbox</label>
        </span>
        <h2>Checkbox with focus</h2>
        <p>Add the CSS class '.tk-checkbox--focus-visible'.</p>
        <span class="tk-checkbox tk-checkbox--focus-visible" tabindex="0">
            <div class="tk-checkbox__inputContainer" tab-index="-1">
                <input class="tk-checkbox__input" type="checkbox"
                    id="checkbox-7_withClass" name="focus-label" tabindex="-1" value="top" checked autofocus>
                <span class="tk-checkbox__icon" aria-hidden></span>
            </div>
            <label class="tk-checkbox__label" for="checkbox-7_azerty" tabindex="-1">Checkbox with CSS class 'tk-checkbox--focus-visible'</label>
        </span>
        <h2>Label placements</h2>
        <p>The label can be positioned at the <strong>top, right, bottom, left</strong> of the checkbox</p>
        <div class="d-inline-block">
            <span class="tk-checkbox tk-checkbox__labelPlacement--top" tabindex="0">
                <div class="tk-checkbox__inputContainer" tab-index="-1">
                    <input class="tk-checkbox__input" type="checkbox"
                        id="checkbox-7_oZWaQUH0" name="placement-label" tabindex="-1" value="top">
                    <span class="tk-checkbox__icon" aria-hidden></span>
                </div>
            <label class="tk-checkbox__label tk-checkbox__label--top" for="checkbox-7_oZWaQUH0" tabindex="-1">Top</label>
            </span>
        </div>
        <div class="d-inline-block">
            <span class="tk-checkbox tk-checkbox__labelPlacement--left" tabindex="0">
                <div class="tk-checkbox__inputContainer" tab-index="-1">
                    <input class="tk-checkbox__input" type="checkbox"
                        id="checkbox-LJE9KbEip4" name="placement-label" tabindex="-1" value="left">
                    <span
                        class="tk-checkbox__icon" aria-hidden></span>
                </div>
                <label class="tk-checkbox__label tk-checkbox__label--left" for="checkbox-LJE9KbEip4" tabindex="-1">Left</label>
            </span>
        </div>
        <div class="d-inline-block">
            <span class="tk-checkbox tk-checkbox__labelPlacement--bottom" tabindex="0">
                <div class="tk-checkbox__inputContainer" tab-index="-1">
                    <input class="tk-checkbox__input" type="checkbox"
                        id="checkbox-krlkk7ughb" name="placement-label" tabindex="-1" value="bottom">
                    <span class="tk-checkbox__icon" aria-hidden></span>
                </div>
                <label class="tk-checkbox__label tk-checkbox__label--bottom" for="checkbox-krlkk7ughb"
                    tabindex="-1">bottom</label>
            </span>
        </div>
        <div class="d-inline-block">
            <span class="tk-checkbox tk-checkbox__labelPlacement--right" tabindex="0">
                <div class="tk-checkbox__inputContainer" tab-index="-1">
                    <input class="tk-checkbox__input" type="checkbox"
                        id="checkbox-CjTivG3wCX" name="placement-label" tabindex="-1" value="right">
                    <span class="tk-checkbox__icon" aria-hidden></span>
                </div>
                <label class="tk-checkbox__label tk-checkbox__label--right" for="checkbox-CjTivG3wCX"
                    tabindex="-1">Right</label>
            </span>
        </div>
    </div>
  </div>
    `;
};
