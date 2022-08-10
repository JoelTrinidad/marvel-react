import "semantic-ui-css/semantic.min.css";
import { Button, Icon } from "semantic-ui-react";

function App() {
  return (
    <div>
      Creando nuestra app de marvel
      <Button animated>
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
    </div>
  );
}

export default App;
