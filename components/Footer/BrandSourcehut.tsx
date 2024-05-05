function IconBrandSourcehut({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-discord"
      width={size}
      height={size}
      viewBox="0 0 512 512"
      // stroke-width={stroke}
      // stroke={color}
      fill={color}
      // stroke-linecap="round"
      // stroke-linejoin="round"
      {...props}
    >
      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z" />
    </svg>
  );
}
export default IconBrandSourcehut;
