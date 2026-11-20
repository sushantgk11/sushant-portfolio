import React from 'react';

interface DiagramProps {
  caption: string;
  flows: { label: string; steps: string[] }[];
}

export function ArchitectureDiagram({ caption, flows }: DiagramProps) {
  return (
    <figure className="flow-diagram">
      <figcaption>{caption}</figcaption>
      <dl>
        {flows.map(flow => (
          <div className="flow-row" key={flow.label}>
            <dt>{flow.label}</dt>
            <dd>
              <ol aria-label={flow.label}>
                {flow.steps.map((step, index) => (
                  <li key={step}>
                    {index > 0 && <span aria-hidden="true" className="flow-connector">→</span>}
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </dd>
          </div>
        ))}
      </dl>
    </figure>
  );
}
