import "./App.css";
import TournamentBracket from "./components/TournamentBracket";

function App() {
	return (
		<>
			<h1>Copa do Mundo Feminina 2023</h1>

			<section className="knockout_table">
				<h2>Oitavas de Finais</h2>
				<TournamentBracket fase="oitavas" />

				<h2>Quartas de Finais</h2>
				<TournamentBracket fase="quartas" />

				<h2>Semifinais</h2>
				<TournamentBracket fase="semifinais" />

				<h2>Finais</h2>
				<TournamentBracket fase="finais" />
			</section>
		</>
	);
}

export default App;
