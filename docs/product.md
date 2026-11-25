# Product direction

genui-codegen helps developers integrate existing UI components into generative UI frameworks. It aims to reuse type information and explicit configuration to generate integration code reproducibly. Unsupported structures should produce actionable diagnostics. Prefer existing tools for extraction and transformation where they meet the requirements.

The project focuses on development-time code generation. Rendering stays with the target framework, and generation is independent of LLM providers and chat services.

## Initial investigation

Evaluate explicitly selected React and TypeScript components as inputs. Start by integrating components manually with one target to identify which steps can be automated. json-render is a candidate. The input mechanism, type extraction library, schema format, and target remain open.

Use fixtures for basic and nested props, then explore callbacks, children, and generics to establish the boundary for automatic conversion. Once generation exists, verify that repeated runs with the same inputs produce identical output, that the generated code type-checks in a consumer project, and that unsupported inputs report a diagnostic. Verify rendering and interactions through the target's runtime once the integration supports them.
