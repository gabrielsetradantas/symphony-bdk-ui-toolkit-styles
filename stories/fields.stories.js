export default {
  title: 'Components/Inputs',
};

export const TextField = () => {
  return `
    <div style="max-width: 600px">
      <h1>Text Fields</h1>
        <h2>With labels</h2>
        <h3>Default</h3>
          <p>Text Field with a label and a helper.</p>  
          <div class="tk-input-group">
            <div class="tk-input-group__header">
              <label for="input">Field label</label>    
            </div>
            <div class="tk-input__container">
              <input id="input" type="text" class="tk-input" placeholder="Type something..." />
            </div>
            <div class="tk-input__helper">This is a helper.</div>
          </div>
          <hr/>
          <p>Text Field with a icon button.</p>  
          <div class="tk-input-group">
            <div class="tk-input-group__header">
              <label for="input">Field label</label>    
            </div>
            <div class="tk-input__container">
              <input id="input2" type="text" class="tk-input tk-input--with-icon" placeholder="Type something..." />
              <div tabindex="0" class="tk-input__icon" style="cursor: pointer;">
                <i class="tk-icon-calendar "></i>
              </div>
            </div>
          </div>
        <h2>Error</h2>
        <span class="tk-validation tk-validation--error">
          <div class="tk-input-group">
            <label for="input-error">Field label</label>
            <div class="tk-input__container">
              <input id="input-error" type="text" class="tk-input" placeholder="Type something..." />
            </div>
            <ul class="tk-validation__errors"><li>This field is required.</li></ul>
          </div>
        </span>
        <br/>
        <span class="tk-validation tk-validation--error">
          <div class="tk-input-group">
            <div class="tk-input__container">
              <input id="input3" type="text" class="tk-input tk-input--with-icon" placeholder="Type something..." />
              <div tabindex="0" class="tk-input__icon" style="cursor: pointer;">
                <i class="tk-icon-calendar "></i>
              </div>
            </div>
          </div>
        </span>
        <h2>Disabled</h2>
          <div class="tk-input-group tk-input-group--disabled">
            <label for="input-disabled">Field label</label>
            <div class="tk-input__container tk-input__container--disabled">
              <input id="input-disabled" type="text" class="tk-input" placeholder="Type something..." disabled />
            </div>
            <div class="tk-input__helper">This is a helper.</div>
          </div>
          <br/>
          <div class="tk-input-group tk-input-group--disabled">
            <div class="tk-input__container tk-input__container--disabled">
              <input id="input4" type="text" class="tk-input tk-input--with-icon" placeholder="Type something..." disabled/>
              <div tabindex="0" class="tk-input__icon">
                <i class="tk-icon-calendar "></i>
              </div>
            </div>
          </div>
      <h2>Without labels</h2>
        <h3>Default</h3>
        <div class="tk-input__container">
          <input type="text" class="tk-input" placeholder="Type something..." />
        </div>
        <h3>Error</h3>
        <span class="tk-validation tk-validation--error">
          <div class="tk-input__container">
            <input type="text" class="tk-input tk-input--error" placeholder="Type something..." />
          </div>
        </span>
        <h3>Disabled</h3>
        <div class="tk-input__container tk-input__container--disabled">
          <input type="text" class="tk-input" placeholder="Type something..." disabled />
        </div>
      </div>
    `;
};

export const Select = () => { return `
  <h3>Default</h3>

  <div>
    <select type="text" class="tk-select" value="Text" style="width:200px">
      <option>Item 1</option>
      <option>Item 2</option>
      <option>Item 3 with a very very very long text</option>
    </select>
    <i></i>
  </div>

  <div class="tk-select-group tk-mt-2">
    <div class="tk-select-group__header">
      <label for="input">Field label</label>
    </div>
    <div>
      <select type="text" class="tk-select" value="Text" style="width:200px">
        <option>Item 1</option>
        <option>Item 2</option>
        <option>Item 3 with a very very very long text</option>
      </select>
      <i></i>
    </div>
    <div class="tk-select__helper">This is a helper.</div>
  </div>

  <div>
    <h3>Disabled</h3>
    <div class="tk-select--is-disabled">
      <select type="text" class="tk-select" value="Text" style="width:200px" disabled>
        <option>Item 1</option>
      </select>
      <i></i>
    </div>

    <div class="tk-select-group tk-mt-2">
      <div class="tk-select-group__header">
        <label for="input">Field label</label>
      </div>
      <div class="tk-select--is-disabled">
        <select type="text" class="tk-select tk-select--expanded" value="Text" style="width:200px" disabled>
          <option>Item 1</option>
          <option>Item 2</option>
          <option>Item 3 with a very very very long text</option>
        </select>
        <i></i>
      </div>
      <div class="tk-select__helper">This is a helper.</div>
    </div>
  </div>

  <h3>Error</h3>
  <span class="tk-validation tk-validation--error">
    <div>
      <select type="text" class="tk-select" value="Text" style="width:200px">
        <option>Item 1</option>
        <option>Item 2</option>
        <option>Item 3 with a very very very long text</option>
      </select>
      <i></i>
    </div>
  </span>

  <span class="tk-validation tk-validation--error">
    <div class="tk-select-group tk-mt-2">
      <div class="tk-select-group__header">
        <label for="input">Field label</label>
      </div>
      <div>
        <select type="text" class="tk-select" value="Text" style="width:200px">
          <option>Item 1</option>
          <option>Item 2</option>
          <option>Item 3 with a very very very long text</option>
        </select>
        <i></i>
      </div>
    </div>
    <div class="tk-select__helper">This is a helper.</div>
  </span>
`};

export const TextArea = () => {
  return `
    <h3>Default</h3>
    <textarea class="tk-input" cols="50" rows="5"></textarea>
    <h3>Error</h3>
    <span class="tk-validation tk-validation--error">
      <textarea class="tk-input tk-input--error" cols="50" rows="5"></textarea>
    </span>
    <h3>Disabled</h3>
    <textarea class="tk-input" cols="50" rows="5" disabled></textarea>`;
};

export const DropdownList = () => {
return `
<div class="tk-m-4">
  <h2>Dropdown list</h2>
  <p> To use a custom dropdown list you can use the following component:</p>
  <div class="tk-select--custom-dropdown tk-mt-2" style="width:256px">
    <div class="tk-select--custom-dropdown__item">Option 1</div>
    <div class="tk-select--custom-dropdown__item">Option 2</div>
    <div class="tk-select--custom-dropdown__item">Option 3
      <i class="tk-select--custom-dropdown--selected"></i>
    </div>
    <div class="tk-select--custom-dropdown__item">Option 4</div>
    <div class="tk-select--custom-dropdown__item">Option 5</div>
    <div class="tk-select--custom-dropdown__item">Option 7</div>
    <div class="tk-select--custom-dropdown__item">Option 8</div>
    <div class="tk-select--custom-dropdown__item">Example of long list option with two lines</div>
  </div>
</div>
`}