import { ColorTranslator, InputOptions } from 'colortranslator';

const OPTS: InputOptions = {
    legacyCSS: false,
    spacesAfterCommas: false,
    decimals: 2,
};

const FORMATS = [
    'HEX', //
    'HEXA',
    'RGB',
    'RGBA',
    'HSL',
    'HSLA',
    'CIELab',
    'CIELabA',
    'CMYK',
    'CMYKA',
] as const;

const args = process.argv.slice(2);

function printEntries(entries: WalkerEntry[]) {
    console.log(JSON.stringify(entries));
}

function getFormats(colorInput: string): WalkerEntry[] {
    const colorParsed = new ColorTranslator(colorInput, OPTS);
    const output: WalkerEntry[] = [];

    for (const format of FORMATS) {
        const converted = colorParsed[format];
        const entry: WalkerEntry = {
            label: converted,
            sub: format,
            searchable: colorInput,
            exec: `wl-copy '${converted}'`,
        };
        output.push(entry);
    }
    return output;
}

const input = args[0];

if (!input) {
    printEntries([]);
    process.exit();
}

let entries: WalkerEntry[] = [];

try {
    entries = getFormats(input);
} catch (e) {
    const msg = e.message;
    if (typeof msg === 'string' && msg.match(/doesn't have a correct format/)) {
        entries = [{ label: 'incorrect format', searchable: input }];
    }
}

printEntries(entries);
