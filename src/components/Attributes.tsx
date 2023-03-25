import { PropsWithChildren } from "react";
import AttributeButton from "./AttributeButton";

export interface AttributesProps extends PropsWithChildren{
    role: string
    languages: string[]
    tools: string[]
    onAttributeClick: (attribute: 'role' | 'language' | 'tool', value: string) => void
}
export default function Attributes({ role, languages, tools, onAttributeClick} : AttributesProps) {
    return (
      <div
        css={{
          display: "flex",
          gap: ".8rem",
          flexWrap: 'wrap'
        }}
      >
        <AttributeButton
          onClick={(e) => onAttributeClick("role", role)}
        >
          {role}
        </AttributeButton>
        {languages.map((language) => (
          <AttributeButton
            onClick={(e) => onAttributeClick("language", language)}
            key={language}
          >
            {language}
          </AttributeButton>
        ))}
        {tools.map((tool) => (
          <AttributeButton
            onClick={(e) => onAttributeClick("tool", tool)}
            key={tool}
          >
            {tool}
          </AttributeButton>
        ))}
      </div>
    );
  }