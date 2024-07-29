# Walker-colors

Color converter plugin for walker [walker](https://github.com/abenz1267/walker) (wayland-native application runner).

## Usage

Node.js should be installed.
Copy the `converter.js` file from the /dist folder somewhere and add path to it to the walker configuration `~/.config/walker/config.json`

Example: 
```
   "plugins": [        
        {
            "name": "colors",
            "src": "node $HOME/.config/walker/plugins/walker-colors/dist/converter.js \"%TERM%\"",
            "prefix": "col"
       },
```

## Usage as an assistant tool for color pickers

For example on Hyprland

```
hyprpicker | xargs walker -m colors -q   
```

