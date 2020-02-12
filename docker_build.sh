docker login
docker build . -t bleemeo-frangipane
docker commit "pushing"
docker push bleemeo-frangipane