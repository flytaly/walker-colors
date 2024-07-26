import fs from 'node:fs/promises';
import path from 'node:path';

export function generateSVG(color: string, width: number, height: number) {
    return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${color}"/>
</svg>
`;
}

export async function saveIfNotExists(name: string, data: string) {
    const dir = process.env.TMPDIR || '/tmp';
    const fullPath = path.join(dir, name);

    try {
        await fs.access(fullPath, fs.constants.F_OK);
        return fullPath;
    } catch (err) {}

    try {
        await fs.writeFile(fullPath, data);
        return fullPath;
    } catch (err) {}
    return '';
}
