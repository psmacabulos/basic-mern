import PlayerForm from "./components/players/PlayerForm"
import PlayerList from "./components/players/PlayerList"
import SinglePlayer from "./components/players/SinglePlayer"

function App() {
  return (
    <div className="container-fluid teal">
      <div className="row yellow">
        <div className="col s12">Menu</div>
      </div>
      <div className="row blue">
        <div className="col pink s9">
          <PlayerList />
        </div>
        <div className="col gray s3">
          <SinglePlayer />
        </div>
      </div>
      <div className="row orange">
        <div className="col s12">
          <PlayerForm />
        </div>
      </div>
    </div>
  )
}

export default App
