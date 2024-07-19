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

if (args.length < 1) {
    console.log(JSON.stringify([{ label: 'nothing ' + args.length }]));
    process.exit();
}

try {
    const colorInput = args[0];
    // console.log(JSON.stringify([{ label: colorInput, searchable: colorInput }]));
    const output = getFormats(colorInput);
    console.log(JSON.stringify(output));
} catch (e) {
    const msg = e.message;
    if (typeof msg === 'string' && msg.match(/doesn't have a correct format/)) {
        console.log(
            JSON.stringify([
                {
                    label: 'incorrect format',
                    searchable: args[0],
                },
            ]),
        );
    }
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
