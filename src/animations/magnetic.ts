export function magneticEffect(
  e: React.MouseEvent<HTMLButtonElement>,
  strength = 20,
) {
  const btn = e.currentTarget;
  const rect = btn.getBoundingClientRect();

  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  btn.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
}

export function resetMagnetic(e: React.MouseEvent<HTMLButtonElement>) {
  e.currentTarget.style.transform = "translate(0,0)";
}
