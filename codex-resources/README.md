# codex-resources README

Resources Manager for codex

## How to add a resource

1. Access the extension api in your extension by calling the built in vscode extension api getter.
   example:

```typescript
const extension = vscode.extensions.getExtension(
  "sevenx-codex.codex-resources"
);
const api = await extension.activate();
```

2. Create the object for the resource you want to add. The object should have the following properties:

- `id`: a unique identifier for the resource
- `displayLabel`: the label that will be displayed in the resources view.
- `downloadResource`: a function that will be called when the user clicks on the the download resource button. This function should return a promise that resolves to the object of the downloaded resource.
- `getResourceDisplayData`: a function that will be called to get a list of available resources to be rendered in the view.
- `openResource`: a function that will be called when the user clicks on open the resource in the resources view. This function should return a promise that resolves to the object of the opened resource.

_*NB*_: For the correct types to use for the properties, you can use the types library that is installable from npm called `@codex-extensions/resource-manager-types`. Or, you can refer to the definition of some resources in the following example section.

3. Example of a resource object:

- (TWL Resource)[https://github.com/sevenxhq/codex-resources-manager/blob/1066f2017cf17f2b68da7c6e15760f6f6f0bc16f/src/providers/TWLResource/provider.ts]

4. Call the API method called `registerResource`, the following snippet is a registration example. After that, your resource will be registered

```typescript
api.registerResource(new TnResource());
```


## Features

- Allows management of resources for codex
- Allows adding of different resource types to codex easily

## Requirements

None

## Extension Settings

No settings at the moment

## Known Issues

none
