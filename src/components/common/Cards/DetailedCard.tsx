import { CardProps } from "src/types/types";
import CardButton from "../Button/CardButton";

const {
  title: d_t,
  description: d_d,
  image: d_i,
  primaryAction: d_pA,
  secondAction: d_sA,
}: CardProps = {
  title: "Segoe",
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Exercitationem fuga odit repellendus vero iure alias accusamus ex
    sed facilis magni aperiam dicta obcaecati, possimus rerum,
    consequuntur deserunt aut dolor ipsa.`,
  image: "https://source.unsplash.com/K_-sUG3qS2Q/800x600",
  primaryAction: { title: "Primary", action: () => console.log("first") },
  secondAction: { title: "Second", action: () => console.log("first") },
};

export default function DetailedCard({
  title = d_t,
  description = d_d,
  image = d_i,
  primaryAction = d_pA,
  secondAction = d_sA,
}: CardProps): JSX.Element {
  return (
    <div className="container">
      <div className="inline-grid max-w-xs sm:max-w-xs lg:max-w-lg lg:flex bg-black rounded-lg border shadow-lg pb-6 lg:pb-0">
        <div className="w-full lg:w-1/3 lg:p-4">
          <img
            src={image}
            alt="Detailed Card Image"
            className="h-64 lg:h-full object-cover object-center w-full"
          />
        </div>

        <div className="w-full lg:w-2/3 p-4">
          <div className="inline-grid">
            <p className="work-sans font-semibold text-xl text-white">
              {title}
            </p>
            <p className="raleway text-sm my-4 text-white opacity-75">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center -mt-8 rounded-b-lg max-w-xs lg:max-w-lg lg:-mt-8 lg:justify-end lg:pr-8 py-1">
        {primaryAction !== undefined && (
          <CardButton
            label={primaryAction.title}
            action={primaryAction.action}
          />
        )}
        {secondAction !== undefined && (
          <CardButton label={secondAction.title} action={secondAction.action} />
        )}
      </div>
    </div>
  );
}
