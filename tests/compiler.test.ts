import ts from "typescript";
import { expect, test } from "vitest";

test("TypeScript resolves imported component props", () => {
	const fixture = "tests/fixtures/components.ts";
	const program = ts.createProgram([fixture], {
		module: ts.ModuleKind.NodeNext,
		strict: true,
	});
	const source = program.getSourceFile(fixture);
	if (!source) throw new Error(`Could not load ${fixture}`);
	const checker = program.getTypeChecker();
	const component = source.statements.find(ts.isFunctionDeclaration);
	if (!component) {
		throw new Error("Expected a component function");
	}

	const props = checker.getTypeAtLocation(component.parameters[0]);
	expect(props.getProperties().map((property) => property.name)).toEqual([
		"title",
	]);
	const title = props.getProperty("title");
	if (!title) throw new Error("Expected the title prop");
	expect(
		checker.typeToString(checker.getTypeOfSymbolAtLocation(title, component)),
	).toBe("string");
});
