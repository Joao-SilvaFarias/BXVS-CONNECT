import styles from "./LinkMenu.module.css";

export default function LinkMenu({ Icon, texto, ativo, setAtivo, abrirMain, setAbrirMain, onClick, setMenuFechado }) {
  return (
    <div
      className={`${styles.linkMenu} ${ativo ? styles.linkAtivo : ""}`}
      onClick={() => {
        setAtivo(texto);
        if (!abrirMain) setAbrirMain(true);
        if (onClick) onClick();
        if (window.innerWidth < 1300) setMenuFechado(true);
      }}
    >
      <Icon size={15}/>
      <p className={styles.txtLinkMenu}>{texto}</p>
    </div>
  );
}