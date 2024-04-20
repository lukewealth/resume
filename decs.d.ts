// declare module "@material-tailwind/react/*";
declare module "@material-tailwind/react/Icon" {
  const Icon: React.FC<{ name: string; size?: string; color?: string }>;
  export default Icon;
}

declare module "@material-tailwind/react/Typography" {
  const Typography: React.FC<{ color: string }>;
  export default Typography;
}

declare module "@material-tailwind/react/Heading6" {
  const H6: React.FC<{ color: string }>;
  export default H6;
}
