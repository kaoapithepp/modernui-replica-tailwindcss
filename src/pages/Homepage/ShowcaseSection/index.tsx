import { Announcer } from "@/components/Announcer";
import { Button } from "@/components/Buttons/Button";
import { CallToActButton } from "@/components/Buttons/CallToActButton";
import { InputField } from "@/components/InputField";
import { Tag } from "@/components/Tag";

export const ShowcaseSection = () => {
  return (
    <section
      id="showcase-section"
      className="content-layout flex flex-col gap-10 pb-10"
    >
      <h2>Here, showing what we develop 🚀</h2>
      <div className="grid grid-cols-3 gap-10">
        <section className="flex flex-col gap-2">
          <h4>Button</h4>
          <div className="flex gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <h4>Announcer</h4>
          <div className="flex flex-col gap-3">
            <Announcer>Announcing our next round of funding.</Announcer>
            <Announcer className="bg-indigo-50 font-medium text-indigo-600 ring-indigo-200 hover:ring-indigo-300">
              Together, we rise
            </Announcer>
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <h4>Tag</h4>
          <div className="flex gap-3">
            <Tag>Preview</Tag>
            <Tag className="bg-green-100 text-green-700">Completed!</Tag>
            <Tag className="bg-amber-100 text-amber-700">Caution</Tag>
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <h4>Call To Action</h4>
          <div className="flex flex-col gap-3">
            <CallToActButton showArrow>
              Look what you make me do
            </CallToActButton>
            <CallToActButton>Nah, I don't want that arrow</CallToActButton>
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <h4>Text input</h4>
          <div className="flex flex-col gap-3">
            <InputField label="Email" />
            <InputField label="Placeholder" placeholder="Placeholder example" />
            <InputField
              label="Error field"
              errorMessage="This field is incorrect"
              required
            />
          </div>
        </section>
      </div>
    </section>
  );
};
