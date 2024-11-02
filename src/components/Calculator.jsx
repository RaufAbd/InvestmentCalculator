import Input from "./Input";

const inputs = [
  { title: "Initial investments", key: "initialInvestment" },
  { title: "Annual investments", key: "annualInvestment" },
  { title: "Expected return", key: "expectedReturn" },
  { title: "Duration", key: "duration" },
];

export default function Calculator({ onInput }) {
  return (
    <div id="user-input">
      <div className="input-group">
        {inputs.map(({ title, key }) => (
          <Input
            title={title}
            key={key}
            onValueChange={(e) => onInput(+e.target.value, key)}
          />
        ))}
      </div>
    </div>
  );
}
