docker login
docker build . -t bleemeo-frangipane
docker commit "$(curl -s whatthecommit.com/index.txt)"
docker push bleemeo-frangipane
