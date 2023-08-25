/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./TournamentBracket.module.css";
import HeaderComponent from "../HeaderComponent";
import DateTimeComponent from "../DateTimeComponent";
import ScoreComponent from "../ScoreComponent";
import ExtraInfoComponent from "../ExtraInfoComponent";

function TournamentBracket({ fase }) {
	const [jogos, setJogos] = useState([]);
	const url = `https://raw.githubusercontent.com/AndreLeal950/apifakecopa2023/main/${fase}-copa-2023.json`;

	useEffect(() => {
		const buscarJogos = async () => {
			const response = await fetch(url);
			const data = await response.json();
			setJogos(data);
		};
		buscarJogos();
	}, [url]);

	return (
		<section className={styles.jogos}>
			{jogos.map((jogo) => (
				<div key={jogo.jogo} className={styles.jogo}>
					<HeaderComponent jogo={jogo} />
					<DateTimeComponent jogo={jogo} />
					<ScoreComponent jogo={jogo} />
					<ExtraInfoComponent jogo={jogo} />

					<h4> Vencedor: {jogo.vencedor}</h4>
				</div>
			))}
		</section>
	);
}
export default TournamentBracket;
