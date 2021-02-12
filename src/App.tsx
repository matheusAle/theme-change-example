import {useThemeChanger} from './providers/theme-change';
import {Theme} from './styles/themes/theme-change';

function App() {
  const { change } = useThemeChanger();

  return (
    <div>
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-12">
            <div className="btn-group" role="group" aria-label="Basic example">
              <div className="form-group">
                <label htmlFor="">Change Theme</label>
                <select className="custom-select" onChange={(e) => change(e.currentTarget.value as Theme)}>
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                  <option value="navy">Navy</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3>Buttons</h3>
            <div className="d-flex justify-content-center gap-3" style={{ gap: 8 }}>
              <button type="button" className="btn btn-red">red</button>
              <button type="button" className="btn btn-pink">pink</button>
              <button type="button" className="btn btn-indigo">indigo</button>
              <button type="button" className="btn btn-blue">blue</button>
              <button type="button" className="btn btn-blue-dark">blue dark</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
