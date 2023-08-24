import "./App.css";
import GameTable from "./GameTable";
import GroupStandings from "./components/GroupStandings";
import Card from "./components/Card";
import KnockoutStage from "./components/KnockoutStage";
import Fixture from "./components/Fixture";

function App() {
	return (
		<>
			<h1>Copa do Mundo Feminina 2023</h1>
			<section className="cards">
				<Card />
			</section>

			<h2>Tabela de Jogos</h2>
			<section className="game_table">
				<GameTable />
			</section>

			<h2>Classificação por Grupo</h2>

			<section className="group_table">
				<GroupStandings />
			</section>

			<h2>Oitavas de Final</h2>

			<section className="knockout_table">
				<KnockoutStage fase="oitavas" />
			</section>

			<h2>Jogos do Dia 10/08/2023</h2>

			<section className="knockout_table">
				<Fixture fase="quartas" data="10/08" />
			</section>

			<h2>Quartas de Final</h2>

			<section className="knockout_table">
				<KnockoutStage fase="quartas" />
			</section>

			<h2>Semifinais</h2>

			<section className="knockout_table">
				<KnockoutStage fase="semifinais" />
			</section>

			<h2>Finais</h2>

			<section className="knockout_table">
				<KnockoutStage fase="finais" />
			</section>
		</>
	);
}

export default App;
