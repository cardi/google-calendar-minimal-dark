# google-calendar-minimal-dark

Simple extension for Google Chrome that injects a minimal and dark theme
CSS into Google Calendar.

It's recommended that you become familiar with keyboard shortcuts to
navigate through the different views. The theme looks best for the
"Month" view.

(One could also use a style manager like [Stylish][stylish] or
[Stylus][stylus], but this extension seems to incur the least overhead
and only affects Google Calendar.)

[stylish]: https://addons.mozilla.org/en-US/firefox/addon/stylish/
[stylus]: https://addons.mozilla.org/en-US/firefox/addon/styl-us/

## installation

1. Go to Extensions (Window -> Extensions) or "chrome://extensions"
2. Check the "Developer Mode" checkbox
3. Click on "Load unpacked extensions..."
4. Select the directory containing this extension and click on "Select"

## usage

Style is injected by default after Google Calendar loads.

Press `O` (`Shift` + `o`) to toggle the CSS.

## changelog

    2019-05-08  Calvin Ardi  <calvin@isi.edu>
    * update LICENSE to cc0-1.0
    * update README with some clarifications

    2016-01-28  Calvin Ardi  <calvin@isi.edu>
    * tweak CSS for better 'Today' visibility
     
    2016-01-26  Calvin Ardi  <calvin@isi.edu>
    * implement keyboard shortcut to toggle CSS
    * move CSS injection to after document load using JavaScript to
      support toggle.
     
    2016-01-25  Calvin Ardi  <calvin@isi.edu>
    * modify and update CSS
    * pack as a Chrome extension that injects CSS prior to DOM render

## LICENSE

[CC0 1.0 Universal](./LICENSE)
