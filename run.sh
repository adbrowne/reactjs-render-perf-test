#!/usr/bin/env bash

echo "20k"
echo "Raw JS:"
node index.js 400
echo "Uglified: "
node bundle.js 400
echo "Aliasing react.min.js as react: "
node bundle.react-min.js 400

echo ""
echo "200k"
echo "Raw JS:"
node index.js 4000
echo "Uglified: "
node bundle.js 4000
echo "Aliasing react.min.js as react: "
node bundle.react-min.js 4000
