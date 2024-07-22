export type WalkerEntry = {
    label?: string;
    sub?: string;
    exec?: string;
    raw_exec?: string[];
    terminal?: boolean;
    icon?: string;
    icon_is_image?: boolean;
    drag_drop?: boolean;
    drag_drop_data?: string;
    image?: string;
    hide_text?: boolean;
    categories?: string[];
    searchable?: string;
    match_fields?: number;
    class?: string;
    history?: boolean;
    matching?: number;
    recalculate_score?: boolean;
    score_final?: number;
    score_fuzzy?: number;
};

export type Format = 'HEX' | 'Closest CSS Name' | 'RGB' | 'HSL' | 'HWB' | 'CMYK' | 'LCH';
