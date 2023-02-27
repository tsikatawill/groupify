import { useCases } from "@/lib/useCases";
import { UseCard } from ".";

export const UseCase = () => {
  return (
    <section className="use-case mb-10">
      <h2 className="text-center mb-5 gradientize">How to use Groupify</h2>

      <div className="flex flex-col gap-5">
        {useCases.map((item, idx) => (
          <UseCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
};
