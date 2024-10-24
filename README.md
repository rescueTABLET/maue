# `@rescuetablet/maue`

Bibliothek für die _Maschinenlesbare unidirektionale automatische Übergabe von Einsatzdaten (MAÜ)_ des Ministeriums des Inneren und für Sport des Landes Rheinland-Pfalz auf Basis der Datenformatbeschreibung MAÜ1.1 mit Stand Dezember 2020.

## Verwendung

```bash
npm install @rescuetablet/maue
```

```typescript
import { readFile } from "node:fs/promises";
import { parseMaue } from "@rescuetablet/maue";

const xml = await readFile("input.xml", "utf-8");
const table = await parseMaue(xml);
```

## Autor

[rescueTABLET](https://rescuetablet.com)
