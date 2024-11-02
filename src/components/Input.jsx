export default function Input({
  title,
  type = "number",
  value = 0,
  onValueChange,
}) {
  return (
    <div>
      <label>{title}</label>
      <input type={type} onChange={onValueChange} />
    </div>
  );
}
