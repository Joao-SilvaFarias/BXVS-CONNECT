import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import styles from "./Graficos.module.css"

const data = [
  { name: "Plano Básico", value: 50 },
  { name: "Plano Médio", value: 20 },
  { name: "Plano PRO", value: 30 },
];

const COLORS = ["#9ECD1D", "#00C2FF", "#F200FF"];

const CustomLegend = ({ payload }) => (
  <ul
    className={styles.legendaGrafico}
  >
    {payload.map((entry, index) => (
      <li
        key={`item-${index}`}
      >
        <span
          style={{
            width: 15,
            height: 15,
            backgroundColor: entry.color,
            borderRadius: "50%", // 🔘 ícone circular
            display: "inline-block",
            marginRight: 8,
          }}
        />
        {entry.value}
      </li>
    ))}
  </ul>
);

export default function GraficoPlano({ dados }) {
  return (
    <div className={styles.container}>
      <p className={styles.titulo}>Planos mais escolhidos</p>
      {dados ? 
      <ResponsiveContainer>
        <PieChart>
          <Pie
            isAnimationActive={false}
            data={dados}
            cx="40%" // 🔹 desloca o gráfico para a esquerda para dar espaço à legenda
            cy="50%"
            innerRadius="40%"
            outerRadius="80%"
            dataKey="quantidadeEscolhido"
            nameKey="nomePlano"
            cornerRadius={3}
            startAngle={90}
            endAngle={450}
            fill="#fff"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="#393939"
              />
            ))}
          </Pie>

          <Tooltip
            cursor={false}
            contentStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              border: "none",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#9ECD1D" }}
            itemStyle={{ color: "#fff" }}
          />
          <Legend
            content={<CustomLegend />}
            align="right"
            verticalAlign="middle"
            layout="vertical"
          />
        </PieChart>
      </ResponsiveContainer> : <p className={styles.txtGraficoVazio}>Não há planos contratados ainda</p>}
    </div>
  );
}
