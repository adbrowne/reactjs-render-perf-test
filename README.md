### Performance test for reactjs server side rendering

To run: ``./run.sh``

This reports the server rending of a 20k and a 200k document averaged over 100
iterations.

Results from my macbook

``
20k
Raw JS:
6.85ms
Uglified:
1.34ms

200k
Raw JS:
66.6ms
Uglified:
13.77ms
``
