type MessageProps = {
  text: string;
};

export function Message({ text }: MessageProps) {
  return <div className="border p-2 m-2">{text}</div>;
}
