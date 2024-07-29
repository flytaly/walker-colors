# Walker-colors

Color converter plugin for [walker](https://github.com/abenz1267/walker) (wayland-native application runner).

## Usage

Node.js should be installed.
Copy the `converter.js` file from the /dist folder somewhere and add path to it to the walker configuration `~/.config/walker/config.json`

Example: 
```json
   "plugins": [        
        {
            "name": "colors",
            "src": "node $HOME/.config/walker/plugins/walker-colors/dist/converter.js \"%TERM%\"",
            "prefix": "col"
       },
```

Now you can access it with the prefix `col` or by launching walker with the `-m colors` option.

```bash
walker -k -m colors
```


## Usage as an assistant tool for color pickers

For example on Hyprland

```bash
hyprpicker | xargs walker -k -m colors -q   
```

