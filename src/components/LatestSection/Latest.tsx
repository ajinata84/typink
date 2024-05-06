import LiteratureCard from "../LiteratureCard/LiteratureCard";

export default function Latest() {
  return (
    <div className="mt-6">
      <div>
        <h1 className="font-bold text-4xl">Latest Updates</h1>
        <h6 className="mb-3">Freshly Released Fictions</h6>
        <hr />
      </div>
      <div className="grid grid-cols-3 grid-flow-row gap-4 mt-6">
        <LiteratureCard />
        <LiteratureCard />
        <LiteratureCard />
        <LiteratureCard />
        <LiteratureCard />
      </div>
    </div>
  );
}
