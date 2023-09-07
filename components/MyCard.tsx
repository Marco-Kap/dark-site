

interface CardProps {
  source?: string;
  alt?: string;
  title?: string;
  content?: string;
  footer: string;
  id?: number;
}

export default function MyCard(props: CardProps) {
  return (
    <div style={{ border: "1px solid grey" }}>
      <p>hallo</p>
    </div>
  );
}
