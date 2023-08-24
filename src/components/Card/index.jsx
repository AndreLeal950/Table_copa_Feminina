import { useEffect, useState } from "react";
import styles from "./Card.module.css";

function Card() {
	const [grupos, setGrupos] = useState([]);

	useEffect(() => {
		const buscarGrupos = async () => {
			const response = await fetch(
				"https://raw.githubusercontent.com/AndreLeal950/apifakecopa2023/main/selecoes.json"
			);
			const data = await response.json();
			setGrupos(data);
		};
		buscarGrupos();
	}, []);
	return grupos.map((grupo) => (
		<section className={styles.card} key={grupo.grupo}>
			<div className={styles.row} style={{ backgroundColor: grupo.cor }}></div>
			<h2>GRUPO {grupo.grupo}</h2>
			<ul>
				{grupo.selecoes.map((selecao) => {
					return (
						<li key={selecao.sigla}>
							<img
								src={`/bandeiras/${selecao.imagem}.png`}
								alt={`${selecao.selecao}`}
							/>
							{selecao.selecao}
						</li>
					);
				})}
			</ul>
		</section>
	));
}

export default Card;
