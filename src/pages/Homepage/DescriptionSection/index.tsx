import "./style.css";

export const DescriptionSection = () => {
  return (
    <section
      id="description-section"
      className="content-layout flex h-[560px] gap-4 py-10"
    >
      <h2 id="a">
        We’re creating the quick access portal for carrying about development
        velocity.
      </h2>
      <div id="b" className="flex flex-col gap-10">
        <p>
          Introducing our new quick access styling portal, designed to
          supercharge development speed. No more hunting for the right styles -
          with our platform, developers can focus on what they do best: coding.
          By simplifying access to styling resources.
        </p>
        <p>
          We're helping teams bring their projects to live faster than ever
          before. Join us in revolutionizing development velocity and making the
          process smoother for everyone involved.
        </p>
      </div>
    </section>
  );
};
