import { CallToActButton } from "@/components/Buttons/CallToActButton";

export const HeroSection = () => {
  return (
    <section className="content-layout flex h-screen flex-col items-center justify-center gap-4 pb-20 pt-[calc(1024px/12)]">
      <h1 className="text-center">
        <span className="font-semibold">ModernUI Replica</span> is bringing
        power <br /> back to styling.
      </h1>
      <p className="text-center text-neutral-600">
        A company of one building simple but impactful repetition-driven <br />
        for TaiwindCSS software styling solutions based in Chiang Mai, Thailand
      </p>
      <CallToActButton
        className="!w-fit"
        onClick={() => {
          const elem = document.getElementById("showcase-section");
          elem?.scrollIntoView({ block: "center" });
        }}
      >
        Start Now →
      </CallToActButton>
    </section>
  );
};
