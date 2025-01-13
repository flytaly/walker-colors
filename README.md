# Walker-colors

Color converter plugin for [walker](https://github.com/abenz1267/walker) (wayland-native application runner).

![image](https://github.com/user-attachments/assets/345ef7a0-ca23-4530-a765-10256b3c2602)

## Usage

Node.js should be installed.
Copy the `converter.js` file from the /dist folder somewhere and add path to it to the walker configuration

<details open>
  <summary>TOML format</summary>

`~/.config/walker/config.toml`

```toml
[[plugins]]
name = "colors"
src = 'node $HOME/.config/walker/plugins/colors/dist/converter.js "%TERM%"'
prefix = "col"
keep_sort = true
show_sub_when_single = true
show_icon_when_single = true
```

</details>

<details>
  <summary>or JSON format</summary>

`~/.config/walker/config.json`

```json
   "plugins": [
        {
            "name": "colors",
            "src": "node $HOME/.config/walker/plugins/walker-colors/dist/converter.js \"%TERM%\"",
            "prefix": "col",
            "keep_sort": true,
            "show_sub_when_single": true,
            "show_icon_when_single": true
       },
```

</details>

Now you can access it with the prefix `col` or by launching walker with the `-m colors` option.

```bash
walker -m colors
```

## Usage as an assistant tool for color pickers

For example on Hyprland

```bash
hyprpicker | xargs walker -n -m colors -q
```

## Hex format and the hash `#`

If walker uses `#` as a delimiter, then the standard hex format, which starts with "#", won't work. Therefore, you should either change the "argument_delimiter" option or use hex format without leading "#".

```toml
[search]
argument_delimiter = "#"
```
