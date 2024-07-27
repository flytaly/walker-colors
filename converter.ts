import { colord, extend, type Colord } from 'colord';
import cmykPlugin from 'colord/plugins/cmyk';
import hwbPlugin from 'colord/plugins/hwb';
import labPlugin from 'colord/plugins/lab';
import lchPlugin from 'colord/plugins/lch';
import namesPlugin from 'colord/plugins/names';
import type { Format, WalkerEntry } from './types';
import { generateSVG, saveIfNotExists } from './image';

extend([namesPlugin, cmykPlugin, hwbPlugin, labPlugin, lchPlugin]);

const OUTPUTS = [
    'HEX', //
    'Closest CSS Name',
    'RGB',
    'HSL',
    'HWB',
    'CMYK',
    'LCH',
] as Format[];

const convFns: Record<Format, (c: Colord) => string | undefined> = {
    HEX: (c: Colord) => c.toHex(),
    RGB: (c: Colord) => c.toRgbString(),
    HSL: (c: Colord) => c.toHslString(),
    'Closest CSS Name': (c: Colord) => c.toName({ closest: true }),
    HWB: (c: Colord) => c.toHwbString(),
    CMYK: (c: Colord) => c.toCmykString(),
    LCH: (c: Colord) => c.toLchString(),
} as const;

function printEntries(entries: WalkerEntry[]) {
    console.log(JSON.stringify(entries));
}

async function convert(input: string): Promise<WalkerEntry[]> {
    if (!input) {
        return [];
    }
    const col = colord(input);
    if (!col.isValid()) {
        return [{ label: 'incorrect format', searchable: input }];
    }

    const svg = generateSVG(col.toHex(), 100, 100);
    const imagePath = await saveIfNotExists(`walker-colors_${col.toHex().slice(1)}.svg`, svg);

    let entries: WalkerEntry[] = [];
    for (const format of OUTPUTS) {
        const fn = convFns[format];
        const converted = fn(col);
        if (!converted) continue;

        const entry: WalkerEntry = {
            label: converted,
            sub: format,
            searchable: input,
            exec: `wl-copy '${converted}'`,
            icon: imagePath,
            icon_is_image: true,
        };

        entries.push(entry);
    }
    return entries;
}

const args = process.argv.slice(2);
const input = args[0];

if (!input) {
    printEntries([]);
    process.exit();
}

convert(input).then(printEntries);
