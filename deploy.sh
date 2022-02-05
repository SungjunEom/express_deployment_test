#!/bin/bash

cd MainPage && npm run build && \
	rm -r ../server/build/ && mv build/ ../server/ && \
	cd ../server && sudo nodemon index.js
