#!/bin/bash

cd MainPage && npm run build && \
	rm -r ../server/build/ ; mv build/ ../server/ && \
	#cd .. && ./update-images.sh ; \
	cd ../server && \
	sudo nodemon index.js
