import { CardButtonProps } from "src/types/types";

export default function CardButton(props: CardButtonProps): JSX.Element {
  const { action = () => console.log("act"), label = "Action" } = props;

  return (
    <button
      type="button"
      className="py-3 px-4 bg-blue-500 rounded-lg ml-3 text-white"
      onClick={action}
    >
      <p className="work-sans font-semibold text-sm tracking-wide">{label}</p>
    </button>
  );
}
