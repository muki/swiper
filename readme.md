## Swiper

A tiny library for swipe events in iOS and Android browsers (Safari and Chrome). No dependencies. IE on Windows Phones is not supported. Almost none of this is completely mine, it comes from a variety of suggestions on Stackoverflow. It's main purpose is to be as tiny as humanly possible. Minified non-compressed currently at a bit over 0.5kb;

## Usage

Include swiper in your html and then if you're using jQuery try something like this:
```
$('.swipe')[0].addEventListener('swr', function() {
    alert('Stop swiping me right!');
}, false);
```

## API Reference

Swiper allows you to bind swipe events in four directions (Up, Down, Left, Right). Event names are also tiny: <code>swu, swd, swl, swr</code>.

## Tests

No tests. :(

## License

No rights reserved.