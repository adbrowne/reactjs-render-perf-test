### Performance test for reactjs server side rendering

```bash
$ npm install
$ npm test
```

This reports the server rending of a 20k and a 200k document averaged over 100
iterations.

Results from my macbook

    20k
    Raw JS:
    7.28ms
    Uglified:
    1.33ms
    Aliasing react.min.js as react:
    4.6ms

    200k
    Raw JS:
    65.04ms
    Uglified:
    13.52ms
    Aliasing react.min.js as react:
    49.24ms
