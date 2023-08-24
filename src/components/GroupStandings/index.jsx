/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState } from "react";
import styles from "./GroupStandings.module.css";

function GroupStandings() {
	const [grupos, setGrupos] = useState([]);
	const [groupSelected, setGroupSelected] = useState("A");

	useEffect(() => {
		const buscarGrupos = async () => {
			const response = await fetch(
				"https://raw.githubusercontent.com/AndreLeal950/apifakecopa2023/main/classificacao-por-grupos-2023.json"
			);
			const data = await response.json();
			setGrupos(data);
		};
		buscarGrupos();
	}, []);

	return (
		<>
			<div className={styles.div_select}>
				<select
					value={groupSelected}
					onChange={(e) => setGroupSelected(e.target.value)}
				>
					<option value="all"> GRUPOS</option>
					<option value="A"> GRUPO A</option>
					<option value="B"> GRUPO B</option>
					<option value="C"> GRUPO C</option>
					<option value="D"> GRUPO D</option>
					<option value="E"> GRUPO E</option>
					<option value="F"> GRUPO F</option>
					<option value="G"> GRUPO G</option>
					<option value="H"> GRUPO H</option>
				</select>
			</div>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>#</th>
						<th>Seleção</th>
						<th>Pontos</th>
						<th>Vitórias</th>
						<th>Empates</th>
						<th>Derrotas</th>
						<th>Gols Pró</th>
						<th>Gols Contra</th>
						<th>Saldo de Gols</th>
					</tr>
				</thead>
				<tbody>
					{groupSelected === "all"
						? grupos.map((grupo) => (
								<tr key={grupo.selecao}>
									<td>{grupo.posicao}</td>
									<td className={styles.left}>{grupo.selecao}</td>
									<td>{grupo.pontos}</td>
									<td>{grupo.vitorias}</td>
									<td>{grupo.empates}</td>
									<td>{grupo.derrotas}</td>
									<td>{grupo.gols_pro}</td>
									<td>{grupo.gols_contra}</td>
									<td>{grupo.saldo_gols}</td>
								</tr>
						  ))
						: grupos
								.filter((grupo) => grupo.grupo == groupSelected)
								.map((grupo) => (
									<tr key={grupo.selecao}>
										<td>{grupo.posicao}</td>
										<td className={styles.left}>{grupo.selecao}</td>
										<td>{grupo.pontos}</td>
										<td>{grupo.vitorias}</td>
										<td>{grupo.empates}</td>
										<td>{grupo.derrotas}</td>
										<td>{grupo.gols_pro}</td>
										<td>{grupo.gols_contra}</td>
										<td>{grupo.saldo_gols}</td>
									</tr>
								))}
				</tbody>
			</table>
		</>
	);
}
export default GroupStandings;
