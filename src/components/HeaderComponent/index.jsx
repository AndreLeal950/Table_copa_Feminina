/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import styles from "./HeaderComponent.module.css";

function HeaderComponent({ jogo }) {
	return (
		<h2 className={styles.titulo2}>
			{/* {jogo.tipo == "decisão" ? jogo.fase : fase} - Jogo: {jogo.jogo} - Chave{" "}
			{jogo.chave} */}
			{jogo.fase} {jogo.jogo} - Chave {jogo.chave}
		</h2>
	);
}

export default HeaderComponent;
