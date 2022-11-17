import './App.css';
import { SinglePlayerGame } from './components/functional/SinglePlayerGame';
import FlexBoxVerticalContainer from './components/ui/elements/containers/FlexBoxVerticalContainer';
// import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div style={{ height: '100%', flex: 1, flexDirection: 'column', display: 'flex' }}>
      <FlexBoxVerticalContainer>
        <SinglePlayerGame />
      </FlexBoxVerticalContainer>
    </div>
  );
}

export default App;
